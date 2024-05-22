const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
    
    name:String,
    price:Number,
    image:String,
    discount:{
        type:Number,
        default:0
    },
    bgcolor:String,
    pannelcolor:String,
    textcolor:String
})

module.exports = mongoose.model("product", productSchema);
