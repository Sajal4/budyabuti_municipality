const express=require("express");
const userRouter=require("./routes/user")
const dotenv=require("dotenv").config();
const port=process.env.PORT;
const cors=require("cors");

const app=express();
app.use(cors({origin:"*"}));
app.use(express.json());

app.get("/",(req, res)=>{
    console.log("Api is working fine...");
    res.send({message:"This page from backend..."})
});
app.use("/api/main", userRouter);

app.listen(port,()=>{console.log("server is connected to the port - "+port)})