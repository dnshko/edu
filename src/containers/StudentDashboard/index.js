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
            Available_Test:'',
            showResults: true,
            quizs:[]
      }
    }
    
    componentDidMount() {
       
        axios.get(`http://localhost:8000/api/my-quizzes`)
        .then(res => {
          const quizs = res.data;
          this.setState({ quizs });
          console.log(quizs);
        })
        
    }
    onChange = (e) => {           
        this.setState({ [e.target.name]: e.target.value ,showResults : true});    
                   
}
    render(){
        const {showResults} = this.state;
        return(
                <>
    <Container  style={{marginTop: '50px'}}>          
              <Card>                  
                    <nav className="nav justify-content-center" >
                        <p className="headTitle" >Student Dashboard</p>
                    </nav>                   
                    <Card.Body >
                        <Row className="row justify-content-center" >                         
                            <Col lg={4} sm={12}>
                            <Form.Group as={Row}>
                                    <Form.Label for="inputtext3" class="col col-form-label">Teacher : Scott Tiger</Form.Label>

                                </Form.Group>
                            </Col>
                            <Col lg={4} sm={12}>
                            <Form.Group as={Row}>
                                    <Form.Label htmlFor="test to take" class="col col-form-label">test to take</Form.Label>
                                    <Col>
                                    
                                    <Form.Control as="select" custom className="selectStyle" id="test to take" name="Available_Test"  onChange={this.onChange} required>
                                                <option selected disabled>test to take</option>
                                                { this.state.quizs.map(quizs =>
                                             <option key={quizs.id} value={quiz => quizs.id}>{quizs.name}</option>
                                            
                                             )}  
                                     </Form.Control>
                                    </Col>
                                </Form.Group>                           
                            </Col>
                            <Col lg={4} sm={12}>
                            <Form.Group as={Row}>
                                    <Form.Label for="inputtext3" class="col col-form-label">view by</Form.Label>
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
                                   
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>11-10-19</td>
                                        <td>Real Teat</td>
                                        <td>Act test 1</td>
                                        <td>Na</td>
                                        <td>you can assign test-1</td>
                                        <td>
                                        { this.state.showResults ? <Link to="/quizapp">  <Button sm={12} lg={4} className=" btnBlue" style={{fontSize: "smaller"}}>Take Test</Button></Link> : null }
                                        </td>
                                      
                                        {/* <Link to="/quizapp">  <Button sm={12} lg={4} className=" btnBlue">Assign Test</Button></Link> */}

                                    </tr>
                                    <tr>
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
                                        
                                    </tr> <tr>
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