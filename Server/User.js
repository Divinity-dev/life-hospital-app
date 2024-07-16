import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username:{type:string, unique:true, required:true},
        Email:{type:string, required:true, unique:true},
        password:{type:string, required:true,}
    },
    {timestamps: true}
)

module.exports = mongoose.model("User", UserSchema);