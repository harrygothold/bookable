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

interface ClickedEvent {
  start: DateString;
  end: DateString;
  title: string;
  bookedByUser: string;
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
  const localizer = momentLocalizer(moment);
  const [showAddNewModal, setShowAddNewModal] = useState<boolean>(false);
  const [events, setEvents] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showEventModal, setShowEventModal] = useState<boolean>(false);
  const [bookingData, setBookingData] = useState<IBooking>(initialState);
  const [clickedEvent, setClickedEvent] = useState<ClickedEvent>({
    start: "",
    end: "",
    title: "",
    bookedByUser: "",
  });
  const handleDate = (date: DateString): string => {
    const formattedDate = moment(date).format("LLLL");
    return formattedDate;
  };

  const handleSelectEvent = (event: ClickedEvent) => {
    const start = handleDate(event.start);
    const end = handleDate(event.end);
    setShowEventModal(true);
    setClickedEvent({
      ...clickedEvent,
      ...event,
      start,
      end,
    });
  };

  const formatDateToString = (date: string): string => {
    const arr = date.split("");
    arr.splice(16);
    const str = arr.join("");
    return str;
  };

  const handleClickedSlot = (event: any) => {
    const start = formatDateToString(moment(event.start).format());
    const end = formatDateToString(moment(event.end).format());
    setBookingData({
      ...bookingData,
      room: room.name,
      start: start,
      end: end,
    });
    setShowAddNewModal(true);
  };

  const handleCreateBooking = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const booking = {
        ...bookingData,
        room: room.name,
      };
      await API.graphql(graphqlOperation(createBooking, { input: booking }));
      setBookingData(initialState);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setShowAddNewModal(false);
    }
  };

  useEffect(() => {
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
    (async () => {
      //@ts-ignore
      await API.graphql(graphqlOperation(onCreateBooking)).subscribe({
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
    })();
  }, [events]);

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
      <Modal open={showEventModal} onClose={() => setShowEventModal(false)}>
        <div className={Classes.event_modal}>
          <p>Start: {clickedEvent.start}</p>
          <p>End: {clickedEvent.end}</p>
          <p>Title: {clickedEvent.title}</p>
          <p>Booked By: {clickedEvent.bookedByUser}</p>
        </div>
      </Modal>
      <Modal open={showAddNewModal} onClose={() => setShowAddNewModal(false)}>
        <div className={Classes.event_modal_new}>
          <CreateBooking
            roomName={room.name}
            bookingData={bookingData}
            setBookingData={setBookingData}
            handleSubmit={handleCreateBooking}
          />
        </div>
      </Modal>
    </>
  );
};

export default MyCalender;
