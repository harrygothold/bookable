import React, { FC } from "react";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

interface Props {
  errorTitle?: string;
  error: string;
}

const Error: FC<Props> = ({ error, errorTitle }) => {
  return (
    <Alert severity='error'>
      <AlertTitle>{errorTitle}</AlertTitle>
      {error}
    </Alert>
  )
};

export default Error;
