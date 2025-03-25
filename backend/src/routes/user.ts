import { Router } from "express";
import {userpage,singleuser} from "../controller/usercontroller";

const userrouter = Router()

userrouter.get('/',userpage)

userrouter.get('/:id',singleuser)

export default userrouter