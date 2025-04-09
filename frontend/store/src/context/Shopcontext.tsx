import axios from "axios";
import { createContext, ReactNode, useState } from "react";
import { Product } from "../types";

interface ShopContextType {
   productdata: Product[];
   setProductdata: React.Dispatch<React.SetStateAction<Product[]>>;
   isloading: boolean;
   setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
   fetchProductData: () => Promise<void>;
   showSearch: boolean;
   setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
   search: string;
   setSearch: React.Dispatch<React.SetStateAction<string>>;
   cartProducts: Product[];
   setCartProducts: React.Dispatch<React.SetStateAction<Product[]>>;
   setProductQuantity: (id: string, value: number) => void;
}

export const ShopContext = createContext<ShopContextType | undefined>(undefined);

interface ShopContextProviderProps {
   children: ReactNode;
}

const ShopContextProvider: React.FC<ShopContextProviderProps> = ({ children }) => {
   const [productdata, setProductdata] = useState<Product[]>([]);
   const [isloading, setIsLoading] = useState<boolean>(false);
   const [showSearch, setShowSearch] = useState<boolean>(false);
   const [search, setSearch] = useState<string>("");
   const [cartProducts, setCartProducts] = useState<Product[]>([]);
   
   

   const fetchProductData = async () => {
      if (productdata.length > 0) return;
      try {
         setIsLoading(true);
         const response = await axios.get<Product[]>('http://localhost:3000/api/product/products');
         setProductdata(response.data);
         console.log(productdata);
      } catch (error) {
         console.error("Error fetching product data:", error);
      } finally {
         setIsLoading(false);
      }
   };

   const setProductQuantity = (id: string, quantityValue: number) => {
      productdata.find((product) => (String(product._id) == id)?product.quantity = quantityValue:null);
   };

   return (
      <ShopContext.Provider value={{
         productdata, 
         setProductdata, 
         isloading, 
         setIsLoading, 
         fetchProductData, 
         showSearch, 
         setShowSearch, 
         search, 
         setSearch, 
         cartProducts, 
         setCartProducts,
         setProductQuantity
      }}>
         {children}
      </ShopContext.Provider>
   );
};

export default ShopContextProvider;
