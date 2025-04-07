import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex justify-center items-center h-[70vh] overflow-hidden'>
      <div className=' text-black w-1/4 '>
         <p className='flex items-center justify-center text-3xl font-bold'>Login</p>
         <div className='flex flex-col pt-10 pb-3'>
            <input type="email" placeholder='Email' className='border-2 mb-5 px-8 py-2'/>
            <input type="text" placeholder='Password' className='border-2 px-8 py-2'/>
         </div>
         <p className='underline'>forgot your password?</p>
         <div className='flex items-center justify-center'>
            <button className='bg-black text-white py-3 px-10 rounded-lg mt-10 mb-3'>Sign in</button>
         </div>
         <Link to={"/signup"}><p className='flex items-center justify-center underline'>Create account</p></Link>
      </div>
    </div>
  )
}

export default Login