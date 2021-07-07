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
// There are many ways to acces the List Dynamically.
// "Third method of accessing the list dynamically *preferred Method*"
function BookList(){
  return(
    <section className='booklist' >
      {books.map((book)=> {
      // const {image, title, author} = book;
        return(
          <Book key={book.id} {...book}></Book>
        );
      })}
    </section>
  )
}
const Book =({img, title, author})=>{
  return(
    <article className='book'>
    <img src={img} alt="#"/>
     <h1>{title}</h1>
     <h4> {author} </h4>
     {/*For calling a children prop we need to add 'children' as a parameter
     and call it as seen below */}
     
   </article>
  )
}

// There are many ways to acces the List Dynamically.
// "second method of accessing the list dynamically"

// function BookList(){
//   return(
//     <section className='booklist' >
//       {books.map((book)=> {
//       // const {image, title, author} = book;
//         return(
//           <Book key={book.id} boka={book}></Book>
//         );
//       })}
//     </section>
//   )
// }
// const Book =(props)=>{
//   const {img, title, author} = props
//   return(
//     <article className='book'>
//     <img src={props.boka.img} alt="#"/>
//      <h1>{props.boka.title}</h1>
//      <h4> {props.boka.author} </h4>
//      {/*For calling a children prop we need to add 'children' as a parameter
//      and call it as seen below */}
     
//    </article>
//   )
// }

// "first method"

// function BookList(){
//   return(
//     <section className='booklist' >
//       {books.map((book)=> {
//       // const {image, title, author} = book;
//         return(
//           <Book key={book.id} boka={book}></Book>
//         );
//       })}
//     </section>
//   )
// }
// const Book =(props)=>{
//   const {img, title, author} = props.boka
//   return(
//     <article className='book'>
//     <img src={img} alt="#"/>
//      <h1>{title}</h1>
//      <h4> {author} </h4>
//      {/*For calling a children prop we need to add 'children' as a parameter
//      and call it as seen below */}
     
//    </article>
//   )
// }


ReactDom.render(<BookList/>, document.getElementById('root'));