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
                   <h1>we make it easy for the employee, the employer to find a job, the employee easily</h1>
                </div>
                <div className=' bg-black text-white py-4 px-16 w-full'>
                  <div className='flex justify-between'>
                  <div>
                    <Link to="/" className='text-3xl font-blond '>Job Board</Link>
                  </div>
                  <div className='flex justify-end items-center  w-96 gap-2 border-2 border-white rounded-md'>
                    <p className='border-r-2 border-white px-2' onClick={HndleDrop} href="">Job categories  <DownOutlined className='text-lg font-bold'/></p>
                    <Input className=' bg-black  w-[240px] outline-none border-none  rounded-md text-black text-center' placeholder="Find job" suffix={<IoSearch/>}/>
                  </div>
                  <div className='space-x-4'>
                    <Link className='hover:underline' to="/about">About</Link>
                    <Link className='hover:underline' to="/contact">Contact us</Link>
                    <Link to="/login" className='border border-1 rounded-full px-3 bg-sky-800 text-white w-40 hover:bg-slate-200 hover:text-black'>LOG IN </Link>
            
                  </div>
                  </div>
                </div>
                <div className='pl-[650px]'>
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