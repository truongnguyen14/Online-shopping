
const Products = require('../models/ProductModel')
var mongoose = require('mongoose');

const productCtrl = {
    getProducts: async(req, res) => {
        try{
            const products = await Products.find()
            res.json({products: products})
        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    createProducts: async(req, res) => {
        try{
            const {product_id, title, price, desc, content, img, category} = req.body;
          
    
            if(!img) return res.status(400).json({msg:"No image uploaded"})

            const product = await Products.findOne({product_id})
            if(product) return res.status(400).json({msg:"This product is already exist"})
            const newProduct = new Products({
               product_id, title, price, desc, content, img, category
            })
            await newProduct.save()
            console.log("create product sucessfully")
        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    deleteProducts: async(req, res) => {
        try{
            var objectId = mongoose.Types.ObjectId(req.params.id.trim());
            await Products.findByIdAndDelete(objectId)
            res.json({msg:"Deleted a Product"})
        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    updateProduct: async(req, res) => {
        try{
              const {product_id, title, price, desc, content, img, category} = req.body;
              if(!img) return res.status(400).json({msg:"No image upload"})
              var objectId = mongoose.Types.ObjectId(req.params.id.trim());
              await Products.findByIdAndUpdate(objectId,{product_id, title, price, desc, content, img, category})
              res.json({msg: "Update a product"})
        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
}

module.exports = productCtrl