import React,{useContext,useEffect} from 'react'
import { Flex,Box,Heading ,Text, Input, Button, HStack,Icon, SimpleGrid,Grid, Divider} from '@chakra-ui/react'
import {SearchIcon} from "@chakra-ui/icons"
import {Link} from "react-router-dom"
import {BsBasket3} from "react-icons/bs"
import {BsPerson} from "react-icons/bs"
import { addToCart } from "../../component/Context/action"
import axios from "axios"
import {
    Popover,
    PopoverTrigger,
    PopoverContent, 
   
    PopoverBody,
  PopoverHeader,
    PopoverArrow,
    PopoverCloseButton,Image,Show
    
   
   
  } from '@chakra-ui/react'
  import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
  import { CartContext } from '../Context/CartContext'

  let arr1=["New & Trending","Skincare","Hair","Makeup","Tools","Bath & Body","Self-Care","Sale","Blog"]
let arr=["A","B","C","D","E","F","G","H","I","J","K","l","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  const getProduct=()=>(
    axios.get(`http://localhost:8080/card`)
  )
const Navbar = () => {

  const {state,dispatch}=useContext(CartContext)
 
  useEffect(()=>{
    getProduct().then(res=>{
     
      dispatch(addToCart(res.data.data))
      
    })
  },[dispatch])
 
 
    
  return (
   <Box bg={"white"}  h={"150px"} mb={5} pos={"sticky"} top={0} zIndex={1}>
   <Flex justify="space-around" alignItems={"center"}   h={"100px"}   >
    <Box>
<Link to="/"> <Heading as='h3' size='lg' fontSize="3xl">
   SkinStore
  </Heading>
  <Text fontSize='sm'>part of  the LOOKFANTASTIC group</Text>
  </Link>
    </Box>
    <Show above='md'>
    <Box >
        <HStack spacing={0} alignItems="center" border="1px solid #ccc">
<Input type="text" border="none" placeholder=' product or brand'/>
<Button bgColor="transparent"><Icon as={SearchIcon} /></Button>
</HStack>

    </Box>
    </Show>
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
     Cart {state.data.length}
</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>
     <Link to="/cart"><Button  onClick={onClose}>View Cart</Button></Link>  
     <Text>{state.data.length} item in the cart</Text>
    </PopoverHeader>
    <PopoverBody>
      <Grid templateColumns="repeat(6,1fr)">
        {
state?.data?.map(item=>(
  <Flex key={item._id}>
    <Image src={item.image}/>
    
  </Flex>
))
        }
      </Grid>
    </PopoverBody>
  </PopoverContent>
  </>
    )}
</Popover>

    </Box>
    
   </Flex>
   <Divider orientation='horizontal' color="black" mb={2} />
   <Show above='md'>
   <Flex justifyContent={"space-around"} w="90%" m="auto">
 

    <Menu>
  <MenuButton as={Button} bg={"none"}>
  <Text fontWeight={100} _hover={{cursor:"pointer"}}>Brand</Text>
  </MenuButton>
  <MenuList>
  <Flex   >
  {arr.map((ele,index)=>(
      <MenuItem w={10}>
      <Text key={index}>{ele}</Text>
      </MenuItem>
    ))}

   </Flex>
    </MenuList>
    </Menu>
    <Menu>
  <MenuButton as={Button} bg={"none"}>
  <Text fontWeight={100} _hover={{cursor:"pointer"}}>Friends and Family</Text>
  </MenuButton>
  <MenuList>
  <Flex>
  <Box p={5}>
  <MenuItem fontWeight={100}>By Cotegory</MenuItem>
 <MenuItem fontWeight={100}>25 % off</MenuItem>
 <MenuItem fontWeight={100}>Up to 30% Skincare</MenuItem>
 <MenuItem fontWeight={100}>Up to 30% Haircare</MenuItem>
 <MenuItem fontWeight={100}>Up to 30% Makeup</MenuItem>
 <MenuItem fontWeight={100}>Up to 30% Bath & Body</MenuItem>
 </Box>
 <Box p={5}>
 <MenuItem fontWeight={100}>By Discount Home</MenuItem>
 <MenuItem fontWeight={100}>15 % off</MenuItem>
 <MenuItem fontWeight={100}>20 % off</MenuItem>
 <MenuItem fontWeight={100}>25 % off</MenuItem>
 <MenuItem fontWeight={100}>30 % off</MenuItem>
 
 </Box>

   </Flex>
    </MenuList>
    </Menu>
    <Menu>
  <MenuButton as={Button} bg={"none"}>
  <Text fontWeight={100} _hover={{cursor:"pointer"}}>New Trending</Text>
  </MenuButton>
  <MenuList>
  <Flex>
  <Box p={5}>
  <MenuItem fontWeight={100}>New in</MenuItem>
 <MenuItem fontWeight={100}>Skincare</MenuItem>
 <MenuItem fontWeight={100}>Haircare</MenuItem>
 <MenuItem fontWeight={100}>Mens</MenuItem>
 <MenuItem fontWeight={100}>Makeup</MenuItem>
 <MenuItem fontWeight={100}>Shop All</MenuItem>
 </Box>
 <Box p={5}>
 <MenuItem fontWeight={100}>Just Launched</MenuItem>
 <MenuItem fontWeight={100}>Sarah Capman</MenuItem>
 <MenuItem fontWeight={100}>ISDIN</MenuItem>
 <MenuItem fontWeight={100}>Act + Acre</MenuItem>
 <MenuItem fontWeight={100}>Mermade Hair</MenuItem>
 <MenuItem fontWeight={100}>Ellis Brooklin</MenuItem>
 <MenuItem fontWeight={100}>Rituals</MenuItem>
 
 </Box>

   </Flex>
    </MenuList>
    </Menu>
    <Menu>
  <MenuButton as={Button} bg={"none"}>
  <Text fontWeight={100} _hover={{cursor:"pointer"}}>Skin Care</Text>
  </MenuButton>
  <MenuList>
  <Flex>
  <Box p={5}>
  <MenuItem fontWeight={100}>New in</MenuItem>
 <MenuItem fontWeight={100}>Skincare</MenuItem>
 <MenuItem fontWeight={100}>Haircare</MenuItem>
 <MenuItem fontWeight={100}>Mens</MenuItem>
 <MenuItem fontWeight={100}>Makeup</MenuItem>
 <MenuItem fontWeight={100}>Shop All</MenuItem>
 </Box>
 <Box p={5}>
 <MenuItem fontWeight={100}>Just Launched</MenuItem>
 <MenuItem fontWeight={100}>Sarah Capman</MenuItem>
 <MenuItem fontWeight={100}>ISDIN</MenuItem>
 <MenuItem fontWeight={100}>Act + Acre</MenuItem>
 <MenuItem fontWeight={100}>Mermade Hair</MenuItem>
 <MenuItem fontWeight={100}>Ellis Brooklin</MenuItem>
 <MenuItem fontWeight={100}>Rituals</MenuItem>
 
 </Box>

   </Flex>
    </MenuList>
    </Menu>
    <Menu>
  <MenuButton as={Button} bg={"none"}>
  <Text fontWeight={100} _hover={{cursor:"pointer"}}>Hair</Text>
  </MenuButton>
  <MenuList>
  <Flex>
  <Box p={5}>
  <MenuItem fontWeight={100}>New in</MenuItem>
 <MenuItem fontWeight={100}>Skincare</MenuItem>
 <MenuItem fontWeight={100}>Haircare</MenuItem>
 <MenuItem fontWeight={100}>Mens</MenuItem>
 <MenuItem fontWeight={100}>Makeup</MenuItem>
 <MenuItem fontWeight={100}>Shop All</MenuItem>
 </Box>
 <Box p={5}>
 <MenuItem fontWeight={100}>Just Launched</MenuItem>
 <MenuItem fontWeight={100}>Sarah Capman</MenuItem>
 <MenuItem fontWeight={100}>ISDIN</MenuItem>
 <MenuItem fontWeight={100}>Act + Acre</MenuItem>
 <MenuItem fontWeight={100}>Mermade Hair</MenuItem>
 <MenuItem fontWeight={100}>Ellis Brooklin</MenuItem>
 <MenuItem fontWeight={100}>Rituals</MenuItem>
 
 </Box>

   </Flex>
    </MenuList>
    </Menu>
    <Menu>
  <MenuButton as={Button} bg={"none"}>
  <Text fontWeight={100} _hover={{cursor:"pointer"}}>Makeup</Text>
  </MenuButton>
  <MenuList>
  <Flex>
  <Box p={5}>
  <MenuItem fontWeight={100}>New in</MenuItem>
 <MenuItem fontWeight={100}>Skincare</MenuItem>
 <MenuItem fontWeight={100}>Haircare</MenuItem>
 <MenuItem fontWeight={100}>Mens</MenuItem>
 <MenuItem fontWeight={100}>Makeup</MenuItem>
 <MenuItem fontWeight={100}>Shop All</MenuItem>
 </Box>
 <Box p={5}>
 <MenuItem fontWeight={100}>Just Launched</MenuItem>
 <MenuItem fontWeight={100}>Sarah Capman</MenuItem>
 <MenuItem fontWeight={100}>ISDIN</MenuItem>
 <MenuItem fontWeight={100}>Act + Acre</MenuItem>
 <MenuItem fontWeight={100}>Mermade Hair</MenuItem>
 <MenuItem fontWeight={100}>Ellis Brooklin</MenuItem>
 <MenuItem fontWeight={100}>Rituals</MenuItem>
 
 </Box>

   </Flex>
    </MenuList>
    </Menu>
    <Menu>
  <MenuButton as={Button} bg={"none"} >
  <Text fontWeight={100} _hover={{cursor:"pointer"}}>Tools</Text>
  </MenuButton>
  <MenuList>
  <Flex>
  <Box p={5}>
  <MenuItem fontWeight={100}>New in</MenuItem>
 <MenuItem fontWeight={100}>Skincare</MenuItem>
 <MenuItem fontWeight={100}>Haircare</MenuItem>
 <MenuItem fontWeight={100}>Mens</MenuItem>
 <MenuItem fontWeight={100}>Makeup</MenuItem>
 <MenuItem fontWeight={100}>Shop All</MenuItem>
 </Box>
 <Box p={5}>
 <MenuItem fontWeight={100}>Just Launched</MenuItem>
 <MenuItem fontWeight={100}>Sarah Capman</MenuItem>
 <MenuItem fontWeight={100}>ISDIN</MenuItem>
 <MenuItem fontWeight={100}>Act + Acre</MenuItem>
 <MenuItem fontWeight={100}>Mermade Hair</MenuItem>
 <MenuItem fontWeight={100}>Ellis Brooklin</MenuItem>
 <MenuItem fontWeight={100}>Rituals</MenuItem>
 
 </Box>

   </Flex>
    </MenuList>
    </Menu>
    <Menu>
  <MenuButton as={Button} bg={"none"} >
  <Text fontWeight={100} _hover={{cursor:"pointer"}}>Bath & Body</Text>
  </MenuButton>
  <MenuList>
  <Flex>
  <Box p={5}>
  <MenuItem fontWeight={100}>New in</MenuItem>
 <MenuItem fontWeight={100}>Skincare</MenuItem>
 <MenuItem fontWeight={100}>Haircare</MenuItem>
 <MenuItem fontWeight={100}>Mens</MenuItem>
 <MenuItem fontWeight={100}>Makeup</MenuItem>
 <MenuItem fontWeight={100}>Shop All</MenuItem>
 </Box>
 <Box p={5}>
 <MenuItem fontWeight={100}>Just Launched</MenuItem>
 <MenuItem fontWeight={100}>Sarah Capman</MenuItem>
 <MenuItem fontWeight={100}>ISDIN</MenuItem>
 <MenuItem fontWeight={100}>Act + Acre</MenuItem>
 <MenuItem fontWeight={100}>Mermade Hair</MenuItem>
 <MenuItem fontWeight={100}>Ellis Brooklin</MenuItem>
 <MenuItem fontWeight={100}>Rituals</MenuItem>
 
 </Box>

   </Flex>
    </MenuList>
    </Menu>
 
   </Flex>
   </Show>
   </Box>
  )
}

export default Navbar