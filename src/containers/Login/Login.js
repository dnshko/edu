import React from "react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { authLogin } from "../../store/actions/auth";
import './Login.css';
class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password);
  };

  render() {
    const { error, loading, token } = this.props;
    const { username, password } = this.state;
    if (token) {
      return <Redirect to="/home" />;
    }
    return (
    
<>
  <div className="container" >
    <div className="row crow">
      <div className="col-lg-4 col-sm-12" >         
         {error && <p>{this.props.error.message}</p>}
            <h5>Welcome to</h5>
             <img  src="/static/img/padidatools.png"/>
                <form onSubmit={this.handleSubmit}>
                 <div className="md-form md-bg input-with-pre-icon" >
                   <i className="fas fa-user input-prefix" style={{color: '#034BB7'}}></i>
                     <input type="text" id="username" className="form-control" style={{borderRadius: '12px'}}               
                      onChange={this.handleChange}
                      value={username}
                      name="username"
                      />
                     <label htmlFor="username" style={{color: '#034BB7'}}>LOGIN EMAIL</label>
                </div>
                <div className="md-form md-bg input-with-pre-icon"  >
                   <i className="fas fa-lock input-prefix" style={{color: '#034BB7'}}></i>
                    <input type="password" id="pass" className="form-control" style={{borderRadius: '12px'}}              
                    value={password}
                    name="password"              
                    onChange={this.handleChange}
                    />
                    <label htmlFor="pass" style={{color: '#034BB7'}}>PASSWORD </label>
                </div>
        <div >
      <button type="submit" className="btn">sign in</button>
   </div>
            <div style={{marginTop: '5%'}}>             
              <p>New to us? <NavLink to="/signup"> Sign Up</NavLink></p>
                  <a href="#" style={{color: 'white'}}>Forgot my password</a>
            </div>
            <div style={{marginTop: '15%'}} >
                <pre style={{color: 'white',textAlign: 'center',fontSize: 'x-small'}}><a >About</a>  .  <a>Contact</a>
                    <p>Powered By EdTools </p><p>Copyright 2019 EdAcademy</p>
                </pre>
            </div>
        </form>
      </div>
    </div>
  </div>
</>
     
     
      );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => dispatch(authLogin(username, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
