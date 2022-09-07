

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user")
const productRoute = require("./routes/product")

const dotenv = require("dotenv")
dotenv.config()
mongoose
.connect(
    process.env.MONGO_URL
)
.then(
    ()=>console.log("connect successfully")
)
.catch(
    (err)=>{
        console.log(err)
    }
)
// allow application to get json object
app.use(express.json())

// app.get("/api/test",()=>{
//     console.log("test is successfully")
// })
app.use("/api/products",productRoute)
app.use("/api/user",userRoute)

app.listen(process.env.PORT || 5000,()=>{
    console.log("backend sever is running")
})
