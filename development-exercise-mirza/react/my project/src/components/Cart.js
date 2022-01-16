import React from 'react';
import CartItem from './CartItem';
import OrderSummary from './OrderSummary';

export default function Cart() {
    return (
        <div>
             <div className="flex shadow-md my-10">
               <div className="w-3/4 bg-white px-10 py-10 overflow-y-scroll h-screen">
                <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">3 Items</h2>
                </div>
                <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-3/5">Product Details</h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                </div>
                <CartItem/>
                 </div>
                 <OrderSummary/>
            </div>
        </div>
    )
}
