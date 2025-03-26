const mongoose=require('mongoose');

const sillyItems =new mongoose.Schema({
    name:{
        type:String,
      required:true,
      trim:true
    },

    description:{
        type:String,
        required:true,
        trim:true
    },
    location:{
        type:String,
        required:true,
        trim:true
    },
    date:{
        type:Date,
        required:true
    }
})

const silly = mongoose.model("sillyItem",sillyItems);

module.exports=silly;