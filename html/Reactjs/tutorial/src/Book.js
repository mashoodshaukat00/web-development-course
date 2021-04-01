import React from 'react'

const Book =({img, title, author,id})=>{
  // attribute , eventHandler
  // onClick onMouseOver

  const eventHandler = (e)=> {
    console.log(e)
    console.log(e.target)
    console.log(e.currentTarget)
  }
  const moreComplexExample = (author)=>{
    console.log(author)
  }
  return(
    <article className='book' onMouseOver={()=> console.log(title)}>
    <img src={img} alt="#"/>
    <h3>{id}</h3>
     <h1 onClick = {()=> console.log(title)}>{title}</h1>
     <h4> {author} </h4>
     <button type='button' onClick={eventHandler}>Example</button>
     <button type='button' onClick = {()=>moreComplexExample(author)} >complex Example</button>
   </article>
  )
}

export default Book
