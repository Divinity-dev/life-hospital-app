import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Postupdate = () => {
  const [formdata, setFormData]=useState({})
  const [Image, setImage]= useState('')
  const navigate = useNavigate()
  const apiUrl = process.env.REACT_APP_API_URL;
  const handleImage = (e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const dataURL = reader.result; 
      setImage(dataURL);    
    };
    reader.readAsDataURL(file);
  }


  const handlechange = (e)=>{
     const value = e.target.value
     setFormData({...formdata,
      [e.target.name]:value
      
     })
  }
  const authToken = useSelector(state=>state.user.currentUser?.accessToken)
  const author = useSelector(state=>state.user.currentUser.user?.username)
  
  const config = {
    headers:{
      Authorization:`Bearer ${authToken}`
    }
}


const formData = async (e)=>{
e.preventDefault()
try {
    await axios.post(`${apiUrl}/api/post`, {...formdata, Image, Author:author}, config)
  navigate("/postlist")
} catch (error) {
  console.log(error)
}

}
  return (
    <div >
        <form action="" className='flex flex-col justify-center items-center m-4' onSubmit={formData}>
            <input type="text" name='Title' onChange={handlechange} className='border-2 w-1/2 boredr-black p-2 rounded-full mb-4' placeholder='Title'/>
            <input type="text" name='Body' onChange={handlechange} className='border-2 w-1/2 h-30 boredr-black p-2 pb-11 rounded-sm mb-4 placeholder' placeholder='Post'/>
            <input type="file" id='file'  onChange={handleImage} className='mb-2'/>
            
            <button className='bg-green-500 p-1 border-l-black rounded-xl w-32 '>submit</button>
        </form>
      
    </div>
  )
}

export default Postupdate
