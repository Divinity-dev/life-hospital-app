import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
    {
        Title:{type:string, unique:true,},
        Body:{type:string, required:true, },
        Author:{type:string, required:true,}
    },
    {timestamps: true}
)

module.exports = mongoose.model("Post", PostSchema);