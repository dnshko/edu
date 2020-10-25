import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import Header from "./components/Header";

class App extends Component {
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