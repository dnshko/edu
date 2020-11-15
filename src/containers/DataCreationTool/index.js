import React,{Component} from 'react';
import {
    Container,
    Card,
    Form,
    Row,
    Col,
    Button
} from 'react-bootstrap';


export default class DataCT extends Component {

    render() {
        return (
            <div>
                     
    <Container  style={{marginTop: '50px'}}>        
            <Card >
                <nav className="nav justify-content-center" >
                    <p className="headTitle">Data Creation Tool</p>
                </nav>
             <Form >   
                <Card.Body>
                    <Row className="row justify-content-center">
                        <Col lg={3} sm={12}>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="Test Name" className="col col-form-label">Test Name </Form.Label>
                                <Col >
                                    <Form.Control type="text"  id="Test Name" 
                                    placeholder="Test Name" 
                                    name="Test Name"
                                    required
                                    />
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col lg={3} sm={12}>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="Test Desc" className="col col-form-label">Test Desc</Form.Label>
                                <Col >
                                    <Form.Control type="text"  id="Test Desc" 
                                    placeholder="Test Desc" 
                                    name="Test Desc"
                                    required
                                    />
                                </Col>
                            </Form.Group>
                        </Col>  
                        <Col lg={3} sm={12}>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="Section" className="col col-form-label">Section</Form.Label>
                                <Col>
                                    <Form.Control as="select" custom className="selectStyle" id="Section" name="Section" onChange={this.onChange} required>
                                        <option value="Section"selected disabled>Section</option>
                                        <option value="math">math</option>
                                        <option value="reading">reading</option>
                                        <option value="science ">science </option>
                                        <option value="writing ">writing</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                        </Col>  
                        <Col lg={3} sm={12}>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="Answer Type" className="col col-form-label">Answer Type</Form.Label>
                                <Col>
                                    <Form.Control as="select" custom className="selectStyle" id="Answer Type" name="Answer Type" onChange={this.onChange} required>
                                        <option value="Answer Type"selected disabled>Answer Type</option>
                                        <option value="A - H">A - H</option>
                                        <option value="E - H">E - H</option>
                                        <option value="i - iv">i - iv </option>
                                        <option value="1 - 4">1 - 4</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                        </Col>       
                    </Row>
                    {/* row end */}
                    <Row className="row justify-content-center">
                            <Col lg={4} sm={12}>
                                <Form.Group as={Row}>
                                    <Form.Label htmlFor="Test Type" className="col col-form-label">Test Type</Form.Label>
                                    <Col>
                                        <Form.Control as="select" custom className="selectStyle" id="Test Type" name="Test Type" onChange={this.onChange} required>
                                            <option value="Test Type"selected disabled>Test Type</option>
                                            <option value="ACT">ACT</option>
                                            <option value="SAT">SAT</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col lg={4} sm={12}>
                                <Form.Group as={Row}>
                                    <Form.Label htmlFor="section duration" className="col col-form-label">section duration</Form.Label>
                                    <Col>
                                        <Form.Control as="select" custom className="selectStyle" id="section duration" name="section duration" onChange={this.onChange} required>
                                            <option value="section duration"selected disabled>section duration</option>
                                            <option value="45 mins">45 mins</option>
                                            <option value="30 mins">30 mins</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Col>  
                            <Col lg={4} sm={12}>
                                <Form.Group as={Row}>
                                    <Form.Label htmlFor="question type" className="col col-form-label">question type</Form.Label>
                                    <Col>
                                        <Form.Control as="select" custom className="selectStyle" id="question type" name="question type" onChange={this.onChange} required>
                                            <option value="question type"selected disabled>question type</option>
                                            <option value="multiple choice">multiple choice</option>
                                            <option value="check boxes">check boxes</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Col>  
                    </Row>
                    {/* row end */}
                    <Row className="row justify-content-center">
                            <Col lg={4} sm={12}>
                                <Form.Group as={Row}>
                                    <Form.Label htmlFor="Question number" className="col col-form-label">Question number</Form.Label>
                                    <Col>
                                        <Form.Control as="select" custom className="selectStyle" id="Question number" name="Question number" onChange={this.onChange} required>
                                            <option value="Question number"selected disabled>Question number</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col lg={4} sm={12}>
                                <Form.Group as={Row}>
                                    <Form.Label htmlFor="question complexity" className="col col-form-label">question complexity</Form.Label>
                                    <Col>
                                        <Form.Control as="select" custom className="selectStyle" id="question complexity" name="question complexity" onChange={this.onChange} required>
                                            <option value="question complexity"selected disabled>question complexity</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Col>   
                    </Row>
                    {/* row end */}
                    <Row className="row">
                        <Col lg={12} sm={12}>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="Test Name" className="col col-form-label">Test Name </Form.Label>
                                <Col >
                                    <Form.Control type="text"  id="Test Name" 
                                    placeholder="Test Name" 
                                    name="Test Name"
                                    required
                                    />
                                </Col>
                            </Form.Group>
                        </Col>     
                    </Row>
                    {/* row end */}
                    <Row className="row">
                        <Col lg={12} sm={12}>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="Test Name" className="col col-form-label">Test Name </Form.Label>
                                <Col >
                                    <Form.Control type="text"  id="Test Name" 
                                    placeholder="Test Name" 
                                    name="Test Name"
                                    required
                                    />
                                </Col>
                            </Form.Group>
                        </Col>     
                    </Row>
                    {/* row end */}
                    <Row className="row">
                            <Col lg={4} sm={12}>
                                <Form.Group as={Row}>
                                    <Form.Label htmlFor="question image" className="col col-form-label">question image</Form.Label>
                                    <Col>
                                        <Form.Control as="select" custom className="selectStyle" id="question image" name="question image" onChange={this.onChange} required>
                                            <option value="question image"selected disabled>question image</option>
                                            <option value="image 1">image 1</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Col>   
                    </Row>
                    {/* row end */}
                    <Row className="row justify-content-center">
                    <Col lg={3} sm={12}>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="Answer1 text " className="col col-form-label">Answer1 text </Form.Label>
                                <Col >
                                    <Form.Control type="text"  id="Answer1 text " 
                                    placeholder="Answer1 text" 
                                    name="Answer1 text "
                                    required
                                    />
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col lg={3} sm={12}>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="Answer2 text" className="col col-form-label">Answer2 text</Form.Label>
                                <Col >
                                    <Form.Control type="text"  id="Answer2 text" 
                                    placeholder="Answer2 text" 
                                    name="Answer2 text"
                                    required
                                    />
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col lg={3} sm={12}>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="Answer3 text" className="col col-form-label">Answer3 text</Form.Label>
                                <Col >
                                    <Form.Control type="text"  id="Answer3 text" 
                                    placeholder="Answer3 text" 
                                    name="Answer3 text"
                                    required
                                    />
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col lg={3} sm={12}>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="Answer4 text" className="col col-form-label">Answer4 text </Form.Label>
                                <Col >
                                    <Form.Control type="text"  id="Answer4 text" 
                                    placeholder="Answer4 text" 
                                    name="Answer4 text"
                                    required
                                    />
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                    {/* row end */}
                    <Row className="row" >
                        <Col lg={4} sm={12}>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="step1 text" className="col col-form-label">step1 text</Form.Label>
                                <Col >
                                    <Form.Control type="text"  id="step1 text" 
                                    placeholder="step1 text" 
                                    name="step1 text"
                                    required
                                    />
                                </Col>
                            </Form.Group>
                        </Col>  
                        <Col lg={4} sm={12}>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="step 1 image" className="col col-form-label">step 1 image</Form.Label>
                                <Col>
                                    <Form.Control as="select" custom className="selectStyle" id="step 1 image" name="step 1 image" onChange={this.onChange} required>
                                        <option value="step 1 image"selected disabled>step 1 image</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col lg={4} sm={12}>
                                <Button style={{background: "darkviolet",width: "200px"}}>Add</Button>
                        </Col>
                    </Row>
                     {/* row end */}
                     <Row className="row" >
                        <Col lg={4} sm={12}>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="step2 text" className="col col-form-label">step2 text</Form.Label>
                                <Col >
                                    <Form.Control type="text"  id="step2 text" 
                                    placeholder="step2 text" 
                                    name="step2 text"
                                    required
                                    />
                                </Col>
                            </Form.Group>
                        </Col>  
                        <Col lg={4} sm={12}>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="step 2 image" className="col col-form-label">step 2 image</Form.Label>
                                <Col>
                                    <Form.Control as="select" custom className="selectStyle" id="step 2 image" name="step 2 image" onChange={this.onChange} required>
                                        <option value="step 2 image"selected disabled>step 2 image</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col lg={4} sm={12}>
                                <Button style={{background: "darkviolet",width: "200px"}}>update</Button>
                        </Col>
                    </Row>
                     {/* row end */}
                     <Row className="row" >
                        <Col lg={4} sm={12}>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="step3 text" className="col col-form-label">step3 text</Form.Label>
                                <Col >
                                    <Form.Control type="text"  id="step3 text" 
                                    placeholder="step3 text" 
                                    name="step3 text"
                                    required
                                    />
                                </Col>
                            </Form.Group>
                        </Col>  
                        <Col lg={4} sm={12}>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="step 3 image" className="col col-form-label">step 3 image</Form.Label>
                                <Col>
                                    <Form.Control as="select" custom className="selectStyle" id="step 3 image" name="step 3 image" onChange={this.onChange} required>
                                        <option value="step 3 image"selected disabled>step 3 image</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col lg={4} sm={12}>
                               <Button style={{background: "darkviolet",width: "200px"}}>import</Button>
                        </Col>
                    </Row>
                     {/* row end */}
                     <Row className="row" >
                        <Col lg={4} sm={12}>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="step4 text" className="col col-form-label">step4 text</Form.Label>
                                <Col >
                                    <Form.Control type="text"  id="step4 text" 
                                    placeholder="step4 text" 
                                    name="step4 text"
                                    required
                                    />
                                </Col>
                            </Form.Group>
                        </Col>  
                        <Col lg={4} sm={12}>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="step 4 image" className="col col-form-label">step 4 image</Form.Label>
                                <Col>
                                    <Form.Control as="select" custom className="selectStyle" id="step 4 image" name="step 4 image" onChange={this.onChange} required>
                                        <option value="step 4 image"selected disabled>step 4 image</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                        </Col>
                        <Col lg={4} sm={12}>
                              <Button style={{background: "darkviolet",width: "200px"}}>export</Button>
                        </Col>
                    </Row>
                     {/* row end */}
                     <Row className="row" >
                        <Col lg={4} sm={12}>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="all steps text" className="col col-form-label">all steps text</Form.Label>
                                <Col >
                                    <Form.Control type="text"  id="all steps text" 
                                    placeholder="all steps text" 
                                    name="all steps text"
                                    required
                                    />
                                </Col>
                            </Form.Group>
                        </Col>  
                        <Col lg={4} sm={12}>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="all steps image" className="col col-form-label">all steps image</Form.Label>
                                <Col>
                                    <Form.Control as="select" custom className="selectStyle" id="all steps image" name="all stepsimage" onChange={this.onChange} required>
                                        <option value="all steps image"selected disabled>all steps image</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                     {/* row end */}
                     <Row className="row" >
                        <Col lg={4} sm={12}>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="video link" className="col col-form-label">video link</Form.Label>
                                <Col >
                                    <Form.Control type="text"  id="video link" 
                                    placeholder="video link" 
                                    name="video link"
                                    required
                                    />
                                </Col>
                            </Form.Group>
                        </Col>  
                        <Col lg={4} sm={12}>
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="answer key index" className="col col-form-label">answer key index</Form.Label>
                                <Col>
                                    <Form.Control as="select" custom className="selectStyle" id="answer key index" name="answer key index" onChange={this.onChange} required>
                                        <option value="answer key index"selected disabled>answer key index</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                        </Col>
                    </Row>
                </Card.Body>
            </Form>
            </Card>        
    </Container>
           
            </div>
        )
    }
}
