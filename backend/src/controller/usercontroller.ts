import { Request, Response } from "express"

const userpage = (req:Request,res:Response)=>{
   res.send("userpage")
}

const singleuser = (req:Request,res:Response)=>{
   res.send("single user page")
}

export {userpage,singleuser}