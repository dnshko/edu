import React,{Component} from 'react';
import axios from 'axios';
import $ from 'jquery'
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
        client:[],
        errors:{
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
        e.preventDefault();
        const { name, value } = e.target
        let errors = this.state.errors
        switch(name){
          case 'first_name':
             //  errors.first_name=validFirstnameRegex.test(value)?'':'Name shouldn\'t contain special characters!';
             $('#FirstName').focusout(function(){
              if(validFirstnameRegex.test(value)){ 
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
          case 'middle_name':
            //  errors.middle_name=validMiddlenameRegex.test(value)?'':'Name shouldn\'t contain special characters!';
            $('#MiddleName').focusout(function(){
              if(validMiddlenameRegex.test(value)){ 
                $('#MiddleName').css('border', '1px solid green')
                $('#mdnamesuccess').css('display','block')
                $('#mdnamefail').css('display','none')
                $('#mdnameerror').css('display','none')
              }
              else{
                $('#MiddleName').css('border', '1px solid red')
                $('#mdnamefail').css('display','block')
                $('#mdnamesuccess').css('display','none')
                $('#mdnameerror').css('display','block')
              }
          })
            break;
          case 'last_name':
            // errors.last_name=validLastnameRegex.test(value)?'':'Name shouldn\'t contain special characters!';
            $('#LastName').focusout(function(){
              if(validLastnameRegex.test(value)){ 
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
            case 'email':
              // errors.email=validEmailRegex.test(value)?'':'Email is not Valid';
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
              case 'mobile':
              //  errors.mobile=validMobileRegex.test(value)?'':'Mobile Number is not Valid';
                $('#Mobile').focusout(function(){
                  if(validMobileRegex.test(value)){ 
                    $('#Mobile').css('border', '1px solid green')
                    $('#mobsuccess').css('display','block')
                    $('#mobfail').css('display','none')
                    $('#moberror').css('display','none')
                  }
                  else{
                    $('#Mobile').css('border', '1px solid red')
                    $('#mobfail').css('display','block')
                    $('#mobsuccess').css('display','none')
                    $('#moberror').css('display','block')
    
                  }
              })
                break;
              case 'persion':
              //  errors.persion=validLastnameRegex.test(value)?'':'Name shouldn\'t contain special characters!';
                $('#persion').focusout(function(){
                  if(validLastnameRegex.test(value)){ 
                    $('#persion').css('border', '1px solid green')
                    $('#persuccess').css('display','block')
                    $('#perfail').css('display','none')
                    $('#pererror').css('display','none')
                  }
                  else{
                    $('#persion').css('border', '1px solid red')
                    $('#perfail').css('display','block')
                    $('#persuccess').css('display','none')
                    $('#pererror').css('display','block')
                  }
              })
                break;
              case 'mobile1':
              //  errors.mobile1=validMobileRegex.test(value)?'':'Mobile Number is not Valid';
                $('#Mobile1').focusout(function(){
                  if(validMobileRegex.test(value)){ 
                    $('#Mobile1').css('border', '1px solid green')
                    $('#m1success').css('display','block')
                    $('#m1fail').css('display','none')
                    $('#m1error').css('display','none')
                  }
                  else{
                    $('#Mobile1').css('border', '1px solid red')
                    $('#m1fail').css('display','block')
                    $('#m1success').css('display','none')
                    $('#m1error').css('display','block')
                  }
              })
                break;
              case 'license_key':
              //  errors.license_key=validLicenseRegex.test(value)?'':'License Key is not Valid';
                $('#Licensekey').focusout(function(){
                  if(validLicenseRegex.test(value)){ 
                    $('#Licensekey').css('border', '1px solid green')
                    $('#lkeysuccess').css('display','block')
                    $('#lkeyfail').css('display','none')
                    $('#lkeyerror').css('display','none')
                  }
                  else{
                    $('#Licensekey').css('border', '1px solid red')
                    $('#lkeyfail').css('display','block')
                    $('#lkeysuccess').css('display','none')
                    $('#lkeyerror').css('display','block')
                  }
              })
                break;
              case 'zipcode':
              //  errors.zipcode= validZipcodeRegex.test(value)?'':'Zipcode is not Valid';
                $('#zipcode').focusout(function(){
                  if( validZipcodeRegex.test(value)){ 
                    $('#zipcode').css('border', '1px solid green')
                    $('#zcodesuccess').css('display','block')
                    $('#zcodefail').css('display','none')
                    $('#zcodeerror').css('display','none')
                  }
                  else{
                    $('#zipcode').css('border', '1px solid red')
                    $('#zcodefail').css('display','block')
                    $('#zcodesuccess').css('display','none')
                    $('#zcodeerror').css('display','block')
                  }
              })
                break;
              case 'city':
              //  errors.city=validCityRegex.test(value)?'':'Name shouldn\'t contain special characters!';
                $('#city').focusout(function(){
                  if(validCityRegex.test(value)){ 
                    $('#city').css('border', '1px solid green')
                    $('#citysuccess').css('display','block')
                    $('#cityfail').css('display','none')
                    $('#cityerror').css('display','none')
                  }
                  else{
                    $('#city').css('border', '1px solid red')
                    $('#cityfail').css('display','block')
                    $('#citysuccess').css('display','none')
                    $('#cityerror').css('display','block')
                  }
              })
                break;
            case 'address':
              // errors.address=validAddressRegex.test(value)?'':'Address is not Valid';
              $('#address').focusout(function(){
                if(validAddressRegex.test(value)){ 
                  $('#address').css('border', '1px solid green')
                  $('#addsuccess').css('display','block')
                  $('#addfail').css('display','none')
                  $('#adderror').css('display','none')
                  }
                else{
                  $('#address').css('border', '1px solid red')
                  $('#addfail').css('display','block')
                  $('#addsuccess').css('display','none')
                  $('#adderror').css('display','block')
                  }
                })
                   break;
            }






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
        
        if(validateform(this.state.errors)){   
          console.log("valid form") 
        axios.post('http://localhost:8000/client/', { ClientName, first_name, middle_name, last_name, email, mobile,  persion,  mobile1,  license_key,  address,  city,  state, zipcode, country })                   
            .then(function (response) {
                  //access the results here....           
                swal("success!", "Admin added", "success").then(setInterval(function(){window.location.reload();},1500));// alert
                console.log(response);// log
              })
              .catch(function (error) {
                console.log(error);
              });
            }
            else{
              console.log("Invalid Form")
            }    
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
            onCancel = () =>{
              this.setState({
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
              })
              axios.get(`http://localhost:8000/client/`)
              .then(res => {
                const client = res.data;
                this.setState({ client });           
              console.log(client)
              })
              $('#FirstName').css('border', '2px solid #288df0')
              $('#fnamesuccess').css('display','none')
              $('#fnamefail').css('display','none')
              $('#fnameerror').css('display','none')
              $('#MiddleName').css('border', '2px solid #288df0')
              $('#mdnamesuccess').css('display','none')
              $('#mdnamefail').css('display','none')
              $('#mdnameerror').css('display','none')
              $('#LastName').css('border', '2px solid #288df0')
              $('#lnamesuccess').css('display','none')
              $('#lnamefail').css('display','none')
              $('#lnameerror').css('display','none')
              $('#Email').css('border', '2px solid #288df0')
              $('#emailsuccess').css('display','none')
              $('#emailfail').css('display','none')
              $('#emailerror').css('display','none')
              $('#Mobile').css('border', '2px solid #288df0')
              $('#mobsuccess').css('display','none')
              $('#mobfail').css('display','none')
              $('#moberror').css('display','none')
              $('#persion').css('border', '2px solid #288df0')
              $('#persuccess').css('display','none')
              $('#perfail').css('display','none')
              $('#pererror').css('display','none')
              $('#Mobile1').css('border', '2px solid #288df0')
              $('#m1success').css('display','none')
              $('#m1fail').css('display','none')
              $('#m1error').css('display','none')
              $('#Licensekey').css('border', '2px solid #288df0')
              $('#lkeysuccess').css('display','none')
              $('#lkeyfail').css('display','none')
              $('#lkeyerror').css('display','none')
              $('#zipcode').css('border', '2px solid #288df0')
              $('#zcodesuccess').css('display','none')
              $('#zcodefail').css('display','none')
              $('#zcodeerror').css('display','none')
              $('#city').css('border', '2px solid #288df0')
              $('#citysuccess').css('display','none')
              $('#cityfail').css('display','none')
              $('#cityerror').css('display','none')
              $('#address').css('border', '2px solid #288df0')
              $('#addsuccess').css('display','none')
              $('#addfail').css('display','none')
              $('#adderror').css('display','none')
            }
    render(){
        const { ClientId, ClientName,clientNameError,errortext, first_name, middle_name, last_name, email, mobile,  persion,  mobile1,  license_key,  address,  city,  state, zipcode, country, errors } = this.state;
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
                                            <option value="ClientName" >ClientName</option>                                            
                                            
                                            { this.state.client.map(client =>
                                             <option key={client.id} value={ client.ClientName}>{client.ClientName}</option>)}
                                                  
                                        </Form.Control>

                                    </Col>
                                </Form.Group>
                               {/*{errors.first_name.length>0 && <span className="error">{errors.first_name}</span>}*/}
                               <span style={{display:"none"}} className="error" id="fnameerror">Name Shouldn't contain special characters!</span>
                                <i className="fa fa-check" id="fnamesuccess" style={{position:"relative",left:"93%",top:"4%", zIndex:"1", display:"none", color:"green"}}></i>
                                <i className="fa fa-times" id="fnamefail" style={{position:"relative",left:"93%",top:"4%", zIndex:"1", display:"none", color:"red"}}></i>
                                <CustomTextBox
                                    htFor="First Name" 
                                    style="col col-form-label"
                                    txtBoxLabel="First Name"
                                    txtBoxType="text"
                                    txtBoxID="FirstName"
                                    txtBoxPH="Enter The First Name"   
                                    txtBoxValue={first_name}                                          
                                    changeEvent={this.onChange}                                            
                                    txtBoxName="first_name"
                                />

                               {/*{errors.middle_name.length>0 && <span className="error">{errors.middle_name}</span>}*/}
                                <span style={{display:"none"}} className="error" id="mdnameerror">Name Shouldn't contain special characters!</span>
                                <i className="fa fa-check" id="mdnamesuccess" style={{position:"relative",left:"93%",top:"4%", zIndex:"1", display:"none", color:"green"}}></i>
                                <i className="fa fa-times" id="mdnamefail" style={{position:"relative",left:"93%",top:"4%", zIndex:"1", display:"none", color:"red"}}></i>  
                                <CustomTextBox
                                    htFor="Middle Name" 
                                    style="col col-form-label"
                                    txtBoxLabel="Middle Name"
                                    txtBoxType="text" 
                                    txtBoxID="MiddleName"
                                    txtBoxPH="Enter The Middle Name"      
                                    txtBoxValue={middle_name}                                      
                                    changeEvent={this.onChange}                                            
                                    txtBoxName="middle_name"
                                />

                                {/*{errors.last_name.length>0 && <span className="error">{errors.last_name}</span>}*/}
                                <span style={{display:"none"}} className="error" id="lnameerror">Name Shouldn't contain special characters!</span>
                                <i className="fa fa-check" id="lnamesuccess" style={{position:"relative",left:"93%",top:"4%", zIndex:"1", display:"none", color:"green"}}></i>
                                <i className="fa fa-times" id="lnamefail" style={{position:"relative",left:"93%",top:"4%", zIndex:"1", display:"none", color:"red"}}></i>
                                <CustomTextBox
                                    htFor="Last Name"
                                    style="col col-form-label"
                                    txtBoxLabel="Last Name"
                                    txtBoxType="text"
                                    txtBoxID="LastName"
                                    txtBoxPH="Enter The Last Name"   
                                    txtBoxValue={last_name}                                          
                                    changeEvent={this.onChange}                                            
                                    txtBoxName="last_name"
                                />
                                
                                {/*{errors.email.length>0 && <span className="error">{errors.email}</span>}*/}
                                <span style={{display:"none"}} className="error" id="emailerror">Email is not Valid!</span>
                                <i className="fa fa-check" id="emailsuccess" style={{position:"relative",left:"93%",top:"4%", zIndex:"1", display:"none", color:"green"}}></i>
                                <i className="fa fa-times" id="emailfail" style={{position:"relative",left:"93%",top:"4%", zIndex:"1", display:"none", color:"red"}}></i>
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
                                
                                {/*{errors.mobile.length>0 && <span className="error">{errors.mobile}</span>}*/}
                                <span style={{display:"none"}} className="error" id="moberror">Mobile number is not Valid!</span>
                                <i className="fa fa-check" id="mobsuccess" style={{position:"relative",left:"93%",top:"4%", zIndex:"1", display:"none", color:"green"}}></i>
                                <i className="fa fa-times" id="mobfail" style={{position:"relative",left:"93%",top:"4%", zIndex:"1", display:"none", color:"red"}}></i>
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
                                    
                                {/*{errors.persion.length>0 && <span className="error">{errors.persion}</span>}*/}
                                <span style={{display:"none"}} className="error" id="pererror">Name Shouldn't contain special characters!</span>
                                <i className="fa fa-check" id="persuccess" style={{position:"relative",left:"93%",top:"4%", zIndex:"1", display:"none", color:"green"}}></i>
                                <i className="fa fa-times" id="perfail" style={{position:"relative",left:"93%",top:"4%", zIndex:"1", display:"none", color:"red"}}></i>
                                <CustomTextBox
                                    htFor="contact person1" 
                                    style="col col-form-label"
                                    txtBoxLabel="Emergency contact person1"
                                    txtBoxType="text"
                                    txtBoxID="persion" 
                                    txtBoxPH="Enter The Emergency contact person1"
                                    txtBoxValue={persion}
                                    changeEvent={this.onChange} 
                                    txtBoxName="persion"
                                />
    
                                {/*{errors.mobile1.length>0 && <span className="error">{errors.mobile1}</span>}*/}
                                <span style={{display:"none"}} className="error" id="m1error">Mobile number is not Valid!</span>
                                <i className="fa fa-check" id="m1success" style={{position:"relative",left:"93%",top:"4%", zIndex:"1", display:"none", color:"green"}}></i>
                                <i className="fa fa-times" id="m1fail" style={{position:"relative",left:"93%",top:"4%", zIndex:"1", display:"none", color:"red"}}></i>
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
        
                                {/*{errors.license_key.length>0 && <span className="error">{errors.license_key}</span>}*/}
                                <span style={{display:"none"}} className="error" id="lkeyerror">License Key is not Valid!</span>
                                <i className="fa fa-check" id="lkeysuccess" style={{position:"relative",left:"93%",top:"4%", zIndex:"1", display:"none", color:"green"}}></i>
                                <i className="fa fa-times" id="lkeyfail" style={{position:"relative",left:"93%",top:"4%", zIndex:"1", display:"none", color:"red"}}></i>
                                <CustomTextBox
                                    htFor="License key" 
                                    style="col col-form-label"
                                    txtBoxLabel="License key"
                                    txtBoxType="text"  
                                    txtBoxID="Licensekey" 
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
                                      {ClientId === null ? <Form.Control as="select" custom className="selectStyle" id="select client" defaultValue={'COUNTRY'} name="country"  onChange={this.onChange} required>
                                            <option value="COUNTRY" disabled selected>Select Country</option>                                          
                                            <option value="USA">USA</option>
                                            {/* <option value="INDIA">INDIA</option> */}
                                        </Form.Control> 
                                        :
                                        <Form.Control as="select" custom className="selectStyle" id="select client" defaultValue={country} name="country"  onChange={this.onChange} required>
                                          <option value={country} disabled selected>{country}</option>
                                          <option value="USA">USA</option>
                                        </Form.Control>}  
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                <Form.Label htmlFor="select state" className="col col-form-label">Select State</Form.Label>
                                    <Col >
                                    {ClientId === null?    <Form.Control as="select" custom className="selectStyle" id="select state" defaultValue={'DEFAULT'} name="state"  onChange={this.onChange} required>
                                            <option value="DEFAULT" disabled>Select State</option>                                            
                                           <States options={optionObj}/>
                                           
                                        </Form.Control>
                                        :
                                         <Form.Control as="select" custom className="selectStyle" id="select state" defaultValue={state} name="state"  onChange={this.onChange} required>
                                            <option value="DEFAULT">{state}</option>
                                            <States options={optionObj}/>
                                        </Form.Control>}
                                    </Col>
                                </Form.Group>                                
                                
                                {/*{errors.city.length>0 && <span className="error">{errors.city}</span>}*/}
                                <span style={{display:"none"}} className="error" id="cityerror">City Name is not Valid!</span>
                                <i className="fa fa-check" id="citysuccess" style={{position:"relative",left:"93%",top:"5%", zIndex:"1", display:"none", color:"green"}}></i>
                                <i className="fa fa-times" id="cityfail" style={{position:"relative",left:"93%",top:"4%", zIndex:"1", display:"none", color:"red"}}></i>
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
                                
                                {/*{errors.zipcode.length>0 && <span className="error">{errors.zipcode}</span>}*/}
                                <span style={{display:"none"}} className="error" id="zcodeerror">Zipcode is not Valid!</span>
                                <i className="fa fa-check" id="zcodesuccess" style={{position:"relative",left:"93%",top:"5%", zIndex:"1", display:"none", color:"green"}}></i>
                                <i className="fa fa-times" id="zcodefail" style={{position:"relative",left:"93%",top:"4%", zIndex:"1", display:"none", color:"red"}}></i>
                                <CustomTextBox
                                    htFor="zip code" 
                                    style="col col-form-label"
                                    txtBoxLabel="zip code"
                                    txtBoxType="text"  
                                    txtBoxID="zipcode" 
                                    txtBoxPH="Enter The zip code"
                                    txtBoxValue={zipcode}                                         
                                    changeEvent={this.onChange}                                            
                                    txtBoxName="zipcode"
                                />
                            
                            {/*{errors.address.length>0 && <span className="error">{errors.address}</span>}*/}
                            <span style={{display:"none"}} className="error" id="adderror">Address is not Valid!</span>
                            <i className="fa fa-check" id="addsuccess" style={{position:"relative",left:"93%",top:"5%", zIndex:"1", display:"none", color:"green"}}></i>
                                <i className="fa fa-times" id="addfail" style={{position:"relative",left:"93%",top:"6%", zIndex:"1", display:"none", color:"red"}}></i>  
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
                                        <CustomButton  style="col btnBlue" BtnTxt="Add Client"disabledButton={this.state.ClientId!=null} ClickEvent={this.onSubmit} />
                                        <CustomButton  style="col btnBlue" BtnTxt="Update Client" disabledButton={this.state.ClientId==null}ClickEvent={this.onUpdate}/>    
                                        <CustomButton  style="col btnBlue" BtnTxt="Delete Client" disabledButton={this.state.ClientId==null}ClickEvent={this.onDelete}/>
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

export default ClientSignup;
