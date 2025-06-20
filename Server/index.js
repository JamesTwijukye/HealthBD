import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import cors from "cors"
import DBconnect from"./dbconfig/server.js"
import route from "./routes/index.js";

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(morgan("dev"))
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: "*",
}));

DBconnect();

// Middleware to parse JSON bodies
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(route);
app.listen(port, ()=>{
console.log(`listening to operations at port ${port}`);
});



