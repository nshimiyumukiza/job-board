import React from 'react'
import { FaFacebookF,FaInstagram,FaWhatsapp } from "react-icons/fa"
import { ContactForm } from './ContactForm'
const addres=[
    {
        country:"Rwanda",
        district:"Gtsibo",
        location:"Nyabiheke Camp"
    }
]
const Contact = () => {
  return (
    <>
    <div className='bg-sky-400 h-40 px-16 flex justify-start items-center mt-32'> 
        <h1 className='font-bold text-4xl'>Contact Us</h1>
        </div>
    <div className='flex mx-auto w-11/12 justify-around'>
        
        <div className='py-12'>
        <div className='pb-5'>
            <h1 className='text-3xl font-bold'>Contact to me</h1>
            <div>
            <div className='flex gap-10 justify-start items-center pt-2'>
            <FaFacebookF className='text-sky-400 text-2xl'/>
            
            <FaInstagram className='text-sky-400 text-2xl'/>
            <FaWhatsapp className='text-sky-400 text-2xl'/>
            </div>
            </div>
        </div>
        <div className='pb-5'>
            <h1 className='text-3xl font-bold '>Contact Datails</h1>
            <div className='flex space-x-5'>
                <p className='text-lg'>phone</p>
                <p className='text-lg'>0794650639</p>
            </div>
            <div className='flex space-x-5'>
                <p>Email</p>
                <p>nshimiyumukizaerneste99gmail.com</p>
            </div>
        </div>
        <div>
            <h1 className='text-3xl font-bold '>Address</h1>
   <div>
    {addres.map(addre =>(
        <div className=''>
            <p className='text-lg'>COUNTRY :{addre.country}</p>
            <p className='text-lg'>DISTRICT :{addre.district}</p>
            <p className='text-xg'>LOCATION :{addre.location}</p>
        </div>
    ))}
   </div>
        </div>
        </div>
        <div>
            <div className='py-8'>
                <h1 className='text-3xl font-blond p-6 pb-4'>Send Message</h1>
                <ContactForm />
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Contact