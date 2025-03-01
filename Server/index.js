import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import DBconnect from"./dbconfig/server.js"
import route from "./routes/index.js";

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(morgan("dev"))

DBconnect();
app.get("/addition",(req,res)=>{
    const x =5;
    const y =6;
    const result = x+y;

    res.json([{
        city:"kampala",
        location:"Uganda",
        result:result,
   



    },
]);
});

app.use(route);
 
app.listen(port, ()=>{

console.log(`listening to operations at port ${port}`);
});



