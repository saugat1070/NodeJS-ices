import { Router } from "express";
import { registerUser,loginUser } from "../Controller/user.controller.js";
import { app } from "../main.js";
import { ValidateToken } from "../middleware/auth.middleware.js";


const userRouter = Router();

// userRouter.post("/url",controller_method)
// userRouter.route("/url").http_method()

userRouter.post("/create",registerUser);  // http://localhost:3000/api/create
userRouter.post("/login",loginUser);  // http://localhost:3000/api/login
userRouter.get("/profile",ValidateToken,(req,res)=>{
    if(!req.user){
        return res.status(401).json({message:"invalid token"});
    }
    return res.status(200).json({data:req.user})
});

// OAuth Service
// userRouter.get("/google",loginWithGoogle);
// // userRouter.get("/google/callback",handleGoogleCallback); // http://localhost:3000/api/google/callback
// userRouter.get("/google-callback",handleGoogleCallback);

export default userRouter;