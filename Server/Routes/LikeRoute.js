import Like from "../models/Like.js";
import express from "express"
import { verifytokken, Authorization, Admin } from "../Verify.js"


const router = express.Router()
//update
router.put("/:id",verifytokken, async (req, res)=>{
     
        try {
            
            const updatedLike = await User.findByIdAndUpdate(req.params.id, {
                $set:req.body
            }, {new:true})
          res.status(200).json(updatedLike)
        } catch (error) {
            res.status(500).json(error)
        }}
)

//create
router.post("/", verifytokken, async(req,res)=>{
    const like = new Like(req.body)
    try {
        const savedLike = await like.save()
        res.status(200).json(savedLike)
    } catch (error) {
        res.status(400).json(error)
    }
})

//Delete
router.delete("/:id", verifytokken, async(req,res)=>{
    try {
        await Like.findByIdAndDelete(req.params.id)
        res.status(204).json("Like deleted successfully")
    } catch (error) {
        res.status(400).json(error)
    }
})

// get Like
router.get("/:id", verifytokken, async(req,res)=>{
    try {
        const like = await Like.find({postID:req.params.id})
        res.status(200).json(like)
    } catch (error) {
        console.log(error)
        res.status(401).json(error)
    }
    
})

//get Likes
router.get("/posts", verifytokken, async(req,res)=>{
    try {
        const users = await Post.find()
        res.status(200).json(users)
    } catch (error) {
      res.status(200).json(error)  
    }
})


export default router