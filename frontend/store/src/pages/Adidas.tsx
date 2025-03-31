import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/Shopcontext';
import ProductCard from '../components/productCard';

const Adidas: React.FC = () => {
   const shopContext = useContext(ShopContext);
   
   useEffect(() => {
      if (shopContext) {
            shopContext.fetchProductData();
      }
   }, []);

   if (!shopContext){
      console.error("Shopcontext not available")
      return(<p>Context not available</p>)
   }

   const {productdata,isloading,showSearch} = shopContext

   const adidasproducts = productdata.filter((item)=>item.category=="adidas")
  return (
    <div className={`${showSearch?"hidden":"grid"} grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-[#dee5e9a6]`}>
      {isloading?(
         <p>loading...</p>
      ):(
         adidasproducts.map((product,index)=>(
            <ProductCard
            key={index} id={index} 
            image={product.image[0]}
            price={product.price}
            name={product.name}
            />
         ))
      )}
    </div>
  )
}

export default Adidas