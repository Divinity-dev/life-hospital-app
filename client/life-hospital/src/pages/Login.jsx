import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { loginSuccess, loginfailure, loginStart } from '../redux/userSlice'
import { useDispatch } from 'react-redux'
import axios from "axios"


const Login = () => {
  const dispatch = useDispatch()
 const [user, setUser] = useState({})
 const handlechange = (e)=>{
  const value = e.target.value
  setUser(
    {...user,
    [e.target.name]:value}
  )
}
const handleSubmit = async (e)=>{
 e.preventDefault()
 try {
  const res = await axios.post("http://localhost:3000/api/auth/login",user)
  console.log(res.data)
  dispatch(loginSuccess(res.data))
 } catch (error) {
  dispatch(loginfailure(error))
 }
}


  return (
    <div className='flex justify-center items-center bg-[url(https://img.freepik.com/free-photo/health-still-life-with-copy-space_23-2148854034.jpg?t=st=1721809035~exp=1721812635~hmac=2bf7f91574c72d415705fcd241c0d5ea8976f072d81a2f79b694f9afa2aae6e3&w=1060)] object-cover  bg-cover bg-center bg-no-repeat bg-blend-overlay  from-black/100 to-black/100 '>
<div className='flex flex-col justify-center items-left w-1/3 h-1/3 mt-52 p-4'>
      <h2 className='text-2xl font-bold mb-5'>SIGN IN</h2>
      <form action="" className='flex flex-col justify-center items-start mb-5' onSubmit={handleSubmit}>
        <input type="text" placeholder='username' className='w-full p-3 mb-5' name="username" onChange={handlechange}/>
        <input type="text" placeholder='password' className='w-full p-3 mb-5 ' name="password" onChange={handlechange}/>
        <button className='bg-green-950 p-2 text-white cursor-pointer w-40'>sign in </button>
      </form>
      <Link to="/register" className='text-white font-bold'>Create account</Link>
    </div>
    </div>
    
  )
}

export default Login
