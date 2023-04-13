import React from 'react'
import { Image,Stack,Heading,Text,Divider,Button, HStack,useToast } from '@chakra-ui/react'
import {Card,CardBody,CardFooter} from "@chakra-ui/react"
import { addData } from "../API/api"

const ProductItem = ({ele}) => {
  const toast = useToast()

  const {title,image,price,cupon,review,_id}=ele
  const addToCart=()=>{
    const data={
      title,image,price
    }
    
    addData(data).then(res=>{
      console.log(res)
    
      toast({
        title: `${res.msg}`,
        
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
    })

    
  }
  return (
    <>
    <Card maxW="lg"  bg="teal">
    <CardBody>
      <Image
        src={image}
        alt={title}
        borderRadius='md'
      />
      <Divider/>
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{title}</Heading>
        <HStack justify="space-around">
        <Text color='white' fontSize='2xl'>
         {review} reviews
        </Text>
        <Text color='white' fontSize='2xl'>
        price:  ${price}
        </Text>
        </HStack>
      </Stack>
    </CardBody>
    <Divider/>
    <CardFooter>
    
       
        <Button variant='solid' bg="white" onClick={addToCart}>
          Add to cart
        </Button>

    </CardFooter>
  </Card>
  </>
  )
}

export default ProductItem