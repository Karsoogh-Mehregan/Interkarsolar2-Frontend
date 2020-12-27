import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from '../containers/Homepage';
import Dashboard from '../containers/Dashboard/Dashboard';

const Root = () => {
  return (
    <>
      <Switch>
        <Route path="/loading/"></Route>
        <Route path="/dashboard/" component={Dashboard} />
        <Route path="/" component={Homepage} />
      </Switch>
    </>
  );
};
export default Root;
