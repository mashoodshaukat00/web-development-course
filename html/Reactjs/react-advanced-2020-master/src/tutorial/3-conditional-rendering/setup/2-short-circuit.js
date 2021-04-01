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
    {/* if text(exists) is true then return value in the text, otherwise retun hello world */}
    <h1>{text || 'hello world'}</h1>
    <button className="btn" onClick={()=> setIsError(()=> !isError)}> Show Error</button>
    {/* if isError is true return (h1) Error... otherwise it will return nothing */}
    {isError && <h1>Error...</h1>}
    {/* is isError is true it will return <p> otherwise <div> */}
    {isError ? (<p>There is an error...</p>) : (<div>
      <h2>there is no error</h2>
      </div>)}

  </>
  
};

export default ShortCircuit;
