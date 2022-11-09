import React from 'react'

import { Box,Heading,Image } from '@chakra-ui/react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Carsaul = () => {
  return (
    
    <>
    <Carousel>
         <Box ><Image src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/58/SS-Batching-Christmas-Homepage_Banner-EG1180x450_copy_2-060058.jpg"/></Box>
        <Box><Image src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/10/original-New_Project_%283%29-085610.jpg"/></Box> 
        
        <Box><Image src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/55/Shot6-1180x450-095455.jpeg"/></Box>
  <Box><Image src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/17/original-1024-STDCRE-42756-SS-WC-Cyber-Waitlist-Site-Assets-1180x450-040317.jpg"/></Box>
        </Carousel>  
    </>
  )
}

export default Carsaul