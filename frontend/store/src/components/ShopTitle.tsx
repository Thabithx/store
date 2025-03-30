import React from 'react'

const ShopTitle = () => {
  return (
    <div className='relative px-8 sm:px-16 md:px-32 lg:px-64 h-56 flex items-center bg-cover bg-[right_100%_top_50%]' style={{ backgroundImage: "url('https://www.ansonika.com/allaia/img/bg_cat_shoes.jpg')" }}>
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <p className='text-white font-bold text-3xl z-10'>SHOES - GRIND LISTING</p>
    </div>
  )
}

export default ShopTitle
