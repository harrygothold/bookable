import React, { FC, useState, FormEvent, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "@material-ui/core/Modal";
import moment from "moment";
import Classes from "./Calender.module.scss";
import { IRoom, IBooking } from "../../utils/interfaces";
import CreateBooking from "../CreateBooking";
import API, { graphqlOperation } from "@aws-amplify/api";
import { createBooking } from "../../graphql/mutations";
import Loading from "../Loading";
import { listBookings } from "../../graphql/queries";
import { onCreateBooking } from "../../graphql/subscriptions";

type DateString = Date | string;

interface ModalSettings {
  showModal: boolean;
  modalType: "view" | "add" | string;
}

interface IError {
  error: boolean;
  errorMsg: string;
}

interface ClickedEvent {
  start: DateString;
  end: DateString;
  title: string;
  bookedByUser: string;
}

interface IEvent {
  id: string;
  room: string;
  bookedByUser: string;
  title: string;
  attendees: string[];
  start: DateString;
  end: DateString;
}

interface Props {
  room: IRoom;
}

const initialState: IBooking = {
  room: "",
  bookedByUser: "",
  title: "",
  attendees: ["Hello World"],
  start: "",
  end: "",
};

const MyCalender: FC<Props> = ({ room }) => {
  const localizer = momentLocalizer(moment); // Something required for the Calender component
  const [error, setError] = useState<IError>({
    error: false,
    errorMsg: "",
  });
  const [modalSettings, setModalSettings] = useState<ModalSettings>({
    showModal: false,
    modalType: "",
  });
  // State for the list of events from DynamoDB
  const [events, setEvents] = useState<IEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  // Handles state for creating a booking
  const [bookingData, setBookingData] = useState<IBooking>(initialState);
  //State for the clicked event
  const [clickedEvent, setClickedEvent] = useState<ClickedEvent>({
    start: "",
    end: "",
    title: "",
    bookedByUser: "",
  });

  // Converts the date to a human readable date so can be viewed on the modal
  const handleDate = (date: DateString): string => {
    const formattedDate = moment(date).format("LLLL");
    return formattedDate;
  };

  // Handles the clicking of an event already on the calender - returns the event info
  const handleSelectEvent = (event: ClickedEvent) => {
    const start = handleDate(event.start);
    const end = handleDate(event.end);
    setModalSettings({
      showModal: true,
      modalType: "view",
    });
    setClickedEvent({
      ...clickedEvent,
      ...event,
      start,
      end,
    });
  };

  // Parses the date from the clicked event so it can be used to pre-populate the datetime input field
  const formatDateToString = (date: string): string => {
    const formattedDate = moment(date).format();
    const arr = formattedDate.split("");
    arr.splice(16);
    const str = arr.join("");
    return str;
  };

  // Handles the click of an empty slot - returns booking form
  const handleClickedSlot = (event: any) => {
    const start = formatDateToString(event.start);
    const end = formatDateToString(event.end);
    setBookingData({
      ...bookingData,
      room: room.name,
      start: start,
      end: end,
    });
    setModalSettings({
      showModal: true,
      modalType: "add",
    });
  };

  // Function that checks to see if there a conflict between dates
  const checkConflict = (start: DateString, end: DateString): boolean => {
    const startIndex: boolean =
      events.findIndex((event: IEvent) =>
        moment(start).isBetween(event.start, event.end)
      ) > -1;
    const endIndex: boolean =
      events.findIndex((event: IEvent) =>
        moment(end).isBetween(event.start, event.end)
      ) > -1;
    if (startIndex || endIndex) {
      return true;
    }
    return false;
  };

  // Submit function for creating a booking
  const handleCreateBooking = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const booking = {
        ...bookingData,
        room: room.name,
      };
      if (checkConflict(booking.start, booking.end)) {
        setError((prev) => ({
          ...prev,
          error: true,
          errorMsg:
            "Oops! Another event is occuring at that time. Please try another time or room",
        }));
      } else {
        await API.graphql(graphqlOperation(createBooking, { input: booking }));
        setBookingData(initialState);
        setModalSettings({
          showModal: false,
          modalType: "",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Gets events from dynamoDB
    const getData = async () => {
      if (room.name) {
        const { data }: any = await API.graphql(
          graphqlOperation(listBookings, {
            filter: { room: { eq: room.name } },
          })
        );
        if (data.listBookings) {
          const { items } = data.listBookings;
          const arr = items.map((item: IBooking) => {
            const obj = {
              ...item,
              start: moment(item.start).toDate(),
              end: moment(item.end).toDate(),
            };
            return obj;
          });
          setEvents(arr);
        }
      }
    };
    getData();
  }, [room]);

  useEffect(() => {
    // Subscription for creating a booking - automatically returns the new event so it can be viewed immedietly
    let createBookingListener: any;
    (async () => {
      createBookingListener = await API.graphql(
        graphqlOperation(onCreateBooking)
        //@ts-ignore
      ).subscribe({
        next: ({ value: { data } }: any) => {
          const obj = {
            ...data.onCreateBooking,
            start: moment(data.onCreateBooking.start).toDate(),
            end: moment(data.onCreateBooking.end).toDate(),
          };
          let state = events;
          state?.push(obj);
          return setEvents(state);
        },
        error: (error: Error) => console.log(error),
      });
      return () => createBookingListener.unsubscribe();
    })();
  }, [events]);

  const renderModalContent = () => {
    switch (modalSettings.modalType) {
      case "add":
        return (
          <div className={Classes.event_modal_new}>
            <CreateBooking
              roomName={room.name}
              bookingData={bookingData}
              setBookingData={setBookingData}
              handleSubmit={handleCreateBooking}
              error={error}
            />
          </div>
        );
      case "view":
        return (
          <div className={Classes.event_modal}>
            <p>Start: {clickedEvent.start}</p>
            <p>End: {clickedEvent.end}</p>
            <p>Title: {clickedEvent.title}</p>
            <p>Booked By: {clickedEvent.bookedByUser}</p>
          </div>
        );
      default:
        break;
    }
  };

  return (
    <>
      <Loading loading={loading} />
      <div>
        {events && (
          <Calendar
            localizer={localizer}
            defaultView="day"
            defaultDate={new Date()}
            events={events}
            showMultiDayTimes
            //@ts-ignore
            style={{ height: 500 }}
            selectable
            onSelectEvent={(event: ClickedEvent) => handleSelectEvent(event)}
            onSelectSlot={handleClickedSlot}
          />
        )}
      </div>
      <Modal
        open={modalSettings.showModal}
        onClose={() => setModalSettings({ showModal: false, modalType: "" })}
      >
        <>{renderModalContent()}</>
      </Modal>
    </>
  );
};

export default MyCalender;
