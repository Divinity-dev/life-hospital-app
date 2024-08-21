import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username:{type:String, unique:true, required:true},
        Email:{type:String, required:true, unique:true},
        isAdmin:{type:Boolean, default:false},
        password:{type:String, required:true,},
        Image:{type:String}
    },
    {timestamps: true}
)

export default mongoose.model("User", UserSchema);