import React,{Component} from 'react';
import {
    Container,
    Card,
    Form,
    Row,
    Col,
    Button
} from 'react-bootstrap';

class AdminClassroom extends Component{
    render(){
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
                                            <select class="selectStyle" id="inputGroupSelect01" required>
                                                <option selected disabled>select teacher</option>
                                                <option value="1">teacher 1</option>
                                                <option value="2">teacher 2</option>
                                                <option value="3">teacher 3</option>
                                              </select>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} lg={4}>                                
                                <Form.Group as={Row}>
                                    <Form.Label for="inputtext3" class="col col-form-label">courses taught</Form.Label>
                                    <Col>
                                            <select class="selectStyle" id="inputGroupSelect01" required>
                                                <option selected disabled>select teacher</option>
                                                <option value="1">ACT</option>
                                                <option value="2">SAT</option>
                                              </select>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} lg={4}>                                                                                                
                                <Form.Group as={Row}>
                                    <Form.Label for="inputtext3" class="col col-form-label">select students</Form.Label>
                                    <Col>                                          
                                        <Form.Check type="checkbox" class="form-check-input" name="" id="" value="1" label="student 1" />
                                        <Form.Check type="checkbox" class="form-check-input" name="" id="" value="2" label="student 2" />
                                        <Form.Check type="checkbox" class="form-check-input" name="" id="" value="3" label="student 3" />                
                                    </Col>
                                </Form.Group>
                            </Col>                         
                        </Row>
                        <Row className="row justify-content-center">
                            <Button sm={12} lg={4} className=" btnBlue">Update</Button>
                            <Button sm={12} lg={4} className=" btnBlue">Cancel</Button>
                        </Row>
                    </Card.Body>
              </Card>         
      </Container> 
            </>
        )
    }
}

export default AdminClassroom;