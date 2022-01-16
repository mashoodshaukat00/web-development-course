import { printSourceLocation } from 'graphql';
import React from 'react';
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Product from './Product';

export default function ProductDetail({showModal, setShowModal, productDetail}) {
    const [quantity, setQuantity] = useState(0);
    const {id,name,sku,price_range} = productDetail;
    return (
        <div>
            {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto h-auto my-6 mx-auto max-w-6xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold text-gray-600">
                      Product Detail
                    </h3>
                    <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-75 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-black opacity-75 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                  </div>
                  {/*body*/}
                  <div className="shadow-lg rounded-lg">
        <a href="#">
          <img src="https://picsum.photos/600/400/?random" className="rounded-tl-lg rounded-tr-lg" />
        </a>
        <div className="p-5">
        <div className='flex flex-row justify-between'>
        <h3><a href="#">{name}</a></h3>
        <h3>Price: <span className='font-bold text-red-600'>$ {quantity < 1 ? price_range.minimum_price.regular_price.value : (quantity * price_range.minimum_price.regular_price.value)}</span> </h3>
        </div>
          <div className='flex flex-row justify-between'>
          <div className="flex flex-row my-3">
            <div className="bg-black rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-blue-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-white rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-red-800 rounded-full h-5 w-5 shadow-md mr-2"></div>
            <div className="bg-green-700 rounded-full h-5 w-5 shadow-md mr-2"></div>
          </div>
              <h4>Sku: {sku}</h4>
          </div>
         
          <div className='flex flex-row justify-between'>
            <div className="flex flex-row my-3">
                <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">S</a>
                <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">M</a>
                <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">L</a>
                <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">XL</a>
                <a className="border-gray-300 border-2 text-gray-400 rounded-md px-2 py-1 mr-2 text-xs" href="#">XXL</a>
            </div>
            {/* counter */}
            <div className="custom-number-input h-10 w-32">
                <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                    <button onClick={()=> setQuantity(quantity - 1)} className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                    <span className="m-auto text-2xl font-thin">−</span>
                    </button>
                    <input className=" focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number"value={quantity < 0 ? setQuantity(0) : quantity}></input>
                <button onClick={()=> setQuantity(quantity + 1)} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                    <span className="m-auto text-2xl font-thin">+</span>
                </button>
                </div>
            </div>
           </div>                    
        </div>
      </div>
                  {/*footer*/}
                  <div className="flex flex-row items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <div className='flex flex-row justify-between'>
            <a href='#' className='text-white bg-purple-600 hover:bg-purple-700 py-2 px-4 rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <Link to='/cart'>Add to Cart</Link> 
            </a>
        </div>
        <div className='flex flex-row justify-between'>
            <a href='#' className='text-white bg-pink-600 hover:bg-pink-700 py-2 px-4 rounded-full'>
                <Link to='/products' onClick={() => setShowModal(false)}>Continue Shopping</Link>
            </a>
        </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        </div>
    )
}
