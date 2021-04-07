import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import CreateAccount from '../containers/CreateAccount';
import ChangePassword from '../containers/ChangePassword'
import Login from '../containers/Login';
import Exam from '../containers/Exam/Exam';
import Homepage from '../containers/Homepage';
import Staff from '../containers/Staff/Staff';
import CorrectStudentAnswer from '../containers/CorrectStudentAnswer';
import Dashboard from '../containers/Dashboard/Dashboard';

import Formula0Login from '../containers/Formula0/Login';
import MyProblems from '../containers/Formula0/MyProblems';
import ShowProblem from '../containers/Formula0/ShowProblem';
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
        <PrivateRoute path="/correct-student-answer/" component={CorrectStudentAnswer} />

        <Route path="/formula0/login" component={Formula0Login} />
        <Route path="/formula0/my_problems" component={MyProblems} />
        <Route path="/formula0/auction" component={Auction} />
        <Route path="/formula0/show_problem" component={ShowProblem} />
        <Route path="/formula0/mentor/correct_problem" component={CorrectProblem} />
        <Route path="/formula0/mentor/uncorrected_problems" component={UncorrectedProblems} />

        <PrivateRoute path="/dashboard/" component={Dashboard} />
        <Route path="/" component={Homepage} />
      </Switch>
    </>
  );
};
export default Root;
