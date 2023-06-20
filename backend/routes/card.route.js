const express=require("express")
const APIFeatures=require('../utlits/apifeature')



const router=express.Router()
const Card=require("../model/cardmodel")


router.post("/add",async(req,res)=>{

    try{
        const product=new Card(req.body)
        await product.save()
        res.status(200).send({"msg":"product added in the card"})
    }catch(err){
res.status(404).send({"msg":"something went wrong","error":err.message})
    }
})

router.get("/",async(req,res)=>{
  

    try{
        const features=new APIFeatures(Card.find(),req.query).filter().sort().LimitFields()
        const product=await features.query
        res.status(200).send({"msg":"success",results:product.length,data:product})
    }catch(err){
        res.status(404).send({"msg":"something went wrong","error":err.message})
    }
})

router.delete("/delete/:id",async(req,res)=>{
    
        const Id=req.params.id
        console.log(Id)
    
        try{
            await Card.findByIdAndDelete({_id:Id})
            res.send({"msg":" item deleted"})
        }catch(err){
            res.send({err:err.message})
        }
 
})

module.exports=router