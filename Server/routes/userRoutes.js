import express from "express";

import {createUser, resetPassword} from "../controllers/userControllers.js";
import {SigninUser} from "../controllers/userControllers.js";
import { AddUser } from "../controllers/userControllers.js";

const userRouter = express.Router();
userRouter.post("/register", createUser);
userRouter.post("/Signin",SigninUser);
userRouter.post("/ResetPassword",resetPassword);
userRouter.post("/AddUser",AddUser);



export default userRouter;

