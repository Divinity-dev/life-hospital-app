import React, { useState } from 'react'
import axios from 'axios'
import { useParams,useNavigate  } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Editpost = () => {
const [Data, setData]= useState({})
const [Image, setImage]= useState('')
const navigate =useNavigate()
const apiUrl = process.env.REACT_APP_API_URL;
const {id}=useParams()
const token =useSelector(state=>state.user.currentUser?.accessToken)
    const config = {
      headers:{
          Authorization:`Bearer ${token}`
      }
    }
    const author = useSelector(state=>state.user.currentUser.user?.username)

const handlechange=(e)=>{
const value = e.target.value
setData({
    ...Data,
    [e.target.name]:value
})
}

const handleImage=(e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const dataURL = reader.result; 
      setImage(dataURL);    
    };
    reader.readAsDataURL(file);
}



const formData = async (e)=>{
    e.preventDefault()
try {
    const res = await axios.put(`${apiUrl}/api/post/${id}`,{...Data,Author:author, Image}, config)
    navigate('/postlist')
} catch (error) {
    console.log(error)
}
}

  return (
    <div>
      <form action="" className='flex flex-col justify-center items-center m-4' onSubmit={formData }>
            <input type="text" name='Title' onChange={handlechange} className='border-2 w-1/2 boredr-black p-2 rounded-full mb-4' placeholder='Title'/>
            <input type="text" name='Body' onChange={handlechange} className='border-2 w-1/2 h-40 boredr-black p-2 rounded-sm mb-4 placeholder' placeholder='Post'/>
            <input type="file"  onChange={handleImage}/>
            <button className='bg-green-500 p-1 border-l-black rounded-xl w-32 '>submit</button>
        </form>
    </div>
  )
}

export default Editpost
