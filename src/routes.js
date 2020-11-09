import React from "react";
import { Route ,Switch} from "react-router-dom";
import ClientAdmin from './containers/Admin/ClientAdmin/ClientAdmin';
import ClientSignup from './containers/Admin/ClientSignUp/ClientSignUp';
import ClientAdd from './containers/Admin/ClientSignUp/ClientAdd';
import ManageStudents from './containers/Client/Manage Students/ManageStudents';
import ManageTeachers from './containers/Client/ManageTeachers/ManageTeachers ';
import AdminClassroom from './containers/Client/Admin Classroom/AdminClassroom';
import AssignTest from './containers/Client/AssignTest/AssignTest';
import QuizApp from './QuizApp';
import Hoc from './hoc/hoc'
import QuizList from "./container/Home";
import QuizDetail from "./container/DetailQuiz"
import CreateQuiz from "./container/CreateQuiz";

const BaseRouter = () => (
  <>
  <Hoc>
  <Switch>
    <Route exact path="/" component={ClientSignup} />
    <Route path="/admin" component={ClientAdmin} />
    <Route path="/students" component={ManageStudents} />
    <Route path="/teachers" component={ManageTeachers} />    
    <Route path="/adminclassroom" component={AdminClassroom} />
    <Route path="/assigntest" component={AssignTest} />
    <Route path="/add" component={ClientAdd} />
    <Route path="/quizapp" component={QuizApp} />
    <Route exact path="/list" component={QuizList} />
    <Route exact path="/quiz/:quizId" component={QuizDetail} />
    <Route exact path="/create-quiz" component={CreateQuiz} />
    </Switch>
    </Hoc>
  </>
);

export default BaseRouter;
