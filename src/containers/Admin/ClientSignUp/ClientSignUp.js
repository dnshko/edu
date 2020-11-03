import React,{Component} from 'react';
import axios from 'axios';
import States from '../../../components/states';
import CustomButton from '../../../components/Button/Button';
import { pathOr, isEmpty, trim, lensPath, set, remove ,equals,head,filter,data} from 'ramda';

import {
    Container,
    Card,
    Form,
    Row,
    Col
} from 'react-bootstrap';
import swal from 'sweetalert';


class ClientSignup extends Component{
    constructor() {
        super();
    
        this.state = {
        ClientId: null,
        ClientName: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        email: '',
        mobile: '',
        persion: '',
        mobile1: '',
        license_key: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        clientNameError: false,
        errortext: '',
        client:[]
      }
    }
    
    componentDidMount() {
        axios.get(`http://localhost:8000/client/`)
          .then(res => {
            const client = res.data;
            this.setState({ client });           
          console.log(client)
          })
      }
     getClientName = (client,client_name)=>{
        const getClientDeatilsWithName = (data) => {
      
          return equals(
            pathOr(
              {},
              [
                'ClientName'
              ],
              data
            ),
            client_name
          )
              
        }
        return filter(getClientDeatilsWithName,client)
      }
      
      
      
    onChange = (e) => {
        //to get the input based on name and value
        if(equals(e.target.name,"ClientName")){
                
              
          
          
         const filterData =  head(this.getClientName(this.state.client,e.target.value))
          console.log(filterData)
            this.setState({
                ClientId: pathOr("",["id"],filterData),
                ClientName:  pathOr("",["ClientName"],filterData),
                first_name: pathOr("",["first_name"],filterData),
                middle_name:pathOr("",["middle_name"],filterData),
                last_name: pathOr("",["last_name"],filterData),
                email: pathOr("",["email"],filterData),
                mobile: pathOr("",["mobile"],filterData),
                persion: pathOr("",["persion"],filterData),
                mobile1: pathOr("",["mobile1"],filterData),
                license_key: pathOr("",["license_key"],filterData),
                address: pathOr("",["address"],filterData),
                city: pathOr("",["city"],filterData),
                state: pathOr("",["state"],filterData),
                zipcode: pathOr("",["zipcode"],filterData),
                country: pathOr("",["country"],filterData)
            })
            return

        }
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.value,'value')
        
        
    }
    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { ClientName,clientNameError, first_name, middle_name, last_name, email, mobile,  persion,  mobile1,  license_key,  address,  city,  state, zipcode, country} = this.state;
        
        //  if(isEmpty(mobile)){
             
        //     var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        //     if(mobile.value.match(phoneno))
        //     {
        //         this.setState({clientNameError : false,errortext:''})
        //     }
        //     else
        //     {
        //     this.setState({clientNameError : true,errortext:'phone number format incorrect'})
        //     }
        
            
        axios.post('http://localhost:8000/client/', { ClientName, first_name, middle_name, last_name, email, mobile,  persion,  mobile1,  license_key,  address,  city,  state, zipcode, country })                   
            .then(function (response) {
                  //access the results here....           
                swal("success!", "Admin added", "success").then(setInterval(function(){window.location.reload();},1500));// alert
                console.log(response);// log
              })
              .catch(function (error) {
                console.log(error);
              });
              
    //   }
    }
      onUpdate =() =>{
        const {ClientId, ClientName,clientNameError, first_name, middle_name, last_name, email, mobile,  persion,  mobile1,  license_key,  address,  city,  state, zipcode, country} = this.state;
        
        axios.put('http://localhost:8000/client/'  + ClientId + '/', { ClientName, first_name, middle_name, last_name, email, mobile,  persion,  mobile1,  license_key,  address,  city,  state, zipcode, country })                   
        .then(function (response) {
              //access the results here....           
            swal("success!", "Clients Updated", "success").then(setInterval(function(){window.location.reload();},1500));// alert
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
                    axios.delete('http://localhost:8000/client/'  + ClientId + '/') 
                  swal("Client Record deleted!", {
                    icon: "success",
                  }).then(setInterval(function(){window.location.reload();},1500));
                } else {
                  swal("Client Record safe!");
                }
              })
              .catch(function (error) {
                console.log(error);
               })
            }
    render(){
        const { ClientName,clientNameError,errortext, first_name, middle_name, last_name, email, mobile,  persion,  mobile1,  license_key,  address,  city,  state, zipcode, country } = this.state;
        const optionObj =[
            'Alabama',
            'Alaska',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming',


        ];
        return(
            <>
                
         <Container className="container" style={{marginTop: '50px'}}>      
            <Card className="card">
                 <nav className="nav justify-content-center"
                        style={{backgroundColor: '#034BB7', borderRadius: '10px 10px 0px 0px'}}>
                        <p className="headTitle">Manage Clients</p>
                 </nav>
                 <Form >          
                    <Card.Body className="card-body">
                        <Row className="row justify-content-center">
                            <Col  lg={6} >
                                <Form.Group as={Row} >
                                    <Form.Label htmlFor="Client Name" className="col col-form-label">Client Name</Form.Label>
                                    <Col >
                                         <Form.Control as="select" custom className="selectStyle" id="Client Name" defaultValue={'ClientName'} name="ClientName"  onChange={this.onChange} required>
                                            <option value="ClientName" disabled selected>ClientName</option>                                            
                                            
                                            { this.state.client.map(client =>
                                             <option key={client.id} value={ client.ClientName}>{client.ClientName}</option>)}
                                                  
                                        </Form.Control>

                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} >
                                    <Form.Label htmlFor="First Name" className="col col-form-label">First Name</Form.Label>
                                    <Col>
                                        <Form.Control type="text"  id="First Name" required
                                            placeholder="Enter The First Name"   
                                            value={first_name}                                          
                                            onChange={this.onChange}                                            
                                            name="first_name"
                                            />
                                   
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} >
                                    <Form.Label htmlFor="Middle Name" className="col col-form-label">Middle Name</Form.Label>
                                    <Col >
                                        <Form.Control type="text"  id="Middle Name" required
                                            placeholder="Enter The Middle Name"      
                                            value={middle_name}                                      
                                            onChange={this.onChange}                                            
                                            name="middle_name"
                                            />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} >
                                    <Form.Label htmlFor="Last Name" className="col col-form-label">Last Name</Form.Label>
                                    <Col >
                                        <Form.Control type="text"  id="Last Name" required
                                            placeholder="Enter The Last Name"   
                                            value={last_name}                                          
                                            onChange={this.onChange}                                            
                                            name="last_name"
                                            />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label htmlFor="Email" className="col col-form-label">Email</Form.Label>
                                    <Col >
                                        <Form.Control type="text"  id="Email" required
                                        placeholder="Enter The Email"   
                                        value={email}                                      
                                        onChange={this.onChange}                                            
                                        name="email"
                                        /> 
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label htmlFor="Mobile" className="col col-form-label">Mobile</Form.Label>
                                    <Col >
                                        <Form.Control type="text"  id="Mobile" required
                                         placeholder="Enter The Mobile" 
                                         value={mobile}
                                         onChange={this.onChange} 
                                         name="mobile"
                                         />
                                         {(clientNameError) ? (<span>{errortext}</span>) : null}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label htmlFor="contact person1" className="col col-form-label">Emergency contact person1</Form.Label>
                                    <Col>
                                        <Form.Control type="text"  id="contact person1" required
                                        placeholder="Enter The Emergency contact person1"
                                        value={persion}
                                        onChange={this.onChange} 
                                        name="persion"
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label htmlFor="Mobile1" className="col col-form-label">Emergency Mobile1</Form.Label>
                                    <Col>
                                        <Form.Control type="text"  id="Mobile1" required
                                        placeholder="Enter The Emergency Mobile1"
                                        value={mobile1}
                                        onChange={this.onChange} 
                                        name="mobile1"
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label htmlFor="License key" className="col col-form-label">License key</Form.Label >
                                    <Col>
                                        <Form.Control type="text"  id="License key"  required
                                        placeholder="Enter The License key"
                                        value={license_key}
                                        onChange={this.onChange} 
                                        name="license_key"
                                        />
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group as={Row}>
                                <Form.Label htmlFor="select client" className="col col-form-label">Select Country</Form.Label>
                                    <Col >
                                        <Form.Control as="select" custom className="selectStyle" id="select client" defaultValue={'COUNTRY'} name="country"  onChange={this.onChange} required>
                                            <option value="COUNTRY" disabled selected>Select Country</option>                                            
                                            <option value="USA">USA</option>
                                            {/* <option value="INDIA">INDIA</option> */}
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                <Form.Label htmlFor="select state" className="col col-form-label">Select State</Form.Label>
                                    <Col >
                                        <Form.Control as="select" custom className="selectStyle" id="select state" defaultValue={'DEFAULT'} name="state"  onChange={this.onChange} required>
                                            <option value="DEFAULT" disabled>Select State</option>                                            
                                           <States options={optionObj}/>
                                           
                                        </Form.Control>
                                    </Col>
                                </Form.Group>                                
                                <Form.Group as={Row}>
                                    <Form.Label htmlFor="city" className="col col-form-label" required>city</Form.Label>
                                    <Col>
                                        <Form.Control type="text"  id="city" 
                                        placeholder="Enter The city"
                                        value={city}                                         
                                        onChange={this.onChange}                                            
                                        name="city"
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label htmlFor="zip code" className="col col-form-label" required>zip code</Form.Label>
                                    <Col>
                                        <Form.Control type="text"  id="zip code" 
                                        placeholder="Enter The zip code"
                                        value={zipcode}                                         
                                        onChange={this.onChange}                                            
                                        name="zipcode"
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label htmlFor="address" className="col col-form-label" required>Address</Form.Label>
                                    <Col>
                                        <textarea className="form-control textarea" id="address" placeholder=""
                                            required style={{border: '2px solid #288df0',}}
                                            value={address}
                                            onChange={this.onChange}                                            
                                            name="address"
                                            ></textarea>
                                    </Col>
                                </Form.Group>
                            </Col>                            
                        </Row>
                        <Row className="row justify-content-md-center">
                                        <CustomButton  style="col btnBlue" BtnTxt="Add Client" ClickEvent={this.onSubmit} />
                                        <CustomButton  style="col btnBlue" BtnTxt="Update Client" ClickEvent={this.onUpdate}/>    
                                        <CustomButton  style="col btnBlue" BtnTxt="Delete Client" ClickEvent={this.onDelete}/>
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

export default ClientSignup;