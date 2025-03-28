import axios from "axios";
import { createContext, ReactNode, useState } from "react";

interface Product {
   name: string;
   price: number;
   description: string;
   quantity: number;
   size: string[];
   image: string[];
   category: string;
}

interface ShopContextType {
   productdata: Product[];
   setProductdata: React.Dispatch<React.SetStateAction<Product[]>>;
   isloading: boolean;
   setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
   fetchProductData: () => Promise<void>;
}

export const ShopContext = createContext<ShopContextType | undefined>(undefined);

interface ShopContextProviderProps {
   children: ReactNode;
}

const ShopContextProvider: React.FC<ShopContextProviderProps> = ({ children }) => {
   const [productdata, setProductdata] = useState<Product[]>([]);
   const [isloading, setIsLoading] = useState<boolean>(false);

   const fetchProductData = async () => {
      if (productdata.length > 0) return;  // Prevent unnecessary fetching
      try {
         setIsLoading(true);
         const response = await axios.get<Product[]>('http://localhost:3000/api/product/products');
         setProductdata(response.data);
         console.log(productdata)
      } catch (error) {
         console.error("Error fetching product data:", error);
      } finally {
         setIsLoading(false);
      }
   };
   

   return (
      <ShopContext.Provider value={{ productdata, setProductdata, isloading, setIsLoading, fetchProductData }}>
         {children}
      </ShopContext.Provider>
   );
};

export default ShopContextProvider;
