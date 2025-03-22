const express = require('express');
const mongoose=require("mongoose");
require('dotenv').config();

 const app = express();

 app.get("/ping", (req, res)=>{
    res.send("ping pong ");
 })

 app.listen(8080, async()=>{
    try {
      await mongoose.connect(process.env.MongoDB_URL)
      console.log("server connected successfully")
    } catch (error) {
      console.log(error)
    }
 })

 app.get("/",(req,res)=>{
     res.status(201).send("connected to server successfully");
 })