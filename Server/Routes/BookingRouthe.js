import Bookings from "../models/Bookings";
import express from "express"
import { Authorization } from "../Verify";

const router = express.Router()
//create
router.post('/Bookings', Authorization, async (req,res)=>{
    const booking = new Bookings(req.body)
    try {
        const savedBooking = await booking.save()
        res.status(200).json(savedBooking)
    } catch (error) {
        res.status(400).json(error)
    }

//delete
router.delete('/:id',Authorization, async (req,res)=>{
    try {
        await Bookings.findByIdAndDelete(req.params.id)
        res.status(201).json("Booking cancelled")
    } catch (error) {
        res.status(400).json(error)
    }
})

//get bookings
router.get("/:id", Authorization, async (req,res)=>{
    try {
        const booking = Bookings.findById(req.params.id)
        res.status(200).json(booking)
    } catch (error) {
        res.status(400).json(errorS)
    }

})
  //get all bookings
  router.get('/', Authorization, async(req,res)=>{
    try {
        const bookings = Bookings.find()
        res.status(200).json(bookings)
    } catch (error) {
        res.status(400).json(error)
    }
    

  })  

})