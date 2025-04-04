import { Link,NavLink } from "react-router-dom"
import assets from "../assets/assets"
import { useContext } from "react";
import { ShopContext } from "../context/Shopcontext";

const Header = () => {
   const context = useContext(ShopContext)
     if (!context) {
       throw new Error("useContext(ShopContext) must be used within a ShopContextProvider");
     }
     const {showSearch,setShowSearch,setSearch} = context
  return (
    <div className={`text-violet-600 bg-black flex-row justify-between py-5 items-center px-8 sm:px-16 md:px-32 lg:px-64 ${showSearch?"hidden":"flex"}`}>
      <Link to="/"><img onClick={() => setSearch("")} src={assets.logo} alt="" /></Link>
      
      <ul className="flex flex-row gap-8 text-white">
         <NavLink to="/shop" className="flex flex-col items-center">
            <p>SHOP</p>
            <hr className="w-3/4 hidden"/>
         </NavLink>
         <NavLink to="/nike" className="flex flex-col items-center">
            <p>NIKE</p>
            <hr className="w-3/4 hidden"/>
         </NavLink>
         <NavLink to="/adidas" className="flex flex-col items-center">
            <p>ADDIDAS</p>
            <hr className="w-3/4 hidden"/>
         </NavLink>
         <NavLink to="/puma" className="flex flex-col items-center">
            <p>PUMA</p>
            <hr className="w-3/4 hidden"/>
         </NavLink>
      </ul>
      <div className="flex flex-row items-center gap-3">
         <img className="w-8 invert brightness-0" onClick={()=>{setShowSearch(true)}} src={assets.search} alt="" />
         <img className="w-8 invert brightness-0" src={assets.profile} alt="" />
         <Link to={"/cart"}>
            <img className="w-9 invert brightness-0" src={assets.cart} alt="" />
         </Link>
      </div>
    </div>
  )
}

export default Header