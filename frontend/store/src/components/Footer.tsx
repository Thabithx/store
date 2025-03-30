import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' text-white bg-black px-8 py-10 sm:px-16 md:px-32 lg:px-64'>
      <div className='flex flex-row justify-between py-5'>
         <div>
            <p className='font-bold pb-2'>CATEGORIES</p>
            <ul className='text-sm'>
               <Link className='cursor-pointer' to="/nike"><li className='py-1'>Nike</li></Link>
               <Link className='cursor-pointer' to="/adidas"><li className='py-1'>Adidas</li></Link>
               <Link className='cursor-pointer' to="/puma"><li className='py-1'>Puma</li></Link>
            </ul>
         </div>
         <div>
            <p className='font-bold pb-2'>CONTACTS</p>
            <ul className='text-sm'>
               <li className='py-1'>97845 Baker st. 567
               Los Angeles - US</li>
               <li className='py-1'>+94 423-23-221</li>
               <li className='py-1'>info@allaia.com</li>
            </ul>
         </div>
         <div>
            <p>KEEP IN TOUCH</p>
            <form className='pt-3 flex'>
               <input type="text" className=' bg-gray-900 py-2 h-8 px-4 border-white border-2' placeholder='E-mail'/>
               <button type='submit' className='bg-gray-200 py-2 h-8 text-sm px-4 text-black flex items-center'>SUBSCRIBE</button>
            </form>
         </div>
      </div>
      <p className='text-center pt-8 pb-1 text-sm'>© 2024 Allaia</p>
    </div>
  )
}

export default Footer