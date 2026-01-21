// ODM operation --> Model
import UserModel from "../Model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Env from "../Config/envConfig.js";
// Take a request from user --> Controller
export const registerUser = async(req,res)=>{
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        return res.status(400).json({message:"Please provide name,email,password"});
    }
    // Check user exist on Database or not
    const user = await UserModel.findOne({email:email})
    if(user){
        return res.status(200).json({
            message: "User with this email is already created"
        });
    }
    // hash the password
    const hashedPassword = bcrypt.hashSync(password,10); // saltRound
    // Save into Database
    const userCreate = await UserModel.create({
        email : email,
        password : hashedPassword,
        name : name
    });
    if(!userCreate){
        return res.status(200).json({message:"Something Error occur at Database during creation"});
    }
    return res.status(200).json({
        message:"User created"
     });
}

export const loginUser = async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({message:"Email and password must be provided"});
    }
    // check if user exist or not
    const user = await UserModel.findOne({email:email});
    if(!user){
        return res.status(404).json({message:"Account is not found,please register first."});
    }
    const isPasswordTrue = bcrypt.compareSync(password,user.password);
    if(!isPasswordTrue){
        return res.status(401).json({message:"Incorrect password"});
    }
    const token = jwt.sign({id:user._id},Env.jwtSecret,{expiresIn:"1d"});
    return res.status(200).json({
        message:"Login successfull",
        token : token
    });
}

// export const loginWithGoogle = async(req,res)=>{
//     const CLIENT_ID = Env.google_client_id;
//     const REDIRECT_URI = Env.google_redirect_uri;
//     const url = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=profile%20email`;
//     res.redirect(url);
// }

// export const handleGoogleCallback = async (req,res)=>{

// }
