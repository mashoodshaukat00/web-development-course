import React from 'react'
import ReactDom from'react-dom'
//css
import './index.css'

import {books} from './books'
import Book from './Book'
//setup vars

function BookList(){
  return(
    <section className='booklist' >
      {books.map((book)=> {
        return(
          <Book key={book.id} {...book}></Book>
        );
      })}
    </section>
  )
}
// "onMouseOver event example"





//"onClick event examples"

// const Book =({img, title, author,id})=>{
//   // attribute , eventHandler
//   // onClick onMouseOver

//   const eventHandler = (e)=> {
//     console.log(e)
//     console.log(e.target)
//     console.log(e.currentTarget)
//   }
//   const moreComplexExample = (author)=>{
//     console.log(author)
//   }
//   return(
//     <article className='book'>
//     <img src={img} alt="#"/>
//     <h3>{id}</h3>
//      <h1 onClick = {()=> console.log(title)}>{title}</h1>
//      <h4> {author} </h4>
//      <button type='button' onClick={eventHandler}>Example</button>
//      <button type='button' onClick = {()=>moreComplexExample(author)} >complex Example</button>
//    </article>
//   )
// }


ReactDom.render(<BookList/>, document.getElementById('root'));