import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ConfirmationPage from "./Auth/ConfirmationPage";
import LoginPage from "./Auth/LoginPage";
import ForgotPasswordPage from "./Auth/ForgotPasswordPage";
import PasswordReset from "./Auth/PasswordReset";
import Dashboard from "./Dashboard/Dashboard";
import LandingPage from "./Landing/Landing";
import SignUp from "./Auth/SignUpPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Navigation from "./components/Navigation";
import Rooms from "./containers/Rooms";
import Admin from "./containers/Admin";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/confirmation" exact component={ConfirmationPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/forgotpassword" exact component={ForgotPasswordPage} />
        <Route path="/reset" exact component={PasswordReset} />
        {/* <Route path="/dashboard" exact component={Dashboard} /> feel free to uncomment for development */}
        <ProtectedRoute path="/admin" exact component={Admin} />
        <ProtectedRoute path="/admin/rooms" component={Rooms} />
        <ProtectedRoute path="/dashboard" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
