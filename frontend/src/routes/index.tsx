import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import TeacherHome from '../pages/Teacher/Home';

import SignIn from '../pages/SignIn';

import StudentHome from '../pages/Student/Home';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/home" component={StudentHome} isPrivate />

      <Route path="/teacher" component={TeacherHome} isPrivate />
    </Switch>
  );
};

export default Routes;
