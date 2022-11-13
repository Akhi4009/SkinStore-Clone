import React,{useState,useEffect,useContext} from 'react'
import axios from "axios"
import {Grid, GridItem,Flex,Image,Text,Button,Heading,Select } from "@chakra-ui/react"
import Loading from '../../Home/Loading'
import Banner1 from '../banner/Banner1'
import Banner2 from '../banner/Banner2'
import Pagination from '../Navbar/Pagination'
import Footer from "../Footer/Footer"
import { CartContext } from '../Context/CartContext'
import {addToCart} from "../Context/action"  

const getProduct=(sort,order,page=1)=>(
    axios.get(`http://localhost:3000/product?_page=${page}&_limit=12&_sort=${sort}&_order=${order}`)
)
const itemAlreadyExist=(title,cartItems)=>{

  if(cartItems.find(item=>item.title===title)){
    return true
  }
  return false
}

const Skincare = () => {
    const [data,setData]=useState([])
    const[loading,setLoading]=useState(false)
    const [sort,setSort]=useState("")
    const [order,setOrder]=useState("")
    const [page,setPage]=useState(1)
    const {state,dispatch}=useContext(CartContext)
    
   

   const handleChange=(e)=>{
const {value}=e.target

if(value==="PHTL"){
setSort("price")
setOrder("asc")
}else if(value==="PLTH"){
  setSort("price")
setOrder("desc")
}else if(value==="az"){
  setSort("title")
  setOrder("asc")
}else{
  setOrder('')
  setSort('')
}
     }
   
    useEffect(()=>{
      setLoading(true)
getProduct(sort,order,page).then(res=>{
setLoading(false)
  setData(res.data)}
  ).catch(err=>console.log(err))

    },[sort,order,page])
    if(loading){
        return <Loading/>
      }

const handlePage=(val)=>{
  setPage(page=>page+val)
}

console.log(state)
     

  return (
    <>
    <Banner1/>
    <Banner2/>
     
      <Flex w="40%"  alignItems="center" spacing={5} m="auto" >
      
      <Select placeholder='Sort by' onChange={handleChange} >
        <option value="default">Default</option>
  <option value='PHTL'>Price: Low to high</option>
  <option value='PLTH'>Price: High to Low</option>
  <option value='az'>(Title)A-Z</option>
</Select>
      </Flex>
            <Grid templateColumns={{ base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} m={5} >
            {data&&data.map(ele=>(
<GridItem key={ele.title}>
    <Flex direction="column" alignItems="center" gap={2}>
<Image src={ele.image} alt={ele.title}/>
<Text size="sm">{ele.title}</Text>
<Text>{ele.cupon}</Text>
<Text>{ele.review}</Text>
<Heading as="h4" size="sm">${ele.price}</Heading>
<Button disabled={itemAlreadyExist(ele.title,state)} onClick={()=>dispatch(addToCart(ele))}>QUICK BUY</Button>
    </Flex>
</GridItem>
            ))}
            </Grid>
      
<Pagination page={page} handlePage={handlePage}/>

  <Footer/>
    </>
  )
}

export default Skincare