
import React,{useState,useEffect} from 'react'
import axios from "axios"
import {Grid, GridItem,Flex,Image,Text,Button,Heading} from "@chakra-ui/react"
import Loading from '../../Home/Loading'
import Banner1 from '../banner/Banner1'
import Banner2 from '../banner/Banner2'

const getProduct=()=>(
    axios.get("  http://localhost:3000/Hair")
)


const Hair = () => {

    const [data,setData]=useState([])
    const[loading,setLoading]=useState(false)
    useEffect(()=>{
      setLoading(true)
getProduct().then(res=>{
setLoading(false)
  setData(res.data)}
  ).catch(err=>console.log(err))

    },[])

    if(loading){
      return <Loading/>
    }
   

  return (
    <>
    <Banner1/>
    <Banner2/>
    <Grid templateColumns={{ base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} m={5}>
      {data&&data.map(ele=>(
<GridItem key={ele.title}>
    <Flex direction="column" alignItems="center"gap={2}>
<Image src={ele.image} alt={ele.title}/>
<Text size="sm">{ele.title}</Text>
<Text>{ele.cupon}</Text>
<Text>{ele.review}</Text>
<Heading as="h4" size="sm">${ele.price}</Heading>
<Button>QUICK BUY</Button>
    </Flex>
</GridItem>
            ))}
            </Grid>
      
    </>
  )
}

export default Hair