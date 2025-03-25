import { Link,NavLink } from "react-router-dom"
import assets from "../assets/assets"

const Header = () => {
  return (
    <div className="text-violet-600 bg-blue-700 flex flex-row justify-between py-5 items-center px-8 sm:px-16 md:px-32 lg:px-64">
      <Link to="/"><img src={assets.logo} alt="" /></Link>
      
      <ul className="flex flex-row gap-8 text-white">
         <NavLink to="/shop">
            <p>NIKE</p>
            <hr className="w-3/4"/>
         </NavLink>
         <NavLink to="/shop">
            <p>ADDIDAS</p>
            <hr className="w-3/4"/>
         </NavLink>
         <NavLink to="/shop" className="flex flex-col items-center">
            <p>PUMA</p>
            <hr className="w-3/4"/>
         </NavLink>
      </ul>
      <div className="flex flex-row">
         <img className="w-10 invert brightness-200" src={assets.profile} alt="" />
         <img className="w-10 invert brightness-200" src={assets.liked} alt="" />
         <img className="w-10 invert brightness-200" src={assets.cart} alt="" />
      </div>
    </div>
  )
}

export default Header