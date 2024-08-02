import React, { useEffect, useState } from 'react'
import {ThumbUpOffAlt, ThumbUpAlt, Comment} from "@mui/icons-material"
import axios from 'axios'
import { Link,useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addlike, removelike } from '../redux/likeSlice'

const Blogposts = () => {
    const [posts, setPosts] = useState([])
    const [comment, setComment] = useState(false)
    const [like, setLike] = useState(false)
    const [comments, setComments] = useState([])
    const [inputcomments, setinputComments] = useState([])
    const [likes, setLikes] = useState([])
    const [postLikes, setpostLikes]=useState([])
   
    const handlecomment = ()=>{
        setComment(comment? false:true)
    }

    const likeID = useSelector(state=>state.like.like?._id)
    const dispatch = useDispatch()

    const handleLikes = async (name)=>{
        setLike(like? false:true)
        if(name==="addLike"){
          try {
              const res = await axios.post("http://localhost:3000/api/like",{UserID, postID:id},config)
              dispatch(addlike(res.data))
          } catch (error) {
              console.log(error)
          }
          
      }else{

          try {
              const res = await axios.delete(`http://localhost:3000/api/like/${likeID}`,config)
              dispatch(removelike())
          } catch (error) {
              console.log(error)
          }
        
      }
    }

    const post = posts[posts.length-1]
    const Admin = useSelector(state=>state.user.currentUser.user.isAdmin)
    const id = post?._id
    const user = useSelector(state=>state.user.currentUser.accessToken)
const UserID = useSelector(state=>state.user.currentUser.user._id)

const config = {
  headers:{
      Authorization:`Bearer ${user}`
  }
}

useEffect(()=>{
  const getComments = async ()=>{
      try {
          const res = await axios.get(`http://localhost:3000/api/comment/${id}`,config)
          setComments(res.data)
         
      } catch (error) {
          console.log(error)
      }
  }
  getComments()
},[id,config])
useEffect(()=>{
  const getLikes = async ()=>{
      try {
          const res = await axios.get(`http://localhost:3000/api/like/${id}`,config)
          setpostLikes(res.data)
      } catch (error) {
          console.log(error)
      }

  }
  getLikes()
},[id])

    const handleclick = async (e)=>{
      e.preventDefault()
      try {
       const res = await axios.post("http://localhost:3000/api/comment", {UserID, postID:id.ID, comment:inputcomments}, config)
      } catch (error) {
       console.log(error)
      }
   }
   
    

useEffect(()=>{
const getPosts = async ()=>{
    try {
        const res = await axios.get("http://localhost:3000/api/post")
    setPosts(res.data)
    } catch (error) {
        console.log(error)
    }
    
}
getPosts()
},[])
  return (
    <div className='flex'>
      <div className='basis-3/4 flex flex-col border-r-2 p-4 justify-center items-center'>
      <img className='w-80 h-80 mb-4' src="data:image/jpeg;base64,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" alt="pastor chris" />
      <h2 className='text-2xl font-bold text-center mb-2'>{post?.Title}</h2>
      <p className='italic mb-4'>
    {post?.Body}
      </p>
      <div className='flex'>
        <span>{postLikes.length}</span>{like? <ThumbUpAlt onClick={()=>handleLikes("deleteLike")}/> :<ThumbUpOffAlt onClick={()=>handleLikes("addLike")}/>}
        <div className='ml-4'>
        <span>{comments.length}</span><Comment onClick={handlecomment}/>
        </div>
        
      </div>
      {comment && <input onChange={(e)=>setinputComments(e.target.value)} type="text" placeholder='Leave a comment.' className='w-1/2 h-40 rounded-sm border-2 p-2'/>}
      {
        comment && <button onClick={handleclick} className='w-40 rounded-full p-2 bg-green-500 mt-4'>submit</button>
      }
       <div className={Admin? "block":"hidden"}>
           {comments?.map((Comment)=>(
            <li>{Comment.comment}</li>
           ))}
      </div>
      </div>
      <div className='basis-1/4 p-2'>
      <h2 className='text-2xl font-bold text-center mb-4'>Relatted posts</h2>
      {posts.map((item)=>(
        <Link to={`/blogpost/${item._id}`}>
         <div className='flex mb-4 justify-center items-center'>
         <img className='w-10 h-10 md:w-20 md:h-20 rounded-full mr-5' src="data:image/jpeg;base64,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" alt="" />
         <p className='text-sm md:text-2xl'>{item.Title}</p>
       </div></Link>
      ))}
      </div>
    </div>
  )
}

export default Blogposts
