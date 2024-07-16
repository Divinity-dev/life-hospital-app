import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoute from './Routes/authRoute.js'
import userRoute from "./Routes/userRoute.js"
// import PostRoute from "./Routes/PostRoute.js"
// import LikeRoute from "./Routes/LikeRoute.js"

dotenv.config()
mongoose.connect(process.env.Mongo_url).then(()=>{
    console.log("DB connected successfully")
}).catch((err)=>{
    console.log(err)
})
const app = express();
app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)


app.listen(3000, ()=>{
    console.log("Listening at post 3000")
})

