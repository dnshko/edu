import { always, equals, ifElse, length } from 'ramda';
import React from 'react';

const States = (props)=>{
    const {  options } = props;

    return options.map((option,index)=>{
        // console.log(option)
        return (
          <option value={option} key={index}>{option}</option> )  
    })
}
export default States;




// export const formatPhoneNumber = (phoneNumber: string) => {
//     const cleaned = ('' + phoneNumber).replace(/\D/g, '');
//     const matched = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    
//     if (!isNotEmpty(matched) || isNil(matched) || equals(matched, null)) {
//       return '';
//     }
//     return ifElse(
//       gte(length(matched)),
//       always({
//         headNumber: matched[1] || '',
//         middleNumber: matched[2] || '',
//         tailNumber: matched[3] || ''
//       }),
//       always('')
//     )(3);
//   };
//   export const acceptPhoneNumber = (value: any) => {
//     const phnNum = normalize(value);
//     const len = phnNum.length
//     if (equals(len, 10)) {
//       return true
//     } else {
//       return false
//     }
//   }



// const validationForTextFields = (value: string,inputFiledName:any) => {
//     if (isEmpty(value)) {
//       setstate({ errorState: true, errorReason: "inputFiledName must not be empty" });
//       return;
//     } else if (checkregexpresstion(value)) {
//       setstate({ errorState: true, errorReason: "Name must not be numbers" });
//       return;
//     }
//       setstate({ errorState: true, errorReason: "Name must not be numbers" });
//     return value;
//   };


//   validationForTextFields(this.state.firstnmae,'first Name')
//   onchange = () => {
//     if(!isEmpty(validationForTextFields(e.target.name,'string'))){
      
//     }
// }

