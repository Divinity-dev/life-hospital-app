import mongoose from "mongoose";

const LikeSchema = new mongoose.Schema(
    {
        UserID:{ type:String, unique:true, required:true},
        postID:{ type:String, unique:true, required:true}
    },
    {timestamps: true}
)

export default mongoose.model("Like", LikeSchema);