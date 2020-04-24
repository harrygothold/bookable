import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import Button from "../Button";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import Modal from "@material-ui/core/Modal";
import Classes from "./CreateRoom.module.scss";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

export interface IFormData {
  name: string;
  numberOfPeople: string;
  hasScreen: number;
  disabledAccess: number;
}

const initialFormState: IFormData = {
  name: "",
  numberOfPeople: "",
  hasScreen: 0,
  disabledAccess: 0,
};

interface Props {
  handleSubmit: (e: FormEvent<HTMLFormElement>, formData: IFormData) => void;
  loading: boolean;
  error: string;
}

const CreateRoom: FC<Props> = ({ loading, handleSubmit, error }) => {
  const numberOfPeople: string[] = [
    "0-20",
    "21-40",
    "41-60",
    "61-80",
    "81-100",
    "100+",
  ];
  const [open, setOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<IFormData>(initialFormState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      <Button onClick={() => setOpen(true)} type="button">
        Add New Room <MeetingRoomIcon />
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className={Classes.cr_modal_container}>
          <form
            onSubmit={(e) => {
              handleSubmit(e, formData);
              setOpen(false);
              setFormData(initialFormState);
            }}
          >
            <h2>Add a new room</h2>
            {error && (
              <Alert severity="error">
                <AlertTitle>There has been an error adding the room</AlertTitle>
                {error}
              </Alert>
            )}
            <label htmlFor="name">Room Name</label>
            <div className={Classes.field}>
              <input
                className={Classes.username}
                name="name"
                ref={(input) => input && input.focus()}
                onChange={handleChange}
                value={formData.name}
                type="text"
                placeholder="Room Name"
              />
            </div>
            <div className={Classes.select}>
              <select name="numberOfPeople" onBlur={handleChange}>
                <option value="N/A">Number of People</option>
                {numberOfPeople.map((n: string) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
            <div className={Classes.radio}>
              <label htmlFor="hasScreen">Does the room have a TV screen?</label>
              <span>Yes</span>
              <input
                type="radio"
                name="hasScreen"
                value="1"
                onChange={handleChange}
              />{" "}
              <span>No</span>
              <input
                type="radio"
                name="hasScreen"
                value="0"
                onChange={handleChange}
              />{" "}
            </div>
            <div className={Classes.radio}>
              <label htmlFor="disabledAccess">
                Does the room have disabled access?
              </label>
              <span>Yes</span>
              <input
                type="radio"
                name="disabledAccess"
                value="1"
                onChange={handleChange}
              />{" "}
              <span>No</span>
              <input
                type="radio"
                name="disabledAccess"
                value="0"
                onChange={handleChange}
              />{" "}
            </div>
            <Button disabled={loading} type="submit">
              {loading ? "Adding room..." : "Add Room"}
            </Button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default CreateRoom;
