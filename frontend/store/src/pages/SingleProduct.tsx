import React, { useContext } from 'react'
import Title from '../components/Title'
import Featured from '../components/Featured'
import { ShopContext } from '../context/Shopcontext'
import { useParams } from 'react-router-dom'
import { Product } from '../types'

const SingleProduct = () => {

   const shopContext = useContext(ShopContext) as {productdata: Product[]}

   if(!shopContext){
      console.error("Context not found")
   }

   const {productdata} = shopContext;
   const { id } = useParams<{ id: string }>();


   const product = productdata.find((item)=>String(item._id) == String(id))
   if (product){
      console.log(console.log(product));
      
   }
   else{
      console.log("no products found");

      
   }
   

  return (
   <div>
      <div className='flex flex-row px-8 sm:px-16 md:px-32 lg:px-64'>

         <div className='flex flex-row'>
            <div>
            </div>
            <div>selectedimg</div>
         </div>
         <div>
            <h1>title</h1>
            <p>category</p>
            <p>price</p>
            <div className='flex flex-row'>
               <button>S</button>
               <button>M</button>
               <button>L</button>
            </div>
            <div className='felx flex-row'>
               <button>Add To Cart</button>
               <button>Buy Now</button>
            </div>
            <p>discription</p>
         </div>
      </div>
      <div className='px-8 sm:px-16 md:px-32 lg:px-64'><Title text1='RELATED' text2='PRODUCTS'/></div>
      <Featured/>
   </div>
  )
}

export default SingleProduct