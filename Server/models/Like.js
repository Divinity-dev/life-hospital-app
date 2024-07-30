import mongoose from "mongoose";

const LikeSchema = new mongoose.Schema(
    {
        UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        postID: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true }
    },
    { timestamps: true }
);

LikeSchema.index({ UserID: 1, postID: 1 }, { unique: true });

export default mongoose.model("Like", LikeSchema);
