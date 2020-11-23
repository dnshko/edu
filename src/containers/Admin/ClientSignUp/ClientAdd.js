import React,{Component} from 'react';
import axios from 'axios';
import States from '../../../components/states';
import CustomButton from '../../../components/Button/Button';
import CustomTextBox from '../../../components/TextBox/TextBox';
import { pathOr, isEmpty, trim, lensPath, set, remove ,equals,head,filter,data} from 'ramda';

import {
    Container,
    Card,
    Form,
    Row,
    Col
} from 'react-bootstrap';
import swal from 'sweetalert';

const validZipcodeRegex = RegExp(/^(\d{5})$/);
const validAddressRegex = RegExp(/^(.{5,})$/);
const validClientnameRegex = RegExp(/^[A-Z a-z0-9]+$/);
const validFirstnameRegex = RegExp(/^[A-Z a-z0-9]+$/);
const validMiddlenameRegex = RegExp(/^[A-Z a-z0-9]+$/);
const validLastnameRegex = RegExp(/^[A-Z a-z0-9]+$/);
const validMobileRegex = RegExp(/^\d{3}[- ]\d{3}[- ]\d{4}$/);
const validEmailRegex = RegExp(/^[a-z0-9]{1,15}\.?[a-z0-9]{1,15}?@[a-z]{4,20}\.[a-z]{2,5}(\.[a-z]{2,})?$/);
const validLicenseRegex = RegExp(/^[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}$/);
const validCityRegex = RegExp(/^[A-Z a-z0-9]+$/);

const validateform = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  }

  class ClientAdd extends Component{
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
        client:[],
        errors:{
            ClientName:'',
            first_name:'',
            middle_name:'',
            last_name:'',
            email:'',
            mobile:'',
            persion: '',
            mobile1:'',
            license_key:'',
            zipcode:'',
            city:'',
            address:''
  
          }
      }
    }
    
    componentDidMount() {
        axios.get(`http://localhost:8000/client/`)
          .then(res => {
            const client = res.data;
            this.setState({ client });           
        //   console.log(client)
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
        e.preventDefault();
        const { name, value } = e.target
        let errors = this.state.errors
        switch(name){
          case 'ClientName':
             errors.ClientName=validClientnameRegex.test(value)?'':'Name shouldn\'t contain special characters!';
             break;
          case 'address':
             errors.address=validAddressRegex.test(value)?'':'Address is not Valid';
             break;
          case 'first_name':
            errors.first_name=validFirstnameRegex.test(value)?'':'Name shouldn\'t contain special characters!';
            break;
          case 'middle_name':
            errors.middle_name=validMiddlenameRegex.test(value)?'':'Name shouldn\'t contain special characters!';
            break;
          case 'last_name':
            errors.last_name=validLastnameRegex.test(value)?'':'Name shouldn\'t contain special characters!';
            break;
          case 'email':
            errors.email=validEmailRegex.test(value)?'':'Email is not Valid';
            break;
          case 'mobile':
            errors.mobile=validMobileRegex.test(value)?'':'Mobile Number is not Valid';
            break;
          case 'persion':
            errors.persion=validLastnameRegex.test(value)?'':'Name shouldn\'t contain special characters!';
            break;
          case 'mobile1':
            errors.mobile1=validMobileRegex.test(value)?'':'Mobile Number is not Valid';
            break;
          case 'license_key':
            errors.license_key=validLicenseRegex.test(value)?'':'License Key is not Valid';
            break;
          case 'zipcode':
            errors.zipcode= validZipcodeRegex.test(value)?'':'Zipcode is not Valid';
            break;
          case 'city':
            errors.city=validCityRegex.test(value)?'':'Name shouldn\'t contain special characters!';
            break;
        }
            
        
        this.setState({ [e.target.name]: e.target.value });
       
        
        
    }
    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { ClientName,clientNameError, first_name, middle_name, last_name, email, mobile,  persion,  mobile1,  license_key,  address,  city,  state, zipcode, country} = this.state;
        
        if(validateform(this.state.errors)){   
            console.log("valid form") 
        axios.post('http://localhost:8000/client/', { ClientName, first_name, middle_name, last_name, email, mobile,  persion,  mobile1,  license_key,  address,  city,  state, zipcode, country })                   
            .then(function (response) {
                  //access the results here....           
                swal("success!", "Client added", "success").then(setInterval(function(){window.location.reload();},1500));// alert
                console.log(response);// log
              })
              .catch(function (error) {
                console.log(error);
              });
            }
            else{
                console.log("Invalid Form")
            }      
      }
      onUpdate =() =>{
        const {ClientId, ClientName,clientNameError, first_name, middle_name, last_name, email, mobile,  persion,  mobile1,  license_key,  address,  city,  state, zipcode, country} = this.state;
        
        axios.put('http://localhost:8000/client/'  + ClientId + '/', { ClientName, first_name, middle_name, last_name, email, mobile,  persion,  mobile1,  license_key,  address,  city,  state, zipcode, country })                   
        .then(function (response) {
              //access the results here....           
            swal("success!", "Client Updated", "success").then(setInterval(function(){window.location.reload();},1500));// alert
            console.log(response);// log
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      onDelete = () =>{
        const {ClientId} = this.state;
        
        axios.delete('http://localhost:8000/client/'  + ClientId + '/')                   
        .then(function (response) {
              //access the results here....           
            swal("success!", "Client deleted", "success").then(setInterval(function(){window.location.reload();},1500));// alert
            console.log(response);// log
          })
          .catch(function (error) {
            console.log(error);
          });
     }
    render(){
        const { errors,ClientName,clientNameError,errortext, first_name, middle_name, last_name, email, mobile,  persion,  mobile1,  license_key,  address,  city,  state, zipcode, country } = this.state;
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
                        <p className="headTitle">Add Client</p>
                 </nav>
                 <Form >          
                    <Card.Body className="card-body">
                        <Row className="row justify-content-center">
                            <Col  lg={6} >

                                {errors.ClientName.length>0 && <span className="error">{errors.ClientName}</span>}
                                <CustomTextBox
                                    htFor="Client Name" 
                                    style="col col-form-label"
                                    txtBoxLabel="Client Name"
                                    txtBoxType="text"
                                    txtBoxID="Client Name" 
                                    txtBoxPH="Enter The Client Name" 
                                    txtBoxValue={ClientName}
                                    changeEvent={this.onChange}
                                    txtBoxName="ClientName"
                                  
                                />
                                {errors.first_name.length>0 && <span className="error">{errors.first_name}</span>}
                                <CustomTextBox
                                    htFor="First Name" 
                                    style="col col-form-label"
                                    txtBoxLabel="First Name"
                                    txtBoxType="text"
                                    txtBoxID="First Name"
                                    txtBoxPH="Enter The First Name"   
                                    txtBoxValue={first_name}                                          
                                    changeEvent={this.onChange}                                            
                                    txtBoxName="first_name"
                                />

                                {errors.middle_name.length>0 && <span className="error">{errors.middle_name}</span>}   
                                <CustomTextBox
                                    htFor="Middle Name" 
                                    style="col col-form-label"
                                    txtBoxLabel="Middle Name"
                                    txtBoxType="text" 
                                    txtBoxID="Middle Name"
                                    txtBoxPH="Enter The Middle Name"      
                                    txtBoxValue={middle_name}                                      
                                    changeEvent={this.onChange}                                            
                                    txtBoxName="middle_name"
                                />

                                {errors.last_name.length>0 && <span className="error">{errors.last_name}</span>} 
                                <CustomTextBox
                                    htFor="Last Name"
                                    style="col col-form-label"
                                    txtBoxLabel="Last Name"
                                    txtBoxType="text"
                                    txtBoxID="Last Name"
                                    txtBoxPH="Enter The Last Name"   
                                    txtBoxValue={last_name}                                          
                                    changeEvent={this.onChange}                                            
                                    txtBoxName="last_name"
                                />
                                
                                {errors.email.length>0 && <span className="error">{errors.email}</span>}
                                <CustomTextBox
                                    htFor="Email" 
                                    style="col col-form-label"
                                    txtBoxLabel="Email"
                                    txtBoxType="email"  
                                    txtBoxID="Email"
                                    txtBoxPH="Enter The Email"   
                                    txtBoxValue={email}                                      
                                    changeEvent={this.onChange}                                            
                                    txtBoxName="email"
                                /> 
                                
                                {errors.mobile.length>0 && <span className="error">{errors.mobile}</span>}
                                <CustomTextBox
                                    htFor="Mobile" 
                                    style="col col-form-label"
                                    txtBoxLabel="Mobile"
                                    txtBoxType="text"  
                                    txtBoxID ="Mobile"
                                    txtBoxPH="xxx-xxx-xxxx"
                                    txtBoxValue={mobile}
                                    changeEvent={this.onChange} 
                                    txtBoxName="mobile"
                                />
                                    
                                {errors.persion.length>0 && <span className="error">{errors.persion}</span>}
                                <CustomTextBox
                                    htFor="contact person1" 
                                    style="col col-form-label"
                                    txtBoxLabel="Emergency contact person1"
                                    txtBoxType="text"
                                    txtBoxID="contact person1" 
                                    txtBoxPH="Enter The Emergency contact person1"
                                    txtBoxValue={persion}
                                    changeEvent={this.onChange} 
                                    txtBoxName="persion"
                                />
    
                                {errors.mobile1.length>0 && <span className="error">{errors.mobile1}</span>}
                                <CustomTextBox
                                    htFor="Mobile1"
                                    style="col col-form-label"
                                    txtBoxLabel="Emergency Mobile1"
                                    txtBoxType="text"  
                                    txtBoxID="Mobile1"
                                    txtBoxPH="xxx-xxx-xxxx"
                                    txtBoxValue={mobile1}
                                    changeEvent={this.onChange} 
                                    txtBoxName="mobile1"
                                />
        
                                {errors.license_key.length>0 && <span className="error">{errors.license_key}</span>}
                                <CustomTextBox
                                    htFor="License key" 
                                    style="col col-form-label"
                                    txtBoxLabel="License key"
                                    txtBoxType="text"  
                                    txtBoxID="License key" 
                                    txtBoxPH="xxxx-xxxx-xxxx-xxxx" 
                                    txtBoxValue={license_key}
                                    changeEvent={this.onChange} 
                                    txtBoxName="license_key"
                                />
                                    
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
                                
                                {errors.city.length>0 && <span className="error">{errors.city}</span>}
                                <CustomTextBox
                                    htFor="city" 
                                    style="col col-form-label"
                                    txtBoxLabel="city"
                                    txtBoxType="text"  
                                    txtBoxID="city" 
                                    txtBoxPH="Enter The city"
                                    txtBoxValue={city}                                         
                                    changeEvent={this.onChange}                                            
                                    txtBoxName="city"
                                />
                                
                                {errors.zipcode.length>0 && <span className="error">{errors.zipcode}</span>}
                                <CustomTextBox
                                    htFor="zip code" 
                                    style="col col-form-label"
                                    txtBoxLabel="zip code"
                                    txtBoxType="text"  
                                    txtBoxID="zip code" 
                                    txtBoxPH="Enter The zip code"
                                    txtBoxValue={zipcode}                                         
                                    changeEvent={this.onChange}                                            
                                    txtBoxName="zipcode"
                                />
                            
                            {errors.address.length>0 && <span className="error">{errors.address}</span>}
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
      
                                                              
                         </Row>
                    </Card.Body>                    
                </Form>
            </Card>
         </Container>
            </>
        )
    }
}

export default ClientAdd;