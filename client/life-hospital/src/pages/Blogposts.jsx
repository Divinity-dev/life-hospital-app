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
      <img className={post?.Image} alt="pastor chris" />
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
         <img className='w-10 h-10 md:w-20 md:h-20 rounded-full mr-5' src={item.Image} alt="" />
         <p className='text-sm md:text-2xl'>{item.Title}</p>
       </div></Link>
      ))}
      </div>
    </div>
  )
}

export default Blogposts
