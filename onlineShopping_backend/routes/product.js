const Product = require("../models/Product")

const router = require("express").Router();


// CREATE
router.post("/productpost", async (req,res)=> 
{
    try{
        const newProduct = new Product(
                req.body
        )
        const savedProduct = await newProduct.save()
        res.status(201).json(savedProduct)
    }catch(err){
        res.status(500).json(err)
    }
}
)
// UPDATE
router.put("/:id",async (req,res)=>
{
    try{
        const updateProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true}
        );
        res.status(200).json(updateProduct)
    }
    catch(err){
        res.status(500).json(err)
    }
})

// DELETE
router.delete("/:id",async (req,res)=>
{
    try{
        const deleteProduct = await Product.findByIdAndDelete(
            req.params.id
        )
        res.status(200).json(deleteProduct)
    }
    catch(err){
        res.status(500).json(err)
    }
})
// GET PRODUCT by id 
router.get("/find/:id",async (req,res)=>{
    try{
        const findProduct = await Product.findById(req.params.id)
        res.status(200).json(findProduct)
    }catch(err){
        res.status(500).json(err)
    }
})
// GET ALL PRODUCT 
router.get("/find",async (req,res)=>{
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try{
        let products;
        if(qNew){
            products = await Product.find().sort({createdAt:-1}.limit(5))
        }else if(qCategory){
            products = await Product.find({categories:
                {
                    $in: [qCategory],
                },});
        }else{
            products = await Product.find();
        }
        
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = router