import React, { FC } from "react";
import { Link } from "react-router-dom";
import Classes from "./RoomListItem.module.scss";

interface Props {
  name: string;
  id: string;
}

const RoomListItem: FC<Props> = ({ name, id }) => {
  return (
    <div className={Classes.room_list_item}>
      <Link to={`/room/${id}`}>{name}</Link>
    </div>
  );
};

export default RoomListItem;
