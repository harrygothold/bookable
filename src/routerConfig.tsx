import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Authenticator from './Auth/auth';
import ConfirmationPage from './Auth/ConfirmationPage'
import LoginPage from './Auth/LoginPage'
import Dashboard from './Dashboard/Dashboard'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Authenticator} />
        <Route path="/confirmation" exact component={ConfirmationPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
