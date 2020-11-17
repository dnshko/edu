import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";

import StudentDashboard from './StudentDashboard/index';

class CustomLayout extends React.Component {
  render() {
    const { authenticated } = this.props;
    return (     
      <>
         <nav class="mb-1 navbar navbar-expand-lg navbar-dark" style={{color : '#034BB7'}} >
           <a class="navbar-brand" href="#">
               <img src="/static/img/padidatools.png" height="30" alt="mdb logo" />
           </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
                  <ul class="navbar-nav ml-auto">
                   <li class="nav-item">
                    <Link to="/home"> <p class="nav-link" >Home </p></Link>
                    </li>
                        {authenticated ? (
                          <li class="nav-item">
                            <a class="nav-link"   onClick={() => this.props.logout()}>Logout</a>
                          </li>
                          ) : (
                      <React.Fragment>
                           <li class="nav-item">       
                               <Link to="/login"><p class="nav-link" >Login</p></Link>
                           </li>                
                          <li class="nav-item">       
                              <Link to="/signup"><p class="nav-link" >Signup</p></Link>
                         </li>
                      </React.Fragment>)}
                 </ul>
              </div>
</nav>
{authenticated ? (
                          <StudentDashboard />
                          ) : (
                      <React.Fragment>
                          <h1>login Now</h1>
                      </React.Fragment>)}

{this.props.children}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomLayout)
);
