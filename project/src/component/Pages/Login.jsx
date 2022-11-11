import {Link,useNavigate} from "react-router-dom"
import React,{useState,useContext} from 'react'
import {Container,Heading,Box,Flex,Icon, HStack, VStack} from "@chakra-ui/react"
import {BsFacebook} from "react-icons/bs"
import {FcGoogle} from "react-icons/fc"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,InputGroup,InputRightElement,Button
} from '@chakra-ui/react'
import { AuthContext,action } from "../Context/AuthContext"
const user=JSON.parse(localStorage.getItem("user"))||{}
console.log(user)

const Login = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const [data, setData] = useState({

    email:"",
    password:""
  })
  const navigate=useNavigate()
  const {state,dispatch}=useContext(AuthContext)
  console.log(state)

  const handleInputChange = (e) => {
    const{name,value}=e.target
    setData({...data,[name]:value})
  }

  const isError = data.email||data.password === ''
  const {email,password}=data

  const handleLogin=()=>{
if(data.email===user.email&&user.password===data.password){
  dispatch(action)
  alert("Login SuccessFully")
  navigate("/")

}else{
  alert("Email or Password is wrong")
}
  }

  return (
    <>
    <Flex direction={{base:"column",md:"row"}}>
     <Container  >
      <Box bg="#ddd" m={10} p={10}>
      <Heading as="h3" size="md" pb={5}>Existing Customers</Heading>
    <Box>
       <VStack gap={2}>
    
    <FormControl isInvalid={isError}>
      <FormLabel>Email</FormLabel>
      <Input type='email' value={email} onChange={handleInputChange} placeholder="Email" name="email" />
      {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </FormControl>
    
   
      <FormControl isInvalid={isError}>
      <FormLabel>Password</FormLabel>
      <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'  value={password} onChange={handleInputChange}
        name="password"
      />
       
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    {!isError ? (
        <FormHelperText>
          Enter the password .
        </FormHelperText>
      ) : (
        <FormErrorMessage>Password is required.</FormErrorMessage>
      )}
  
      </FormControl>
     
<Button colorScheme='blue' onClick={handleLogin}>Login</Button>
      </VStack>
      
      </Box>
      <Box mt={10} mb={5}>
        <Heading as="h3" size="md" pb={5}>Or, Continue with</Heading>
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
      
     
     </Box>
      
    </Container>
    <Container  >
    <Box bg="#ddd" m={10} p={10}>
    <Heading as="h3" size="md" pb={5}>Existing Customers</Heading>
    
      <Link to="/registar">

      <Button width="100%" bg="blue.400">
        REGISTAR
      </Button>
      </Link>
    
    </Box>
    </Container>
    </Flex>
    </>
  )
}

export default Login