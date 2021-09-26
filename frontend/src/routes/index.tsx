import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';

import StudentHome from '../pages/Student/Home';
import StudentClassroom from '../pages/Student/Classroom';

import TeacherHome from '../pages/Teacher/Home';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/home" component={StudentHome} isPrivate />
      <Route path="/classroom" component={StudentClassroom} isPrivate />

      <Route path="/teacher" component={TeacherHome} isPrivate />
      <Route path="/teacher/classroom" component={TeacherHome} isPrivate />
    </Switch>
  );
};

export default Routes;
