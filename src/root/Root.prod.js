import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from '../containers/Homepage';
import Staff from '../containers/Staff/Staff';

const Root = () => {
  return (
    <>
      <Switch>
        <Route path="/staff/" component={Staff} />
        <Route path="/" component={Homepage} />
      </Switch>
    </>
  );
};
export default Root;
