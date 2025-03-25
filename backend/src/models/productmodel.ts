import mongoose from "mongoose";

const productschema = new mongoose.Schema(
   {
      name:{type:String,required:true},
      price:{type:Number,required:true},
      description:{type:String,required:true},
      quantity:{type:Number,required:true},
      size:{type:Array,required:true},
      image:{type:Array,required:true},
      category:{type:String,required:true}
   }
)

const productmodel = mongoose.model("product",productschema)
export default productmodel