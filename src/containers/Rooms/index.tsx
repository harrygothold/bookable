import React, { FC, useEffect, useState } from "react";
import Classes from "./Rooms.module.scss";
import API, { graphqlOperation } from "@aws-amplify/api";
import { listRooms } from "../../graphql/queries";
import awsconfig from "../../aws-exports";
import Loading from "../../components/Loading";
import RoomListItem from "../../components/RoomListItem";
import { sortAlphabetically } from "../../utils/sortAlphabetically";
import { IRoom } from "../../utils/interfaces";
import Button from "../../components/Button";
import CreateRoom from "../../components/CreateRoom";
import Alert from "@material-ui/lab/Alert";

const Rooms: FC = () => {
  const [rooms, setRooms] = useState<IRoom[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<string>("");
  const [addRoomSubmitted, setAddRoomSubmitted] = useState<boolean>(false);
  const [deleteRoomSubmitted, setDeleteRoomSubmitted] = useState<boolean>(
    false
  );
  API.configure(awsconfig);

  const sort = (order: string): void => {
    setSortOrder(order);
    let newRooms = rooms;
    if (newRooms?.length) {
      newRooms = newRooms?.sort(sortAlphabetically("name", order));
      setRooms([...newRooms]);
    }
  };

  useEffect(() => {
    const getRooms = async () => {
      setLoading(true);
      try {
        const { data }: any = await API.graphql(graphqlOperation(listRooms));
        const { items } = data.listRooms;
        setRooms(items);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getRooms();
  }, []);

  useEffect(() => {
    if (addRoomSubmitted || deleteRoomSubmitted) {
      setTimeout(() => {
        setAddRoomSubmitted(false);
        setDeleteRoomSubmitted(false);
      }, 5000);
    }
  }, [addRoomSubmitted, deleteRoomSubmitted]);

  return (
    <div className={Classes.rooms_container}>
      <Loading loading={loading} />
      <h2 className={Classes.title}>View your rooms</h2>
      <div className={Classes.filters}>
        <Button
          className={sortOrder === "asc" ? "active" : ""}
          type="button"
          onClick={() => sort("asc")}
        >
          Sort A-Z
        </Button>
        <Button
          className={sortOrder === "desc" ? "active" : ""}
          type="button"
          onClick={() => sort("desc")}
        >
          Sort Z-A
        </Button>
        <CreateRoom setSubmitted={setAddRoomSubmitted} />
      </div>
      {(addRoomSubmitted || deleteRoomSubmitted) && (
        <Alert className={Classes.success_alert} severity="success">
          Room{" "}
          {addRoomSubmitted ? "Added" : deleteRoomSubmitted ? "Deleted" : ""}{" "}
          Successfully
        </Alert>
      )}
      {rooms &&
        rooms.map((room: IRoom) => (
          <RoomListItem
            setSubmitted={setDeleteRoomSubmitted}
            key={room.id}
            {...room}
          />
        ))}
    </div>
  );
};

export default Rooms;
