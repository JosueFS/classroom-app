import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';

import StudentHome from '../pages/Student/Home';
import StudentClassroom from '../pages/Student/Classroom';

import TeacherHome from '../pages/Teacher/Home';
import TeacherClassroom from '../pages/Teacher/Classroom';
import TeacherRoom from '../pages/Teacher/Room';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/home" component={StudentHome} isPrivate />
      <Route path="/classroom" component={StudentClassroom} isPrivate />

      <Route
        path="/teacher"
        exact
        component={TeacherHome}
        isPrivate
        onlyTeacher
      />
      <Route
        path="/teacher/classroom"
        exact
        component={TeacherClassroom}
        isPrivate
        onlyTeacher
      />
      <Route
        exact
        path="/teacher/classroom/matematica"
        component={TeacherRoom}
        isPrivate
        onlyTeacher
      />
    </Switch>
  );
};

export default Routes;
