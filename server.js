const express = require('express');

const app = express();

app.get('/ping',(req,res)=>{
    try{
        res.status(200).send("pong")
    }catch(err){
        res.status(200).send({message: "something went wrong"})
    }
})


app.listen(8000,async()=>{
    try{
      await connect();
      console.log('server is connected');
    }catch(err){
    console.log('server is not connected', error);
    }
})