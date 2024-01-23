import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'

const SecurityService = () => {
    const data = [
        {
          text: 'Industry-leading professionals ensuring exceptional security.',
          color: '#b52828',
        },
        {
          text: 'Holistic approach covering all security aspects.',
          color: '#b52828',
        },
        {
          text: 'Trusted choice with successful outcomes.',
          color: '#b52828',
        },
      ];

      const securityData = [
        {
            title: 'APPLICATION SECURITY', 
            content: "Protect your applications against vulnerabilities and threats with our comprehensive security assessments."
        },
        {
            title: 'INFRASTRUCTURE SECURITY', 
            content: "Ensure the security and resilience of your infrastructure with our advanced security asessments."
        },
        {
            title: 'CLOUD SECURITY', 
            content: "Assess and strengthen the security of your cloud environment with our expert assessment and recommendations."
        },
        {
            title: 'SOURCE CODE REVIEW', 
            content: "Detect and address security flaws in your source code, preventing potential vulnerabilities and breaches."
        },
        {
            title: 'RED TEAMING', 
            content: "Assist clients in uncovering vulnerabilities and evaluating the effectiveness of their security measures through simulated real-world and goal driven attacks."
        },
        {
            title: 'THREAT MODELING', 
            content: "Proactively collaborate with clients to identify potential threats and vulnerabilities early in the development lifecycle with effective risk mitigation."
        },
        {
            title: 'CYBER SECURITY ADVISORY', 
            content: "Provide expert guidance and strategic advice to enhance your cyber security posture."
        },
        {
            title: 'API SECURITY', 
            content: "Provide API security assessment, including API gateway governance. "
        },
      ];

  return (
    <>
        <Box py="20px" >
            <Flex textAlign={'center'} align={'center'} flexDir={''} >
                <Box h='250px' w='500px' border={'2px solid black'}>
                    <Image objectFit={'cover'} w='full' h='full'  src='/partners/xbiz.png' />
                </Box>
                <Box>
                    <Heading fontSize={'28px'} color={'#b52828'}>UPSKILLNEXUS LAUNCHES CYBERSECURITY EXPERT TRAINING AND INTERNSHIP PROGRAM WITH SECURENEXUS.</Heading>
                    <Heading size='md'>
                        SECURENEXUS IS A PREMIER CYBER SECURITY SERVICE PROVIDER TO TOP BANKS AND CORPORATES
                    </Heading>
                    <Flex flexWrap={'wrap'} justify={'center'} align={'center'}>
                        {data.map((item, index) => (
                            <Flex key={index} align={'end'} gap='2' px='2' rounded={'md'}>
                                <Text fontSize={'18px'} mt='2' >
                                    <FaRegCheckCircle color={item?.color} />
                                </Text>
                                <Text fontWeight={'medium'} fontSize='15px'>
                                    {item.text}
                                </Text>
                            </Flex>
                        ))}
                    </Flex>
                </Box>
                <Box h='250px' w='500px' border={'2px solid black'}>
                    <Image objectFit={'cover'} w='full' h='full'  src='/partners/xbiz.png' />
                </Box>
            </Flex>

            <Grid gridTemplateColumns={{
                    sm: 'repeat(2,1fr)', 
                    base: 'repeat(1,1fr)', 
                    md:'repeat(3,1fr)', 
                    lg:'repeat(4,1fr)'
                }} gap='3' p='3' my="20px"
            >
                {securityData.map((ele,i) => (
                    <Card bg='#' key={i} p='2' textAlign={'center'} align='center' border={'2px solid #E7E5E5'} shadow={'sm'}>
                        <Heading color='#b52828' size={{md: 'md', base:'sm'}}>{ele?.title}</Heading>
                        <Text>{ele?.content} </Text>
                    </Card>
                ))}
            </Grid>
            <Box>
                <Text textAlign={'center'}>
                    SecureNexus is the CyberSecurity Division of X-Biz TechVentures Pvt Ltd.
                </Text>
                <Heading size={'md'}>
                    COURSE CURRICULUM AND LAB CHALLENGES DESIGNED BY THE EXPERT.
                </Heading>
            </Box>
            {/*  */}
            <Card p='3' flexDir={{ base: 'column', lg: 'row' }} overflow='hidden' variant='outline'>
                <Stack>
                    <CardBody p='4'>
                        <Heading color={'#b52828'}>SUNIL YADAV</Heading>
                        <Heading color={'#b52828'} size='md'>Managing Director — SecureNexus; Co-Founder X-Biz TechVentures 15 years experience. Specialist in Information Security.</Heading>
                        <Text>
                            A distinguished information secunty expert. Lead trainer and speaker (Global Black Hat
                            Conference). he is one of the top cybersecurity talents in the country and part of the global black
                            hat community spearheading cyber resilience. Founder of SecureNexus, he Heads Technology
                            Research and Development. Information Security & Risk Management at x-Biz TechVentures.
                        </Text>

                        <Text py='2'>
                            A renowned figure in cybersecurity. Sunil has presented at conferences like Black Hat USA and OWASP App Sec Europe.
                            Sunil also specialises in developing A1-dnven cybersecurity and computer vision products. showcasing a broad range of
                            expertise.
                        </Text>
                    </CardBody>
                </Stack>
                <Image rounded={'md'} border={'3px solid #b52828'} objectFit='cover' maxW={{ base: 'full', sm: '400px' }} alt='Our Leadership' src='/leadership/img2.png' />
            </Card>
        </Box>

        {/*  */}
    </>
  )
}

export default SecurityService