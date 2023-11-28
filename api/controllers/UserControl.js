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
    //  const hashedpassword = await bcrypt.hash(password,10)
        const user = await User.create({firstname,lastname,email,password})
        // const token = user.createjwt()
        res.status(201).json({message:'user created successfully'})
  
}

export const Login = async(req,res)=>{
    res.status(200).json({msg:'login succesful, redirectly'})
    
}