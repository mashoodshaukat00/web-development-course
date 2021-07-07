import React from 'react';

const List = ({ppl}) => {
  return (
    <>
    {ppl.map((person)=>{
      const {id,name,age,image} = person;
      return (
        <article key={id} className="person">
        <img src={image} alt="#"/>
        <div>
          <h4>{name}</h4>
          <p>{age} years </p>
        </div>
      </article>
      )
    })}
    </>
  );
};

export default List;
