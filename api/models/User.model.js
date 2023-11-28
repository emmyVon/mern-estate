import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"

const UserSchema = mongoose.Schema({
    email:{type:String,required:true,unique:true},
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    password:{type:String,required:true}
})

const User = mongoose.model('UserProfile',UserSchema)


UserSchema.pre('save',async function(next){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
    next()
})


UserSchema.methods.createjwt = function(){
    return jwt.sign({userid:this._id,name:this.email},process.env.JWT_SECRET,{expiresIn:'20min'})
}

export default User