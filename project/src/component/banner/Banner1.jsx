import React from 'react'
import {Flex,Box,Text, Icon} from "@chakra-ui/react"
import {FaShippingFast} from "react-icons/fa"
import {ImMobile} from "react-icons/im"
const Banner1 = () => {
  return (
    <>
    <Flex justifyContent="space-evenly" bgColor="#f2f2f2" p="20px" >
        <Box>
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
    </Flex>
    </>
  )
}

export default Banner1