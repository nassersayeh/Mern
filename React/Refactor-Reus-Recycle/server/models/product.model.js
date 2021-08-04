const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema(
{
    title:{
        type: String
    },
    price:{
        type:Number
    },
    desc:{
        type: String
    }
},
    {timeStamp : true}
);

module.exports.Product = mongoose.model("Product", ProductSchema);
