import Post from "../models/Post.js";
import express from "express"
import { verifytokken, Authorization, Admin } from "../Verify.js"


const router = express.Router()
//update
router.put("/:id",Authorization, async (req, res)=>{
     
        try {
            
            const updatedpost = await Post.findByIdAndUpdate(req.params.id, {
                $set:req.body
            }, {new:true})
          res.status(200).json(updatedpost)
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }}
)

//create
router.post("/", Admin, async(req,res)=>{
    const post = new Post(req.body)
    try {
        const savedPost = await post.save()
        res.status(200).json(savedPost)
    } catch (error) {
        res.status(400).json(error)
    }
})

//Delete
router.delete("/:id", Authorization, async(req,res)=>{
    try {
        await Post.findByIdAndDelete(req.params.id)
        res.status(204).json("post deleted successfully")
    } catch (error) {
        res.status(400).json(error)
    }
})

// get post
router.get("/:id", async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (error) {
        res.status(401).json(error)
    }
    
})

//get posts
router.get("/", async(req,res)=>{
    try {
        const posts = await Post.find()
        res.status(200).json(posts)
    } catch (error) {
      res.status(200).json(error)  
    }
})


export default router