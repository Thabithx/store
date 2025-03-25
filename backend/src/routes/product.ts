import {Router} from "express";
import { createProduct,allProducts,singleProduct,updateProduct, deleteProducts } from "../controller/productController";

const productrouter = Router()

productrouter.post("/createproduct",createProduct)
productrouter.get("/products",allProducts)
productrouter.get("/products/:id",singleProduct)
productrouter.put('/products/:id',updateProduct)
productrouter.delete('/products/:id',deleteProducts)

export default productrouter