import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import Button from "../Button";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import Modal from "@material-ui/core/Modal";
import Classes from "./CreateRoom.module.scss";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

interface Props {
  handleSubmit: (e: FormEvent<HTMLFormElement>, name: string) => void;
  loading: boolean;
  error: string;
}

const CreateRoom: FC<Props> = ({ loading, handleSubmit, error }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  return (
    <>
      <Button onClick={() => setOpen(true)} type="button">
        Add New Room <MeetingRoomIcon />
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className={Classes.cr_modal_container}>
          <form
            onSubmit={(e) => {
              handleSubmit(e, name);
              setOpen(false);
              setName("");
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
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                value={name}
                type="text"
                placeholder="Room Name"
              />
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
