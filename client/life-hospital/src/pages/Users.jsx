import React, { useState } from 'react'
import { DataGrid, renderActionsCell } from '@mui/x-data-grid';
import {DeleteOutline} from "@mui/icons-material"
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from "axios"
import { useSelector } from 'react-redux';

const Users = () => {
    const [users, setUsers]=useState([])
  const token =useSelector(state=>state.user.currentUser.accessToken)
  const config = {
    headers:{
        Authorization:`Bearer ${token}`
    }
  }

  const handleClick= async (id)=>{
    try {
      await axios.delete(`http://localhost:3000/api/user/${id}`,config)
      setUsers(users.filter((user)=>user._id !== id))
    } catch (error) {
      console.log(error)
    }
  }
    useEffect(()=>{
        const getUsers = async ()=>{
            try {
                const res = await axios.get("http://localhost:3000/api/user/users",config)
                setUsers(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getUsers()
    },[token])

const columns = [
  { field: '_id', headerName: 'ID', width: 250 },
  { field: 'user', headerName: 'username', renderCell: (params)=>{
    return( 
        <div className='flex'>
    <img className='w-10 h-10 object-cover' src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png" alt="" />
    {params.row.username}
    </div>
    ) 
  }, width:220 },
  { field: 'Email', headerName: 'Email', width: 180 },
  {
    field: 'Action',
    headerName:'Action', renderCell: (params)=>{
        return(
            <div className='flex'>
                <Link>
                <button className='edit'>Edit</button>
                </Link>
               <DeleteOutline onClick={()=>{handleClick(params.row._id)}} className='flex justify-center items-center mt-4 text-red-500 cursor-pointer'/>
            </div>
        )
    },
    width: 150,
  },
 
];

const rows = [
  { id: 1, lastName: 'Snow', Email: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', Email: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', Email: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', Email: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', Email: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', Email: null, age: 150 },
  { id: 7, lastName: 'Clifford', Email: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', Email: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', Email: 'Harvey', age: 65 },
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
