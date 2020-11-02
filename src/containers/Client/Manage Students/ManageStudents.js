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

class ManageStudents extends Component{
    constructor() {
        super();
    
        this.state = {
            ClientId: null,
            Select_Student: '',
            Student_First_Name: '',
            Student_Middle_Name: '',
            Student_Last_Name: '',
            Student_Email: '',
            Student_Mobile: '',
            Emergency_Contact_Person1: '',
            Emergency_Mobile1: '',
            Relationship_1: '',
            Emergency_Contact_Person2: '',
            Emergency_Mobile2:'',
            Relationship_2: '',
            Student_Address: '',
            City: '',
            State:'',
            Zip_Code:'',
            Country: '',
            gate_student: '',
            Current_School_Attending: '',
            School_District:'' ,
            Grade_Level: '',
            GAP:'' ,
            Additional_Comments: '',
            Enroll_Program:'' ,
            Assign_Teachers: '',
            Continuing_Student:'',
            Discount_Applied_Code:'',
            Exit_Program: '',
            Exit_Comments:'',
            students:[],           
            teachers:[]
      }
    }
    componentDidMount() {
       
          axios.get(`http://localhost:8000/student/`)
          .then(res => {
            const students = res.data;
            this.setState({ students });
            console.log(students);
          })
          
        axios.get(`http://localhost:8000/teacher/`)
        .then(res => {
          const teachers = res.data;
          this.setState({ teachers });
          console.log(teachers);
        })
      }
      
      getStudentsName = (students,student_name)=>{
        const getClientDeatilsWithName = (data) => {
      
          return equals(
            pathOr(
              {},
              [
                'Student_First_Name'
              ],
              data
            ),
            student_name
          )
              
        }
        return filter(getClientDeatilsWithName,students)
      }
     
    onChange = (e) => {

        if(equals(e.target.name,"Select_Student")){
          
         const filterData =  head(this.getStudentsName(this.state.students,e.target.value))
          console.log(filterData)
            this.setState({
                            ClientId: pathOr("",["id"],filterData),                          
                            Select_Student: pathOr("",["Select_Student"],filterData),
                            Student_First_Name: pathOr("",["Student_First_Name"],filterData),
                            Student_Middle_Name: pathOr("",["Student_Middle_Name"],filterData),
                            Student_Last_Name: pathOr("",["Student_Last_Name"],filterData),
                            Student_Email: pathOr("",["Student_Email"],filterData),
                            Student_Mobile: pathOr("",["Student_Mobile"],filterData),
                            Emergency_Contact_Person1: pathOr("",["Emergency_Contact_Person1"],filterData),
                            Emergency_Mobile1: pathOr("",["Emergency_Mobile1"],filterData),
                            Relationship_1: pathOr("",["Relationship_1"],filterData),
                            Emergency_Contact_Person2: pathOr("",["Emergency_Contact_Person2"],filterData),
                            Emergency_Mobile2:pathOr("",["Emergency_Mobile2"],filterData),
                            Relationship_2: pathOr("",["Relationship_2"],filterData),
                            Student_Address: pathOr("",["Student_Address"],filterData),
                            City: pathOr("",["City"],filterData),
                            State:pathOr("",["State"],filterData),
                            Zip_Code:pathOr("",["Zip_Code"],filterData),
                            Country: pathOr("",["Country"],filterData),
                            gate_student: pathOr("",["gate_student"],filterData),
                            Current_School_Attending: pathOr("",["Current_School_Attending"],filterData),
                            School_District: pathOr("",["School_District"],filterData),
                            Grade_Level: pathOr("",["Grade_Level"],filterData),
                            GAP:pathOr("",["GAP"],filterData),
                            Additional_Comments: pathOr("",["Additional_Comments"],filterData),
                            Enroll_Program:pathOr("",["Enroll_Program"],filterData),
                            Assign_Teachers: pathOr("",["Assign_Teachers"],filterData),
                            Continuing_Student:pathOr("",["Continuing_Student"],filterData),
                            Discount_Applied_Code:pathOr("",["Discount_Applied_Code"],filterData),
                            Exit_Program: pathOr("",["Exit_Program"],filterData),
                            Exit_Comments:pathOr("",["Exit_Comments"],filterData),
            })
            return
        }
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.value,'value')
    }

    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { 
            Select_Student,
            Student_First_Name,
            Student_Middle_Name,
            Student_Last_Name,
            Student_Email,
            Student_Mobile,
            Emergency_Contact_Person1,
            Emergency_Mobile1,
            Relationship_1,
            Emergency_Contact_Person2,
            Emergency_Mobile2,
            Relationship_2,
            Student_Address,
            City,
            State,
            Zip_Code,
            Country,
            gate_student,
            Current_School_Attending,
            School_District,
            Grade_Level,
            GAP,
            Additional_Comments,
            Enroll_Program,
            Assign_Teachers,
            Continuing_Student,
            Discount_Applied_Code,
            Exit_Program,
            Exit_Comments,
            } = this.state;

        axios.post('http://localhost:8000/student/', 
                    {             
                        Select_Student,
                        Student_First_Name,
                        Student_Middle_Name,
                        Student_Last_Name,
                        Student_Email,
                        Student_Mobile,
                        Emergency_Contact_Person1,
                        Emergency_Mobile1,
                        Relationship_1,
                        Emergency_Contact_Person2,
                        Emergency_Mobile2,
                        Relationship_2,
                        Student_Address,
                        City,
                        State,
                        Zip_Code,
                        Country,
                        gate_student,
                        Current_School_Attending,
                        School_District,
                        Grade_Level,
                        GAP,
                        Additional_Comments,
                        Enroll_Program,
                        Assign_Teachers,
                        Continuing_Student,
                        Discount_Applied_Code,
                        Exit_Program,
                        Exit_Comments,          
                    })                   
            .then(function (response) {
                  //access the results here....           
                swal("success!", "Student added", "success");// alert
                console.log(response);// log
              })
              .catch(function (error) {
                console.log(error);
              });
      }
      onUpdate =() =>{
        const { ClientId,
            Select_Student,
            Student_First_Name,
            Student_Middle_Name,
            Student_Last_Name,
            Student_Email,
            Student_Mobile,
            Emergency_Contact_Person1,
            Emergency_Mobile1,
            Relationship_1,
            Emergency_Contact_Person2,
            Emergency_Mobile2,
            Relationship_2,
            Student_Address,
            City,
            State,
            Zip_Code,
            Country,
            gate_student,
            Current_School_Attending,
            School_District,
            Grade_Level,
            GAP,
            Additional_Comments,
            Enroll_Program,
            Assign_Teachers,
            Continuing_Student,
            Discount_Applied_Code,
            Exit_Program,
            Exit_Comments,          } = this.state;

        axios.put('http://localhost:8000/student/'  + ClientId + '/', {
                         Select_Student,
                        Student_First_Name,
                        Student_Middle_Name,
                        Student_Last_Name,
                        Student_Email,
                        Student_Mobile,
                        Emergency_Contact_Person1,
                        Emergency_Mobile1,
                        Relationship_1,
                        Emergency_Contact_Person2,
                        Emergency_Mobile2,
                        Relationship_2,
                        Student_Address,
                        City,
                        State,
                        Zip_Code,
                        Country,
                        gate_student,
                        Current_School_Attending,
                        School_District,
                        Grade_Level,
                        GAP,
                        Additional_Comments,
                        Enroll_Program,
                        Assign_Teachers,
                        Continuing_Student,
                        Discount_Applied_Code,
                        Exit_Program,
                        Exit_Comments,          
        })  
        .then(function (response) {
              //access the results here....           
            swal("success!", "Admin Updated", "success");// alert
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
                    axios.delete('http://localhost:8000/student/'  + ClientId + '/') 
                  swal("Client Record Deleted!", {
                    icon: "success",
                  });
                } else {
                  swal("Client Record is safe!");
                }
              })
              .catch(function (error) {
                console.log(error);
               })
            }
    render(){
        const { 
            Select_Student,
            Student_First_Name,
            Student_Middle_Name,
            Student_Last_Name,
            Student_Email,
            Student_Mobile,
            Emergency_Contact_Person1,
            Emergency_Mobile1,
            Relationship_1,
            Emergency_Contact_Person2,
            Emergency_Mobile2,
            Relationship_2,
            Student_Address,
            City,
            State,
            Zip_Code,
            Country,
            gate_student,
            Current_School_Attending,
            School_District,
            Grade_Level,
            GAP,
            Additional_Comments,
            Enroll_Program,
            Assign_Teachers,
            Continuing_Student,
            Discount_Applied_Code,
            Exit_Program,
            Exit_Comments,
            } = this.state;
        return(
            <>
                
    <Container  style={{marginTop: '50px'}}>        
            <Card >
                <nav className="nav justify-content-center" >
                    <p className="headTitle">Administration Student Profile</p>
                </nav>
             <Form >   
                <Card.Body>
                    <Row className="row justify-content-center">
                        <Col lg={4} sm={12}>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="Student" className="col col-form-label">Select Student</Form.Label>
                                <Col >
                                
                                    <Form.Control as="select" custom className="selectStyle" id="Select Student" name="Select_Student"  onChange={this.onChange} required>
                                    <option value="" disabled selected>select Student</option>
                                        { this.state.students.map(students =>
                                             <option key={students.id} value={Student => students.Student_First_Name}>{students.Student_First_Name}</option>)}    
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="first name" className="col col-form-label">Student First Name</Form.Label>
                                <Col >
                                    <Form.Control type="text"  id="first name"
                                     placeholder="Student First Name"                                                                       
                                    value={Student_First_Name}                                          
                                    onChange={this.onChange} 
                                    name="Student_First_Name"
                                    required
                                     />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="Middle_Name" className="col col-form-label">Student Middle Name</Form.Label>
                                <Col >
                                    <Form.Control type="text"  id="Middle_Name"
                                     placeholder="Student Middle Name"
                                                                       
                                    value={Student_Middle_Name}                                          
                                    onChange={this.onChange} 
                                    name="Student_Middle_Name"
                                    required
                                     />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="last name" className="col col-form-label">Student Last Name </Form.Label>
                                <Col >
                                    <Form.Control type="text"  id="last name" 
                                    placeholder="Last Name" 
                                                                      
                                    value={Student_Last_Name}                                          
                                    onChange={this.onChange} 
                                    name="Student_Last_Name"
                                    required
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="email" className="col col-form-label">Student Email</Form.Label>
                                <Col >
                                    <Form.Control type="text"  id="email"
                                     placeholder="email" 
                                                                       
                                    value={Student_Email}                                          
                                    onChange={this.onChange} 
                                    name="Student_Email"
                                    required
                                     />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="mobile" className="col col-form-label">Student Mobile</Form.Label>
                                <Col >
                                    <Form.Control type="text"  id="mobile" 
                                    placeholder="mobile" 
                                                                      
                                    value={Student_Mobile}                                          
                                    onChange={this.onChange} 
                                    name="Student_Mobile"
                                    required
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="person1" className="col col-form-label">Emergency Contact Person1</Form.Label>
                                <Col>
                                    <Form.Control type="text" id="person1" 
                                    placeholder="contact"
                                                                      
                                    value={Emergency_Contact_Person1}                                          
                                    onChange={this.onChange} 
                                    name="Emergency_Contact_Person1"
                                    required
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} >
                                <Form.Label htmlFor="mobile1" className="col col-form-label">Emergency Mobile1</Form.Label>
                                <Col >
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
                                <Form.Label htmlFor="relationship" className="col col-form-label">Relationship 1</Form.Label>
                                <Col>
                                <Form.Control as="select" custom className="selectStyle" id="relationship" name="Relationship_1" onChange={this.onChange} required>
                                        <option value="Relationship_1"selected disabled>relationship 1</option>
                                        <option value="father1">father</option>
                                        <option value="mother">mother</option>
                                        <option value="relative ">relative </option>
                                        <option value="relative ">friend</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="person2" className="col col-form-label">Emergency Contact Person2</Form.Label>
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
                                <Form.Label htmlFor="mobile2" className="col col-form-label">Emergency Mobile2</Form.Label>
                                <Col>
                                    <Form.Control type="text" id="mobile2"
                                     placeholder="contact" 
                                                                       
                                    value={Emergency_Mobile2}                                          
                                    onChange={this.onChange} 
                                    name="Emergency_Mobile2"
                                    required
                                     />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="relationship" className="col col-form-label">Relationship 2</Form.Label>
                                <Col>
                                    <Form.Control as="select" custom className="selectStyle" id="relationship" name="Relationship_2" required defaultValue={'DEFAULT'} value={Relationship_2} onChange={this.onChange} >
                                        <option value="DEFAULT" selected disabled>Relationship 2</option>
                                        <option value="father1">father</option>
                                        <option value="mother">mother</option>
                                        <option value="relative ">relative </option>
                                        <option value="relative ">friend</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col sm={12} lg={4} >
                            <Form.Group as={Row} >
                                <Form.Label htmlFor="Student_Address" className="col col-form-label">Student Address</Form.Label>
                                <Col>
                                    <Form.Control type="text"  id="Student_Address" 
                                    placeholder=""                                                                                                           
                                    value={Student_Address}                                          
                                    onChange={this.onChange} 
                                    name="Student_Address"
                                    required
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} >
                                <Form.Label htmlFor="city" className="col col-form-label">City</Form.Label>
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
                                <Form.Label htmlFor="state" className="col col-form-label">State</Form.Label>
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
                                <Form.Label htmlFor="zip code" className="col col-form-label">Zip code</Form.Label>
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
                                <Form.Label htmlFor="country" className="col col-form-label">Country</Form.Label>
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
                                <Form.Label htmlFor="gate student" className="col col-form-label"></Form.Label>
                                <Col>
                                    <Form.Check type="checkbox" className="form-check-input"  id="gate student"
                                         label="gate student" value="gate_student" name="gate_student" onChange={this.onChange}
                                         />
                                </Col>
                            </Form.Group>
                            <Form as={Row}>
                                <label htmlFor="school attending" className="col col-form-label">Current School Attending</label>
                                <Col>
                                    <Form.Control type="text" className="form-control" id="school attending" 
                                    placeholder="" 
                                                                      
                                    value={Current_School_Attending}                                          
                                    onChange={this.onChange} 
                                    name="Current_School_Attending"
                                    required
                                    />
                                </Col>
                            </Form>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="schools" className="col col-form-label"></Form.Label>
                                <Col>
                                    <Form.Check type="checkbox" className="form-check-input"  id="schools"
                                         label="academy/magnet/cbse schools" 
                                         name=""
                                        
                                        />
                                 </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="district" className="col col-form-label">School District</Form.Label>
                                <Col>
                                    <Form.Control type="text" className="form-control" id="district"
                                     placeholder=""
                                                                       
                                    value={School_District}                                          
                                    onChange={this.onChange} 
                                    name="School_District"
                                    required
                                     />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="level" className="col col-form-label">Grade Level</Form.Label>
                                <Col>
                                    <Form.Control type="text" className="form-control" id="level"
                                     placeholder="" 
                                                                       
                                    value={Grade_Level}                                          
                                    onChange={this.onChange} 
                                    name="Grade_Level"
                                    required
                                     />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="GAP" className="col col-form-label">GAP</Form.Label>
                                <Col>
                                    <Form.Control type="text" className="form-control" id="GAP" 
                                    placeholder=""
                                                                      
                                    value={GAP}                                          
                                    onChange={this.onChange} 
                                    name="GAP"
                                    required
                                      />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="additional comments" className="col col-form-label">Additional Comments</Form.Label>
                                <Col >
                                    <Form.Control type="text" className="form-control" id="additional comments"
                                     placeholder=""
                                                                       
                                    value={Additional_Comments}                                          
                                    onChange={this.onChange} 
                                    name="Additional_Comments"
                                    required
                                     />
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col lg={4} sm={12}>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="program" className="col col-form-label">Enroll Program</Form.Label>
                                <Col>
                                    <Form.Check type="checkbox" className="form-check-input" name="" id="" onChange={this.onChange} name="Enroll_Program"
                                        value="ACT" label="ACT" /><br />
                                    <Form.Check type="checkbox" className="form-check-input" name="" id="" onChange={this.onChange} name="Enroll_Program"
                                        value="SAT" label="SAT" /><br />
                                    <Form.Check type="checkbox" className="form-check-input" id=""  label="private lessons" name="Enroll_Program" value="private lessons" onChange={this.onChange}
                                    /><br/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="inputtext3" className="col col-form-label">Aign Teachers</Form.Label>
                                <Col>
                                <Form.Control as="select" custom className="selectStyle" id="Select Teacher Student" name="Assign_Teachers"  onChange={this.onChange} required>
                                    <option value="" disabled selected>select client</option>
                                        { this.state.teachers.map(teachers =>
                                             <option key={teachers.id} value={Teacher => teachers.First_Name}>{teachers.First_Name}</option>)}    
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="continuing student" className="col col-form-label">Continuing Student</Form.Label>
                                <Col>
                                    <Form.Control as="select" custom className="selectStyle" id="continuing student" name="Continuing_Student" value={Continuing_Student} onChange={this.onChange} required>
                                        <option selected disabled>continuing student</option>
                                        <option value="yes">yes</option>
                                        <option value="no">no</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="applied code" className="col col-form-label">Discount Applied Code</Form.Label>
                                <Col>
                                    <Form.Control as="select" custom className="selectStyle" id="applied code" name="Discount_Applied_Code" value={Discount_Applied_Code} onChange={this.onChange} required>
                                        <option selected>D0 - None</option>
                                        <option value="contin">D1 - contin</option>
                                        <option value="vetera">D2 - vetera</option>
                                        <option value="physic">D3 - physic</option>
                                        <option value="rural">D4 - rural</option>
                                        <option value="other">D5 - other</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="program" className="col col-form-label">Exit Program</Form.Label>
                                <Col>
                                    <Form.Check type="checkbox"  name="" id=""  value="ACT" label="ACT" name="Exit_Program" onChange={this.onChange} />
                                    <Form.Check type="checkbox"  name="" id="" value="SAT" label="SAT" name="Exit_Program" onChange={this.onChange} />
                                    <Form.Check  type="checkbox"  name="" id="" value="private lessons" label="private lessons" name="Exit_Program"  onChange={this.onChange} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="comments" className="col col-form-label">Exit Comments</Form.Label>
                                <Col>
                                    <Form.Control type="text"  id="comments" 
                                    placeholder=""  
                                                                      
                                    value={Exit_Comments}                                          
                                    onChange={this.onChange} 
                                    name="Exit_Comments"
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

export default ManageStudents;