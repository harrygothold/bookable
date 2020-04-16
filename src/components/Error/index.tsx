import React, { FC } from "react";
import Classes from "./Error.module.scss";

interface Props {
  error: string;
}

const Error: FC<Props> = ({ error }) => {
  return <div className={Classes["error-container"]}>{error}</div>;
};

export default Error;
