import { createSlice } from "@reduxjs/toolkit";

const bookinSlice = createSlice({
    name:"Booking",
    initialState:{
        Appointment:[]
    },
    reducers:{
        addBooking:(state, action)=>{
           state.Appointment.push(action.payload)
        },
        removebooking:(state, action)=>{
            const id = action.payload; 
            state.Appointment = state.Appointment.filter(appointment => appointment._id !== id);
        }
    }
})

export const {addBooking, removebooking} = bookinSlice.actions
export default bookinSlice.reducer