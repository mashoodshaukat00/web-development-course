import React from 'react'
import ReactDom from'react-dom'
//css
import './index.css'
//setup vars
const books = [
  {
  id:1,
  img:'https://m.media-amazon.com/images/I/81FxtWFGiiL._AC_UL320_.jpg',
  title:'I Love You to the moon and back',
  author:'Ashfaq Ahmed',
},
{
  id:2,
  img:'https://m.media-amazon.com/images/I/81kdwZtIGbL._AC_UL320_.jpg',
  title:'Green head and ham',
  author:'Martin Ashley',
},
{
  id:3,
  img:'https://m.media-amazon.com/images/I/81drfTT9ZfL._AC_UL320_.jpg',
  title:'The cat in the hat',
  author:'Dr Seuss',
},
]
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