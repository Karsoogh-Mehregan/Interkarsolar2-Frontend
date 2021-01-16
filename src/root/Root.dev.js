import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DevTools from '../containers/DevTools';

import Homepage from '../containers/Homepage';
import dashboard from '../containers/dashboard';
import members from '../containers/members';

const Root = () => {
  return (
    <>
      <Switch>
        <Route path='/create-account' component={CreateAccount}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path="/loading/"></Route>
        <Route path="/members/" component={members} />
        <Route path="/dashboard/" component={dashboard} />
        <Route path="/" component={Homepage} />
      </Switch>
      <DevTools />
    </>
  );
};
export default Root;
