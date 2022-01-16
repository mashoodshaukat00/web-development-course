import React from 'react';
import {useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import ProductDetail from './ProductDetail';


export default function Product({product}) {
    const [showModal, setShowModal] = useState(false);
     const {id, name, price_range,sku} = product;
     
    return (
        <>        
            <div className='shadow-lg rounded-lg'>
                <a href='#'>
                <img src="https://picsum.photos/400/300/?random" className='rounded-tr-lg rounded-tl-lg'/>
                </a>
                <div className='p-5'>
                    <div className='flex flex-row justify-between'>
                        <h3><a href='#'>{name}</a></h3>
                        <h3>Price: <span className='font-bold text-red-600'>${price_range.minimum_price.regular_price.value}</span> </h3>
                    </div>
                    
                    <div className='flex flex-col xl:flex-row justify-between'>
                        <Link to='/products' href='#'  className='text-white bg-purple-600 hover:bg-purple-700 rounded-full py-2 px-4 my-2 text-sm flex flex-row justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                             Add to Cart 
                        </Link>
                        <a href='#'  onClick={() => setShowModal(true)} className=' text-white bg-pink-600 hover:bg-pink-700 rounded-full py-2 px-4 my-2 text-sm flex flex-row justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            View detail
                        </a>
                    </div>
                </div>
                <ProductDetail setShowModal={setShowModal} showModal={showModal} key={product.id} productDetail={product} />
            </div>         
        </>
    )
}
