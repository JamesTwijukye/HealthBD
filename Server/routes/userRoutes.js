import express from "express";

import {createUser, deleteUser, fetchAllUsers,} from "../controllers/userControllers.js";
import {SigninUser} from "../controllers/userControllers.js";
import { AddUser } from "../controllers/userControllers.js";

const userRouter = express.Router();
userRouter.post("/register", createUser);
userRouter.post("/Signin",SigninUser);
userRouter.post("/AddUser",AddUser);
userRouter.delete("/deleteUser/:id",deleteUser);
userRouter.get("/fetchUsers",fetchAllUsers);



export default userRouter;

