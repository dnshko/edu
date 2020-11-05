import React from 'react';
import {
    Form,Row,Col
} from 'react-bootstrap';


const CustomTextBox = (props) =>{
    
    return (
        <Form.Group as={Row}>
        <Form.Label htmlFor={props.htFor} className={props.style}>{props.txtBoxLabel}</Form.Label>
        <Col>
            <Form.Control type={props.txtBoxType}  id={props.txtBoxID}
             placeholder={props.txtBoxPH} 
             value={props.txtBoxValue}
             onChange={props.changeEvent}
             name={props.txtBoxName}
             required
             />
        </Col>
    </Form.Group>
    )
}

export default CustomTextBox;