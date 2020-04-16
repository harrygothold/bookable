import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ConfirmationPage from "./Auth/ConfirmationPage";
import LoginPage from "./Auth/LoginPage";
import Dashboard from "./Dashboard/Dashboard";
import LandingPage from "./Landing/Landing";
import SignUp from "./Auth/SignUpPage";
import ProtectedRoute from "./components/ProtectedRoute";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/confirmation" exact component={ConfirmationPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignUp} />
        <ProtectedRoute path="/dashboard" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
