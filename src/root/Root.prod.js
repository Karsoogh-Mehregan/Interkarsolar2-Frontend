import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import CreateAccount from '../containers/CreateAccount';
import Login from '../containers/Login';
import Exam from '../containers/Exam/Exam';
import Homepage from '../containers/Homepage';

import Staff from '../containers/Staff/Staff';
import Dashboard from '../containers/Dashboard/Dashboard';

const Root = () => {
  return (
    <>
      <Switch>
        <Route path='/create-account' component={CreateAccount} />
        <Route path='/login' component={Login} />
        <Route path="/staff/" component={Staff} />
        <Route path="/exam/" component={Exam} />
        <PrivateRoute path="/dashboard/" component={Dashboard} />
        <Route path="/" component={Homepage} />
      </Switch>
    </>
  );
};
export default Root;
