import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/Shopcontext'
import ProductCard from './productCard';

const Featured:React.FC = () => {
   const shopContext = useContext(ShopContext)
   useEffect(() => {
         shopContext?.fetchProductData()
      }, []);
   if(!shopContext){
      console.error("Context not available")
      return (<p>Context not available</p>)
   }

   const {productdata,isloading} = shopContext

   const featuredProducts = productdata.slice(0,4)

  return (
    <div className='flex flex-wrap items-center gap-3 justify-between px-8 sm:px-16 md:px-32 lg:px-64'>
      {isloading?(<p>Loading....</p>):(featuredProducts.map((featuredProducts,index)=>
      (
         <div className='w-full sm:w-1/3 md:w-[24%]'>
            <ProductCard key={index} id={featuredProducts._id} image={featuredProducts.image[0]} price={featuredProducts.price} name={featuredProducts.name}/>
         </div>
      )
      ))}
    </div>
  )
}

export default Featured