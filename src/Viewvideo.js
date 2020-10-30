import React,{Component} from 'react';
import {
    Container,
    Card,
    Form,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import Reactplayer from 'react-player';

class Viewvideo extends Component{
    render(){
        return(
            <>
    <Container  style={{marginTop: '50px'}}>
          
              <Card>                  
                    <nav class="nav justify-content-center" >
                        <p class="headTitle" >View Video</p>
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
                                        <p class="Text" > The length,breadth and height of a hall are 25m,15m,5m respectively.What is the cost of renovating its floor and four walls at the rate of 80 rs per meter 
</p> 
              
                                    </Col>
                                </Form.Group>
                            </Col>
                                              
                        </Row>
                        <Row className="row justify-content-center">
                            
                            <Reactplayer width='480px' height='240px' controls   url='https://www.youtube.com/watch?v=7g69wLn0UjI' />
                        </Row>
                    </Card.Body>
              </Card>         
      </Container> 
            </>
        )
    }
}

export default Viewvideo;