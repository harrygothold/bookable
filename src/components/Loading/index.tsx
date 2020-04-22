import React, { FC } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

interface Props {
  loading: boolean;
}

const Loading: FC<Props> = ({ loading }) => {
  return (
    <Backdrop style={{ zIndex: 1000 }} open={loading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;
