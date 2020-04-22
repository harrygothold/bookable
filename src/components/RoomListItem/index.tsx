import React, { FC } from "react";
import { Link } from "react-router-dom";
import Classes from "./RoomListItem.module.scss";
import DeleteIcon from "@material-ui/icons/Delete";

interface Props {
  name: string;
  id: string;
  handleDelete: (id: string) => void;
}

const RoomListItem: FC<Props> = ({ name, id, handleDelete }) => (
  <div className={Classes.room_list_item}>
    <Link to={`/room/${id}`}>{name}</Link>
    <div className={Classes.actions}>
      <span onClick={() => handleDelete(id)}>
        <DeleteIcon />
      </span>
    </div>
  </div>
);

export default RoomListItem;
