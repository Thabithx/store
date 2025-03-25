import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Shop from "./pages/Shop"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App