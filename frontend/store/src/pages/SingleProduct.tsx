import React, { useContext, useEffect, useState } from 'react';
import Title from '../components/Title';
import Featured from '../components/Featured';
import { ShopContext } from '../context/Shopcontext';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Product } from '../types';

const SingleProduct = () => {
   const { id } = useParams<{ id: string }>(); 
   const [imageIndex, setImageIndex] = useState(0);
   const [productSize, setProductSize] = useState("");
   const [productCount, setProductCount] = useState(1);
   const [countValue, setCountValue] = useState("1");

   const shopContext = useContext(ShopContext);

   useEffect(() => {
      if (shopContext) {
            shopContext.fetchProductData();
      }
   }, []);

   if (!shopContext) {
      console.error("Context not found");
      return null; 
   }

   const { productdata, setCartProducts } = shopContext;

   const product = productdata.find((item) => String(item._id) === String(id));

   if (!product) {
      console.log("No products found");
      return <p className="text-center text-gray-600">Product not found.</p>;
   }
   
   const addProduct = () => {
      if (!productSize) {
         toast.error("Please select a size");
         return;
      }

      const parsedValue = Number(countValue);
      if (!isNaN(parsedValue) && parsedValue > 0) {
         setProductCount(parsedValue);
      } else {
         toast.error("Invalid quantity. Please enter a valid number.");
         return;
      }

      setCartProducts((previousItem: Product[]) => [
         ...previousItem,
         { ...product, cartsize: productSize, cartquantity: productCount }
      ]);

      setProductCount(1); 
      toast.success("Product added to cart.");
   };
   
   


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
               
               <div className="flex flex-col gap-6">
                  <p className="text-xl text-gray-600">${product?.price}</p>
                  <div className="flex gap-2">
                        <button onClick={() => setProductSize("S")} className={`bg-white text-black w-10 h-10 text-sm border-2 transition-all ${productSize == "S" ? " bg-gray-100 border-black" : ""}`}>S</button>
                        <button onClick={() => setProductSize("M")} className={`bg-white text-black w-10 h-10 text-sm border-2 transition-all ${productSize == "M" ? " bg-gray-100 border-black" : ""}`}>M</button>
                        <button onClick={() => setProductSize("L")} className={`bg-white text-black w-10 h-10 text-sm border-2 transition-all ${productSize == "L" ? " bg-gray-100 border-black" : ""}`}>L</button>
                  </div>

                  <div className='flex items-center '>
                     <div className='border-2 px-4 py-1'>
                        <button onClick={() => setCountValue(String(Math.max(Number(countValue) - 1, 1)))}>–</button>
                        <input
                           className="text-black px-3 w-[80px] focus:outline-none focus:border-transparent text-center"
                           type="text"
                           value={countValue}
                           min="1"
                           onChange={(e) => {
                              let value = e.target.value;
                              if (value !== "") {
                                 value = value.replace(/^0+/, "");
                              }
                              setCountValue(value);
                           }}
                        />
                        <button onClick={() => setCountValue(String(Number(countValue) + 1))}>+</button>
                     </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-4">
                     <button
                        onClick={() => addProduct()}
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
