import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
    {
        Title:{type:String, unique:true,},
        Body:{type:String, required:true, },
        Author:{type:String, required:true,},
        Image:{type:String}
    },
    {timestamps: true}
)

export default mongoose.model("Post", PostSchema);