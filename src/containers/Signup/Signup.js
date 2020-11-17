import React from "react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { authSignup } from "../../store/actions/auth";

class RegistrationForm extends React.Component {
  state = {
    username: "",
    email: "",
    password1: "",
    password2: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, email, password1, password2 } = this.state;
    this.props.signup(username, email, password1, password2);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { username, email, password1, password2 } = this.state;
    const { error, loading, token } = this.props;
    if (token) {
      return <Redirect to="/home" />;
    }
    return (
   <>
   {/* Container Start */}
      <div className="container-fluid">   
      {/* Row Start  */}
       <div className="row crow">
         {/* Col Start */}
           <div className="col-lg-4 col-sm-12" >     
           {/* error message          */}
             {error && <p>{this.props.error.message}</p>}
               <h5>Welcome to</h5>
               <img  src="/static/img/padidatools.png"/>
               {/* From Start */}
               <form  onSubmit={this.handleSubmit} >                 
                   <div className="md-form md-bg input-with-pre-icon" style={{justifyContent: 'center'}}>
                       <i className="fas fa-user input-prefix" style={{color: '#034BB7'}}></i>
                       <input type="text" id="username" className="form-control" style={{borderRadius: '12px'}}                       
                          onChange={this.handleChange}
                          value={username}
                          name="username"
                         />
                       <label htmlFor="username" style={{color: '#034BB7'}} >USERNAME</label>
                    </div>                 
                   <div className="md-form md-bg input-with-pre-icon" style={{justifyContent: 'center'}} >
                       <i className="fas fa-envelope input-prefix" style={{color: '#034BB7'}}></i>
                       <input type="email" id="email" className="form-control" style={{borderRadius: '12px'}}                      
                          onChange={this.handleChange}
                           value={email}
                           name="email"
                          />
                       <label htmlFor="email" style={{color: '#034BB7'}}>EMAIL </label>
                   </div>
                   <div className="md-form md-bg input-with-pre-icon" style={{justifyContent: 'center'}} >
                       <i className="fas fa-lock input-prefix" style={{color: '#034BB7'}}></i>
                       <input type="password" id="password1" className="form-control" style={{borderRadius: '12px'}}                      
                           onChange={this.handleChange}               
                           value={password1}
                           name="password1"
                          />
                       <label htmlFor="email" style={{color: '#034BB7'}}>PASSWORD </label>
                   </div>                 
                   <div className="md-form md-bg input-with-pre-icon" style={{justifyContent: 'center'}} >
                       <i className="fas fa-lock input-prefix" style={{color: '#034BB7'}}></i>
                       <input type="password" id="password2" className="form-control" style={{borderRadius: '12px'}}                       
                          onChange={this.handleChange}                 
                          value={password2}
                          name="password2"
                        />
                       <label htmlFor="password2" style={{color: '#034BB7'}}>CONFIRM PASSWORD </label>
                   </div>
                   <div >
                       <button type="submit" className="btn">Signup</button>
                     </div>
                    <div style={{marginTop: '5%'}}>
                      <p> Already have an account? <NavLink to="/">Login</NavLink></p>
                       <a href="#" style={{color: 'white'}}>Forgot my password</a>
                     </div>
                    <div style={{marginTop: '15%'}} >
                        <pre style={{color: 'white',textAlign: 'center',fontSize: 'x-small'}}><a >About</a>  .  <a>Contact</a>
                         <p>Powered By EdTools </p><p>Copyright 2019 EdAcademy</p>
                        </pre>
                    </div>
               </form>
               {/* From End */}
           </div>
           {/* Col End */}
       </div>
       {/* Row End */}
   </div>
{/* Container End */}
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
    signup: (username, email, password1, password2) =>
      dispatch(authSignup(username, email, password1, password2))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm);
