const mongoose=require('mongoose');
const messageChat= mongoose.Schema({
    chatName:String,
    convertion:[
        {
        message:String,
        timestamp:String,
        user:{
            displayName:String,
            email:String,
            photo:String,
            uid:String
        }
    }]
});
module.exports= mongoose.model('Conversation',messageChat)
