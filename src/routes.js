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
import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup";
import HomepageLayout from "./containers/Home/Home";
import Header from "./components/Header/Header";
import DataCT from './containers/DataCreationTool/index';
import Exquiz from "./components/Examplequiz/Examplequiz"
const BaseRouter = () => (
  <>
  <Hoc>
  <Switch>
    <Route exact path="/" component={ClientSignup} >
    <Header />
    <ClientSignup />
     </Route> 
    <Route path="/admin" component={ClientAdmin} >
      <Header />
      <ClientAdmin />
      </Route>
    <Route path="/students" component={ManageStudents} >
      <Header />
      <ManageStudents />
     </Route> 
    <Route path="/teachers" component={ManageTeachers} >
        <Header />
        <ManageTeachers />
      </Route>    
    <Route path="/adminclassroom" component={AdminClassroom} >
        <Header />
        <AdminClassroom />
      </Route>
    <Route path="/assigntest" component={AssignTest} > 
        <Header /> 
        <AssignTest />
    </Route>
    <Route path="/add" component={ClientAdd} >
          <Header />
          <ClientAdd />
      </Route>
    <Route path="/quizapp" component={QuizApp} >
          <header />
          <QuizApp />
      </Route>
    <Route exact path="/list" component={QuizList} >
          <Header />
          <QuizList />
      </Route>
    <Route exact path="/quiz/:quizId" component={QuizDetail} >
          {/* <Header /> */}
          {/* <QuizDetail /> */}
      </Route>
    <Route exact path="/create-quiz" component={CreateQuiz} >
          <Header />
          <CreateQuiz />
      </Route>
      <Route exact path="/create-quiz" component={CreateQuiz} >
          <Header />
          <CreateQuiz />
      </Route>
      <Route exact path="/Dct" component={DataCT} >
          <Header />
          <DataCT />
      </Route>
      <Route exact path="/samplequiz" component={Exquiz} >
          <Header />
          <Exquiz />
      </Route>
    <Route exact path="/login" component={Login}  style={{ backgroundColor: '#034BB7'}}/>
    <Route path="/signup" component={Signup} />
    <Route path="/home" component={HomepageLayout} />
    </Switch>
    </Hoc>
  </>
);

export default BaseRouter;
