// const express = require("express"); // CommonJs method , ESmodule method --> famous
// import express from "express"; // Esmoudle; default --> commonJs method huncha, you have to convert commonjs into module
import express from "express";
import mongoose from "mongoose";
import cors from "cors"

const app = express();

// console.log("Hey its me Saugat"); // for server auto restart --> nodemailer // node --watch index.js
const db_url = "mongodb+srv://saugatgiri1070_db_user:saugat1070@cluster0.u72k4tb.mongodb.net/?appName=Cluster0";
mongoose.connect(db_url).then(()=>{
    console.log("Database connection success");
    console.log(`Database host:${mongoose.connection.host}`)
}).catch((err)=>{
    console.log(`Error at Database:${err.message}`)
}) // Promise --> async --> time

app.use(express.json()) // middleware call
app.use(cors({ // cors -> third party
    origin : "*" // allow globally 
}));

// CRUD --> Create,Read,Update and Delete
const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String
    }
},{
    timestamps : true
});

const TodoModel = mongoose.model("todo",todoSchema);
// Create

app.post("/create",async (req,res)=>{ // Create
    // console.log(req.body);
    const {title,description} = req.body; // {name:"Saugat",class:"10"}
    if(!title || !description){
        return res.status(200).json({
            message:"Title and description must be provided"
        });
    }
    const todoCreate = await TodoModel.create({
        title : title,
        description : description
    }) // ORM and ODM
    if(!todoCreate){
        return res.status(403).json({
            message : "Something wrong at Database Schema Creation"
        });
    }

    return res.status(200).json({
        message : "Todo task created successfully"
    });
});

// Read
app.get("/todo",async (req,res)=>{
    const todo = await TodoModel.find();
    return res.status(200).json({
        message:"Data fetched.",
        data : todo
    })
})
// req.body
// req.params
// Update
app.patch("/todo/:id",async(req,res)=>{    // http://localhost:3000/todo/69666f8ad740c449e65dd87f  <-- params
    const {id} = req.params;
    const {description} = req.body
    if(!id || !description){
        return res.status(400).json({
            message:"Id and descriptioin chae chaincha"
        })
    }
    const udpateRes = await TodoModel.findByIdAndUpdate(id,{
        description : description
    });
    if(!udpateRes){
        return res.status(403).json({
            message:"Something Wrong during update"
        })
    }
    
    return res.status(200).json({message:"update done",data:udpateRes});
})  
// Delete
app.delete("/todo/:id",async (req,res)=>{
    const {id} = req.params;
    if(!id){
        return res.status(400).json({
            message:"Id chae chaincha"
        })
    }
    const deleteSchema = await TodoModel.findOneAndDelete({_id:id});
    if(!deleteSchema){
        return res.status(403).json({
            message : "Delete garda issue aayi"
        });
    }
    return res.status(200).json({
        message : "Delete complete"
    })
})
app.listen(3000,()=>{
    console.log("Server Running at port:3000")
}) // <-- First para = portNumber and second = Callback funciton