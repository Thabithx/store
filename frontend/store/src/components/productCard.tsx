import { Link } from "react-router-dom";

interface ProductCardProps {
  image: string;
  id: string | number;
  name: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, id, name, price }) => {
  return (
    <Link 
      to={`/product/${id}`} 
      className="flex flex-col items-center w-full sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] p-4 border rounded-lg shadow-md"
    >
      <div className="w-full h-[250px] sm:h-[280px] md:h-[300px] lg:h-[320px] xl:h-[350px] overflow-hidden flex justify-center items-center">
        <img 
          className="w-full h-full object-cover hover:scale-110 transition ease-in-out duration-300" 
          src={image} 
          alt={name} 
        />
      </div>
      <p className="font-bold mt-2 text-center">{name}</p>
      <p className="text-gray-700">${price}</p>
    </Link>
  );
};

export default ProductCard;
