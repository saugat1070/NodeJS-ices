import mongoose from "mongoose";

// user Schema

//create Schema
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
})
//create model
const UserModel = mongoose.model("user",userSchema);
export default UserModel;