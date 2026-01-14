import express from "express";
import dbConnection from "./Config/dbConnection.js";


export const app = express();
dbConnection();