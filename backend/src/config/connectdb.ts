import mongoose from "mongoose";

const connectdb = async() => {
   try {
      await mongoose.connect(process.env.MONGODB_URL as string)
      console.log("DB CONNECTED!")
   } catch (error) {
      console.log(error)
   }
} 

export default connectdb