import React, { FC } from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";

interface Props extends RouteProps {}

const ProtectedRoute: FC<Props> = (props) => {
  const token = localStorage.getItem("token");
  return (
    <>{token ? <Route {...props} /> : <Redirect to="/login?redirect=true" />}</>
  );
};

export default ProtectedRoute;
