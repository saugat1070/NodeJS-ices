// Server create Garne
//you have to install express from npmjs.com


const express = require("express");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
// Database Connection 
// --> NoSql --> Mongodb

exports.Summation = (num1,num2)=>{
    return num1 + num2;
}

const mongodbConnectionString = process.env.MONGO_DB_URL;
mongoose.connect(mongodbConnectionString).then(()=>{
    console.log("Database connected Sucessfully");
}).catch((err)=>{
    console.log(`Error at Database creation: ${err}`);
})

app.listen(3000,()=>{ // portNumber and callback function
    console.log("Server created Successfully!!!!");
})