import React, { useState, ChangeEvent, FormEvent, FC } from "react";
import API, { graphqlOperation } from "@aws-amplify/api";
import { createRoom } from "./graphql/mutations";
import awsconfig from "./aws-exports";

const App: FC = () => {
  API.configure(awsconfig);
  const [roomName, setRoomName] = useState("");

  const createNewRoom = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const room = { name: roomName };
    const blah = API.graphql(graphqlOperation(createRoom, { input: room }));
    if (blah) {
      console.log(blah);
    }
  };

  const getRoomName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setRoomName(value);
    console.log(value);
  };

  return (
    <form onSubmit={(e) => createNewRoom(e)}>
      <input type="text" onChange={(e) => getRoomName(e)} />
      <button type="submit">FOOKEN GOOD MORNEN</button>
    </form>
  );
};

export default App;
