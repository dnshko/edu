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

class ClientAdmin extends Component{
    constructor() {
        super();
    
        this.state = {
        Client: '',
        FirstName: '',
        LastName: '',
        Email:'',
        licence:'',
        loginEmail:'',
        password:'',
        client:[]
      }
    }
      componentDidMount() {
        axios.get(`http://localhost:8000/client/`)
          .then(res => {
            const client = res.data;
            this.setState({ client });
          })
      }
      onChange = (e) => {
          //to get the input based on name and value
          this.setState({ [e.target.name]: e.target.value });
      }
      onSubmit = (e) => {
          e.preventDefault();
          // get our form data out of state
          const { Client,FirstName, LastName, Email, licence, loginEmail, password } = this.state;
  
          axios.post('http://localhost:8000/clientadmin/', {Client, FirstName, LastName, Email, licence, loginEmail, password })                   
              .then(function (response) {
                    //access the results here....           
                  swal("success!", "Admin added", "success");// alert
                  console.log(response);// log
                })
                .catch(function (error) {
                  console.log(error);
                });
        }
    
    render(){
        const { Client,FirstName, LastName, Email, licence, loginEmail, password } = this.state;
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
                                    <Form.Control as="select" custom className="selectStyle" id="select client" defaultValue={'DEFAULT'}  name="Client" value={Client} onChange={this.onChange} required>
                                        <option value="DEFAULT" disabled>select client</option>
                                        { this.state.client.map(client =>
                                             <option key={client.id} value={Client => client.ClientName}>{client.ClientName}</option>)}                              
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="First Name" className="col col-form-label">First Name</Form.Label>
                                <Col >
                                    <Form.Control  type="text"  id="First Name"
                                     placeholder=""                                      
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
                                     placeholder=""
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
                                    <Form.Control type="text"  id="Emai"
                                     placeholder=""
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
                                    placeholder="" 
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
                                    placeholder="" 
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
                                     placeholder="" 
                                     value={password}
                                     onChange={this.onChange}
                                     name="password"
                                     required
                                     />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    
                            <Row className="row justify-content-md-center">                                
                                    <Button type="submit" className="col btnBlue">Add Admin</Button>                               
                                    <Button  className="col btnBlue">Update Admin</Button>                                
                                    <Button  className="col btnBlue">Delete Admin</Button>                                
                                    <Button  className="col btnBlue">Cancel</Button>                              
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