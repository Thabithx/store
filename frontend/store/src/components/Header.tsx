import { Link,NavLink } from "react-router-dom"
import assets from "../assets/assets"

const Header = () => {
  return (
    <div className="text-violet-600 bg-black flex flex-row justify-between py-5 items-center px-8 sm:px-16 md:px-32 lg:px-64">
      <Link to="/"><img src={assets.logo} alt="" /></Link>
      
      <ul className="flex flex-row gap-8 text-white">
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
         <img className="w-8 invert brightness-0" src={assets.search} alt="" />
         <img className="w-8 invert brightness-0" src={assets.profile} alt="" />
         <img className="w-9 invert brightness-0" src={assets.cart} alt="" />
      </div>
    </div>
  )
}

export default Header