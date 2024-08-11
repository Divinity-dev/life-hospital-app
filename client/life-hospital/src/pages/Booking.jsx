import React, { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { addBooking } from '../redux/bookingSlice'
import { useDispatch } from 'react-redux'

const Booking = () => {
const [details, setDetails] = useState({})
const [Gender, setGender] = useState("")
const [purpose, setPurpose] = useState("")

const authToken = useSelector(state=>state.user.currentUser?.accessToken)
const dispatch = useDispatch()
const config = {
    headers:{
      Authorization:`Bearer ${authToken}`
    }
}
const handlechange = (e)=>{
const value = e.target.value
setDetails({...details,
    [e.target.name]:value}
)
}

const handleSubmit = async (e)=>{
e.preventDefault()
const formattedDetails = {
  ...details,
  Gender,
  purpose,
  Time: details.Time ? details.Time.toString() : "" // Convert time to string
}

try {
    const res = await axios.post("http://localhost:3000/api/bookings",formattedDetails, config)
   dispatch(addBooking(res.data))
} catch (error) {
    console.log(error)
    
}
}


  return (
    <div className='flex flex-col justify-center items-center w-full px-40'>
      <h2 className='text-2xl font-bold mb-4'>Book an Appointment</h2>
      <form onSubmit={handleSubmit} action="" className='flex flex-col justify-center items-start w-full'>
        <input type="text" placeholder='First name' className='border-2 w-full mb-4 p-2' name='Firstname' onChange={handlechange}/>
        <input type="text" placeholder='Last name' className='border-2 w-full mb-4 p-2' name='Lastname' onChange={handlechange}/>
        <select  id="" className='border-2 w-96 mb-4 p-2' onChange={(e)=>{setGender(e.target.value); handlechange(e)}}>
        <option value="" >
                Gender
            </option>
            <option >
                Male
            </option>
            <option >
                Female
            </option>
        </select>
        <input type="date" className='border-1 w-96 mb-4' name='Date' onChange={handlechange}/>
        <input type="time" name='Time' onChange={handlechange}/>
        <input type="text" placeholder='Email' className='border-2 w-full mb-4 p-2' name='Email' onChange={handlechange} />
        <input type="text" placeholder='Phone No.' className='border-2 w-full mb-4 p-2' name='Phone' onChange={handlechange}/>
        <select className='border-2 w-full mb-4 p-2' onChange={(e)=>{setPurpose(e.target.value); handlechange(e) }}>
        <option value="Purpose for visit" >
            Purpose for visit
            </option>
            <option >
            Gynacology
            </option>
            <option >
            General treatment
            </option>
            <option value="">
            Ante-natal
            </option>
            <option >
            eye care
            </option>
            <option >
            others
            </option>
        </select>
        <input name="Details" type="text" placeholder='Please enter details here' className='border-2 w-full mb-4 p-2 h-28 placeholder' onChange={handlechange}/>
        <button className='bg-green-950 p-2 text-white cursor-pointer w-40 mb-6 rounded-full'>Submit</button>
      </form>
    </div>
  )
}
export default Booking
