import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='h-96 bg-cover bg-center flex items-center' style={{ backgroundImage: "url('https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?q=80&w=2808&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className='flex flex-col  px-8 sm:px-16 md:px-32 lg:px-64 gap-4'>
         <p className='font-bold text-4xl '>Step into style, <br />
         where every pair tells a story.</p>
         <Link to={"/shop"}>
            <button className='bg-black text-white px-8 py-2 self-start'>Shop All</button>
         </Link>
      </div>
    </div>
  )
}

export default Banner