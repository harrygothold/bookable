import React, { FC, ChangeEvent, FormEvent } from "react";
import Classes from "./CreateBooking.module.scss";
import { IBooking } from "../../utils/interfaces";
import Button from "../Button";

interface Props {
  bookingData: IBooking;
  roomName: string;
  error: {
    error: boolean;
    errorMsg: string;
  };
  setBookingData: (data: IBooking) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const CreateBooking: FC<Props> = ({
  bookingData,
  setBookingData,
  roomName,
  handleSubmit,
  error,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookingData({
      ...bookingData,
      [name]: value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      {error.error && <p>{error.errorMsg}</p>}
      <div className={Classes.field}>
        <input
          className={Classes.username}
          name="room"
          onChange={handleChange}
          value={roomName}
          type="text"
          placeholder="Room Name"
        />
      </div>
      <div className={Classes.field}>
        <input
          className={Classes.username}
          name="bookedByUser"
          onChange={handleChange}
          value={bookingData.bookedByUser}
          type="text"
          placeholder="Your Name"
        />
      </div>
      <div className={Classes.field}>
        <input
          className={Classes.username}
          name="title"
          onChange={handleChange}
          value={bookingData.title}
          type="text"
          placeholder="Title"
        />
      </div>
      <div className={Classes.field}>
        <input
          className={Classes.username}
          name="start"
          onChange={handleChange}
          value={bookingData.start}
          type="datetime-local"
          placeholder="Start Time"
        />
      </div>
      <div className={Classes.field}>
        <input
          className={Classes.username}
          name="end"
          onChange={handleChange}
          value={bookingData.end}
          type="datetime-local"
          placeholder="End Time"
        />
      </div>
      <Button type="submit">Create Booking</Button>
    </form>
  );
};

export default CreateBooking;
