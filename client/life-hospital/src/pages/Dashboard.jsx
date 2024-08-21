import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { removebooking } from '../redux/bookingSlice'
import { useDispatch } from 'react-redux'
import {addBooking} from '../redux/bookingSlice'


const Dashboard = () => {
    const [Image,setImage]=useState('')
    const [books, setbooks]= useState([])
    const user = useSelector(state=>state.user.currentUser.user?.username)
    const token = useSelector(state=>state.user.currentUser?.accessToken)
    const id =useSelector(state=>state.user.currentUser?.user._id)
    const handleImage = (e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          const dataURL = reader.result; 
          setImage(dataURL);    
        };
        reader.readAsDataURL(file);
      }
      const apiUrl = process.env.REACT_APP_API_URL;
  const dispatch = useDispatch()
    
    const config ={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }

    useEffect(()=>{
      const getBookings = async()=>{
        try {
          const res= await axios.get(`${apiUrl}/api/bookings`,config)
          console.log(res.data)
          setbooks(res.data)
          dispatch(addBooking(res.data))
        } catch (error) {
          console.log(error)
        }
      }
      getBookings()
    },[ dispatch, token])
   const handleclick = async (id)=>{
    try {
        await axios.delete(`${apiUrl}/api/bookings/${id}`, config)
         dispatch(removebooking(id))
    } catch (error) {
        console.log(error)
    }
   }
   const handleSubmit= async (e)=>{
    e.preventDefault()
       try {
        const res = await axios.put(`${apiUrl}/api/user/${id}`,{Image},config)
        console.log(res.data)
        
       } catch (error) {
        console.log(error)
       }
   }
   const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    
    return `${formattedDate} `
};

  return (
    <div className='p-4'>
        <div className='flex flex-col justify-center items-center '>
        <p className='text-center font-semibold italic mb-4'>
        welcome @{user}, you can add a picture to your profile here...
      </p>
      <div className='flex mb-4 px-8'>
      <input type="file"  onChange={handleImage}/>
      <button type="button" className='bg-gray-500 p-1 border-l-black rounded-xl w-32 ' onClick={handleSubmit}>upload</button>
      </div>
       </div>
       {
        books?.map((item)=>(
            <div key={item._id} className='bg-green-500 text-white font-bold flex justify-center items-center italic mb-4'>
                <p>
                    You have an Appointment with life hospital on {formatDate(item.Date)}, at {item.Time}, over {item.purpose}.
                    <button className='bg-red-500 p-1 border-l-black rounded-xl w-28 ml-4 ' onClick={()=>{handleclick(item._id)}}>cancel</button>
                </p>
                </div>
        ))
       }
      
    </div>
  )
}

export default Dashboard
