import jwt from "jsonwebtoken";
import Env from "../Config/envConfig.js";
import UserModel from "../Model/user.model.js";

export const ValidateToken = async (req, res, next) => {
  //middleware methods
  // headers
  try {
    const token = req.headers.authorization;
    const cleanToken = token.startsWith("Bearer ")
      ? token.split(" ")[1]
      : token;
    const { id } = jwt.verify(cleanToken, Env.jwtSecret);
    const user = await UserModel.findOne({ _id: id }).select("-password");
    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({message:"Internal server issue",err:error?.message})
  }
};
