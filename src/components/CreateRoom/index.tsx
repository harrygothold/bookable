import React, { FC, useState, ChangeEvent, FormEvent, useEffect } from "react";
import Button from "../Button";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import Modal from "@material-ui/core/Modal";
import Classes from "./CreateRoom.module.scss";
import API, { graphqlOperation } from "@aws-amplify/api";
import { createRoom } from "../../graphql/mutations";
import awsconfig from "../../aws-exports";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

interface Props {
  setSubmitted: (bool: boolean) => void;
}

const CreateRoom: FC<Props> = ({ setSubmitted }) => {
  API.configure(awsconfig);
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const room = { name };
      await API.graphql(graphqlOperation(createRoom, { input: room }));
      // @TODO update the rooms cache so changes are displayed immedietly
      setSubmitted(true);
      setOpen(false);
    } catch (error) {
      setError(error.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  }, [error]);

  return (
    <>
      <Button onClick={() => setOpen(true)} type="button">
        Add New Room <MeetingRoomIcon />
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className={Classes.cr_modal_container}>
          <form onSubmit={handleSubmit}>
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
