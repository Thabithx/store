import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import Featured from '../components/Featured'
import { ShopContext } from '../context/Shopcontext'
import { useParams } from 'react-router-dom'
import { Product } from '../types'

const SingleProduct = () => {
   const [imageIndex, setImageIndex] = useState(0)
   const shopContext = useContext(ShopContext) as { productdata: Product[] }

   if (!shopContext) {
      console.error("Context not found")
   }

   const { productdata } = shopContext
   const { id } = useParams<{ id: string }>()

   const product = productdata.find((item) => String(item._id) == String(id))
   if (product) {
      console.log(product)
   } else {
      console.log("no products found")
   }

   return (
      <div>
         {/* Product Section */}
         <div className="flex flex-col lg:flex-row px-8 sm:px-16 md:px-32 w-full lg:px-64 gap-4 py-10">
            {/* Product Image Section */}
            <div className="flex w-full gap-4">
               {/* Thumbnail Images */}
               <div className="flex flex-col gap-2 w-16 lg:w-24">
                  {product?.image.map((image, index) => (
                     <img
                        onClick={() => setImageIndex(index)}
                        className="aspect-square object-cover cursor-pointer hover:opacity-75 transition-all"
                        src={image}
                        key={index}
                        alt={`Product Image ${index + 1}`}
                     />
                  ))}
               </div>

               {/* Main Product Image */}
               <div className="flex-grow w-[580px]">
                  <img
                     className="w-[100%] object-cover aspect-square"
                     src={product?.image[imageIndex]}
                     alt="Main Product"
                  />
               </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-start mt-4 lg:mt-0">
               <h1 className="text-3xl font-bold text-gray-800 mb-3">{product?.name}</h1>
               

               {/* Size Selection */}
               <div className='flex flex-col gap-6'>
                  <p className="text-xl text-gray-600">${product?.price}</p>
                  <div className="flex gap-2">
                     {['S', 'M', 'L'].map((size) => (
                        <button
                           key={size}
                           className="bg-white text-black w-10 h-10 text-sm border-2 hover:bg-gray-100 transition-all"
                        >
                           {size}
                        </button>
                     ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2 mt-4">
                     <button className="bg-black text-white w-full py-3 text-sm rounded-full hover:bg-gray-800 transition-all">
                        Add To Cart
                     </button>
                     <button className="bg-white text-black border-2 w-full py-3 text-sm rounded-full hover:bg-gray-100 transition-all">
                        Buy Now
                     </button>
                  </div>

                  {/* Product Description */}
                  <p className="text-sm text-gray-600 mt-4">{product?.description}</p>
               </div>
            </div>
         </div>

         {/* Related Products Section */}
         <div className="px-8 sm:px-16 md:px-32 lg:px-64 mt-10">
            <Title text1="RELATED" text2="PRODUCTS" />
         </div>

         <Featured />
      </div>
   )
}

export default SingleProduct
