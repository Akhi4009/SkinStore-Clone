import React,{useState} from 'react'
import {Container,Heading,Box,Flex,Icon, HStack, VStack,useToast} from "@chakra-ui/react"
import {BsFacebook} from "react-icons/bs"
import {FcGoogle} from "react-icons/fc"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,InputGroup,InputRightElement,Button
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'




 const Register = () => {
  const toast = useToast()
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const [data, setData] = useState({
    name:"",
    email:"",
    password:"",
    mobile:""
  })
  const navigate=useNavigate()

  const handleInputChange = (e) =>{
    const{name,value}=e.target
    setData({...data,[name]:value})
  } 

  const isError = data.name||data.email === ''
  const {name,email,password,mobile}=data

  const handleRegistar=()=>{
    if(name===''||email===''||password===''||mobile ===""){
      alert("fill all data")
      return
    }
   localStorage.setItem("user",JSON.stringify(data))

   alert ("reister successfull")
  
    toast({
      title: 'Registar SuccessFully',
      description: "We've created your account for you.",
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
  
  

   navigate("/login")
   
  }

 

  return (
    < >
   
    <Container  >
      <Box bg="#ddd" m={10} p={10}>
      <Heading as="h3" size="md">About You</Heading>
      <Box mt={10} mb={5}>
        <Heading as="h3" size="md" pb={5}>Sign Up With</Heading>
        <Flex justifyContent="space-between"  >
          <Box border="1px solid black"  p={2} >
            <HStack  >
<Icon as={BsFacebook} /> <Heading size="md">Facebook</Heading>
</HStack>
          </Box>
          <Box border="1px solid black"  p={2} >
          <HStack>
<Icon as={FcGoogle} /> <Heading size="md">Google</Heading>
</HStack>
          </Box>
        </Flex>
      </Box>
      
      <Box>
      
      <Heading as="h5" size="xs" pb={5} fontSize="20px">Or create an email account</Heading>
      
      
     <VStack gap={2}>
     <FormControl isInvalid={isError}>
      <FormLabel>Full Nmae</FormLabel>
      <Input type='text' value={name} onChange={handleInputChange} placeholder="Name" name="name" />
      {!isError ? (
        <FormHelperText>
         Enter the full name
        </FormHelperText>
      ) : (
        <FormErrorMessage>Name is required.</FormErrorMessage>
      )}
    </FormControl>
    <FormControl isInvalid={isError}>
      <FormLabel>Email</FormLabel>
      <Input type='email' value={email} onChange={handleInputChange} placeholder="Email" name="email"/>
      {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </FormControl>
    
   
      <FormControl>
      <FormLabel>Password</FormLabel>
      <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
       value={password}
        name="password"
        onChange={handleInputChange}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  <FormHelperText>Include a minimum of 6 characters, and contain at least 1 number</FormHelperText>
      </FormControl>
      <FormControl>
  <FormLabel>Cell Phone Number (Optional)</FormLabel>
  <Input type='number' placeholder="Cell Phone" value={mobile} name="mobile" onChange={handleInputChange}/>
  <FormHelperText>We will use this number to send occasional promotional messages.</FormHelperText>
</FormControl>
<Button colorScheme='blue' onClick={handleRegistar}>Registar</Button>
      </VStack>
      
      </Box>
     
     </Box>
    
      
    </Container>
    
 
    </>
  )
}

export default Register