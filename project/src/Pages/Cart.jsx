import React,{useContext, useEffect,useState} from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,Button, Center,Image,HStack,Text,Heading
} from '@chakra-ui/react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure
} from '@chakra-ui/react'
import axios from "axios"
 import { CartContext } from "../component/Context/CartContext"
 import {removeFromCart ,checkout, addToCart} from "../component/Context/action"
 import { useNavigate } from 'react-router-dom';
 import Footer from "../component/Footer/Footer"
 import {SmallCloseIcon,MinusIcon,AddIcon} from "@chakra-ui/icons"

 const getProduct=()=>(
  axios.get(`http://localhost:8080/card`)
)

const deleteItem=(id)=>{
  return  axios.delete(`http://localhost:8080/card/delete/${id}`)
}


const Cart = () => {

  const {state,dispatch}=useContext(CartContext)
  const navigate=useNavigate()
const [change,setChange]=useState(true)
 

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const handleDelete=(id)=>{
    deleteItem(id).then(res=>console.log(res)).catch(err=>console.log(err))
    setChange((change)=>!change)
    
  }
  useEffect(()=>{
    getProduct().then(res=>{
      console.log(res.data.data)
      dispatch(addToCart(res.data.data))
})


  },[change])
 

  

  const handleCheckout=()=>{
    dispatch(checkout())
    onClose()
    navigate('/payment')
  }
  return <>
 <Heading textAlign={"center"}>Your Cart</Heading>
  <TableContainer mt={20}>
  <Table variant='simple' size={{base:"sm",sm:"sm",md:"md",lg:"lg"}}>
    <TableCaption>No Exchange | No refunds</TableCaption>
    <Thead>
      <Tr>
        <Th size={{base:"xs",md:"md"}} maxW={"30%"}>PRODUCT</Th>
        <Th size={{base:"xs",md:"md"}}>Quantity</Th>
        <Th size={{base:"xs",md:"md"}}>PRICE($)</Th>
       
        <Th size={{base:"xs",md:"md"}}>REMOVE </Th>
      </Tr>
    </Thead>
    <Tbody>
     {state.data&&state.data.map(item=>(
      <Tr key={item._id}>
      
        <Td size={{base:"xs",md:"md"}} maxW={"30%"}>
        <HStack>
        <Image src={item.image} alt={item._id} w="10%"/>
        <Text> {item.title}</Text>
        </HStack>
      </Td>
      <Td size={{base:"xs",md:"md"}}>
      <HStack gap={2}>
      
      <MinusIcon/>
      <Text> {item.quantity}</Text>
      <AddIcon/>
     
      </HStack>
     </Td>
        <Td size={{base:"xs",md:"md"}}> {item.price}</Td>
        <Td size={{base:"xs",md:"md"}}>
          <Button onClick={()=>handleDelete(item._id)} bg="none"><SmallCloseIcon/></Button>
        </Td>
      </Tr>
     ))}
    </Tbody>
    <Tfoot>
      <Tr>
        <Th size={{base:"xs",md:"md"}}>Final Price</Th>
        <Th size={{base:"xs",md:"md"}}>{Math.round(state.data&&state.data.reduce((a,c)=>a+ Number(c.price),0))}$</Th>
      
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
<Box>
  <Center>
<Button colorScheme='blue' onClick={onOpen}>
Place Order
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            Place Order
            </AlertDialogHeader>

            <AlertDialogBody>
            Are you sure you want to place this order ?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={handleCheckout} ml={3}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      </Center>
</Box>
<Footer/>
  </>;
};

export default Cart