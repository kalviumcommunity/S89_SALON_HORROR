const express = require('express');
const mongoose=require("mongoose");
require('dotenv').config();
const router = require('./router');

 const app = express();
 app.use(express.json());
 app.use('/api',router);

 const port = 3010;
 app.get("/ping", (req, res)=>{
    res.send("ping pong ");
 })

app.listen(port, async() => {
  try {
    await mongoose.connect(process.env.MongoDB_URL)
    console.log("server connected successfully")
  } catch (error) {
    console.log(error)
  }
  console.log(`Example app listening at http://localhost:${port}`);
});



 app.get("/",(req,res)=>{
     res.status(201).send("connected to server successfully");
 })