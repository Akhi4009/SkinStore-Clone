
import React,{useState,useEffect,useContext} from 'react'
import axios from "axios"
import {Grid, GridItem,Flex,Image,Text,Button,Heading,Select} from "@chakra-ui/react"
import Loading from "../component/../Home/Loading"
import Banner1 from '../component/banner/Banner1'
import Banner2 from '../component/banner/Banner2'
import Pagination from "../component/Navbar/Pagination"
import { CartContext } from "../component/Context/CartContext"
import {addToCart} from "../component/Context/action"  
import Footer from "../component/Footer/Footer"
import ProductItem from  "../component/Product/ProductItem"

const getProduct=(page,sort)=>(
    axios.get(` http://localhost:8080/product?type=hair&page=${page}&limit=10&sort=${sort}`)
)
const itemAlreadyExist=(title,cartItems)=>{

  if(cartItems.find(item=>item.title===title)){
    return true
  }
  return false
}


const Hair = () => {

    const [data,setData]=useState([])
    const[loading,setLoading]=useState(false)
    const [sort,setSort]=useState("")
   
    const [page,setPage]=useState(1)
    const {state,dispatch}=useContext(CartContext)

    const handleChange=(e)=>{
      const {value}=e.target
      
      if(value==="PHTL"){
      setSort("-price")
      
      }else if(value==="PLTH"){
        setSort("price")
      
      }else if(value==="az"){
        setSort("title")
      
      }else{
       
        setSort('')
      }
           }
    useEffect(()=>{
      setLoading(true)
getProduct(page,sort).then(res=>{
setLoading(false)
  setData(res.data.data)
}
  ).catch(err=>console.log(err))

    },[page,sort])


    const handlePage=(val)=>{
      setPage(page=>page+val)
    }

    if(loading){
      return <Loading/>
    }
   

  return (
    <>
    <Banner1/>
    <Banner2/>
    <Flex w="40%"  alignItems="center" spacing={5} m="auto" >
      
      <Select placeholder='Sort by' onChange={handleChange} >
        <option value="default">Default</option>
  <option value='PLTH'>Price: Low to high</option>
  <option value='PHTL'>Price: High to Low</option>
  <option value='az'>(Title)A-Z</option>
</Select>
      </Flex>
    <Grid templateColumns={{ base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,.8fr)"}} gap={10} m={20}>
      {data&&data.map(ele=>(
<GridItem key={ele.title}>
    <ProductItem ele={ele}/>
</GridItem>
            ))}
            </Grid>
            <Pagination page={page} handlePage={handlePage}/>
            <Footer/>
      
    </>
  )
}

export default Hair