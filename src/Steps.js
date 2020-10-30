import React,{Component} from 'react';
import {
    Container,
    Card,
    Form,
    Row,
    Col,
    Button
} from 'react-bootstrap';

class Steps extends Component{
    render(){
        return(
            <>
    <Container  style={{marginTop: '50px'}}>
          
              <Card>                  
                    <nav class="nav justify-content-center" >
                        <p class="headTitle" >View Steps</p>
                    </nav>                   
                    <Card.Body >
                        <Row class="row justify-content-center">                         
                            <Col sm={12} lg={4} >
                                <Form.Group as={Row}>   
                                    
                                    <Col>
                                    <Button sm={12} lg={4} className=" btnBlue" style={{marginTop: '20px'}}>3</Button>
                                                
                                    </Col>
                                </Form.Group>
                            </Col>
                            <Col sm={12} lg={4}>                                
                                <Form.Group as={Row}>
                                        <Col>
                                        <p class="Text" > The length,breadth and height of a hall are 25m,15m,5m respectively.What is the cost of renovating its floor and four walls at the rate of 80 rs per meter </p> 
              <Button className="btn btn-primary" style={{background: '#21234E'}}>Step 1</Button>
<p class="Text" > Here length = 25 m, bredth =15m, height= 5m
Area of four walls = L.S.A of cuboid
=2(l+b)* h</p>
<Button className="btn btn-primary" style={{background: '#21234E'}}>Step 2</Button>
<p class="Text" > 2 * (25+15)* 5
= 400</p>
<Button className="btn btn-primary" style={{background: '#21234E'}}>Step 3</Button>
<p class="Text" > Area of the floor= l*b
=25 *15
= 375</p>
<Button className="btn btn-primary" style={{background: '#21234E'}}>Step 4</Button>
<p class="Text" > Total renovating Area of the hall= (Area of four walls+Area of the floor)</p>
<Button className="btn btn-primary" style={{background: '#21234E'}}>Step 5</Button>
<p class="Text" > Total renovating area of the hall=400 +375
= 775 </p>
<Button className="btn btn-primary" style={{background: '#21234E'}}>Step 6</Button>
<p class="Text" >Cost of renovating at rate of 80 per meter = 80* 775
=62000 </p>
                                    </Col>
                                </Form.Group>
                            </Col>
                                              
                        </Row>
                        <Row className="row justify-content-center">
                            <Button sm={12} lg={4} className=" btnBlue">Show all</Button>
                            <Button sm={12} lg={4} className=" btnBlue"> in </Button>
                            <Button sm={12} lg={4} className=" btnBlue"> out  </Button>
                        </Row>
                    </Card.Body>
              </Card>         
      </Container> 
            </>
        )
    }
}

export default Steps;