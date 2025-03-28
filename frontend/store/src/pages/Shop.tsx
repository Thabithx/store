import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/Shopcontext";
import ProductCard from "../components/productCard";

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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
         {isloading ? (
            <p>Loading products...</p>
         ) : (
            productdata.map((product, index) => (
              <ProductCard 
              key={index}
              id={index}
              image={product.image[0]}
              price={product.price}
              name={product.name}
              /> 
            ))
         )}
      </div>
   );
};

export default Shop;