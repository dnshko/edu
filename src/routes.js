import React from "react";
import { Route } from "react-router-dom";
import ClientAdmin from './containers/Admin/ClientAdmin/ClientAdmin';
import ClientSignup from './containers/Admin/ClientSignUp/ClientSignUp';
import ManageStudents from './containers/Client/Manage Students/ManageStudents';
import ManageTeachers from './containers/Client/ManageTeachers/ManageTeachers ';
import AdminClassroom from './containers/Client/Admin Classroom/AdminClassroom';
import AssignTest from './containers/Client/AssignTest/AssignTest';
import QuizApp from './QuizApp';

const BaseRouter = () => (
  <>
    <Route exact path="/" component={ClientSignup} />
    <Route path="/admin" component={ClientAdmin} />
    <Route path="/students" component={ManageStudents} />
    <Route path="/teachers" component={ManageTeachers} />    
    <Route path="/adminclassroom" component={AdminClassroom} />
    <Route path="/assigntest" component={AssignTest} />
    <Route path="/quizapp" component={QuizApp} />
  </>
);

export default BaseRouter;
