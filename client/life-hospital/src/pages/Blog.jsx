import React, { useEffect, useState, useMemo } from 'react'
import {ThumbUpOffAlt, ThumbUpAlt, Comment} from "@mui/icons-material"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addlike, removelike } from '../redux/likeSlice'



const Blog = () => {
    const [post, setPost] = useState({})
    const [postLikes, setpostLikes]=useState([])
    const [comment, setComment] = useState(false)
    const [comments, setComments] = useState([])
    const [inputcomments, setinputComments] = useState('')
    const [like, setLike] = useState(false)
    const [likes, setLikes] = useState([])
    const handlecomment = ()=>{
        setComment(comment? false:true)
    }

    const likeID = useSelector(state=>state.like.like?._id)
    const Admin = useSelector(state=>state.user.currentUser.user?.isAdmin)
    const id = useParams()
    const dispatch = useDispatch()
    

const user = useSelector(state=>state.user.currentUser?.accessToken)
const UserID = useSelector(state=>state.user.currentUser?.user._id)
const config = useMemo(() => ({
    headers: {
      Authorization: `Bearer ${user}`,
    },
  }), [user]);
  console.log(post._id)
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
},[id.ID, config])

    const handleLikes = async (name)=>{
        setLike(like? false:true)
        if(name==="addLike"){
            try {
                const res = await axios.post("http://localhost:3000/api/like",{UserID, postID:id.ID},config)
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
        setinputComments('')
       } catch (error) {
        console.log(error)
       }
    }
    

  return (
    
      <div className='flex flex-col justtify-center items-center p-4'>
      <img className='w-80 h-80 mb-4' src={post?.Image} alt="pastor chris" />
      <h2 className='text-2xl font-bold text-center mb-2'>{post?.Title}</h2>
      <p className='italic mb-4'>{post?.Body}</p>
      <div className='flex '>
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
            <li>{Comment.comment}</li>
           ))}
      </div>
      </div>
     
    
  )
}

export default Blog
