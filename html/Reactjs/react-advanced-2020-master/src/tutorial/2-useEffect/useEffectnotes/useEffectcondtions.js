import React, { useState, useEffect } from 'react';
// useEffect is related to any work outside the component.
// it could be change the title of the document, fetching data and
// setting up eventListner etc..
// useEffect = work outside the component.
// we cannot call hooks conditionally, means no "if-else" statement can be used to call the hooks.
// on the other hand, conditions (if-else) can be used within hooks. Example shown below.

// useEffect runs by default, after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(()=>{
    if(value >= 1){
      document.title=`New Messages ${value}`;
    }
    
    console.log('call useEffect')
  })
  console.log('rendeer component')
  return <>
      <h1>{value} </h1>
      <button className="btn" onClick={()=> setValue(value + 1)} >click me</button>
    </>;
};

export default UseEffectBasics;
