import express from "express";

import {fetchAllUsers,createUser,updateUser,deleteUser} from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.get("/",fetchAllUsers);

userRouter.get("/login",(req,res)=>{
	res.send("login");

});

userRouter.get("/register",(req,res)=>{

	res.send("register");

});

userRouter.put("/Users",updateUser);

userRouter.delete("/Users/:id",deleteUser);
export default userRouter;

