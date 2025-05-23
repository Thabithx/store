import express from "express"
import userrouter from "./routes/user"
import dotenv from 'dotenv'
import connectdb from "./config/connectdb"
import productrouter from "./routes/product"
var cors = require('cors')

dotenv.config()
const app = express()
const PORT = process.env.PORT

app.use(express.json())

var corsOptions = {
   origin: ['http://localhost:5173'],
   optionsSuccessStatus: 200
 }

app.use(cors(corsOptions))

app.listen(PORT,()=>{
   console.log(`server running at http://localhost:${PORT}`)
})
connectdb()

app.get("/",(req,res)=>{
   res.send("welcome to homepage")
})

app.use("/api/user",userrouter)
app.use("/api/product",productrouter)