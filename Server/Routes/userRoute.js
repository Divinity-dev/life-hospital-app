import User from "../models/User.js";
import express from "express"
import { verifytokken, Authorization, Admin } from "../Verify.js"
import CryptoJS from "crypto-js"

const router = express.Router()



router.put("/:id",Authorization, async (req, res)=>{
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.crypto_key).toString()
       }
        try {
            
            const updateduser = await User.findByIdAndUpdate(req.params.id, {
                $set:req.body
            }, {new:true})
          res.status(200).json(updateduser)
        } catch (error) {
            res.status(500).json(error)
        }}
)

//Delete
router.delete("/:id", Authorization, async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(204).json("user deleted successfully")
    } catch (error) {
        res.status(400).json(error)
    }
})

//get users
router.get("/users", Admin, async(req,res)=>{
  try {
      const users =await User.find()
      res.status(200).json(users)
  } catch (error) {
    res.status(200).json(error)  
  }
})

// get user
router.get("/:id", Admin, async(req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(401).json(error)
    }
    
})



 // Get stats
 router.get("/stats",Admin, async (req, res)=>{
    const date = new Date();
    const prevyear = new Date(date.setFullYear(date.getFullYear() - 1));
    console.log(date)
    try{
      const data = await User.aggregate([
        {$match: {createdAt: {$gte: prevyear}}},
        {
          $project:{
            month: { $month: "$createdAt"},
          }
        },
        {
          $group:
          {_id: "$month",
          total: {$sum: 1}}
        }
      ])
      res.status(200).json(data)

    }catch(err){
      console.log(err)
      res.status(500).json(err)
    }
    
  })

export default router