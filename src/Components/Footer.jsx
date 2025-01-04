import React from 'react'
import { FaFacebookF,FaInstagram,FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <div className='flex justify-around bg-black text-white mt-8 pt-16 pb-8 space-y-7'>
        <div className='space-y-4'>
            <h1 className='text-sky-800 font-bold'>About Job Board</h1>
            <div className='grid space-y-4'>
            <a className='hover:text-blue-600' href="">about</a>
            <a className='hover:text-blue-600' href="">bueatiful stories</a>
            </div>
            <div className='flex space-x-5 space-y-4 items-center'>
            <FaFacebookF className='text-sky-400'/>
            
            <FaInstagram className='text-sky-400'/>
            <FaWhatsapp className='text-sky-400'/>
            </div>
        </div>
<div className='space-y-4'>
   <h1 className='text-sky-800 font-bold'>Support</h1>
   <div className='grid space-y-4'> 
   <a className='hover:text-blue-600' href="">contact us</a>
   <a className='hover:text-blue-600' href="">partner with us</a>
    </div> 
</div>
<div className='space-y-4'>
    <h1 className='text-sky-800 font-bold'>Legal</h1>
    <div className='grid space-y-4'>
    <p className='hover:text-blue-600'>Terms & condition</p>
    <p className='hover:text-blue-600'>Privacy Policy</p>
    </div>
</div>
    </div>
    <div className='flex justify-around bg-gray-100 text-black p-3 text-lg'>
        <div>
            <p>{new Date().getFullYear()}  Job Board -All Rights Reversed </p>
        </div>
        <div>
            <p>Developed by <span className='underline text-blue-600'>ERNESTE</span> &<span className='underline text-blue-600'>GISELE,EMMUANEUL</span></p>
        </div>
       <div>
        <p>in pertenshp With <span className='underline text-blue-600'>ALIGHT RWANDA</span></p>
       </div>
    </div>
    </>
  )
}

export default Footer