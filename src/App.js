import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import Header from "./components/Header";
// import ViewSteps from "./components/ViewSteps/index";
// import ViewVideo from "./components/Viewvideo/index";
class App extends Component {
  state = {
    authenticated: false,
  };
  
 
  
  render() {
    return (
      <>
      <Router>
          <Header />
          <BaseRouter />
      </Router>   
 
      </>   
    );
  }
}


export default App;