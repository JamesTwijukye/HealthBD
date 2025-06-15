import express from "express";
import userRouter from "./userRoutes.js";

const route = express.Router();

	route.use("/auth",userRouter);
	route.use("/user",userRouter);
	export default route;

