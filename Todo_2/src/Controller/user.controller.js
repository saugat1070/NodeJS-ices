// ODM operation --> Model
import UserModel from "../Model/user.model.js";
// Take a request from user --> Controller
export const registerUser = async(req,res)=>{
    console.log(req.body)
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
    //TODO: malai password hash garna baaki cha
    const userCreate = await UserModel.create({
        email : email,
        password : password,
        name : name
    });
    if(!userCreate){
        return res.status(200).json({message:"Something Error occur at Database during creation"});
    }
    return res.status(200).json({
        message:"User created"
     });
}
// hash the password
// Save into Database