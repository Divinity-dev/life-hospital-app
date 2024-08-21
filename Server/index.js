import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoute from './Routes/authRoute.js'
import userRoute from "./Routes/userRoute.js"
import PostRoute from "./Routes/PostRoute.js"
import LikeRoute from "./Routes/LikeRoute.js"
import BookingRouthe from "./Routes/BookingRouthe.js"
import Comments from "./Routes/Comments.js"
import multer from 'multer';
import path from "path"


dotenv.config()
mongoose.connect(process.env.Mongo_url).then(()=>{
    console.log("DB connected successfully")
}).catch((err)=>{
    console.log(err)
})
const app = express();
app.use(express.static(path.join(__dirname, 'client/build')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});
app.use(express.json({ limit: '50mb' }));
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Backend is up and running!');
});
app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)
app.use("/api/post", PostRoute)
app.use("/api/like", LikeRoute)
app.use("/api/bookings", BookingRouthe)
app.use("/api/comment", Comments)


app.listen(3000, ()=>{
    console.log("Listening at post 3000")
})

