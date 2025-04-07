import React from 'react'

const Signup = () => {
  return (
    <div className='flex justify-center items-center h-[70vh] overflow-hidden'>
      <div className=' text-black w-1/4 '>
         <p className='flex items-center justify-center text-3xl font-bold'>Create account</p>
         <div className='flex flex-col pt-10 pb-3 gap-3'>
            <input type="text" placeholder='First name' className='border-2 px-8 py-2'/>
            <input type="text" placeholder='Last name' className='border-2 px-8 py-2'/>
            <input type="email" placeholder='Email' className='border-2 px-8 py-2'/>
            <input type="text" placeholder='Phone number' className='border-2 px-8 py-2'/>
            <input type="text" placeholder='Password' className='border-2 px-8 py-2'/>
         </div>
         <div className='flex items-center justify-center'>
            <button className='bg-black text-white py-3 px-10 rounded-lg mt-10 mb-3'>Sign Up</button>
         </div>
      </div>
    </div>
  )
}

export default Signup