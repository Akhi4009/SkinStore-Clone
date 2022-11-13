import React from 'react'
import {HStack,Button,Text} from "@chakra-ui/react"

const Pagination = ({page,handlePage}) => {
  return (<HStack w="20%"m="auto" justify="center" p={5}>
        <Button disabled={page===1} onClick={()=>handlePage(-1)}>Prev</Button>
        <Text>{page}</Text>
        <Button onClick={()=>handlePage(1)}>Next</Button>
    </HStack>
  )
}

export default Pagination