const express=require("express");
const userRouter=require("./routes/user")
const dotenv=require("dotenv").config();
const port=process.env.PORT;
const cors=require("cors");
const { MongoClient } = require('mongodb');


const app=express();
app.use(cors({origin:"*"}));
app.use(express.json());

const uri = 'mongodb+srv://municipality:keBSWr-y9j4d2gT@cluster0.ei9fjxv.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');
    } catch (err) {
        console.error('Error connecting to MongoDB Atlas', err);
    }
}

connectToDatabase();


app.get("/",(req, res)=>{
    console.log("Api is working fine...");
    res.send({message:"This page from backend..."})
});
app.use("/api/main", userRouter);

app.listen(port,()=>{console.log("server is connected to the port - "+port)})