import React, { FC } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

interface Props {
  loading: boolean;
}

const Loading: FC<Props> = ({ loading }) => {
  return (
    <Backdrop open={loading}>
      <CircularProgress color="inherit" />
      <div>Loading...</div>
    </Backdrop>
  );
};

export default Loading;
