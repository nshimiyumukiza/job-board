import React, { useState } from 'react'
import { Input } from 'antd';
import { IoSearch } from "react-icons/io5";
import {DownOutlined } from "@ant-design/icons"
import { Dropdown } from './dropdown';
import { Link, Outlet } from 'react-router';
import Footer from './Footer';

const Navbar = () => {
    const [isDropOpen, setIsDroOpn]=useState(false)
    const HndleDrop=()=>{
        setIsDroOpn(prev=>!prev)
    }
    return (
        <>
            <div className='fixed z-50 w-full top-0'>
                <div className='flex justify-center py-2 bg-gray-200 text-black text-lg ' >
                   <h1 className='text-sm sm:text-lg md:tex-xl'>we make it easy for the employee, the employer to find a job, the employee easily</h1>
                </div>
                <div className=' bg-black text-white p-4 w-full md:px-16'>
                  <div className='flex flex-col md:flex-row md:justify-between items-center gap-4'>
                  <div>
                    <Link to="/" className='sm:text-3xl font-blond text-2xl '>Job Board</Link>
                  </div>
                  <div className='flex justify-end items-center   md:w-96 gap-2 border-2 border-white rounded-md '>
                    <p className='border-r-2 border-white px-2' onClick={HndleDrop} href="">Job categories  <DownOutlined className='text-lg font-bold'/></p>
                    <Input className='flex-1 w-full outline-none border-none  rounded-md text-black text-center text-sm md:text-base' placeholder="Find job" suffix={<IoSearch/>}/>
                  </div>
                  <div className='flex flex-wrap justify-center items-center gap-4'>
                    <Link className='hover:underline text-sm md:text-base' to="/about">About</Link>
                    <Link className='hover:underline text-sm md:text-base' to="/contact">Contact us</Link>
                    <Link to="/login" className='border border-1 rounded-full px-2 bg-sky-800
                     text-white md:w-36 hover:bg-slate-200 hover:text-black py-1 text-center '>LOG IN </Link>
            
                  </div>
                  </div>
                </div>
                <div className='flex justify-center mt-2 md:pl-0'>
                   {isDropOpen && (
                     <Dropdown/>
                  )}
                   </div>
            </div>
            <Outlet />
            <Footer />
        </>
    )
}

export default Navbar