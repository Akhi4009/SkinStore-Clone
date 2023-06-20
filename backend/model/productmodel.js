const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    title:{type:String,required:true},
    image:{type:String,required:true},
    cupon:{type:String,required:true},
    review:{type:Number,default:5,required:true},
    price:{type:Number,required:true},
    type:{type:String,required:true},
    quantity:{type:Number,default:1}
    
},{
    versionKey:false
})

const Product=mongoose.model("prouct",productSchema)

module.exports=Product