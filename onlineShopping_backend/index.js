

const express = require("express");
const app = express();
const mongoose = require("mongoose");

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

app.get("/api/test",()=>{
    console.log("test is successfully")
})

app.listen(process.env.PORT || 5000,()=>{
    console.log("backend sever is running")
})
