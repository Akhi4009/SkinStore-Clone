const express=require("express")
const APIFeatures=require('../utlits/apifeature')



const router=express.Router()
const Product=require("../model/productmodel")

router.post("/add",async(req,res)=>{

    try{
        const product=new Product(req.body)
        await product.save()
        res.status(200).send({"msg":"product added"})
    }catch(err){
res.status(404).send({"msg":"something went wrong","error":err.message})
    }
})

router.get("/",async(req,res)=>{
  

    try{
        const features=new APIFeatures(Product.find(),req.query).filter().sort().LimitFields().Pagination()
        const product=await features.query
        res.status(200).send({"msg":"success",results:product.length,data:product})
    }catch(err){
        res.status(404).send({"msg":"something went wrong","error":err.message})
    }
})

module.exports=router