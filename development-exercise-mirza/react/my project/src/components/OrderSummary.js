import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

export default function OrderSummary() {
    return (
        <div id="summary" className="w-1/4 px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Items 3</span>
          <span className="font-semibold text-sm">590$</span>
        </div>
        <div>
          <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
          <select className="block p-2 text-gray-600 w-full text-sm">
            <option>Free</option>
          </select>
        </div>
        <div className="py-10">
          <label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
          <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full"/>
        </div>
        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white rounded-full">Apply</button>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>$600</span>
          </div>
          <div className='flex flex-row sm:flex-col md:flex-col  justify-between'>
            <a href='#' className='text-white bg-purple-600 hover:bg-purple-700 py-2 px-4 rounded-full text-center'>
            <Link to='/checkout'>Checkout</Link>
            </a>
           
            <a href='#' className='text-white bg-pink-600 hover:bg-pink-700 py-2 px-4 rounded-full mt-2 text-center'>
            <Link to='/products'>Continue Shopping</Link>
            </a>
             
        </div>
        </div>
      </div>
    )
}
