import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { Input} from "antd";
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
            <div className='fixed w-full top-0 z-50'>
                <div className='flex justify-center py-2 bg-gray-200 text-black text-lg ' >
                   <h1>we make it easy for the employee, the employer to find a job, the employee easily</h1>
                </div>
                <div className=' bg-black text-white py-4 px-16 absolute top-10 z-50 w-full'>
                  <div className='flex justify-between'>
                  <div>
                    <h1 className='text-3xl font-blond '>Job Board</h1>
                  </div>
                  <div className='flex justify-end items-center  w-96 gap-2 border-2 border-white rounded-md'>
                    <p className='border-r-2 border-white px-2' onClick={HndleDrop} href="">Job categories  <DownOutlined /></p>
                    
                    <Input className=' bg-black  w-[240px] outline-none border-none  rounded-md text-white text-center' type="text"placeholder='Find Job or Labable' suffix={<IoSearch/>}/>
                  </div>
                  <div className='space-x-4'>
                    <a  href="">Post Job</a>
                    <a  href="">About</a>
                    <a  href="/contact">Contact us</a>
                    <button className='border border-1 rounded-full px-2 bg-sky-800 text-white w-40 hover:bg-slate-200 hover:text-black'>LOG IN </button>
            
                  </div>
                  </div>
                   <div className='pl-[570px]'>
                   {isDropOpen && (
                     <Dropdown/>
                  )}
                   </div>
                 
                  
                </div>
            </div>
            <Outlet />
            <Footer />
        </>
    )
}

export default Navbar