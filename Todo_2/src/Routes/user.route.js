import { Router } from "express";
import { registerUser,loginUser } from "../Controller/user.controller.js";



const userRouter = Router();

// userRouter.post("/url",controller_method)
// userRouter.route("/url").http_method()

userRouter.post("/create",registerUser);  // http://localhost:3000/api/create
userRouter.post("/login",loginUser);  // http://localhost:3000/api/login

export default userRouter;