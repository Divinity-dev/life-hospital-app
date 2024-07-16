import User from "../models/User.js";
import express from "express"
import { verifytokken, Authorization, Admin } from "../Verify.js"
import CryptoJS from "crypto-js"

const router = express.Router()

router.put("/:id",Authorization, async (req, res)=>{
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.crypto_key).toString() 
        try {
            
            const updateduser = await User.findByIdAndUpdate(req.params.id, {
                $set:req.body
            }, {new:true})
          res.status(200).json(updateduser)
        } catch (error) {
            res.status(500).json(error)
        }}
}


)
export default router