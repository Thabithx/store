import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Shop from "./pages/Shop"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Nike from "./pages/Nike"
import Adidas from "./pages/Adidas"
import Puma from "./pages/Puma"
import SearchBar from "./components/SearchBar"
import SingleProduct from "./pages/SingleProduct"
import Login from "./pages/Login"
import Signup from "./pages/Signup"


const App = () => {
  return (
    <>
      <Header/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/nike" element={<Nike/>}></Route>
        <Route path="/adidas" element={<Adidas/>}></Route>
        <Route path="/puma" element={<Puma/>}></Route>
        <Route path="/product/:id" element={<SingleProduct/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App