import React,{Component} from 'react';
import {
    Container,
    Card,
    Form,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';
import $ from 'jquery'
import CustomButton from '../../../components/Button/Button';
import CustomTextBox from '../../../components/TextBox/TextBox';
import { pathOr, isEmpty, trim, lensPath, set, remove ,equals,head,filter,data} from 'ramda';

const validFirstNameRegex = RegExp(/^([A-Za-z0-9]+)$/);
const validLastNameRegex = RegExp(/^([A-Za-z0-9]+)$/);
const validEmailRegex = RegExp(/^([a-z0-9_\-\.]+)@([a-z0-9_\-\.]+)\.([a-z]{2,5})$/);
const validlicenceRegex = RegExp (/^[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}$/);
const validloginEmailRegex = RegExp(/^([a-z0-9_\-\.]+)@([a-z0-9_\-\.]+)\.([a-z]{2,5})$/);
const validpasswordRegex = RegExp(/^[A-Za-z0-9]{8}$/);



const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
}

class ClientAdmin extends Component{
    constructor() {
        super();
    
        this.state = {
        ClientId: null,
        Client: '',
        ClientAdmin:'',
        FirstName: '',
        LastName: '',
        Email:'',
        licence:'',
        loginEmail:'',
        password:'',
        confirm_password:'',
        client:[],
        admins:[],
        errors:{
          FirstName:'',
          LastName:'',
          Email:'',
          licence:'',
          loginEmail:'',
          password:'',
          confirm_password:''
        }
      }
    }
      componentDidMount() {
        axios.get(`http://localhost:8000/client/`)
          .then(res => {
            const client = res.data;
            this.setState({ client });
            console.log(client)
          })
          axios.get(`http://localhost:8000/clientadmin/`)
          .then(res => {
            const admins = res.data;
            this.setState({ admins });
            console.log(admins);
          })
      }
      
      getClientAdminName = (admins,client_name)=>{
        const getClientDeatilsWithName = (data) => {
      
          return equals(
            pathOr(
              {},
              [
                'FirstName'
              ],
              data
            ),
            client_name
          )
              
        }
        return filter(getClientDeatilsWithName,admins)
      }
     
    onChange = (e) => {
      e.preventDefault();
      const { name,value } = e.target;
      const { password, confirm_password} = this.state
      let errors = this.state.errors;

      switch (name) {
        case 'FirstName':
          // if(validFirstNameRegex.test(value)){ 
          //   errors.FirstName='';}
          //   else{
          //   errors.FirstName = 'Name shouldn\'t contain special characters!';}
              $('#FirstName').focusout(function(){
                if(validFirstNameRegex.test(value)){ 
                  $('#FirstName').css('border', '1px solid green')
                  $('#fnamesuccess').css('display','block')
                  $('#fnamefail').css('display','none')
                  $('#fnameerror').css('display','none')
                }
                else{
                  $('#FirstName').css('border', '1px solid red')
                  $('#fnamefail').css('display','block')
                  $('#fnamesuccess').css('display','none')
                  $('#fnameerror').css('display','block')
                }
            })
          break;
        case 'LastName':
        //  errors.LastName = validLastNameRegex.test(value)? '': 'Name shouldn\'t contain special characters!' ;
          $('#LastName').focusout(function(){
            if(validLastNameRegex.test(value)){ 
              $('#LastName').css('border', '1px solid green')
              $('#lnamesuccess').css('display','block')
              $('#lnamefail').css('display','none')
              $('#lnameerror').css('display','none')
            }
            else{
              $('#LastName').css('border', '1px solid red')
              $('#lnamefail').css('display','block')
              $('#lnamesuccess').css('display','none')
              $('#lnameerror').css('display','block')
            }
        })
          break;
        case 'Email':
        //  errors.Email = validEmailRegex.test(value)? '': 'Email is not valid!' ;
          $('#Email').focusout(function(){
            if(validEmailRegex.test(value)){ 
              $('#Email').css('border', '1px solid green')
              $('#emailsuccess').css('display','block')
              $('#emailfail').css('display','none')
              $('#emailerror').css('display','none')
            }
            else{
              $('#Email').css('border', '1px solid red')
              $('#emailfail').css('display','block')
              $('#emailsuccess').css('display','none')
              $('#emailerror').css('display','block')
            }
        })
          break;
        case 'licence':
          //errors.licence = validlicenceRegex.test(value)? '': 'Licence key is not valid!' ;
          $('#licencekey').focusout(function(){
            if( validlicenceRegex.test(value)){ 
              $('#licencekey').css('border', '1px solid green')
              $('#licencesuccess').css('display','block')
              $('#licencefail').css('display','none')
              $('#licenceerror').css('display','none')
            }
            else{
              $('#licencekey').css('border', '1px solid red')
              $('#licencefail').css('display','block')
              $('#licencesuccess').css('display','none')
              $('#licenceerror').css('display','block')
            }
        })
          break;
        case 'loginEmail':
        //  errors.loginEmail = validloginEmailRegex.test(value)? '': 'Email is not valid!' ;
          $('#loginemail').focusout(function(){
            if(validloginEmailRegex.test(value)){ 
              $('#loginemail').css('border', '1px solid green')
              $('#lemailsuccess').css('display','block')
              $('#lemailfail').css('display','none')
              $('#lemailerror').css('display','none')
            }
            else{
              $('#loginemail').css('border', '1px solid red')
              $('#lemailfail').css('display','block')
              $('#lemailsuccess').css('display','none')
              $('#lemailerror').css('display','block')
            }
        })
          break;
        case 'password':
        //  errors.password = validpasswordRegex.test(value)? '': 'Password is not valid!' ;
          $('#password').focusout(function(){
            if(validpasswordRegex.test(value)){ 
              $('#password').css('border', '1px solid green')
              $('#passsuccess').css('display','block')
              $('#passfail').css('display','none')
              $('#passerror').css('display','none')
            }
            else{
              $('#password').css('border', '1px solid red')
              $('#passfail').css('display','block')
              $('#passsuccess').css('display','none')
              $('#passerror').css('display','block')
            }
        })
          break;
        case 'confirm_password':
        //  errors.confirm_password = name.password !== name.confirm_password ? 'Incorrect Password!': '';
          $('#confirm_password').focusout(function(){
            if(password === confirm_password){ 
              $('#confirm_password').css('border', '1px solid green')
              $('#cpasssuccess').css('display','block')
              $('#cpassfail').css('display','none')
              $('#cpasserror').css('display','none')
            }
            else{
              $('#confirm_password').css('border', '1px solid red')
              $('#cpassfail').css('display','block')
              $('#cpasssuccess').css('display','none')
              $('#cpasserror').css('display','block')
            }
        })
          break; 
        default:
          break;

      }

        if(equals(e.target.name,"CliendAdmin")){
          
         const filterData =  head(this.getClientAdminName(this.state.admins,e.target.value))
          console.log(filterData)
            this.setState({
                            ClientId: pathOr("",["id"],filterData),
                            FirstName: pathOr("",["FirstName"],filterData),
                            LastName:pathOr("",["LastName"],filterData),
                            Email: pathOr("",["Email"],filterData),
                            licence: pathOr("",["licence"],filterData),
                            loginEmail: pathOr("",["loginEmail"],filterData),
                            password: pathOr("",["password"],filterData),
                            confirm_password: pathOr("",["confirm_password"],filterData)
            })
            return
        }
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.value,'value')
    }
      
      onSubmit = (e) => {
       
          e.preventDefault();
          // get our form data out of state
          const {  Client,FirstName, LastName, Email, licence, loginEmail, password ,confirm_password} = this.state;
          
        
          if(validateForm(this.state.errors)) {
            console.info('Valid Form')
            axios.post('http://localhost:8000/clientadmin/', {Client, FirstName, LastName, Email, licence, loginEmail, password ,confirm_password})                   
              .then(function (response) {
                    //access the results here....           
                  swal("success!", "Admin added", "success").then(setInterval(function(){window.location.reload();},1500));// alert
                  console.log(response);// log
                })
                .catch(function (error) {
                  console.log(error);
                });

          }else{
            console.error('Invalid Form')
          }
        
  }
        onUpdate =() =>{
            const { ClientId,Client,FirstName, LastName, Email, licence, loginEmail, password ,confirm_password} = this.state;
  
            axios.put('http://localhost:8000/clientadmin/'  + ClientId + '/', {Client, FirstName, LastName, Email, licence, loginEmail, password ,confirm_password})  
            .then(function (response) {
                  //access the results here....           
                swal("success!", "Admin Updated", "success").then(setInterval(function(){window.location.reload();},1500));// alert
                console.log(response);// log
              })
              .catch(function (error) {
                console.log(error);
              });
          }
          onDelete = () =>{
            const {ClientId} = this.state;
                swal({
                    title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover this Record file!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                  })
                  .then((willDelete) => {
                    if (willDelete) {
                        axios.delete('http://localhost:8000/clientadmin/'  + ClientId + '/') 
                      swal("Admin Record Deleted!", {
                        icon: "success",
                      }).then(setInterval(function(){window.location.reload();},1500));
                    } else {
                      swal("Admin Record is safe!");
                    }
                  })
                  .catch(function (error) {
                    console.log(error);
                   })
                }
          onCancel = () =>{
            this.setState({
              
              ClientId: null,
              Client: '',
              ClientAdmin:'',
              FirstName: '',
              LastName: '',
              Email:'',
              licence:'',
              loginEmail:'',
              password:'',
              confirm_password:'',
              client:[],
              admins:[],
              errors:{
                FirstName:'',
                LastName:'',
                Email:'',
                licence:'',
                loginEmail:'',
                password:'',
                confirm_password:'',
              }
            });
            axios.get(`http://localhost:8000/client/`)
          .then(res => {
            const client = res.data;
            this.setState({ client });
            console.log(client)
          })
          axios.get(`http://localhost:8000/clientadmin/`)
          .then(res => {
            const admins = res.data;
            this.setState({ admins });
            console.log(admins);
          })
          $('#FirstName').css('border', '2px solid #288df0')
          $('#fnamesuccess').css('display','none')
          $('#fnamefail').css('display','none')
          $('#fnameerror').css('display','none')
          $('#LastName').css('border', '2px solid #288df0')
          $('#lnamesuccess').css('display','none')
          $('#lnamefail').css('display','none')
          $('#lnameerror').css('display','none')
          $('#Email').css('border', '2px solid #288df0')
          $('#emailsuccess').css('display','none')
          $('#emailfail').css('display','none')
          $('#emailerror').css('display','none')
          $('#licencekey').css('border', '2px solid #288df0')
          $('#licencesuccess').css('display','none')
          $('#licencefail').css('display','none')
          $('#licenceerror').css('display','none')
          $('#loginemail').css('border', '1px solid #288df0')
          $('#lemailsuccess').css('display','none')
          $('#lemailfail').css('display','none')
          $('#lemailerror').css('display','none')
          $('#password').css('border', '2px solid #288df0')
          $('#passsuccess').css('display','none')
          $('#passfail').css('display','none')
          $('#passerror').css('display','none')
          $('#confirm_password').css('border', '2px solid #288df0')
          $('#cpasssuccess').css('display','none')
          $('#cpassfail').css('display','none')
          $('#cpasserror').css('display','none')
          }
    
    render(){
        const { Client,FirstName, LastName, Email, licence, loginEmail, password ,confirm_password,errors,clientadmin} = this.state;
        return(
            <>
                
    <Container style={{marginTop: '50px'}}>
            <Card >
                <nav className="nav justify-content-center">
                    <p className="headTitle">Create Client Admin</p>
                </nav>
               
                <Form onSubmit={this.onSubmit}>
                <Card.Body >
                    <Row className="row justify-content-center">
                        <Col className="col-md-6">                           
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="select client" className="col col-form-label">select client</Form.Label>
                                <Col >
                                <Form.Control as="select" custom className="selectStyle" id="Client Name" defaultValue={'ClientName'}  name="ClientName"  onChange={this.onChange} required>
                                            <option value="ClientName"  >ClientName</option>                                            
                                            
                                            { this.state.client.map(client =>
                                             <option key={client.id} value={ client.ClientName} >{client.ClientName}</option>)}
                                                  
                                </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="select clientAdmin" className="col col-form-label">select client Admin</Form.Label>
                                <Col >
                                    <Form.Control as="select" custom className="selectStyle" id="select clientAdmin"   name="CliendAdmin" onChange={this.onChange} required>
                                        <option value="" >select client</option>
                                        { this.state.admins.map(admins =>
                                             <option key={admins.id} value={ admins.FirstName}>{admins.FirstName}</option>)}                              
                                    </Form.Control>
                                </Col>
                            </Form.Group>

{/* Custom Text Box  */}
                           {/* {errors.FirstName.length > 0 && <span className='error'>{errors.FirstName}</span>} */}
                            <span style={{display:"none"}} className="error" id="fnameerror">Name Shouldn't contain special characters!</span>
                            <i className="fa fa-check" id="fnamesuccess" style={{position:"relative",left:"93%",top:"5%", zIndex:"1", display:"none", color:"green"}}></i>
                            <i className="fa fa-times" id="fnamefail" style={{position:"relative",left:"93%",top:"4%", zIndex:"1", display:"none", color:"red"}}></i>
                            <CustomTextBox
                             htFor="First Name" 
                             style="col col-form-label" 
                             txtBoxLabel="First Name" 
                             txtBoxType="text"
                             txtBoxID="FirstName"
                             txtBoxPH="First Name"
                             txtBoxValue={FirstName}
                             changeEvent={this.onChange}
                             txtBoxName="FirstName"   
                            />
                            
{/* Custom Text Box  End*/}
                            {/*{errors.LastName.length > 0 && <span className='error'>{errors.LastName}</span>}*/}
                            <span style={{display:"none"}} className="error" id="lnameerror">Name Shouldn't contain special characters!</span>
                            <i className="fa fa-check" id="lnamesuccess" style={{position:"relative",left:"93%",top:"5%", zIndex:"1", display:"none", color:"green"}}></i>
                            <i className="fa fa-times" id="lnamefail" style={{position:"relative",left:"93%",top:"4%", zIndex:"1", display:"none", color:"red"}}></i>
                            <CustomTextBox
                              htFor="Last Name" 
                              style="col col-form-label"
                              txtBoxLabel="Last Name"
                              txtBoxType="text"  
                              txtBoxID="LastName"
                              txtBoxPH="Last Name"
                              txtBoxValue={LastName}
                              changeEvent={this.onChange}
                              txtBoxName="LastName"
                             />

                            {/*{errors.Email.length > 0 && <span className='error'>{errors.Email}</span>}*/}
                            <span style={{display:"none"}} className="error" id="emailerror">Email is not Valid!</span>
                            <i className="fa fa-check" id="emailsuccess" style={{position:"relative",left:"93%",top:"5%", zIndex:"1", display:"none", color:"green"}}></i>
                            <i className="fa fa-times" id="emailfail" style={{position:"relative",left:"93%",top:"4%", zIndex:"1", display:"none", color:"red"}}></i>
                            <CustomTextBox
                              htFor="Email"
                              style="col col-form-label"
                              txtBoxLabel="Email"
                              txtBoxType="text"
                              txtBoxID="Email"
                              txtBoxPH="Email"
                              txtBoxValue={Email}
                              changeEvent={this.onChange}
                              txtBoxName="Email"
                             />

                            {/*{errors.licence.length > 0 && <span className='error'>{errors.licence}</span>}*/} 
                            <span style={{display:"none"}} className="error" id="licenceerror">License Key is not Valid!</span>
                            <i className="fa fa-check" id="licencesuccess" style={{position:"relative",left:"93%",top:"5%", zIndex:"1", display:"none", color:"green"}}></i>
                            <i className="fa fa-times" id="licencefail" style={{position:"relative",left:"93%",top:"4%", zIndex:"1", display:"none", color:"red"}}></i>
                            <CustomTextBox
                              htFor="licence key"
                              style="col col-form-label"
                              txtBoxLabel="licence key"
                              txtBoxType="text"
                              txtBoxID="licencekey" 
                              txtBoxPH="XXXX-XXXX-XXXX-XXXX" 
                              txtBoxPattern="[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}" 
                              txtBoxValue={licence}
                              changeEvent={this.onChange}
                              txtBoxName="licence"
                             />
                            
                            {/*{errors.loginEmail.length > 0 && <span className='error'>{errors.loginEmail}</span>}*/}
                            <span style={{display:"none"}} className="error" id="lemailerror">Email is not Valid!</span>
                            <i className="fa fa-check" id="lemailsuccess" style={{position:"relative",left:"93%",top:"5%", zIndex:"1", display:"none", color:"green"}}></i>
                            <i className="fa fa-times" id="lemailfail" style={{position:"relative",left:"93%",top:"4%", zIndex:"1", display:"none", color:"red"}}></i> 
                            <CustomTextBox
                                htFor="login email" 
                                style="col col-form-label"
                                txtBoxLabel="login email"
                                txtBoxType="text"  
                                txtBoxID="loginemail" 
                                txtBoxPH="login email" 
                                txtBoxValue={loginEmail}
                                changeEvent={this.onChange}
                                txtBoxName="loginEmail"
                              />

                            {/*{errors.password.length > 0 && <span className='error'>{errors.password}</span>}*/}
                            <span style={{display:"none"}} className="error" id="passerror">Password is not Vaild!</span>
                            <i className="fa fa-check" id="passsuccess" style={{position:"relative",left:"93%",top:"5%", zIndex:"1", display:"none", color:"green"}}></i>
                            <i className="fa fa-times" id="passfail" style={{position:"relative",left:"93%",top:"4%", zIndex:"1", display:"none", color:"red"}}></i> 
                            <CustomTextBox
                              htFor="password" 
                              style="col col-form-label"
                              txtBoxLabel="password"
                              txtBoxType="password"
                              txtBoxID="password"
                              txtBoxPH="password" 
                              txtBoxValue={password}
                              changeEvent={this.onChange}
                              txtBoxName="password"
                             />
                            
                            {/*{errors.confirm_password.length > 0 && <span className='error'>{errors.confirm_password}</span>}*/}
                            <span style={{display:"none"}} className="error" id="cpasserror">Incorrect Password!</span>
                            <i className="fa fa-check" id="cpasssuccess" style={{position:"relative",left:"93%",top:"5%", zIndex:"1", display:"none", color:"green"}}></i>
                            <i className="fa fa-times" id="cpassfail" style={{position:"relative",left:"93%",top:"4%", zIndex:"1", display:"none", color:"red"}}></i>                            
                            <CustomTextBox
                                htFor="password"
                                style="col col-form-label"
                                txtBoxLabel="confirm password"
                                txtBoxType="password"  
                                txtBoxID="confirm_password"
                                txtBoxPH="confirm password" 
                                txtBoxValue={confirm_password}
                                changeEvent={this.onChange}
                                txtBoxName="confirm_password"
                              />
                        </Col>
                    </Row>
                    
                            <Row className="row justify-content-md-center">   
                                        <CustomButton  style="col btnBlue" BtnTxt="Add Admin" disabledButton={this.state.ClientId!=null} ClickEvent={this.onSubmit} />
                                        <CustomButton  style="col btnBlue" BtnTxt="Update Admin" disabledButton={this.state.ClientId==null} ClickEvent={this.onUpdate}/>    
                                        <CustomButton  style="col btnBlue" BtnTxt="Delete Admin" disabledButton={this.state.ClientId==null} ClickEvent={this.onDelete}/>
                                        <CustomButton  style="col btnBlue" BtnTxt="Cancel" ClickEvent={this.onCancel}/>                                       
                            </Row>
                </Card.Body>
            </Form>
            </Card>
    </Container>
            </>
        )
    }
}

export default ClientAdmin;
