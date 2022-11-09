import React from 'react'
import { Flex,Box,Heading ,Text, Input, Button, HStack,Icon, SimpleGrid} from '@chakra-ui/react'
import {SearchIcon} from "@chakra-ui/icons"
import {Link} from "react-router-dom"
import {BsBasket3} from "react-icons/bs"
import {BsPerson} from "react-icons/bs"
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
   
    PopoverBody,
  PopoverHeader,
    PopoverArrow,
    PopoverCloseButton,
    
   
   
  } from '@chakra-ui/react'
const Navbar = () => {
    
  return (
   <>
   <Flex justify="space-around" bgColor="transparent" mt={10}>
    <Box>
<Link to="/"> <Heading as='h3' size='lg' fontSize="3xl">
   SkinStore
  </Heading>
  <Text fontSize='sm'>part of  the LOOKFANTASTIC group</Text>
  </Link>
    </Box>
    <Box >
        <HStack spacing={0} alignItems="center" border="1px solid #ccc">
<Input type="text" border="none" placeholder=' product or brand'/>
<Button bgColor="transparent"><Icon as={SearchIcon} /></Button>
</HStack>

    </Box>
    <Box >
    <Popover>
    {({ isOpen, onClose }) => (
        <>
  <PopoverTrigger>
    <Button bgColor="transparent">  <Icon as={BsPerson} />Account</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    
    <PopoverBody>
        <SimpleGrid spacing={4}>
      <Link to="/login"><Button w="100%" onClick={onClose} >LOGIN</Button></Link>  
      <Link to="/registar"><Button w="100%"  onClick={onClose}>REGISTAR</Button></Link>
      <Text>Wishlist</Text>
      <Text>Your Orders</Text>
      <Text>Your Referrals</Text>
      </SimpleGrid>
        
    </PopoverBody>
  </PopoverContent>
  </>
    )}
</Popover>
    </Box>
    <Box>
    <Popover>
    {({ isOpen, onClose }) => (
        <>
  <PopoverTrigger>
    <Button bgColor="transparent" ><Icon as={BsBasket3} />
     Cart
</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>
     <Link to="/cart"><Button  onClick={onClose}>View Cart</Button></Link>  
    </PopoverHeader>
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
  </>
    )}
</Popover>

    </Box>
   </Flex>
   </>
  )
}

export default Navbar