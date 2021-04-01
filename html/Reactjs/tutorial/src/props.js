import React from 'react'
import ReactDom from'react-dom'
//css
import './index.css'
//setup vars
const firstBook = {
  img:'https://m.media-amazon.com/images/I/81FxtWFGiiL._AC_UL320_.jpg',
  title:'I Love You to the moon and back',
  author:'Ashfaq Ahmed'
}
const secondBook = {
  img:'https://m.media-amazon.com/images/I/81kdwZtIGbL._AC_UL320_.jpg',
  title:'Green head and ham',
  author:'Martin Ashley'
}
// Our main function
function BookList(){
  return(
    <section className='booklist' >
      <Book image={firstBook.img} title = {firstBook.title} author={firstBook.author} />
      <Book image={secondBook.img} title = {secondBook.title} author={secondBook.author} />
      
    </section>
  )
}
// Here we actually create the function which is book in this case.
// We pass the value to the props where we call this function, 
// in this case its within Booklist().
const Book =(props)=>{
  return(
    <article className='book'>
    <img src={props.image} alt="#"/>
     <h1>{props.title}</h1>
     <h4> {props.author} </h4>
    </article>
  )
}
// Other way of accessing properties through "props"
// Objects Restructuring
// const Book =(props)=>{
//   const {img, title, author} = props
//   return(
//     <article className='book'>
//     <img src={props.img} alt="#"/>
//      <h1>{props.title}</h1>
//      <h4> {props.author} </h4>
//     </article>
//   )
// }

// Second method is as follows (props)
// const Book =({img, title, author})=>{
//   return(
//     <article className='book'>
//     <img src={img} alt="#"/>
//      <h1>{title}</h1>
//      <h4> {author} </h4>
//     </article>
//   )
// }



ReactDom.render(<BookList/>, document.getElementById('root'));