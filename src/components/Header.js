import React,{Component} from 'react';
import {
    Link,
} from 'react-router-dom';
import {
    Navbar
} from 'react-bootstrap';
class Header extends Component{
    render(){
        return(
                <>
                
        <nav className="mb-1 navbar navbar-expand-lg navbar-dark" style={{color : '#034BB7'}} >
             <a className="navbar-brand" href="#">
               <img src="/static/img/padidatools.png" height="30" alt="mdb logo" />
            </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                  <ul className="navbar-nav ml-auto">
                   <li className="nav-item">
                    <Link to="/" className="nav-link"> ClientSignup</Link>
                    </li><li className="nav-item">
                    <Link to="/admin"> <p className="nav-link" >ClientAdmin</p></Link>
                    </li><li className="nav-item">
                    <Link to="/students"> <p className="nav-link" >ManageStudents</p></Link>
                    </li><li className="nav-item">
                    <Link to="/teachers"> <p className="nav-link" >ManageTeachers</p></Link>
                    </li><li className="nav-item">
                    <Link to="/adminclassroom"> <p className="nav-link" >AdminClassroom</p></Link>
                    </li><li className="nav-item">
                    <Link to="/assigntest"> <p className="nav-link" >AssignTest</p></Link>
                    </li>
                 </ul>
              </div>
        </nav>


                </>
        )
    }
}

export default Header;