import React,{useContext} from 'react'
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
  Box,Button, Center
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
 import { CartContext } from '../Context/CartContext';
 import {removeFromCart ,checkout} from "../Context/action"
 import { useNavigate } from 'react-router-dom';
 import Footer from '../Footer/Footer';


const Cart = () => {

  const {state,dispatch}=useContext(CartContext)
  const navigate=useNavigate()

 

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  const handleCheckout=()=>{
    dispatch(checkout())
    onClose()
    navigate('/payment')
  }
  return <>
 
  <TableContainer mt={20}>
  <Table variant='simple' size={{base:"sm",sm:"sm",md:"md",lg:"lg"}}>
    <TableCaption>No Exchange | No refunds</TableCaption>
    <Thead>
      <Tr>
        <Th size={{base:"xs",md:"md"}}>PRODUCT</Th>
        <Th size={{base:"xs",md:"md"}}>PRICE($)</Th>
        <Th size={{base:"xs",md:"md"}}>REMOVE FROM CART</Th>
      </Tr>
    </Thead>
    <Tbody>
     {state&&state.map(item=>(
      <Tr key={item.id}>
        <Td size={{base:"xs",md:"md"}}>{item.title}</Td>
        <Td size={{base:"xs",md:"md"}}> {item.price}</Td>
        <Td size={{base:"xs",md:"md"}}>
          <Button onClick={()=>dispatch(removeFromCart(item.title))}>Remove from cart</Button>
        </Td>
      </Tr>
     ))}
    </Tbody>
    <Tfoot>
      <Tr>
        <Th size={{base:"xs",md:"md"}}>Final Price</Th>
        <Th size={{base:"xs",md:"md"}}>${Math.round(state&&state.reduce((a,c)=>a+ Number(c.price),0))}</Th>
      
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