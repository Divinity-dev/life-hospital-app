import User from "../models/User.js";
import express from "express";
import cryptojs from 'crypto-js'

const router = express.Router()
// Register
router.post("/register", async(req, res)=>{
    const user = new User({
        username:req.body.username,
        Email:req.body.Email,
        password:  cryptojs.AES.encrypt(req.body.password, process.env.crypto_key).toString(),
    })
try {
    const saveduser = await user.save();
    res.status(200).json(saveduser)
} catch (error) {
    console.log(err)
}
    
})

export default router;