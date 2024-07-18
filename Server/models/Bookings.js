import mongoose from "mongoose";
import nodemon from "nodemon";

const BookingSchema = new mongoose.Schema(
    {
        Fisrtname:{type:String, unique:true, required:true},
        Lastname:{type:String, unique:true, required:true},
        Gender:{type:String},
        Date:{type:Date},
        Phone:{type:String},
        Email:{type:String, required:true, unique:true},
        purpose:{type:String},
        Details:{type:String},
       Image:{type:String}
    },
    {timestamps: true}
)

export default mongoose.model("Booking", BookingSchema);