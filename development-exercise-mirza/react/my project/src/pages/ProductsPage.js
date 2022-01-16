import React from 'react';
import Products from '../components/Products';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProductsPage() {
    return (
        <div>
            <Navbar/>
            <Products/>
            <Footer/>
        </div>
    )
}
