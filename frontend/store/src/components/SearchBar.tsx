import { Link } from "react-router-dom";
import assets from "../assets/assets";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/Shopcontext";
import ProductCard from "./productCard";
import { Product } from "../types";

const SearchBar = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useContext(ShopContext) must be used within a ShopContextProvider");
  }

  const { showSearch, setShowSearch, search, setSearch, productdata } = context;

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredProducts([]);
    } else {
      const filtered = productdata.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [search, productdata]);

  return (
    <div className="flex flex-col text-white ">
      <div className={`bg-black flex-row justify-between py-4 items-center pb-4 px-8 sm:px-16 md:px-32 lg:px-64 ${showSearch ? "flex" : "hidden"}`}>
        <Link to="/"><img src={assets.logo} alt="Shop Logo" /></Link>
        <div className="flex flex-row items-center w-3/4 justify-center">
          <input
            className="bg-[#4d4d4d55] rounded-full border-none focus:outline-none focus:ring-0 text-md px-7 py-2 w-3/4"
            placeholder="Search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button onClick={() => setSearch("")} className={search ? "inline-block" : "hidden"}>CLEAR</button>
        <button className="bg-black" onClick={() => {setShowSearch(false);setSearch("");
}}>CANCEL</button>
      </div>
      
      <div className="flex items-center flex-wrap bg-white text-black justify-start gap-3 px-8 sm:px-16 md:px-32 lg:px-64">
        {
          filteredProducts.length > 0? (
            filteredProducts.map((product, index) => (
              <div key={index} className="pt-7 w-full sm:w-1/3 md:w-[24%] lg:w-[24%]">
                <ProductCard
                  id={product._id}
                  name={product.name}
                  price={product.price}
                  image={product.image[0]}
                />
              </div>
            ))
          ) : (search?(<div className="w-full "><div className="py-5 text-lg flex justify-center">No products available</div></div>):(""))
        }
      </div>
    </div>
  );
};

export default SearchBar;
