import React from 'react'
import {Grid,Box,Text, Icon,HStack} from "@chakra-ui/react"
import {FaShippingFast} from "react-icons/fa"
import {ImMobile} from "react-icons/im"
const Banner1 = () => {
  return (
    <>
    <HStack spacing={3}  justifyContent="space-between" bgColor="#f2f2f2" p="20px" zIndex={0} >
        <Box >
            <Text><Icon as={FaShippingFast}/> FREE US Shipping Over $49</Text>
        </Box>
        <Box>
            <Text>Refer a Friend, Get $15</Text>
        </Box>
        <Box>
            <Text >New Customers Save 20% - Use Code NEWBIE</Text>
        </Box>
        <Box>
            <Text><Icon as={ImMobile}/> Download Our App</Text>
        </Box>
    </HStack>
    </>
  )
}

export default Banner1