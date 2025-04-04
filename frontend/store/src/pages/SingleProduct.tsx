import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import Featured from '../components/Featured';
import { ShopContext } from '../context/Shopcontext';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const SingleProduct = () => {
   const { id } = useParams<{ id: string }>(); 
   const [imageIndex, setImageIndex] = useState(0);

   const shopContext = useContext(ShopContext);

   if (!shopContext) {
      console.error("Context not found");
      return null; 
   }

   const { productdata, cartProducts, setCartProducts,setProductQuantity } = shopContext;

   const product = productdata.find((item) => String(item._id) === String(id));

   if (!product) {
      console.log("No products found");
      return <p className="text-center text-gray-600">Product not found.</p>;
   }

   const addProducts = () =>{
      try {
         setCartProducts([...cartProducts, product])
         toast.success("Product Added To Cart")
      } catch (error) {
         console.log(String(error))
         toast.error("Counldn't Add Product To Cart")
      }
   }

   return (
      <div>
         <div className="flex flex-col lg:flex-row px-8 sm:px-16 md:px-32 w-full lg:px-64 gap-8 py-10">
            <div className="flex w-full gap-4">
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

               <div className="flex-grow w-[580px]">
                  <img
                     className="w-[100%] object-cover aspect-square"
                     src={product?.image[imageIndex]}
                     alt="Main Product"
                  />
               </div>
            </div>

            <div className="flex flex-col justify-start mt-4 lg:mt-0">
               <h1 className="text-3xl font-bold text-gray-800 mb-3">{product?.name}</h1>
               
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

                  <div className='flex items-center '>
                     <div className='border-2 px-4 py-1 '>
                        <button onClick={()=>setProductQuantity(String(product._id),product.quantity-1)} className='pr-1'>&ndash;</button>
                        <input type="text" value={product.quantity} className='focus:outline-none focus:ring-0 text-black px-3 w-14' onChange={(e)=>setProductQuantity(String(product._id),Number(e.target.value))}/>
                        <button onClick={()=>setProductQuantity(String(product._id),product.quantity+1)}>+</button>
                     </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-4">
                     <button 
                        onClick={() => addProducts()}
                        className="bg-black text-white w-full py-3 text-sm rounded-full hover:bg-gray-800 transition-all"
                     >
                        Add To Cart
                     </button>
                     <button className="bg-white text-black border-2 w-full py-3 text-sm rounded-full hover:bg-gray-100 transition-all">
                        Buy Now
                     </button>
                  </div>

                  <p className="text-sm text-gray-600 mt-4">{product?.description}</p>
               </div>
            </div>
         </div>

         <div className="px-8 sm:px-16 md:px-32 lg:px-64 mt-10">
            <Title text1="RELATED" text2="PRODUCTS" />
         </div>

         <Featured />
      </div>
   );
};

export default SingleProduct;
