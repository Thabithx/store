import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/Shopcontext";

interface ProductCardProps {
  image: string;
  id: string | number;
  name: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, id, name, price }) => {

const context = useContext(ShopContext);
if (!context) {
  throw new Error("useContext(ShopContext) must be used within a ShopContextProvider");
}
const { setSearch } = context;
  
  return (
    <Link onClick={()=>setSearch("")} to={`/product/${id}`} className="block">
      <div className="relative pt-[100%] overflow-hidden">
        <img 
          className="absolute top-0 left-0 w-full h-full object-cover" 
          src={image} 
          alt={name}
        />
      </div>
      <div className="flex flex-col items-center pb-16 pt-4">
        <p className="font-bold mt-2 text-center">{name}</p>
        <p className="text-gray-700">${price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;