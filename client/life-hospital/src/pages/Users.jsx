import React, { useState } from 'react'
import { DataGrid, renderActionsCell } from '@mui/x-data-grid';
import {DeleteOutline} from "@mui/icons-material"
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from "axios"
import { useSelector } from 'react-redux';

const Users = () => {
    const [users, setUsers]=useState([])
    const [adminstat, setAdminstat]=useState("Edit")
  const token =useSelector(state=>state.user.currentUser?.accessToken)
  const config = {
    headers:{
        Authorization:`Bearer ${token}`
    }
  }
  const apiUrl = process.env.REACT_APP_API_URL;
  const handleClick= async (id)=>{
    try {
      await axios.delete(`${apiUrl}/api/user/${id}`,config)
      setUsers(users.filter((user)=>user._id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  const handleAdmin=async (id)=>{
    try {
      const res = await axios.put(`${apiUrl}/api/user/users/${id}`,{isAdmin:adminstat},config)
      console.log(res.data)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }
    useEffect(()=>{
        const getUsers = async ()=>{
            try {
                const res = await axios.get(`${apiUrl}/api/user/users`,config)
                setUsers(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getUsers()
    },[token, apiUrl])

const columns = [
  { field: '_id', headerName: 'ID', width: 250 },
  { field: 'user', headerName: 'username', renderCell: (params)=>{
    return( 
        <div className='flex'>
    <img className='w-10 h-10 object-cover rounded-full' src={
     params.row.Image || "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"} alt={params.row.username} />
    {params.row.username}
    </div>
    ) 
  }, width:220 },
  { field: 'Email', headerName: 'Email', width: 180 },
  {
    field: 'status',
    headerName:'status', renderCell: (params)=>{
        return(
            <div className='flex border-none justify-center items-center'>
               <select name="" id="" onChange={(e)=>{setAdminstat(e.target.value)}} className='border-2 bg-red-500 rounded-full p-2 w-40'>
                <option value="">{params.row.isAdmin? "Admin":"Not Admin"}</option>
                <option >false</option>
                <option >true</option>
               </select>
               <button className='edit' onClick={()=>{handleAdmin(params.row._id)}}>Edit</button>
            </div>
        )
    },
    width: 200,
  },
  {
    field: 'Action',
    headerName:'Action', renderCell: (params)=>{
        return(
            <div className='flex'>
               <DeleteOutline onClick={()=>{handleClick(params.row._id)}} className='flex justify-center items-center mt-4 text-red-500 cursor-pointer'/>
            </div>
        )
    },
    width: 150,
  },
 
];



  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={users}
        columns={columns}
        disableRowSelectionOnClick
        getRowId={row=>row._id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default Users
