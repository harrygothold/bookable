import React, { FC } from "react";
import { Link } from "react-router-dom";
import Classes from "./RoomListItem.module.scss";
import DeleteIcon from "@material-ui/icons/Delete";
import API, { graphqlOperation } from "@aws-amplify/api";
import { deleteRoom } from "../../graphql/mutations";
import awsconfig from "../../aws-exports";

interface Props {
  name: string;
  id: string;
  setSubmitted: (bool: boolean) => void;
}

const RoomListItem: FC<Props> = ({ name, id, setSubmitted }) => {
  API.configure(awsconfig);

  const handleDelete = async () => {
    try {
      await API.graphql(graphqlOperation(deleteRoom, { input: { id } }));
      setSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={Classes.room_list_item}>
      <Link to={`/room/${id}`}>{name}</Link>
      <div className={Classes.actions}>
        <span onClick={handleDelete}>
          <DeleteIcon />
        </span>
      </div>
    </div>
  );
};

export default RoomListItem;
