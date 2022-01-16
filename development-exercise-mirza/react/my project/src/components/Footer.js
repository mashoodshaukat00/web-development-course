import React from 'react'

export default function Footer() {
    return (
        <div className='flex flex-col md:flex-row md:justify-between  border-t-2 border-gray-300 py-4 text-sm text-center'>
            <div className='mb-4'>
                <a href='#' className='mx-2'>About us</a>
                <a href='#' className='mx-2'>Privacy policy</a>
                <a href='#' className='mx-2'>Terms of Services</a>
            </div>
            <p>&copy; Copyrights Reserved 2021</p>
            
        </div>
    )
}
