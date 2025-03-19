const express = require('express');
const mongoose=require("mongoose");

 const app = express();

 app.get("/ping", (req, res)=>{
    
    res.send("ping pong");
 })

 app.listen(8080, async()=>{
    try {
      await mongoose.connect("mongodb+srv://prasadthamarana2006:prasadasdfg@cluster0.c5s3m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
      console.log("server connected successfully")
    } catch (error) {
      console.log(error)
    }
 })