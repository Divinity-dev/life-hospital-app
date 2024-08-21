import jwt from 'jsonwebtoken'

const verifytokken = (req,res, next)=>{
  const authHeader = req.headers.authorization;
  if(authHeader){
    const token = authHeader.split(" ")[1]
    jwt.verify(token,process.env.jwt_key, (err, data)=>{
       if(err){
        res.status(400).json(err)
       }
       req.user = data;
       next()
    })
  }else{
    res.status(400).json("you're not authenticated")
  }
}

const Authorization = (req,res,next)=>{
  verifytokken(req,res,()=>{ 
    if(req.user.id ===req.params.id || req.user.isAdmin){
        next()
    }else{
     
        res.status(401).json("you're not authorized")
    }})
}

const Admin = (req,res,next)=>{
 verifytokken(req,res, ()=>{
    if(req.user.isAdmin){
        next()
    }else{
        res.status(401).json("you're not authorized")
    }
 })
}

export {verifytokken, Authorization, Admin }