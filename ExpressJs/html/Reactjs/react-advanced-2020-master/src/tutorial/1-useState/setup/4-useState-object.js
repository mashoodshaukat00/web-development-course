import React, { useState } from 'react';
// There are two ways of using object in a usestate
// both are explained below.
// 1
  const UseStateObject = () => {
  const [name, setName] = useState('Peter')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('Random Message')
  const changeMessage = () => {
    setMessage('New Message')
  }
  return (
    <>
   <h4>{name}</h4>
   <h4>{age}</h4>
   <h4>{message}</h4>
   <button className="btn" onClick={changeMessage}>Change Message</button>
  
   </>
  )
}
// 2
// const UseStateObject = () => {
//   const [person, setPerson] = useState({
//   name:"peter",
//    age: 24,
//   message:"Random Message",
// })
// const changeMessage = () => {
//   setPerson({...person, message:"New Message"})
// }
//   return <>
//   <h4>{person.name}</h4>
//   <h4>{person.age}</h4>
//   <h4>{person.message}</h4>
//   <button className="btn" onClick={changeMessage}>Change Message</button>
  
//   </>;
// };

export default UseStateObject;
