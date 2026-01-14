import mongoose from "mongoose";
import Env from "./envConfig.js";

async function dbConnection(){
    mongoose.connect(Env.dbUrl).then(()=>{
    console.log("Database Connection Success");
}).catch((err)=>{
    console.log("Error at Database Connection:",err.message)
})
}

export default dbConnection;