import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('fst');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';
  const [isError , setIsError] = useState(false);

  return <>
    {/* <h1>{firstValue} </h1>
    <h1>Value: {secondValue} </h1> */}
    <h1>{text || 'hello world'}</h1>
    <button className="btn" onClick={()=> setIsError(true)}> Show Error</button>
    {isError && <h1>Error...</h1>} 
  </>
  
};

export default ShortCircuit;
