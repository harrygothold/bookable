import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Authenticator from './Auth/auth';
import ConfirmationPage from './Auth/ConfirmationPage'
import LoginPage from './Auth/LoginPage'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Authenticator} />
        <Route path="/confirmation" exact component={ConfirmationPage} />
          <Route path="/login" exact component={LoginPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
