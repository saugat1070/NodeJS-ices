import { Router } from "express";
import { registerUser } from "../Controller/user.controller.js";


const userRouter = Router();

// userRouter.post("/url",controller_method)
// userRouter.route("/url").http_method()

userRouter.post("/create",registerUser);  // http://localhost:3000/api/create


export default userRouter;