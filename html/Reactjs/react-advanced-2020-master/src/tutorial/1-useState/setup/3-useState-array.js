import React from 'react';
import { data } from '../../../data';

// another method to access usestate().
// instead of importing it, u can access it by writing "React.useState()"
// example is shown below.
const UseStateArray = () => {
const [people, setPeople] = React.useState(data)

const removeItem = (id)=> {
  //filter loop through the array and returns a new array that meet the condition.
  let newPeople = people.filter((person)=> person.id !== id)
  //console.log(newPeople);
  setPeople(newPeople)
}

  return (
    <>
    {people.map((person) => {
      const {id, name} = person
      return(
        <div key={id} className="item">
          <h4>{id}</h4>
          <h4>{name} </h4>
          <button className="btn" onClick={() => removeItem(id)}>Remove</button>
        </div>
      )
    })}

    <button type="button" className="btn" onClick={() => setPeople([])}>
      clear items</button>

    </>
  )
};

export default UseStateArray;
