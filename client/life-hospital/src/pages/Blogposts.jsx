import React, { useEffect, useState } from 'react'
import {ThumbUpOffAlt, ThumbUpAlt, Comment} from "@mui/icons-material"
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addlike, removelike } from '../redux/likeSlice'
import { useMemo } from 'react'
import {format} from "timeago.js"

const Blogposts = () => {
    const [posts, setPosts] = useState([])
    const [comment, setComment] = useState(false)
    const [like, setLike] = useState(false)
    const [comments, setComments] = useState([])
    const [inputcomments, setinputComments] = useState([])
    const [postLikes, setpostLikes]=useState([])

    const post = posts[posts.length-1]
    const Admin = useSelector(state=>state.user.currentUser?.user?.isAdmin)
    const id = post?._id
    
    const user = useSelector(state=>state.user.currentUser?.accessToken)
const UserID = useSelector(state=>state.user.currentUser?.user._id)
const apiUrl = process.env.REACT_APP_API_URL;

const config = useMemo(() => ({
  headers: {
    Authorization: `Bearer ${user}`,
  },
}), [user]);
 
    const handlecomment = ()=>{
        setComment(comment? false:true)
    }

    const likeID = useSelector(state=>state.like.like?._id)
    const dispatch = useDispatch()
    const handleLikes = async (name)=>{
      setLike(like? false:true)
        if(name==="addLike"){
          try {
              const res = await axios.post(`${apiUrl}/api/like`,{UserID, postID:id},config)
              dispatch(addlike(res.data))
              window.location.reload();
          } catch (error) {
              console.log(error)
          }
         
      }else{

          try {
               await axios.delete(`${apiUrl}/api/like/${likeID}`,config)
              dispatch(removelike())
              window.location.reload();
          } catch (error) {
              console.log(error)
          }
        
      }
    }

   

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
  },[apiUrl])
useEffect(()=>{
  const getComments = async ()=>{
      try {
          const res = await axios.get(`${apiUrl}/api/comment/${id}`,config)
          setComments(res.data)
         
      } catch (error) {
          console.log(error)
      }
  }
  getComments()
},[id,config,apiUrl])
useEffect(()=>{
  const getLikes = async ()=>{
      try {
          const res = await axios.get(`${apiUrl}/api/like/${id}`,config)
          setpostLikes(res.data)
      } catch (error) {
          console.log(error)
      }

  }
  getLikes()
},[id,config,apiUrl])
    const handleclick = async (e)=>{
      e.preventDefault()
      try {
        await axios.post(`${apiUrl}/api/comment`, {UserID, postID:id, comment:inputcomments}, config)
        window.location.reload();
      } catch (error) {
       console.log(error)
      }
   }
   


  return (
    <div className='flex flex-col md:flex-row'>
      <div className='basis-3/4 flex flex-col border-r-2 p-4 justify-center items-center'>
      <img src={post?.Image} alt="pastor chris" className='w-96 h-96 object-contain'/>
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
      {comment && <input onChange={(e)=>setinputComments(e.target.value)} type="text" placeholder='Leave a comment.' className='w-1/2 h-40 rounded-sm border-2 p-2 placeholder pb-28'/>}
      {
        comment && <button onClick={handleclick} className='w-40 rounded-full p-2 bg-green-500 mt-4 mb-4'>submit</button>
      }
       <div className={Admin? "block":"hidden"}>
           {comments?.map((Comment)=>(
            <div className='flex flex-col border-0 w-auto p-2 mb-4'>
              <h3 className='italic'>{Comment.comment}</h3>
              <span className='font-light text-10'>{format(Comment.createdAt)}</span>
              </div>
           ))}
      </div>
      </div>
      <div className='basis-1/4 p-2'>
      <h2 className='text-2xl font-bold text-center mb-4'>Relatted posts</h2>
      {posts?.map((item)=>(
        <Link to={`/blogpost/${item._id}`}>
         <div className='flex mb-4 justify-start items-center'>
         <img className='w-10 h-10 md:w-15 md:h-15 rounded-full mr-5 object-cover' src={item.Image} alt="" />
         <p className='text-sm md:text-2xl italic'>{item.Title}</p>
       </div></Link>
      ))}
      </div>
    </div>
  )
}

export default Blogposts
