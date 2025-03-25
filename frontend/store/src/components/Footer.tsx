import React from 'react'

const Footer = () => {
  return (
    <div className='text-white bg-gray-700 px-8 sm:px-16 md:px-32 lg:px-64'>
      <div className='flex flex-row justify-between'>
         <div>
            <p>CATEGORIES</p>
            <ul>
               <li>Nike</li>
               <li>Addidas</li>
               <li>Puma</li>
            </ul>
         </div>
         <div>
            <ul>
               <p>CONTACTS</p>
               <li>97845 Baker st. 567
               Los Angeles - US</li>
               <li>+94 423-23-221</li>
               <li>info@allaia.com</li>
            </ul>
         </div>
         <div>
            <p></p>
            <form>
               <input type="text" className='border-2' placeholder='E-mail'/>
               <button type='submit'>Subscribe</button>
            </form>
         </div>
      </div>
      <p className='text-center'>copywright@2025</p>
    </div>
  )
}

export default Footer