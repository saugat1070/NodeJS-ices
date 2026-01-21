import express from "express";
import dbConnection from "./Config/dbConnection.js";
import userRouter from "./Routes/user.route.js";


export const app = express();
dbConnection();

app.use(express.json());


app.use("/",userRouter);