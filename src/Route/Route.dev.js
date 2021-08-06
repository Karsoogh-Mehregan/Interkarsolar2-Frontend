import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import DevTools from '../containers/DevTools';
import CreateAccount from '../containers/CreateAccount'
import Login from '../containers/Login'
import ChangePassword from '../containers/ChangePassword'
import Homepage from '../containers/Homepage';
import Staff from '../containers/Staff/Staff';
import Exam from '../containers/Exam/Exam';
import CorrectStudentAnswer from '../containers/CorrectStudentAnswer';
import Dashboard from '../containers/Dashboard/Dashboard';

import PlayerProblems from '../containers/Game/PlayerProblems';
import ShowProblem from '../containers/Game/ShowProblem';
import CorrectProblem from '../containers/Formula0/CorrectProblem';
import Auction from '../containers/Formula0/Auction';
import UncorrectedProblems from '../containers/Formula0/UncorrectedProblems';


const Root = () => {
  return (
    <>
      <Switch>
        <Route path='/create-account' component={CreateAccount} />
        <Route path='/login' component={Login} />
        <Route path='/change-password' component={ChangePassword} />
        <Route path="/staff/" component={Staff} />
        <Route path="/correct-student-answer/" component={CorrectStudentAnswer} />

        <Route path="/game/:gameId/my_problems/" component={PlayerProblems} />
        <Route path="/game/:gameId/auction" component={Auction} />
        <Route path="/game/:gameId/problem/:singleOrMultiple/:problemId" component={ShowProblem} />
        <Route path="/game/mentor/correct_problem" component={CorrectProblem} />
        <Route path="/game/mentor/uncorrected_problems" component={UncorrectedProblems} />

        <PrivateRoute path="/exam/:examID/:questionID?" component={Exam} />
        <PrivateRoute path="/dashboard/" component={Dashboard} />
        <Route path="/" component={Homepage} />
      </Switch>
      <DevTools />
    </>
  );
};
export default Root;
