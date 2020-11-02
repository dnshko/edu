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

class  ManageTeachers  extends Component{
    constructor() {
        super();
    
        this.state = {
            ClientId: null,
            Select_Teacher: '',
            Prefix: '',
            First_Name: '',
            Middle_Name: '',
            Last_Name: '',
            Email: '',
            Mobile: '',
            Emergency_Contact_Person1: '',
            Emergency_Mobile1: '',
            Relationship_1: '',
            Emergency_Contact_Person2:'',
            Emergency_Mobile2:'' ,
            Relationship_2: '',
            Address: '',
            City:'' ,
            State:'' ,
            Zip_Code: '',
            Country: '',
            School_District: '',
            Currently_Teaching: '',
            Ap_Classess: '',
            Notes_Comments: '',
            High_Degree_Completed: '',
            Grade_Level: '',
            Speciality:'',
            teachers:[]
      }
    }
    
    componentDidMount() {
       
        axios.get(`http://localhost:8000/teacher/`)
        .then(res => {
          const teachers = res.data;
          this.setState({ teachers });
          console.log(teachers);
        })
    }
    
    getTeachersName = (teachers,teacher_name)=>{
      const getClientDeatilsWithName = (data) => {
    
        return equals(
          pathOr(
            {},
            [
              'First_Name'
            ],
            data
          ),
          teacher_name
        )
            
      }
      return filter(getClientDeatilsWithName,teachers)
    }
   
  onChange = (e) => {

      if(equals(e.target.name,"Select_Teacher")){
        
       const filterData =  head(this.getTeachersName(this.state.teachers,e.target.value))
        console.log(filterData)
          this.setState({
                          ClientId: pathOr("",["id"],filterData),
                          Select_Teacher: pathOr("",["Select_Teacher"],filterData),
                          Prefix: pathOr("",["Prefix"],filterData),
                          Middle_Name: pathOr("",["Middle_Name"],filterData),
                          Last_Name: pathOr("",["Last_Name"],filterData),
                          Email: pathOr("",["Email"],filterData),
                          Mobile: pathOr("",["Mobile"],filterData),
                          Emergency_Contact_Person1: pathOr("",["Emergency_Contact_Person1"],filterData),
                          Emergency_Mobile1: pathOr("",["Emergency_Mobile1"],filterData),
                          Relationship_1: pathOr("",["Relationship_1"],filterData),
                          Emergency_Contact_Person2:pathOr("",["Emergency_Contact_Person2"],filterData),
                          Emergency_Mobile2:pathOr("",["Emergency_Mobile2"],filterData),
                          Relationship_2: pathOr("",["Relationship_2"],filterData),
                          Address: pathOr("",["Address"],filterData),
                          City:pathOr("",["City"],filterData),
                          State:pathOr("",["State"],filterData),
                          Zip_Code: pathOr("",["Zip_Code"],filterData),
                          Country: pathOr("",["Country"],filterData),
                          School_District: pathOr("",["School_District"],filterData),
                          Currently_Teaching: pathOr("",["Currently_Teaching"],filterData),
                          Ap_Classess: pathOr("",["Ap_Classess"],filterData),
                          Notes_Comments: pathOr("",["Notes_Comments"],filterData),
                          High_Degree_Completed: pathOr("",["High_Degree_Completed"],filterData),
                          Grade_Level: pathOr("",["Grade_Level"],filterData),
                          Speciality:pathOr("",["Speciality"],filterData)                         
                          
          })
          return
      }
      this.setState({ [e.target.name]: e.target.value });
      console.log(e.target.value,'value')
  }

    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { Select_Teacher,Prefix,First_Name,Middle_Name,Last_Name,Email,Mobile,Emergency_Contact_Person1,Emergency_Mobile1,Relationship_1,
                Emergency_Contact_Person2,Emergency_Mobile2,Relationship_2,Address,City,State,Zip_Code,Country,School_District,Currently_Teaching,Ap_Classess,
                Notes_Comments,High_Degree_Completed,Grade_Level,Speciality            
            } = this.state;

        axios.post('http://localhost:8000/teacher/', 
                    {               Select_Teacher,Prefix,First_Name,Middle_Name,Last_Name,Email,Mobile,Emergency_Contact_Person1,Emergency_Mobile1,Relationship_1,
                                    Emergency_Contact_Person2,Emergency_Mobile2,Relationship_2,Address,City,State,Zip_Code,Country,School_District,Currently_Teaching,Ap_Classess,
                                    Notes_Comments,High_Degree_Completed,Grade_Level,Speciality            
                    })                   
            .then(function (response) {
                  //access the results here....           
                swal("success!", "Teacher added", "success");// alert
                console.log(response);// log
              })
              .catch(function (error) {
                console.log(error);
              });
      }
    render(){
        const { Select_Teacher,Prefix,First_Name,Middle_Name,Last_Name,Email,Mobile,Emergency_Contact_Person1,Emergency_Mobile1,Relationship_1, Emergency_Contact_Person2,Emergency_Mobile2,Relationship_2,Address,City,State,Zip_Code,Country,School_District,Currently_Teaching,Ap_Classess, Notes_Comments,High_Degree_Completed,Grade_Level,Speciality } = this.state;
        return(
                <>
                    
    <Container  style={{marginTop: '50px'}}>       
            <Card >
                <nav class="nav justify-content-center"
                    style={{backgroundColor: '#034BB7', borderRadius: '10px 10px 0px 0px'}}>
                    <p class="headTitle">Administration Teacher Profile</p>
                </nav>
                <Form >
                <Card.Body class="card-body">
                    <Row class="row justify-content-center">
                        <Col lg={4} sm={12}>
                            <Form.Group as={Row}>
                                <Form.Label htmlfor="Select_Teacher" class="col col-form-label">select teacher</Form.Label>
                                <Col>
                                    <Form.Control as="select" custom className="selectStyle" id="Select Teacher Student" name="Select_Teacher"  onChange={this.onChange} required>
                                    <option value="" disabled selected>select Teacher</option>
                                        { this.state.teachers.map(teachers =>
                                             <option key={teachers.id} value={Teacher => teachers.First_Name}>{teachers.First_Name}</option>)}    
                                    </Form.Control>
                                   
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="prefix" class="col col-form-label">prefix</Form.Label>
                                <Col >
                                    <select class="selectStyle" id="prefix">
                                        <option selected disabled>prefix</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="First_Name" class="col col-form-label">First Name</Form.Label>
                                <Col>
                                    <Form.Control type="text"  id="First_Name" 
                                    placeholder="First Name"                                     
                                    value={First_Name}                                          
                                    onChange={this.onChange} 
                                    name="First_Name"
                                    required
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label for="Middle Name" class="col col-form-label">Middle Name</Form.Label>
                                <Col>
                                    <Form.Control type="text"  id="Middle Name" 
                                    placeholder="Middle Name"
                                     
                                    value={Middle_Name}                                          
                                    onChange={this.onChange} 
                                    name="Middle_Name"
                                    required
                                     />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label for="Last Name" class="col col-form-label">Last Name</Form.Label>
                                <Col>
                                    <Form.Control type="text"  id="Last Name"
                                     placeholder="Last Name"
                                      
                                     value={Last_Name}                                          
                                     onChange={this.onChange} 
                                     name="Last_Name"
                                     required
                                      />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label for="email" class="col col-form-label">Email</Form.Label>
                                <Col>
                                    <Form.Control type="text" id="email"
                                     placeholder="email"                                     
                                     value={Email}                                          
                                     onChange={this.onChange} 
                                     name="Email"
                                     required
                                      />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label for="mobile" class="col col-form-label">Mobile</Form.Label>
                                <Col>
                                    <Form.Control type="text"  id="mobile"
                                     placeholder="mobile"
                                      
                                     value={Mobile}                                          
                                     onChange={this.onChange} 
                                     name="Mobile"
                                     required
                                     />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label for="person1" class="col col-form-label">Emergency Contact Person1</Form.Label>
                                <Col>
                                    <Form.Control type="text"  id="person1" 
                                    placeholder="contact"
                                    
                                    value={Emergency_Contact_Person1}                                          
                                    onChange={this.onChange} 
                                    name="Emergency_Contact_Person1"
                                    required
                                     />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label for="mobile1" class="col col-form-label">Emergency Mobile1</Form.Label>
                                <Col>
                                    <Form.Control type="text"  id="mobile1" 
                                    placeholder="contact"                                     
                                    value={Emergency_Mobile1}                                          
                                    onChange={this.onChange} 
                                    name="Emergency_Mobile1"
                                    required
                                     />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label for="relationship" class="col col-form-label">Relationship 1</Form.Label>
                                <Col>
                                    <select class="selectStyle" id="inputGroupSelect01">
                                        <option selected disabled>Relationship 1</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label for="person2" class="col col-form-label">Emergency Contact Person2</Form.Label>
                                <Col>
                                    <Form.Control type="text"  id="person2"
                                     placeholder="contact"                                       
                                     value={Emergency_Contact_Person2}                                          
                                     onChange={this.onChange} 
                                     name="Emergency_Contact_Person2"
                                     required
                                     />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label for="mobile2" class="col col-form-label">Emergency Mobile2</Form.Label>
                                <Col>
                                    <Form.Control type="text"  id="mobile2"
                                     placeholder="contact"                                      
                                     value={Emergency_Mobile2}                                          
                                     onChange={this.onChange} 
                                     name="Emergency_Mobile2"
                                     required
                                      />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label for="relationship 2" class="col col-form-label">Relationship 2</Form.Label>
                                <Col>
                                    <select class="selectStyle" id="relationship 2">
                                        <option selected disabled>relationship 2</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col sm={12} lg={4} >
                            <Form.Group as={Row}>
                                <Form.Label for="address" class="col col-form-label">address</Form.Label>
                                <Col>
                                    <Form.Control type="text"  id="address"
                                     placeholder=""                                      
                                     value={Address}                                          
                                     onChange={this.onChange} 
                                     name="Address"
                                     required
                                     />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label for="city" class="col col-form-label">city</Form.Label>
                                <Col>
                                    <Form.Control type="text"  id="city"
                                     placeholder=""                                     
                                     value={City}                                          
                                     onChange={this.onChange} 
                                     name="City"
                                     required
                                      />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label for="state" class="col col-form-label">state</Form.Label>
                                <Col>
                                    <Form.Control type="text"  id="state"
                                     placeholder=""
                                      
                                     value={State}                                          
                                     onChange={this.onChange} 
                                     name="State"
                                     required
                                      />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label for="zip code" class="col col-form-label">zip code</Form.Label>
                                <Col>
                                    <Form.Control type="text"  id="zip code" 
                                    placeholder="" 
                                     
                                    value={Zip_Code}                                          
                                    onChange={this.onChange} 
                                    name="Zip_Code"
                                    required
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label for="country" class="col col-form-label">country</Form.Label>
                                <Col>
                                    <Form.Control type="text"  id="country" 
                                    placeholder=""
                                     
                                    value={Country}                                          
                                    onChange={this.onChange} 
                                    name="Country"
                                    required
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label for="school district" class="col col-form-label">school district</Form.Label>
                                <Col>
                                    <Form.Control type="text"  id="school district"
                                 placeholder=""
                                  
                                 value={School_District}                                          
                                 onChange={this.onChange} 
                                 name="School_District"
                                 required
                                  />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label for="currently teaching" class="col col-form-label">currently teaching</Form.Label>
                                <Col>
                                    <Form.Check type="checkbox" class="form-check-input" name="" id=""
                                        value="checkedValue" label="academy / magnet / cbse schools"                                         
                                        value={Currently_Teaching}                                          
                                        onChange={this.onChange} 
                                        name="Currently_Teaching"
                                        required
                                        />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label for="ap classess" class="col col-form-label">ap classess</Form.Label>
                                <Col>
                                    <Form.Control type="text"  id="ap classess" 
                                    placeholder=""                                     
                                    value={Ap_Classess}                                          
                                    onChange={this.onChange} 
                                    name="Ap_Classess"
                                    required
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label for="notes" class="col col-form-label">notes/comments</Form.Label>
                                <Col>
                                    <Form.Control type="text"  id="notes" 
                                    placeholder=""                                      
                                    value={Notes_Comments}                                          
                                    onChange={this.onChange} 
                                    name="Notes_Comments"
                                    required
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label for="high degree" class="col col-form-label">high degree completed</Form.Label>
                                <Col>
                                    <Form.Check type="checkbox" class="form-check-input" name="" id=""
                                        value="1" label="undergraduate" />
                                    <Form.Check type="checkbox" class="form-check-input" name="" id=""
                                        value="2" label="master" />
                                    <Form.Check type="checkbox" class="form-check-input" name="" id=""
                                        value="3" label="doctorate" />
                                    <Form.Check type="checkbox" class="form-check-input" name="" id="" 
                                        value="3" label="credentials" />
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col sm={12} lg={4}>
                            <Form.Group as={Row}>
                                <Form.Label for="inputtext3" class="col col-form-label">grade level</Form.Label>
                                <Col>
                                    <Form.Check type="checkbox" class="form-check-input" name="" id=""
                                        value="1" label="freshman" />
                                    <Form.Check type="checkbox" class="form-check-input" name="" id=""
                                        value="2" label="sophomore" /> 
                                    <Form.Check type="checkbox" class="form-check-input" name="" id=""
                                        value="3" label="junior" />
                                    <Form.Check type="checkbox" class="form-check-input" name="" id=""
                                        value="3" label="senior" />
                                    <Form.Check type="checkbox" class="form-check-input" name="" id="" 
                                        value="3" label="college level" />
                                    <Form.Check type="checkbox" class="form-check-input" name="" id="" 
                                        value="3" label="above all" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label for="speciality" class="col col-form-label">speciality</Form.Label>
                                <Col>
                                    <Form.Check type="checkbox" class="form-check-input" name="" id=""
                                        value="1" label="english" />
                                    <Form.Check type="checkbox" class="form-check-input" name="" id=""
                                        value="2" label="math" />
                                    <Form.Check type="checkbox" class="form-check-input" name="" id="" 
                                        value="3" label="science all" />
                                    <Form.Check type="checkbox" class="form-check-input" name="" id=""
                                        value="3" label="physics" />
                                    <Form.Check type="checkbox" class="form-check-input" name="" id=""
                                        value="3" label="chemistry" />
                                    <Form.Check type="checkbox" class="form-check-input" name="" id=""
                                        value="3" label="biology/zoology" />
                                    <Form.Check type="checkbox" class="form-check-input" name="" id="" 
                                        value="3" label="1:1 lesson" />
                                    <Form.Check type="checkbox" class="form-check-input" name="" id=""
                                        value="3" label="above all" />
                                    <Form.Check type="checkbox" class="form-check-input" name="" id=""
                                        value="3" label="group lesson" />
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
                </Form> </Card>       
    </Container>
                </>
        )
    }
}

export default ManageTeachers;