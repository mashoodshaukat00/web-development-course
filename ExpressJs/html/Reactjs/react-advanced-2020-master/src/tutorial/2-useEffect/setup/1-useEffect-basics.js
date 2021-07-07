import React, { useState, useEffect } from 'react';
// useEffect runs by default, after every re-render
// useEffect is related to any work outside the component.
// it could be change the title of the document, fetching data and
// setting up eventListner etc..
// useEffect = work outside the component.
// we cannot call hooks conditionally, means no "if-else" statement can be used to call the hooks.
// on the other hand, conditions (if-else) can be used within hooks. Example shown below.
// useEffect take to parameters useEffect(value,[]). 
// As we discssed above useEffect runs everytimes component re-renders.
// but if you use second parameter "[]" ....
// ....useEffect will run only one time.
// And if u pass value to second parameter "[value]" then useEffect will run everytime value is change.


// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(()=>{
    if(value >= 1){
      document.title=`New Messages ${value} `;
    }
    console.log('call useEffect')
  })
  useEffect(()=>{
    console.log('use effect 2')
  },[])
  console.log('rendeer component')
  return <>
      <h1>{value} </h1>
      <button className="btn" onClick={()=> setValue(value + 1)} >click me</button>
    </>;
};

export default UseEffectBasics;
