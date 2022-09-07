const Cart = require("../models/Cart")

const router = require("express").Router();

// CREATE

router.post("/cartpost", async (req,res)=>{
    try{
        const createCart =  new Cart.create(req.body)
        const saveCart = await createCart.save() 
        res.status(201).json(saveCart)
    }catch(err){
        res.status(500).json(err)
    }
})

// UPDATE

router.get("/update/:id", async (req,res)=>{
    try{
        const updateCart = new Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body
            },
            {new: true}
        )
        res.status(201).json(updateCart)
    }catch(err){
        res.status(500).json(err)
    } 
})

// DELETE

router.delete("/delete/:id", async (req,res)=>
{
    try{
        const deleteCart = Cart.findByIdAndDelete(
            req.params.id
        )

        res.status(201).json(deleteCart)
    }catch(err){
        res.status(500).json(err)
    }
})

// FIND CART BY ID

router.get("/find/:id", async (req,res)=>
{
    try{
        const findCart = await Cart.findOne(
            {userId: req.params.userId}
        )
        res.status(201).json(findCart)
    }catch(err){
        res.status(500).json(err)
    }
}
)
// FIND ALL CART 
router.get("/find", async (req,res)=>
{
    try{
        const findAllcarts = await Cart.find()
        res.status(201).json(findAllcarts)
    }catch(err){
        res.status(500).json(err)
    }
}
)