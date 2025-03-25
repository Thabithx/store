import { Request, Response } from "express";
import productmodel from "../models/productmodel";

const createProduct = async(req:Request,res:Response) => {
   try {
      const product = await productmodel.create(req.body)
      res.status(200).json(product)
   } catch (error) {
      res.status(500).json({message: String(error)})
   }
}

const allProducts = async(req:Request,res:Response) => {
   try {
      const products = await productmodel.find({})
      res.status(200).json(products)
   } catch (error) {
      res.status(500).json({message: String(error)})
   }
}

const singleProduct = async(req:Request,res:Response)=>{
   try {
      const product = await productmodel.findById(req.params.id)
      res.status(200).json(product)
   } catch (error) {
      res.status(500).json({message: String(error)})
   }
}

const updateProduct = async(req:Request,res:Response) => {
   try {
      const {id} = req.params
      const product = await productmodel.findByIdAndUpdate(id, req.body)
      const updatedproduct = await productmodel.findById(id)
      res.status(200).json(updatedproduct)
   } catch (error) {
      res.status(500).json({message: String(error)})
   }
}

const deleteProducts = async (req:Request,res:Response) => {
   try {
      const product = await productmodel.findByIdAndDelete(req.params.id)
      res.status(200).json({message:"product deleted sucessfully"})
   } catch (error) {
      res.status(500).json({message:String(error)})
   }
}

export {createProduct,allProducts,singleProduct,updateProduct,deleteProducts}