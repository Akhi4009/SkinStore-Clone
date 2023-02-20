const express=require('express')

const User=require('../model/usermodel')
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const router=express.Router()

router.post("/register",async(req,res)=>{

    const {name,email,password,mobile}=req.body
    try{
        const user=await User.find({email})
        if(user.length>0){
            res.send({"msg":"Already Registered, Please Login."})
        }else{
            bcrypt.hash(password, 5, async(err, hash)=>{
                const users=new User({name,email,password:hash,mobile})
                await users.save()
                res.send({"msg":"Resitered Successfull"})
            });
        }

    }catch(err){
       res.status(404).send({"msg":"Something went wrong","error":err.message})
    }
})

router.post("/login",async(req,res)=>{

    const {email,password}=req.body

    try{
        const user=await User.find({email})
        if(user.length>0){
            bcrypt.compare(password, user[0].password, (err, result)=> {
               
                if(result){
                    var token = jwt.sign({ userid: user[0]._id }, 'masai');
                    res.send({"msg":"login success",token:token})
                }else{
                    res.status(404).send({"msg":"password is wrong",})
                }
            });
        }else{
            res.status(404).send({"msg":"This account is not found, Please Register First"})
        }

    }catch(err){
        res.send({"msg":"something went wrong",err:err.message})
    }
})


module.exports=router