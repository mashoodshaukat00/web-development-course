import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import { useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://venia.magento.com/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {  

  return (
    <ApolloProvider client={client}>
   <div className='container'>
     <Navbar />
     <Routes>  
        <Route path='/' element={<Carousel/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      <Footer/>
   </div>
   </ApolloProvider>
  );
}
export default App;