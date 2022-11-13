import React from 'react'
import {Grid,GridItem,Heading,Image,Flex,Text,Button} from "@chakra-ui/react"


let product= [
    {
     "image": "https://static.thcdn.com/images/small/original/widgets/121-us/06/original-SkinC_Ferulic-034413-012406.jpg",
     "Title": "SkinCeuticals: Vitamin C Beyond the Face",
     
     "description": "SkinCeuticals believes in celebrating the skin-protective and rejuvenating powers of vitamin C every day, but this year they’re making sure your eyes and lips get in on the antioxidant action (and benefits).",
    
    },
    {
     "image": "https://static.thcdn.com/images/small/original/widgets/121-us/51/original-0224-STDCRE-32153-SS-BME-Skinstore-March-2022-Photography-Batching-Shot_13-500x500-023351.jpg",
     "Title": "Which TriPollar Device is Right for You?",
   
     "description": "In 2008, TriPollar launched themselves into the home beauty sphere with an aim to innovate the technology behind at-home treatments and devices.",
     
    },
    {
     "image": "https://static.thcdn.com/images/small/original/widgets/121-us/16/original-NB-IMAGE-5---2022-SKINSTORE-LANDING-PAGE-025016.jpg",
     "Title": "Discover Natura Bissé",
    
     "description": "With an aim to help their clients’ skin as they age and to turn their daily skin care routines into a moment of real self-care, Natura Bissé works to discover the latest scientific advancements and adapt them to the wellness industry.",
    
    }
   ]
const BlogAndBrand = () => {
  return (
    <>
    <Grid templateColumns="repeat(6,1fr)"  gap="10px" alignItems="center" m={10} >
        <GridItem>
            <Image w="90%"  src="https://static.thcdn.com/images/small/webp/widgets/121-us/26/180x72_4_233548301_CA_SS_Logo_Amend_BAU_THG0030424-041301-124116-063126.png"/>
        </GridItem>
        <GridItem>
            <Image w="80%" src="https://static.thcdn.com/images/small/webp/widgets/121-us/18/original-logo-1024x383-035229-063318.png"/>
        </GridItem>
        <GridItem>
            <Image w="80%" src="https://static.thcdn.com/images/small/webp/widgets/121-us/11/Revision_Skincare_Logo_without_Tag_Line-052511.png"/>
        </GridItem>
        <GridItem>
            <Image w="80%" src="https://static.thcdn.com/images/small/webp/widgets/121-us/46/original-NF_Skinstore_Banner_Logo_Color_320x140-01-011402-010546.png"/>
        </GridItem>

        <GridItem>
            <Image w="80%" src="https://static.thcdn.com/images/small/webp/widgets/121-us/27/220322-ELTAMD-LOGO-RGB-01-065127.png"/>
        </GridItem>
        <GridItem>
            <Image w="80%" src="https://static.thcdn.com/images/small/webp/widgets/121-us/07/original-LOGO-2022_SkinStore_Landing_Page-BLACK-060107.png"/>
        </GridItem>
    </Grid>
   
    <Heading size="lg" textAlign="center" fontSize="30px" m="30px">Over On the Blog...</Heading>

    <Grid templateColumns={{base:"repeat(1,1fr)", sm:"repeat(2,1fr)" ,lg:"repeat(3,1fr)"}}gap={10} alignItems="center" m={10}>
        {
            product.map(item=>(
                <GridItem key={item.Title}>
                    <Flex direction="column" alignItems="center" w="100%" gap={5}>
                        <Image src={item.image} borderRadius="50%" w="80%"/>
                        <Heading as="h6" size="sm" fontSize="20px">{item.Title}</Heading>
                        <Text>{item.description}</Text>
                        <Button>READ MORE</Button>
                    </Flex>
                </GridItem>
            ))
        }
    </Grid>
    </>
  )
}

export default BlogAndBrand