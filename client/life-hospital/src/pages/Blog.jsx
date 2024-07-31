import React, { useEffect, useState } from 'react'
import {ThumbUpOffAlt, ThumbUpAlt, Comment} from "@mui/icons-material"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Blog = () => {
    const [post, setPost] = useState({})
    const [postLikes, setpostLikes]=useState([])
    const [comment, setComment] = useState(false)
    const [comments, setComments] = useState([])
    const [inputcomments, setinputComments] = useState([])
    const [like, setLike] = useState(false)
    const [likes, setLikes] = useState([])
    const [createLike, setCreateLike]= useState({})
    const handlecomment = ()=>{
        setComment(comment? false:true)
    }

    const Admin = useSelector(state=>state.user.currentUser.user.isAdmin)
    const id = useParams()

const user = useSelector(state=>state.user.currentUser.accessToken)
const UserID = useSelector(state=>state.user.currentUser.user._id)
    const config = {
        headers:{
            Authorization:`Bearer ${user}`
        }
    }
useEffect(()=>{
    const getLikes = async ()=>{
        try {
            const res = await axios.get(`http://localhost:3000/api/like/${id.ID}`,config)
            console.log(res.data)
            setpostLikes(res.data)
        } catch (error) {
            console.log(error)
        }

    }
    getLikes()
},[id.ID])


    const handleLikes = async (name)=>{
        setLike(like? false:true)
        if(name==="addLike"){
            try {
                const res = await axios.post("http://localhost:3000/api/like",{UserID, postID:id.ID},config)
            console.log(res.data)
            setCreateLike(res.data)
            } catch (error) {
                console.log(error)
            }
            
        }else{

            try {
                const res = await axios.delete(`http://localhost:3000/api/like/${createLike._id}`,config)
                console.log(res.data)
                setCreateLike({})
            } catch (error) {
                console.log(error)
            }
          
        }
    }

    useEffect(()=>{
        const getPost = async ()=>{
            try {
                const res = await axios.get(`http://localhost:3000/api/post/${id.ID}`)
                setPost(res.data)
            } catch (error) {
                console.log(error)
            }
           
        }
        getPost()
        },[id.ID])
    useEffect(()=>{
        const getComments = async ()=>{
            try {
                const res = await axios.get(`http://localhost:3000/api/comment/${id.ID}`,config)
                setComments(res.data)
               
            } catch (error) {
                console.log(error)
            }
        }
        getComments()
    },[id.ID,config])

    const handleclick = async (e)=>{
       e.preventDefault()
       try {
        const res = await axios.post("http://localhost:3000/api/comment", {UserID, postID:id.ID, comment:inputcomments}, config)
       } catch (error) {
        console.log(error)
       }
    }
    

  return (
    
      <div className='flex flex-col justtify-center items-center p-4'>
      <img className='w-80 h-80 mb-4' src="data:image/jpeg;base64,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" alt="pastor chris" />
      <h2 className='text-2xl font-bold text-center mb-2'>{post.Title}</h2>
      <p className='italic mb-4'>{post.Body}</p>
      <div className='flex'>
        <span>{postLikes.length}</span>{like? <ThumbUpAlt onClick={()=>handleLikes("deleteLike")}/> :<ThumbUpOffAlt onClick={()=>handleLikes("addLike")}/>}
        <div className='ml-4'>
        <span>{comments.length}</span><Comment onClick={handlecomment}/>
        </div>
        
      </div>
      {comment && <input onChange={(e)=>setinputComments(e.target.value)} type="text" placeholder='Leave a comment.' className='w-1/2 h-10 rounded-sm border-2 p-2'/> 
      }
      {
        comment && <button onClick={handleclick} className='w-40 rounded-full p-2 bg-green-500 mt-4'>submit</button>
      }
      <div className={Admin? "block":"hidden"}>
           {comments?.map((Comment)=>(
            <h2>{Comment.comment}</h2>
           ))}
      </div>
      </div>
     
    
  )
}

export default Blog
