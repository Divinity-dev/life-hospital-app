import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
    {
        UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        postID: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
        comment: { type: String, required: true, trim: true }
    },
    { timestamps: true }
);

export default mongoose.model("Comment", CommentSchema);
