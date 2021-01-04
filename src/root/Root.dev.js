import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DevTools from '../containers/DevTools';

import Homepage from '../containers/Homepage';
import dashboard from '../containers/dashboard';
import Exam from '../containers/Exam';
import Login from '../containers/Login';
import CreateAccount from '../containers/CreateAccount';
import scoringpage from '../containers/scoringpage';

const Root = () => {
  return (
    <>
      <Switch>
        <Route path='/create-account' component={CreateAccount}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path="/loading/"></Route>
        

        <Route path='/exam' component={Exam} />
          <Route path="/mentor" component={scoringpage}/>
        <Route path="/dashboard/" component={dashboard} />
        <Route path="/" component={Homepage} />
      
      </Switch>
      <DevTools />
    </>
  );
};
export default Root;
