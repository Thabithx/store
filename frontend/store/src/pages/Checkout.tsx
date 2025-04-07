import React from 'react'

const Checkout = () => {
  return (
    <div className='flex flex-col justify-center h-[100vh] w-full px-8 sm:px-16 md:px-32 lg:px-64 py-10'>
      <p className='flex items-center justify-center mb-6 text-2xl font-bold'>Checkout</p>

      <div className='flex items-start justify-between w-full h-full gap-x-10'>
        <form className='flex flex-col bg-slate-100 flex-[1.5] h-full gap-y-6 p-6 rounded-lg'>
          <input type="email" placeholder='Email' className='w-full border p-2 rounded'/>

          <div className='flex w-full gap-x-5'>
            <input type="text" placeholder="First Name" className='flex-1 border p-2 rounded'/>
            <input type="text" placeholder="Last Name" className='flex-1 border p-2 rounded'/>
          </div>

          <input className='w-full border p-2 rounded' type="text" placeholder='Address' />
          <input className='w-full border p-2 rounded' type="text" placeholder='Apartment, Suite, etc. (optional)'/>

          <div className='flex w-full gap-x-5'>
            <input type="text" placeholder='City' className='flex-1 border p-2 rounded'/>
            <input type="text" placeholder='Postal Code' className='flex-1 border p-2 rounded'/>
          </div>

          <input className='w-full border p-2 rounded' type="text" placeholder='Phone'/>
          <div className='flex gap-2 text-sm'>
            <input type="checkbox"/>
            <p>Save this information for next time</p>
          </div>
        

          <div>
            <p>Shipping Method</p>
          </div>

          <div>
            <p>Payment</p>
            <p>All transactions are secure and encrypted.</p>
            <div>options</div>
          </div>

          <button className='bg-black text-white'>Pay now</button>
        </form>

        <div className='bg-[#dcd6f199] flex-1 w-full h-full p-6 text-black rounded-lg'>
          Cart Info
        </div>
      </div>
    </div>
  )
}

export default Checkout
