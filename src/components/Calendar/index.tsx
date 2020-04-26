import React, { FC, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "@material-ui/core/Modal";
import moment from "moment";
import Classes from "./Calender.module.scss";

type DateString = Date | string;

interface ClickedEvent {
  start: DateString;
  end: DateString;
  title: string;
  bookedBy: string;
}

const MyCalender: FC = () => {
  const localizer = momentLocalizer(moment);
  const [showEventModal, setShowEventModal] = useState<boolean>(false);
  const [clickedEvent, setClickedEvent] = useState<ClickedEvent>({
    start: "",
    end: "",
    title: "",
    bookedBy: "",
  });
  const handleDate = (date: DateString): string => {
    const formattedDate = moment(date).format("LLLL");
    return formattedDate;
  };
  // This is a hard coded event
  const events: ClickedEvent[] = [
    {
      start: moment().toDate(),
      end: moment().add(1, "hour").toDate(),
      title: "Some title",
      bookedBy: "Harry",
    },
  ];
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

  const handleClickedSlot = (event: any) => {
    console.log(event);
  };

  return (
    <>
      <div>
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
      </div>
      <Modal open={showEventModal} onClose={() => setShowEventModal(false)}>
        <div className={Classes.event_modal}>
          <p>Start: {clickedEvent.start}</p>
          <p>End: {clickedEvent.end}</p>
          <p>Title: {clickedEvent.title}</p>
          <p>Booked By: {clickedEvent.bookedBy}</p>
        </div>
      </Modal>
    </>
  );
};

export default MyCalender;
