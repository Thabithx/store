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
      </Routes>
      <Footer/>
    </>
  )
}

export default App