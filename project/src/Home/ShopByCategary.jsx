import { Grid,GridItem,Heading,Image,Text,Flex,Button, Icon} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineShopping} from "react-icons/ai"
    
let product=[
    {
     "image": "https://static.thcdn.com/images/small/original/widgets/121-us/39/17_1009_CucumberExtract_US17_1009_CucumberExtract_US-014239.jpg",
     "cupon": "SkinCeuticals Gift",
     
     "title": "Receive a SkinCeuticals Triple Lipid Restore 2:4:2 Sample when you spend $150 or more on the brand.",
    
    },
    {
     "image": "https://static.thcdn.com/images/small/original/widgets/121-us/39/0712-STDCRE-38046-SS-MH-Photography-July-22-REMAINING-BATCHING-Shot8-600x600-063639.png",
     "cupon": "25% off Elemis with code SINGLES",
    
     "title": "Elemis skincare products are carefully formulated to maximize the potential of your skin and restore its best qualities to enhance your natural beauty.",
   
    },
    {
     "image": "https://static.thcdn.com/images/small/original/widgets/121-us/27/SkinStore_Q4_Photography_2022_-_October_-_THG0035163_-_BATCHING_shot8600x600-090227.jpg",
     "cupon": "Brand of the Month: Obagi Medical",
    
     "title": "Obagi crafts advanced skincare products that help unleash skin’s full potential with an extensive portfolio designed to brighten, protect, and enhance skin tone and texture.",
    
    },
    {
     "image": "https://static.thcdn.com/images/small/original/widgets/121-us/10/0224-STDCRE-32153-SS-BME-Skinstore-March-2022-Photography-Batching-Shot_14-600x600-091010.jpg",
     "cupon": "Up to 50% off TriPollar",
   
     "title": "TriPollar uses clinical expertise to create home-use devices that encourage skin regeneration and enhance natural beauty."
     
    },
    {
     "image": "https://static.thcdn.com/images/small/original/widgets/121-us/42/best_selling-064442.jpg",
     "cupon": "25% off Neocutis with code SINGLES",
    
     "title": "Neocutis means 'new skin', and that's precisely what the products in their collection can create: a new, youthful complexion that is visibly smoother and firmer to the touch.",
    
    },
   
    {
     "image": "https://static.thcdn.com/images/small/original/widgets/121-us/28/original-Screenshot_2022-03-07_141739-065628.png",
     "cupon": "25% off Estee Lauder with code SINGLES",
  
     "title": "Always happy to share the latest and greatest in skincare and beauty innovation, we're happy to announce that Estee Lauder is now available at SkinStore!",
     
    },
    {
     "image": "https://static.thcdn.com/images/small/original/widgets/121-us/34/original-dhc.ss-061734.jpg",
     "cupon": "25% off DHC with code SINGLES",
  
     "title": "Discover olive oil based skincare and makeup with 25% off Japanese beauty expert, DHC.",
   
    },
    {
     "image": "https://static.thcdn.com/images/small/original/widgets/121-us/23/original-perricone.ss-013423.jpg",
     "cupon": "25% off Perricone MD with code SINGLES",

     "title": "Perricone MD is a cosmeceutical line that helps to repair skin damage using nutrient antioxidants.",
   
    },
    {
     "image": "https://static.thcdn.com/images/small/original/widgets/121-us/06/original-SkinC_Ferulic-034413-012406.jpg",
     "cupon": "SkinCeuticals: Vitamin C Beyond the Face",
  
     "title": "SkinCeuticals believes in celebrating the skin-protective and rejuvenating powers of vitamin C every day, but this year they’re making sure your eyes and lips get in on the antioxidant action (and benefits).",
   
    },
    
   
   ]
   let data= [
    {
     "image": "https://static.thcdn.com/images/small/original//productimg/480/480/13524404-5734930150395321.jpg",
     "title": "Epionce Luminous Eye Serum 0.53ml",
     
     "price": "$67.00"
    },
    {
     "image": "https://static.thcdn.com/images/small/original//productimg/480/480/12448076-8695002190173929.jpg",
     "title": "Grow Gorgeous Hair Density Serum Original Duo 2 x 60ml",
    
     "price": "$49.00"
    },
    {
     "image": "https://static.thcdn.com/images/small/original//productimg/480/480/13920999-1114993397470335.jpg",
     "title": "Sunday Riley Morning Buzz Vitamin C Brightening Trio Skincare Set (Worth $151.00)",
     
     "price": "$98.00"
    },
    {
     "image": "https://static.thcdn.com/images/small/original//productimg/480/480/12358556-1974888087906815.jpg",
     "title": "TriPollar STOP X Device - Rose Gold",
   
     "price": "$199.75"
    }
   ]
const ShopByCategary = () => {
  return (
    <>
    <Heading size="lg" textAlign="center" fontSize="30px" m="30px">Shop by Category</Heading>
    <Grid templateColumns='repeat(6, 1fr)' gap="20px">
        <GridItem>
       <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/01/Page-001-025201.png"/>
        </GridItem>
        <GridItem>
            <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/09/Page-002-025209.png"/>
        
        </GridItem>
        <GridItem>
            <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/17/Page-003-025217.png"/>
          
        </GridItem>
        <GridItem>
            <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/21/Page-004-025221.png"/>
            
        </GridItem>
        <GridItem>
            <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/40/Page-005-025240.png"/>
            
        </GridItem>
       <GridItem>
        <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/58/Page-006-025258.png"/>
       
       </GridItem>
    </Grid>
    <Heading size="lg" textAlign="center" fontSize="30px" m="30px">Trending Offers</Heading>
    <Grid templateColumns="repeat(3,1fr)" gap={7} m="20px">
    {product.map(item=>(
        
        <GridItem key={item.title}>
            <Flex direction="column" gap={5} alignItems="center" justifyContent="space-around">
            <Image src={item.image} borderRadius="50%" w="80%"/>
            <Heading as="h6" size="sm">{item.cupon}</Heading>
            <Text>{item.title}</Text>
            <Button>SHOP NOW</Button>
            </Flex>
           
        </GridItem>
    ))}
    </Grid>
    <Heading size="lg" textAlign="center" fontSize="30px" m="30px">What People Are Buying Right Now</Heading>
    <Grid templateColumns="repeat(4,1fr)" gap={5} m="20px">
       {data.map(item=>(
        <GridItem key={item.title}>
            <Flex flexDirection="column" alignItems="center" gap={3}>
                <Image src={item.image}/>
                <Text>{item.title}</Text>
                <Text>{item.price}</Text>
                <Button bgColor="black" color="white"><Icon as={AiOutlineShopping}/>SHOP NOW</Button>
            </Flex>
        </GridItem>
       ))}
      
    </Grid>

    </>
  )
}

export default ShopByCategary