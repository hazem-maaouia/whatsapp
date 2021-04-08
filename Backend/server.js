const express= require('express')
const connectDB = require('./config/connectDB')
const authRouter=require('./routes/authRouter')
const Pusher= require('pusher');
const mongoose  = require('mongoose');
const app=express()
const pusher = new Pusher({
    appId: "1183248",
    key: "9378bfa789c228c1528c",
    secret: "2801b9cfd5c04f46e502",
    cluster: "eu",
    useTLS: true
  });

app.use(express.json())
app.use("/uploads",express.static("uploads"))// server
app.use('/api/auth',authRouter)


//3 set up the env variables
require('dotenv').config({path:'./config/.env'})
//2 connect the DB
connectDB();

// const db=mongoose.Connection;

// const msgCollection=db.collection("messagecontents");
// const changeStream=msgCollection.watch();

//1 start the server 
const PORT=process.env.PORT || 5000

app.listen(PORT, err => {
    err ? console.error(err) :
    console.log(`the server is running on port ${PORT}`)
})