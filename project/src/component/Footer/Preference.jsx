import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
   Button,
   useDisclosure,Heading,Text,Box,Switch,Flex,Link

  } from '@chakra-ui/react'
  import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import React from "react"
import { AddIcon,MinusIcon } from '@chakra-ui/icons'
function Preference() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')
  
    const btnRef = React.useRef(null)
    return (
      <>
      
  
        <Button mt={3} ref={btnRef} onClick={onOpen}>
          Trigger modal
        </Button>
  
        <Modal
          onClose={onClose}
          finalFocusRef={btnRef}
          isOpen={isOpen}
          scrollBehavior={scrollBehavior}
         size="2xl"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader >
                <Heading  color="green.500" >ONE TRUST</Heading>
                <Text fontSize={8}>PRIVACY, SECURITY & GOVERENCE</Text>
                
                </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Box>
            <Heading size="md">Privacy Preference Center

            </Heading>
            <Text>
            When you visit our website, it may store or retrieve information on your browser, 
             in the form of cookies or similar technology . This information might be about you, 
             your preferences or your device and is used to make the site work as you expect it to,
              help us understand how visitors use our site, make our advertising more relevant to you and measure the effectiveness of 
              our advertisements. The information does not usually directly identify you, but it can give you a more personalized
               web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click
                on the different category headings to find out more and change our default settings. However, blocking some types 
                of cookies may impact your experience of the site and the services we are able to offer.
            </Text>
            <Button bgColor="green" color="White" onClick={onClose}>That's Ok</Button>
            </Box>
            <Box pt={5}>
                <Heading size="sm">
                Manage Consent Preference
                </Heading>

  <Accordion allowMultiple>
  

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
          {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
            <Box flex='1' textAlign='left' ml={2}>
           
            Functional Cookies
            </Box>
            <Switch size='lg' />
          
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        These cookies enable the website to provide enhanced functionality and personalisation.
        
         They may be set by us or by third party providers whose services we have added to our pages.
             If you do not allow these cookies then some or all of these services may not function properly.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
          {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
            <Box flex='1' textAlign='left' ml={2}>
           
            Performance Cookies
            </Box>
            <Switch size='lg' />

          
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.
         They help us to know which pages are the most and least popular and see how visitors move around the site. 
            All information these cookies collect is aggregated and therefore anonymous.
             If you do not allow these cookies we will not know when you have visited our site, 
             and will not be able to monitor its performance.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
          {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
            <Box flex='1' textAlign='left' ml={2}>
           
            Strictly Necessary Cookies
            </Box>
            <Text color="blue.500">Always active</Text>
          
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        These cookies enable the website to provide enhanced functionality and personalisation.
        
         They may be set by us or by third party providers whose services we have added to our pages.
             If you do not allow these cookies then some or all of these services may not function properly.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
          {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
            <Box flex='1' textAlign='left' ml={2}>
           
           Targeting Cookies
            </Box>
            <Switch size='lg' />
          
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        These cookies enable the website to provide enhanced functionality and personalisation.
        
         They may be set by us or by third party providers whose services we have added to our pages.
             If you do not allow these cookies then some or all of these services may not function properly.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
          {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
            <Box flex='1' textAlign='left' ml={2}>
           
           Social Media Cookies
            </Box>
            <Switch size='lg' />
          
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        These cookies enable the website to provide enhanced functionality and personalisation.
        
         They may be set by us or by third party providers whose services we have added to our pages.
             If you do not allow these cookies then some or all of these services may not function properly.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
            </Box>
          
            
            </ModalBody>
            <ModalFooter>
                <Box mb={2}>
                <Flex gap={3}>
            <Button onClick={onClose} bgColor="green" color="white" >Reject All</Button>
            <Button onClick={onClose} bgColor="green" color="white">Set Preference</Button>
            </Flex>
            <Box >
   <Text>Power by <Link href='https://www.onetrust.com/products/cookie-consent/' isExternal color="green" >
   ONE TRUST 

            </Link></Text> 
</Box>
            </Box>

            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Preference