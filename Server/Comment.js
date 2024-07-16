import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
    {
        UserID:{ type:String, unique:true, required:true},
        postID:{ type:String, unique:true, required:true}
    },
    {timestamps: true}
)

module.exports = mongoose.model("Comment", CommentSchema);