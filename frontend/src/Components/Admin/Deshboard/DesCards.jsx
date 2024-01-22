import { Box, Card, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { LuGitPullRequest } from "react-icons/lu";

const DesCards = () => {

  return (
    <Box p='20px'>
        <Grid gp='3' gridTemplateColumns={'repeat(4,1fr)'}>
            <Flex color='#b52828' cursor={'pointer'} transition={'.4s'} _hover={{bg:'#b52828', color:'white'}} rounded={'md'} h='120px' p='3' align={'center'} justify={'space-between'} border={'2px solid #b52828'}>
                <Flex fontSize={'20px'} gap='2'>
                    <Text >
                        <LuGitPullRequest />
                    </Text>
                    <Heading size={'md'} >Admission Requests</Heading>
                </Flex>
                <Heading>6</Heading>
            </Flex>
        </Grid>
    </Box>
  )
}

export default DesCards