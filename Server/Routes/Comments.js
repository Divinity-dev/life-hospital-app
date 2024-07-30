import Comment from "../models/Comment.js";
import express from "express"
import { verifytokken, Authorization, Admin } from "../Verify.js"


const router = express.Router()
//update
router.put("/:id",Authorization, async (req, res)=>{
     
        try {
            
            const updatedComments = await Comment.findByIdAndUpdate(req.params.id, {
                $set:req.body
            }, {new:true})
          res.status(200).json(updatedComments)
        } catch (error) {
            res.status(500).json(error)
        }}
)

//create
router.post("/", verifytokken, async(req,res)=>{
    const Comments = new Comment(req.body)
    try {
        const savedComments = await Comments.save()
        res.status(200).json(savedComments)
    } catch (error) {
        res.status(400).json(error)
    }
})

//Delete
router.delete("/:id", Authorization, async(req,res)=>{
    try {
        await Comment.findByIdAndDelete(req.params.id)
        res.status(204).json("Comments deleted successfully")
    } catch (error) {
        res.status(400).json(error)
    }
})

// get Comment
router.get("/:id", Admin, async(req,res)=>{
    try {
        const Comments = await Comment.findById(req.params.id)
        res.status(200).json(Comments)
    } catch (error) {
        res.status(401).json(error)
    }
    
})

//get Commentss
router.get("/Comments", async(req,res)=>{
    try {
        const users = await Comment.find()
        res.status(200).json(users)
    } catch (error) {
      res.status(200).json(error)  
    }
})


export default router