const mongoose=require('mongoose')
const Schema=mongoose.Schema
const userShema= new Schema ({
    name:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
}) 

module.exports= mongoose.model('User',userShema);
