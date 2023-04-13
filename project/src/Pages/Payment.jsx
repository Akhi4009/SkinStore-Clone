
import React,{useState} from 'react'
import {Container,Heading,Flex} from "@chakra-ui/react"
import {
    FormControl,
    FormLabel,
  Input,Checkbox
  ,Button
  } from '@chakra-ui/react'
  
  import { useNavigate } from 'react-router-dom'

const Payment = () => {
   
    const navigate=useNavigate()
    const [checked,setChecked]=useState(false)
    const [form,setForm]=useState({
        cardnu:"" ,
        name:"",
        date:"",
        cv:"",
        
    })
    const  handleChange=(e)=>{
        const {name,type,value}=e.target

    setForm({...form,[name]:value})
          }
    const {name,date,cv,cardnu}=form

  const handleClick=()=>{
  if(checked===""||name===""||date===""||cv===""||cardnu===""){
    alert("fill all the data")
    return
  }
  
    alert("Payment Successful")
    navigate("/")
  }

  



  return (
   <>
   <Container> 
    <Heading as="h3" size="md">Credit/Debit Card</Heading>
    <Flex direction="column" gap={3}>
    <FormControl>
  <FormLabel>Card Number</FormLabel>
  <Input type='number' name="cardnu" value={cardnu} onChange={handleChange} />
 </FormControl>
 <FormControl>
  <FormLabel>Name on card</FormLabel>
  <Input type='text'  name="name" value={name} onChange={handleChange}/>
 </FormControl>
 <FormControl>
  <FormLabel>Expiry Date</FormLabel>
  <Input type='date' name="date" value={date} onChange={handleChange} />
 </FormControl>
 <FormControl>
  <FormLabel>Security Code (CV2)</FormLabel>
  <Input type='number' name="cv" value={cv} onChange={handleChange}/>
 </FormControl>
 <Checkbox isChecked={checked} onChange={()=>setChecked(!checked)} name="checked">Use my shipping address as my cardholder address</Checkbox>
 <Button onClick={handleClick}>SUBMIT MY ORDER</Button>
 </Flex>
 
 
   </Container>
   
   </>
  )
}

export default Payment