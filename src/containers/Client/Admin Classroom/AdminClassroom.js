import React,{Component} from 'react';
import {
    Container,
    Card,
    Form,
    Row,
    Col,
    Button
} from 'react-bootstrap';

import swal from 'sweetalert';
import axios from 'axios';
import CustomButton from '../../../components/Button/Button';
class AdminClassroom extends Component{
    constructor() {
        super();
    this.state = {
        Courses_Taught:'',
        Select_Teacher:'',
        Select_Students:'',
        teachers:[],
        students:[]
    }
}

    componentDidMount() {
       
        axios.get(`http://localhost:8000/teacher/`)
        .then(res => {
          const teachers = res.data;
          this.setState({ teachers });
          console.log(teachers);
        })
        axios.get(`http://localhost:8000/student/`)
        .then(res => {
          const students = res.data;
          this.setState({ students });
          console.log(students);
        })
    }
    onChange = (e) => {
        //to get the input based on name and value
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const {
            Courses_Taught,
            Select_Teacher,
            Select_Students
            } = this.state;

        axios.post('http://localhost:8000/classroom/', {  Courses_Taught, Select_Teacher, Select_Students})                   
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
        const { 
            Courses_Taught,
            Select_Teacher,
            Select_Students
         } = this.state;
        
        return(
            
            <>
    <Container  style={{marginTop: '50px'}}>
          
              <Card>                  
                    <nav class="nav justify-content-center" >
                        <p class="headTitle" >Admin Classroom Assignments</p>
                    </nav>                   
                    <Card.Body >
                        <Row class="row justify-content-center">                         
                            <Col sm={12} lg={4} >
                                <Form.Group as={Row}>
                                    <Form.Label for="inputtext3" class="col col-form-label">select teacher</Form.Label>
                                    <Col>
                                    <Form.Control as="select" custom className="selectStyle"   defaultValue={'DEFAULT'} name="Select_Teacher"  onChange={this.onChange} required>
                                    <option value="DEFAULT" disabled selected>select client</option>
                                        { this.state.teachers.map(teachers =>
                                             <option key={teachers.id} value={Teacher => teachers.First_Name}>{teachers.First_Name}</option>)}    
                                    </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} lg={4}>                                
                                <Form.Group as={Row}>
                                    <Form.Label for="inputtext3" class="col col-form-label">courses taught</Form.Label>
                                    <Col>
                                           
                                     <Form.Control as="select" custom className="selectStyle" id=">courses taught" name="Courses_Taught"  onChange={this.onChange} required>
                                    <option value="" disabled selected>courses taught</option>
                                    <option value="ACT" >ACT</option>
                                    <option value="SAT">SAT</option>

                                    </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} lg={4}>                                                                                                
                                <Form.Group as={Row}>
                                    <Form.Label for="inputtext3" class="col col-form-label">select students</Form.Label>
                                    <Col> 
                                    {/* { this.state.students.map(students =>
                                             <Form.Check type="checkbox"  key={students.id} class="form-check-input" name="Select_Students"  label={'students.First_Name'}  value={Student => students.First_Name}
                                        onChange={this.onChange}  />
                                    )}                    */}
                                        <Form.Check type="checkbox" class="form-check-input" name="Select_Students" id="" value="1" label="student 1" 
                                        onChange={this.onChange}  />
                                        <Form.Check type="checkbox" class="form-check-input" name="Select_Students" id="" value="2" label="student 2" 
                                        onChange={this.onChange} />
                                        <Form.Check type="checkbox" class="form-check-input" name="Select_Students" id="" value="3" label="student 3" 
                                        onChange={this.onChange} />                
                                    </Col>
                                </Form.Group>
                            </Col>                         
                        </Row>
                        <Row className="row justify-content-center">
                                          <CustomButton  style="col btnBlue" BtnTxt="Update Admin" ClickEvent={this.onSubmit}/> 
                                          <CustomButton  style="col btnBlue" BtnTxt="Cancel" />                         
                        </Row>
                    </Card.Body>
              </Card>         
      </Container> 
            </>
        )
    }
}

export default AdminClassroom;