const mongoose=require("mongoose")

const cardSchema=mongoose.Schema({
    title:{type:String,required:true},
    image:{type:String,required:true},
    price:{type:Number,required:true},
    quantity:{type:Number,default:1}
   
    
},{
    versionKey:false
})

const Card=mongoose.model("card",cardSchema)

module.exports=Card