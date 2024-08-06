import User from "../models/User.js";
import express from "express";
import cryptojs from 'crypto-js'
import jwt from "jsonwebtoken"

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
    res.status(400).json(err)
}
    
})

//LOgin
router.post("/login", async(req,res)=>{
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        const decryptedPassword = cryptojs.AES.decrypt(user.password, process.env.crypto_key).toString(cryptojs.enc.Utf8);
        if (decryptedPassword === req.body.password) {
            const accessToken = jwt.sign({
                id: user._id,
                isAdmin: user.isAdmin},
                 process.env.jwt_key,
                {"expiresIn":"3D"})
            res.status(200).json({user, accessToken});
           

        } else {
            res.status(401).json({ error: 'Incorrect password' });
        }
        
        
    } catch (err) {
        console.log(err)
        res.status(401).json(err)
    }
   
})

export default router;