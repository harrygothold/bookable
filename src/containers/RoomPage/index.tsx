import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { getRoomById } from "../../utils/queries";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import Classes from "./RoomPage.module.scss";
import Calendar from "../../components/Calendar";

interface Room {
  bookings?: object;
  disabledAccess: boolean;
  hasScreen: boolean;
  id: string;
  name: string;
  numberOfPeople: string;
}

const RoomPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [room, setRoom] = useState<Room>({
    bookings: {},
    disabledAccess: false,
    hasScreen: false,
    id: "",
    name: "",
    numberOfPeople: "",
  });
  const params: any = useParams();
  const history = useHistory();
  const { id } = params;
  const getData = async () => {
    setLoading(true);
    try {
      const data: any = await getRoomById(id);
      setRoom({
        ...room,
        ...data.getRoom,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const formatBoolean = (bool: boolean): string => {
    const str = bool ? "Yes" : "No";
    return str;
  };

  useEffect(() => {
    getData();
  }, []);
  const { name, hasScreen, disabledAccess, numberOfPeople } = room;
  return (
    <div className={Classes.container}>
      <Loading loading={loading} />
      <div className={Classes.info}>
        {room && (
          <div className={Classes.info_list}>
            <p className={Classes.info_list_item}>Name: {name}</p>
            <p className={Classes.info_list_item}>
              Number of occupants: {numberOfPeople}
            </p>
            <p className={Classes.info_list_item}>
              Has screen: {formatBoolean(hasScreen)}
            </p>
            <p className={Classes.info_list_item}>
              Disabled Access: {formatBoolean(disabledAccess)}
            </p>
            <Link to={`/booking/new?room=${id}`}>
              Click here to book this room
            </Link>
            <Button type="button" onClick={() => history.push("/admin/rooms")}>
              &larr; Back to Rooms
            </Button>
          </div>
        )}
      </div>
      <div className={Classes.calender}>
        <Calendar />
      </div>
    </div>
  );
};

export default RoomPage;
