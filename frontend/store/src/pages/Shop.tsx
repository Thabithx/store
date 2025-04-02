import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/Shopcontext";
import ProductCard from "../components/productCard";
import ShopTitle from "../components/ShopTitle";

const Shop: React.FC = () => {
   const shopContext = useContext(ShopContext);

   useEffect(() => {
      if (shopContext) {
         shopContext.fetchProductData();
      }
   }, []);
   
   if (!shopContext) {
      console.error("ShopContext is not available!");
      return <p>Context not available</p>;
   }

   const { productdata, isloading } = shopContext;

   return (
      <div >
         <ShopTitle/>
         <div className="py-2 sm:py-4 md:py-6 lg:py-10  px-8 sm:px-16 md:px-32 lg:px-64 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {isloading ? (
               <p>Loading products...</p>
            ) : (
               productdata.map((product, index) => (
               <ProductCard 
               key={index}
               id={product._id}
               image={product.image[0]}
               price={product.price}
               name={product.name}
               /> 
               ))
            )}
         </div>
      </div>
   );
};

export default Shop;