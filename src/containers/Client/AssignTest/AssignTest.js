import React,{Component} from 'react';
import {
    Container,
    Card,
    Form,
    Row,
    Col,
    Button,
    Table
} from 'react-bootstrap';
import {
    Link,
} from 'react-router-dom';

import axios from 'axios';
class AssignTest extends Component{
    constructor() {
        super();
    
        this.state = {  
            students:[]
      }
    }
    
    componentDidMount() {
       
        axios.get(`http://localhost:8000/student/`)
        .then(res => {
          const students = res.data;
          this.setState({ students });
          console.log(students);
        })
        
    }
    render(){
        return(
                <>
    <Container  style={{marginTop: '50px'}}>          
              <Card>                  
                    <nav className="nav justify-content-center" >
                        <p className="headTitle" >Admin dashboard</p>
                    </nav>                   
                    <Card.Body >
                        <Row className="row justify-content-center" >                         
                            <Col lg={3} sm={12}>
                            <Form.Group as={Row}>
                                    <Form.Label for="inputtext3" class="col col-form-label">Select Student</Form.Label>
                                    <Col>

                                    <Form.Control as="select" custom className="selectStyle" id="Select Student" name="Select_Student"  onChange={this.onChange} required>
                                    <option value="" disabled selected>select Student</option>
                                        { this.state.students.map(students =>
                                             <option key={students.id} value={Student => students.Student_First_Name}>{students.Student_First_Name}</option>)}    
                                    </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col lg={3} sm={12}>
                            <Form.Group as={Row}>
                                    <Form.Label for="inputtext3" class="col col-form-label">Select Program</Form.Label>
                                    <Col>
                                            <select class="selectStyle" id="inputGroupSelect01" required>
                                                <option selected disabled>Select Program</option>
                                                <option value="1">ACT</option>
                                                <option value="2">SAT</option>
                                              </select>
                                    </Col>
                                </Form.Group>                           
                            </Col>
                            <Col lg={3} sm={12}>
                            <Form.Group as={Row}>
                                    <Form.Label for="inputtext3" class="col col-form-label">Available Test</Form.Label>
                                    <Col>
                                            <select class="selectStyle" id="inputGroupSelect01" required>
                                                <option selected disabled>Available Test</option>
                                                <option value="1">test 1</option>
                                                <option value="2">test 2</option>
                                                <option value="3">test 3</option>
                                              </select>
                                    </Col>
                                </Form.Group>                            
                            </Col>
                            <Col lg={3} sm={12}>
                            <Form.Group as={Row}>
                                    <Form.Label for="inputtext3" class="col col-form-label">View By</Form.Label>
                                    <Col>
                                            <select class="selectStyle" id="inputGroupSelect01" required>
                                                <option selected disabled>View By</option>
                                                <option value="1">test 1</option>
                                                <option value="2">test 2</option>
                                                <option value="3">test 3</option>
                                              </select>
                                    </Col>
                                </Form.Group>                           
                            </Col>
                        </Row>                        
                        <Row className="row justify-content-center">                         
                           <Col lg={12} sm={12} style={{overflow : 'auto'}}>
                           <Table striped bordered hover >
                                <thead>
                                    <tr>
                                    <th>date</th>
                                    <th>test type</th>
                                    <th>ACT test</th>
                                    <th>Prep test</th>
                                    <th>comments</th>
                                    <th>scores and answers</th>
                                    <th>admin actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>11-10-19</td>
                                        <td>Real Teat</td>
                                        <td>Act test 1</td>
                                        <td>Na</td>
                                        <td>you can assign test-1</td>
                                        <td></td>
                                        <td>
                                        <Link to="/quizapp">  <Button sm={12} lg={4} className=" btnBlue">Assign Test</Button></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr> <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr> <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table> 
                           </Col>                    
                        </Row>
                    </Card.Body>
              </Card>         
      </Container> 
            </>
        )
    }
}

export default AssignTest;