import jwt from 'jsonwebtoken'
import User from '../models/User.model.js'
import bcrypt from "bcryptjs"

export const Register = async (req,res)=>{
    const {firstname,lastname,email,password} = req.body
    if(!firstname || !lastname || !email || !password){
        res.status(400).json({msg:'missing field,please fill all input'})
    }
    const existinguser = await User.findOne({email})
    if (existinguser){
        res.status(401).json({msg:'user already exist'})
    }
     const hashedpassword = await bcrypt.hash(password,10)
        const user = await User.create({firstname,lastname,email,password})
        // const token = user.createjwt()
        res.status(201).json({message:'user created successfully'})
  
}

export const Login = async(req,res)=>{
    res.status(200).json({msg:'login succesful, redirectly'})
    
}

export const Google = async (req,res,next)=>{
    const user = await User.findOne({email:req.body.email})
    if(user){
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
        const {password:pass, ...rest} = user._doc;
        res.cookie('access cookies',token,{httpOnly:true}).status(200).json(rest)
    }else{
        const generatedpassword = math.random().toString(36).slice(-8);
        const hashedpassword = await bcrypt.hash(generatedpassword,10);
        const NewUser = new User({username:req.body.name.split(" ").join("").toLowerCase()+ math.random().toString(36).slice(-4),password:hashedpassword,email:req.body.email})
        await NewUser.save()
         const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
        const {password:pass, ...rest} = user._doc;
        res.cookie('access cookies',token,{httpOnly:true}).status(200).json(rest)
    }
}