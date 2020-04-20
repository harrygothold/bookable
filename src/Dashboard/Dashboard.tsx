import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import Classes from "./Dashboard.module.scss";
import Button from "../components/Button";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Modal from "@material-ui/core/Modal";

const Dashboard: FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // logic here
    setShowModal(false);
  };
  const body = (
    <div className={Classes.modal_container}>
      <h2>Invite a user to join your space</h2>
      <form onSubmit={handleSubmit}>
        <div className={Classes.field}>
          <input
            className={Classes.username}
            name="email"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            value={email}
            type="email"
            placeholder="Email Address"
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
  return (
    <div className={Classes.dashboard}>
      <h1>Dashboard</h1>
      <Button type="button" onClick={() => setShowModal(true)}>
        Add a new user <PersonAddIcon />
      </Button>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        {body}
      </Modal>
    </div>
  );
};

export default Dashboard;
