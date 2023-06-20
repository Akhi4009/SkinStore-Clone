const express=require("express")
const connection=require('./db')
const userRouter=require("./routes/user.route")
const productRouter=require("./routes/product.route")
const cardRouter=require("./routes/card.route")
const cors=require('cors')

const app=express()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome!")

})
app.use("/user",userRouter)
app.use("/product",productRouter)
app.use("/card",cardRouter)




const port=process.env.port
app.listen(port,async()=>{
    try{
        await connection
        console.log("connected to db")

    }catch(err){
        console.log({"msg":"not connected to db","error":err.message})
    }
    console.log(`server is running in port ${port}`)
})