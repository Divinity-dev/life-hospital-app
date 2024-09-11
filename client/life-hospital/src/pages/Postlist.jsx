import { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { DeleteOutline } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'


const Postlist = () => {
    const [posts, setPosts] = useState([])
    const token =useSelector(state=>state.user.currentUser?.accessToken)
    const config = {
      headers:{
          Authorization:`Bearer ${token}`
      }
    }
    const apiUrl = process.env.REACT_APP_API_URL;
    useEffect(()=>{
        const getPosts = async ()=>{
            try {
                const res = await axios.get(`${apiUrl}/api/post`)
            setPosts(res.data)
            } catch (error) {
                console.log(error)
            }
            
        }
        getPosts()
        },[])
        const handleClick= async (id)=>{
            try {
              await axios.delete(`${apiUrl}/api/post/${id}`,config)
              setPosts(posts.filter((user)=>user._id !== id))
            } catch (error) {
              console.log(error)
            }
          }
    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        { field: 'post', headerName: 'post', renderCell: (params)=>{
          return( 
              <div className='flex'>
          <img className='w-10 h-10 object-cover rounded-full' src={
           params.row.Image || "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"} alt={params.row.username} />
          {params.row.Title}
          </div>
          ) 
        }, width:220 },
        { field: 'Author', headerName: 'Author', width: 180 },
        {
          field: 'status',
          headerName:'status', renderCell: (params)=>{
              return(
                  <div className='flex border-none'>
                     <Link to={`/editpost/${params.row._id}`}>
                     <button className='edit'>Edit</button>
                     </Link>
                     
                  </div>
              )
          },
          width: 150,
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
      rows={posts}
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

export default Postlist
