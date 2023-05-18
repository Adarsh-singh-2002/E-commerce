const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter product name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please enter product Description"]
    },
    price:{
        type:Number,
        required:[true,"Please enter product Price"],
        maxLength:[8,"Price cannot exceed 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:{
       public_id:{
        type:String,
        required:true
       },
       url:{
        type:String,
        required:true
       }
    },
})