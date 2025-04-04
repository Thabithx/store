import React, { useContext } from 'react';
import { ShopContext } from '../context/Shopcontext';
import { Product } from '../types';
import Title from '../components/Title';

const Cart = () => {
   const shopContext = useContext(ShopContext);

   if (!shopContext) {
      console.log("Context not found");
      return null;
   }

   const { cartProducts,setProductQuantity } = shopContext;

   return (
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-10">
         <Title text1="YOUR" text2="CART" />
         {cartProducts.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
         ) : (
            <div className="pt-6 space-y-6">
               <div className="grid grid-cols-5 text-gray-600 font-semibold border-b pb-3">
                  <p className="col-span-2">PRODUCT</p>
                  <p className="text-center">PRICE</p>
                  <p className="text-center">QUANTITY</p>
                  <p className="text-right">SUBTOTAL</p>
               </div>

               {cartProducts.map((product: Product) => (
                  <div className="grid grid-cols-5 items-center border-b py-4">
                     <div className="flex items-center col-span-2 space-x-4">
                        <img className="w-16 h-16 object-cover rounded" src={product.image[0]} alt={product.name} />
                        <h3 className="text-sm sm:text-base">{product.name}</h3>
                     </div>

                     <p className="text-center text-gray-700">${product.price.toFixed(2)}</p>

                     <div className='flex items-center justify-center'>
                        <div className='border-2 px-4 py-1 '>
                          <button onClick={()=>setProductQuantity(String(product._id),product.quantity-1)} className='pr-1'>&ndash;</button>
                          <input type="text" value={product.quantity} className='focus:outline-none focus:ring-0 text-black px-3 w-14' onChange={(e)=>setProductQuantity(String(product._id),Number(e.target.value))}/>
                          <button onClick={()=>setProductQuantity(String(product._id),product.quantity+1)}>+</button>
                        </div>
                     </div>

                     <p className="text-right text-gray-700">${(product.price * 1).toFixed(2)}</p>
                  </div>
               ))}
            </div>
         )}
      </div>
   );
};

export default Cart;
