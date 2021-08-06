import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import CreateAccount from '../containers/CreateAccount';
import ChangePassword from '../containers/ChangePassword'
import Login from '../containers/Login';
import Exam from '../containers/Exam/Exam';
import Homepage from '../containers/Homepage';
import Staff from '../containers/Staff/Staff';
import CorrectAnswer from '../containers/Game/CorrectAnswer';
import Dashboard from '../containers/Dashboard/Dashboard';
import AfterLogin from '../containers/Game/AfterLogin';

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
        <PrivateRoute path="/exam/:examID/:questionID?" component={Exam} />
        <PrivateRoute path="/correct-student-answer" component={CorrectAnswer} />

        <Route path="/game/mentor/correct_problem" component={CorrectProblem} />
        <Route path="/game/mentor/uncorrected_problems" component={UncorrectedProblems} />

        <PrivateRoute path="/after_login" component={AfterLogin} />
        <PrivateRoute path="/game/:gameId/my_problems" component={PlayerProblems} />
        <PrivateRoute path="/game/:gameId/problem/:singleOrMultiple/:problemId" component={ShowProblem} />

        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/" component={Homepage} />
      </Switch>
    </>
  );
};
export default Root;
