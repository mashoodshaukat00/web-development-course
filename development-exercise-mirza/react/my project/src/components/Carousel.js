import React from 'react';
import image from '../images/hero-img.svg';

export default function Carousel() {
    return (
        <>
          <div className="md:flex md:flex-row mt-20">
      <div className="md:w-2/5 flex flex-col justify-center items-center">
        <h2 className="font-serif text-5xl text-gray-600 mb-4 text-center md:self-start md:text-left">Fantastic store</h2>
        <p className="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left">All your favourite brands.</p>
        <p className="lowercase text-gray-600 tracking-wide text-center md:self-start md:text-left">and other stuff...</p>
        <p className="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left">Yaaahhhooooooo!!!!</p>
        <a href="#" className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-4 px-8 text-gray-50 uppercase text-xl md:self-start my-5">Shop Now</a>
      </div>
      <div className="md:w-3/5">
        <img src={image} className="w-full" />
      </div>
    </div>
        </>
    )
}
