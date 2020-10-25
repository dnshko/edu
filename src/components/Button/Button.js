import React from 'react';
import {
    Button
} from 'react-bootstrap';


const CustomButton = (props) =>{
    return (
        <Button type = {props.btnType} className={props.style} onClick={props.ClickEvent}>{props.BtnTxt}</Button>  
    )
}

export default CustomButton;