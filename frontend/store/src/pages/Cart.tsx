import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/Shopcontext';
import { Product } from '../types';
import Title from '../components/Title';
import { Link } from 'react-router-dom';

const Cart = () => {
   const shopContext = useContext(ShopContext);

   if (!shopContext) {
      console.log("Context not found");
      throw new Error("ShopContext must be used within a ShopProvider");
   }

   const { cartProducts, setCartProducts } = shopContext;

   useEffect(() => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
         setCartProducts(JSON.parse(savedCart));
      }
   }, [setCartProducts]);

   useEffect(() => {
      if (cartProducts && cartProducts.length > 0) {
         localStorage.setItem('cart', JSON.stringify(cartProducts));
      }
   }, [cartProducts]);

   const editQuantity = (id: string, quantity: string) => {
      const updatedCartProducts = cartProducts.map((product: Product) => {
         if (String(product._id) === id) {
            return { ...product, cartquantity: Number(quantity) };
         }
         return product;
      });
      setCartProducts(updatedCartProducts);
   };

   let total: number = 0;
   const calcualteTotal = () => {
      cartProducts.forEach((product) => {
         total += product.price * Number(product.cartquantity);
      });
   };

   calcualteTotal();

   return (
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-10 h-[80vh]">
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
                  <div key={product._id} className="grid grid-cols-5 items-center border-b py-4">
                     <div className="flex items-center col-span-2 space-x-4">
                        <img className="w-16 h-16 object-cover rounded" src={product.image[0]} alt={product.name} />
                        <h3 className="text-sm sm:text-base">{product.name}</h3>
                     </div>

                     <p className="text-center text-gray-700">${product.price.toFixed(2)}</p>

                     <div className="flex items-center justify-center">
                        <div className="border-2 px-4 py-1">
                           <button onClick={() => editQuantity(String(product._id), String(Math.max(Number(product.cartquantity) - 1, 1)))}>–</button>
                           <input
                              className="text-black px-3 w-[80px] focus:outline-none focus:border-transparent text-center"
                              type="text"
                              value={product.cartquantity}
                              min="1"
                              onChange={(e) => {
                                 let value = e.target.value;
                                 if (value !== "") {
                                    value = value.replace(/^0+/, "");
                                 }
                                 editQuantity(String(product._id), value);
                              }}
                           />
                           <button onClick={() => editQuantity(String(product._id), String(Number(product.cartquantity) + 1))}>+</button>
                        </div>
                     </div>

                     <p className="text-right text-gray-700">${(Number(product.price) * Number(product.cartquantity)).toFixed(2)}</p>

                  </div>
               ))}
            </div>
         )}
         <div className="flex justify-end pt-10">
            <div className="w-1/3">
               <div className="flex justify-between">
                  <p className="text-lg">Subtotal</p>
                  <p>${total}</p>
               </div>
               <div className="pb-1 flex justify-between">
                  <p className="text-lg">Shipping</p>
                  <p>$0</p>
               </div>
               <hr />
               <div className="pt-1 flex justify-between items-center">
                  <p className="text-xl font-bold">Total</p>
                  <p>${total}</p>
               </div>
               <Link to="/checkout">
                  <button
                     className="w-full bg-black text-white px-5 py-2 my-3 active:bg-[#1f1f1fe3]">
                     Proceed To Checkout
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Cart;
