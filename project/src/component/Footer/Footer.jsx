import React from 'react'
import {Grid,GridItem,Heading,Button,Flex,Link,Icon,Text,Box,Image} from "@chakra-ui/react"
import {BsFacebook, BsInstagram, BsPinterest, BsSnapchat, BsTwitter} from "react-icons/bs"
import {PhoneIcon,SettingsIcon,QuestionIcon} from "@chakra-ui/icons"
import {MdLocalShipping} from "react-icons/md"
import {SlRefresh} from "react-icons/sl"
import {SiPivotaltracker} from "react-icons/si"
import Preference from './Preference'

const Payment=[
    {
        image:"https://w7.pngwing.com/pngs/49/82/png-transparent-credit-card-visa-logo-mastercard-bank-mastercard-blue-text-rectangle.png"
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png"
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/2560px-PayPal_logo.svg.png"
    },
    {
        image:'https://images.ctfassets.net/m30so9ssvmhu/6sF6rjypWweSojqqsrrMJB/df26c65150699da3c230f0746d3b81d4/sezzle_logo.png?w=798&h=200&q=50&fm=png'
    },
    {
        image:"https://mma.prnewswire.com/media/1224081/Afterpay_Mint_Logo.jpg"
    }
]
const Footer = () => {
  return (
    <>
  
    <Grid templateColumns="repeat(2,1fr)" m={10}>
        <GridItem  >
            <Heading as="h4" size="xs">
            Sign up to our email list and receive 20% off your next order
            </Heading>
            <Button bgColor="black" color="white" mt={3}>SIGN UP</Button>
        </GridItem>
        <GridItem>
        <Heading as="h4" size="xs">
        Connect with us
            </Heading>
            <Flex gap={10} mt="10px">
            <Link href='https://www.facebook.com/SkinStore' isExternal>
                <Icon as={BsFacebook} w="20px"/>

            </Link>
            <Link href='https://www.instagram.com/skinstore/' isExternal>
                <Icon as={BsInstagram}/>

            </Link>
            <Link href='https://twitter.com/skinstore_cs' isExternal>
                <Icon as={BsTwitter}/>

            </Link>
            <Link href='https://www.pinterest.com/skinstore/' isExternal>
                <Icon as={BsPinterest}/>

            </Link>
         
            <Link href='https://www.snapchat.com/add/SkinStoreUS/' isExternal>
                <Icon as={BsSnapchat}/>

            </Link>
            </Flex>

        </GridItem>
    </Grid>
    <Grid templateColumns="repeat(4,1fr)" gap={5} m={10}>
        <GridItem>
            <hr  style={{marginBottom:"10px"}}/>
        <Heading as="h4" size="xs" mb={3}>
        Help & Information
            </Heading>
            <Flex direction="column" gap={3}>
            <Text> <Icon as={PhoneIcon} />Customer Service</Text>
            <Text> <Icon as={MdLocalShipping} />Delivery Information</Text>
            <Text> <Icon as={SlRefresh} />Returns & Refunds</Text>
            <Text>  <Icon as={QuestionIcon} />Help Center</Text>
            <Text> <Icon as={SiPivotaltracker} />Track my order</Text>
            <Text>Accessibility</Text>
            <Text>  <Icon as={SettingsIcon} />Cookie Settings</Text>
            </Flex>
        </GridItem>
        <GridItem>
        <hr  style={{marginBottom:"10px"}}/>
        <Heading as="h4" size="xs" mb={3}>
        About SkinStore
            </Heading>
            <Flex direction="column" gap={3}>
            <Text>Key Workers Discount</Text>
            <Text>About Us</Text>
            <Text>Affiliate Program</Text>
            <Text>Brand Directory</Text>
            <Text>Coupon Codes</Text>
            <Text>Refer A Friend</Text>
            <Text>Student Discount</Text>
            <Text>Join SkinStore Experts</Text>
            </Flex>
        </GridItem>
        <GridItem>
        <hr  style={{marginBottom:"10px"}}/>
        <Heading as="h4" size="xs" mb={3}>
        Legal
            </Heading>
            <Flex direction="column" gap={3}>
                <Text>
                Cookie Information</Text>
                <Text>
                Privacy Policy
                </Text>
                <Text>Terms & Conditions</Text>
                <Text>
                Modern Slavery Statement
                </Text>
            </Flex>
        </GridItem>
        <GridItem>
        <hr  style={{marginBottom:"10px"}}/>
        <Heading as="h4" size="xs" mb={3}>
        How To Contact Us
            </Heading>
            <Flex direction="column" gap={3}>
                <Text>
                Message Us</Text>
                <Text>
                Free Beauty Consultations
                </Text>
               
            </Flex>
        </GridItem>
    </Grid>
    <hr style={{marginBottom:"30px"}}/>
    <Grid templateColumns="repeat(2,1fr)" gap={10} m={10}>
        <GridItem>
            <Heading mb={3}>T H G</Heading>
            <Text>2022 © The Hut.com Ltd.</Text>
        </GridItem>
        <GridItem>
        <Heading as="h4" size="xs" mb={3}>
            
Pay securely with
        </Heading>
            <Flex alignItems="center"gap={3}>
              {Payment.map(item=>(
                <Box key={Math.round(2)}>
                    <Image src={item.image} w="100px"/>
                </Box>
              ))}
            </Flex>
        </GridItem>
    </Grid>
    <Preference/>
    </>
  )
}

export default Footer