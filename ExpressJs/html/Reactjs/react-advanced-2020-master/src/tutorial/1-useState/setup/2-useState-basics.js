import React, { useState } from 'react';
// use state - function
// useState(var*, function) takes two parameters.
// first can be a string, number, boolean, object etc
// the second one is always a function() which is used to change the state of 
// that string, boolean, number, object etc 
const UseStateBasics = () => {
  // console.log(useState('Hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value,handler);

const [text,setText] = useState('random title')
 const handleClick = () => {
   if(text === 'random title'){
    setText('Hello world')
   }
  else{
    setText('random title')
  }
 }
  
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>Change title</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
