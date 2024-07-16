import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config()
const app = express();
mongoose.connect(process.env.Mongo_url).then(()=>{
    console.log("DB connected successfully")
}).catch((err)=>{
    console.log(err)
})

app.listen(3000, ()=>{
    console.log("Listening at post 3000")
})

