import Bookings from "../models/Bookings.js";
import express from "express"
import { Authorization, verifytokken } from "../Verify.js";

const router = express.Router()

//get bookings
router.get("/:id", Authorization, async (req,res)=>{
    try {
        const booking = await Bookings.findById(req.params.id)
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }
        res.status(200).json(booking)
    } catch (error) {
        res.status(400).json(error)
    }

})

//delete
router.delete('/:id',Authorization, async (req,res)=>{
    try {
        await Bookings.findByIdAndDelete(req.params.id)
        res.status(201).json("Booking cancelled")
    } catch (error) {
        res.status(400).json(error)
    }
})

//create
router.post('/', Authorization, async (req,res)=>{
    const booking = new Bookings(req.body)
    try {
        const savedBooking = await booking.save()
        res.status(200).json(savedBooking)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }

})
 //get all bookings
 router.get('/',Authorization,  async (req, res) => {
    try {
        // Assuming `req.user` contains the user's ID after Authorization middleware
        const bookings = await Bookings.find({ UserID: req.user.id}); 
        res.status(200).json(bookings);
        
    } catch (error) {
        res.status(400).json(error);
    }
}); 

export default router