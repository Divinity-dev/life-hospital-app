import mongoose from "mongoose";
import nodemon from "nodemon";

const BookingSchema = new mongoose.Schema(
    {
        Firstname:{type:String,  required:true},
        Lastname:{type:String,  required:true},
        UserID:{type:mongoose.Schema.Types.ObjectId, ref:'User', unique:true},
        Gender:{type:String},
        Date:{type:Date},
        Time:{type:String},
        Phone:{type:String},
        Email:{type:String, required:true},
        purpose:{type:String},
        Details:{type:String},
    },
    {timestamps: true}
)

export default mongoose.model("Booking", BookingSchema);