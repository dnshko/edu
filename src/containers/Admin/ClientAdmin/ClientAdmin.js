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
import CustomButton from '../../../components/Button/Button';
import { pathOr, isEmpty, trim, lensPath, set, remove ,equals,head,filter,data} from 'ramda';

class ClientAdmin extends Component{
    constructor() {
        super();
    
        this.state = {
        ClientId: null,
        Client: '',
        CliendAdmin:'',
        FirstName: '',
        LastName: '',
        Email:'',
        licence:'',
        loginEmail:'',
        password:'',
        client:[],
        admins:[]
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
          const { Client,FirstName, LastName, Email, licence, loginEmail, password ,confirm_password} = this.state;
  
          axios.post('http://localhost:8000/clientadmin/', {Client, FirstName, LastName, Email, licence, loginEmail, password ,confirm_password})                   
              .then(function (response) {
                    //access the results here....           
                  swal("success!", "Admin added", "success").then(setInterval(function(){window.location.reload();},1500));// alert
                  console.log(response);// log
                })
                .catch(function (error) {
                  console.log(error);
                });
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
    
    render(){
        const { Client,FirstName, LastName, Email, licence, loginEmail, password ,confirm_password,clientadmin} = this.state;
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
                                <Form.Control as="select" custom className="selectStyle" id="Client Name" defaultValue={'ClientName'} name="ClientName"  onChange={this.onChange} required>
                                            <option value="ClientName" disabled selected>ClientName</option>                                            
                                            
                                            { this.state.client.map(client =>
                                             <option key={client.id} value={ client.ClientName}>{client.ClientName}</option>)}
                                                  
                                </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="select clientAdmin" className="col col-form-label">select client Admin</Form.Label>
                                <Col >
                                    <Form.Control as="select" custom className="selectStyle" id="select clientAdmin"   name="CliendAdmin" onChange={this.onChange} required>
                                        <option value="" disabled selected>select client</option>
                                        { this.state.admins.map(admins =>
                                             <option key={admins.id} value={ClientAdmins => admins.FirstName}>{admins.FirstName}</option>)}                              
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="First Name" className="col col-form-label">First Name</Form.Label>
                                <Col >
                                    <Form.Control  type="text"  id="First Name"
                                     placeholder="First Name"                                      
                                     value={FirstName}
                                     onChange={this.onChange}
                                     name="FirstName"
                                     required
                                     />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="Last Name" className="col col-form-label">Last Name</Form.Label>
                                <Col >
                                    <Form.Control  type="text"  id="Last Name"
                                     placeholder="Last Name"
                                     value={LastName}
                                     onChange={this.onChange}
                                     name="LastName"
                                     required
                                     />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="Email" className="col col-form-label">Email</Form.Label>
                                <Col>
                                    <Form.Control type="text"  id="Email"
                                     placeholder="Email"
                                     value={Email}
                                     onChange={this.onChange}
                                     name="Email"
                                     required
                                     />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="licence key" className="col col-form-label">licence key</Form.Label>
                                <Col >
                                    <Form.Control type="text"  id="licence key" 
                                    placeholder="licence key" 
                                    value={licence}
                                    onChange={this.onChange}
                                    name="licence"
                                    required
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="login email" className="col col-form-label">login email</Form.Label>
                                <Col>
                                    <Form.Control type="text"  id="login email" 
                                    placeholder="login email" 
                                    value={loginEmail}
                                    onChange={this.onChange}
                                    name="loginEmail"
                                    required
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="password" className="col col-form-label">password</Form.Label>
                                <Col>
                                    <Form.Control type="text"  id="password"
                                     placeholder="password" 
                                     value={password}
                                     onChange={this.onChange}
                                     name="password"
                                     required
                                     />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="password" className="col col-form-label">confirm password</Form.Label>
                                <Col>
                                    <Form.Control type="text"  id="password"
                                     placeholder="confirm password" 
                                     value={confirm_password}
                                     onChange={this.onChange}
                                     name="confirm_password"
                                     required
                                     />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    
                            <Row className="row justify-content-md-center">            
                                        <CustomButton  style="col btnBlue" BtnTxt="Add Admin" ClickEvent={this.onSubmit} />
                                        <CustomButton  style="col btnBlue" BtnTxt="Update Admin" ClickEvent={this.onUpdate}/>    
                                        <CustomButton  style="col btnBlue" BtnTxt="Delete Admin" ClickEvent={this.onDelete}/>
                                        <CustomButton  style="col btnBlue" BtnTxt="Cancel" />                                       
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