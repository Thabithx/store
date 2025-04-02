import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/Shopcontext';
import ProductCard from '../components/productCard';

const Puma: React.FC = () => {
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

   const {productdata,isloading} = shopContext

   const pumaproducts = productdata.filter((item)=>item.category=="puma")
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-[#f7f7f7a6]'>
      {isloading?(
         <p>loading...</p>
      ):(
         pumaproducts.map((product,index)=>(
            <ProductCard
            key={index} id={product._id} 
            image={product.image[0]}
            price={product.price}
            name={product.name}
            />
         ))
      )}
    </div>
  )
}

export default Puma