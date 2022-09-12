const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    product_id:{type:String, unique: true, trim: true,required:true},
    title:{ type: String, required: true, unique:true },
    desc:{type:String,required: true,unique:true},
    img:{ type:Object,required: true },
    category:{ type: String,required: true },
    price:{ type:Number,required: true },
    content:{ type:String,required: true},
    checked:{
        type:Boolean,
        default: false
    },
    sold:{
        type: Number,
        default: 0
    }
    },
    {timestamps: true}
);

module.exports = mongoose.model("product",ProductSchema)