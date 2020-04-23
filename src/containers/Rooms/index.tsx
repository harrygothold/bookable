import React, { FC, useEffect, useState, FormEvent } from "react";
import Classes from "./Rooms.module.scss";
import API, { graphqlOperation } from "@aws-amplify/api";
import { listRooms } from "../../graphql/queries";
import Loading from "../../components/Loading";
import RoomListItem from "../../components/RoomListItem";
import { sortAlphabetically } from "../../utils/sortAlphabetically";
import { IRoom } from "../../utils/interfaces";
import Button from "../../components/Button";
import CreateRoom from "../../components/CreateRoom";
import Alert from "@material-ui/lab/Alert";
import { deleteRoom, createRoom } from "../../graphql/mutations";
import { onCreateRoom } from "../../graphql/subscriptions";

const Rooms: FC = () => {
  const [rooms, setRooms] = useState<IRoom[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<string>("");
  const [addRoomSubmitted, setAddRoomSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [deleteRoomSubmitted, setDeleteRoomSubmitted] = useState<boolean>(
    false
  );

  const sort = (order: string): void => {
    setSortOrder(order);
    let newRooms = rooms;
    if (newRooms?.length) {
      newRooms = newRooms?.sort(sortAlphabetically("name", order));
      setRooms([...newRooms]);
    }
  };

  const handleDeleteRoom = async (id: string) => {
    try {
      await API.graphql(graphqlOperation(deleteRoom, { input: { id } }));
      setDeleteRoomSubmitted(true);
      let state = rooms;
      if (state) {
        state = state.filter((room: IRoom) => room.id !== id);
        setRooms([...state]);
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddRoom = async (e: FormEvent<HTMLFormElement>, name: string) => {
    e.preventDefault();
    setLoading(true);
    try {
      const room = { name };
      await API.graphql(graphqlOperation(createRoom, { input: room }));
      setAddRoomSubmitted(true);
    } catch (error) {
      setError(error.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      //@ts-ignore
      await API.graphql(graphqlOperation(onCreateRoom)).subscribe({
        next: ({ value: { data } }: any) => {
          const newRoom = {
            ...data.onCreateRoom,
          };
          let state = rooms;
          state?.push(newRoom);
          return setRooms(state);
        },
        error: (error: Error) => console.log(error),
      });
    })();
  }, [rooms]);

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

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  }, [error]);

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
        <CreateRoom
          error={error}
          handleSubmit={handleAddRoom}
          loading={loading}
        />
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
            handleDelete={handleDeleteRoom}
            key={room.id}
            {...room}
          />
        ))}
    </div>
  );
};

export default Rooms;
