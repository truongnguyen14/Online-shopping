const router = require("express").Router();


// get
router.get("/usertest",(req,res)=>
    {
        res.send("user test is successfully ")
    }
)
// post 
router.post("/userposttest",(req,res)=>
    {
        const username = req.body.username
        console.log(username)  
        res.send("your user name is " + username)
    }
)

module.exports = router