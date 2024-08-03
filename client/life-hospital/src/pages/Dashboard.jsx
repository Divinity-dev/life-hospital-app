import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { removebooking } from '../redux/bookingSlice'
import { useDispatch } from 'react-redux'

const Dashboard = () => {
    const bookings = useSelector(state=>state.booking.Appointment)
    const user = useSelector(state=>state.user.currentUser.user.username)
    const token = useSelector(state=>state.user.currentUser?.accessToken)
    const dispatch = useDispatch()
    const config ={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
   const handleclick = async (id)=>{
    try {
        await axios.delete(`http://localhost:3000/api/bookings/${id}`, config)
         dispatch(removebooking(id))
    } catch (error) {
        console.log(error)
    }
   }

  return (
    <div>
        <div className='flex flex-col justify-center items-center'>
        <p className='text-center font-semibold italic mb-4'>
        welcome @{user}, you can add a picture to your profile here...
      </p>
      <div className='flex mb-4'>
      <input type="file" className=' mr-2'/>
      <button className='bg-gray-500 p-1 border-l-black rounded-xl w-32 '>upload</button>
      </div>
       </div>
       {
        bookings.map((item)=>(
            <div key={item._id} className='bg-green-500 text-white font-bold flex justify-center items-center italic mb-4'>
                <p>
                    You have an Appointment with life hospital on {item.Date}, at {item.Time}, over {item.purpose}.
                    <button className='bg-red-500 p-1 border-l-black rounded-xl w-28 ml-4 ' onClick={()=>{handleclick(item._id)}}>cancel</button>
                </p>
                </div>
        ))
       }
      
    </div>
  )
}

export default Dashboard
