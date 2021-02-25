import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import CreateAccount from '../containers/CreateAccount';
import Login from '../containers/Login';
import ChangePassword from '../containers/ChangePassword'
import Homepage from '../containers/Homepage';
import Staff from '../containers/Staff/Staff';
import Dashboard from '../containers/Dashboard/Dashboard';

const Root = () => {
  return (
    <>
      <Switch>
        <Route path='/create-account' component={CreateAccount} />
        <Route path='/login' component={Login} />
        <Route path='/change-password' component={ChangePassword} />
        <Route path="/staff/" component={Staff} />
        <PrivateRoute path="/dashboard/" component={Dashboard} />
        <Route path="/" component={Homepage} />
      </Switch>
    </>
  );
};
export default Root;
