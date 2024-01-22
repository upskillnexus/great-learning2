import React from 'react';
import { Box, Flex, Link, Icon, Text, VStack, Avatar, Heading } from '@chakra-ui/react';
import {  BsFillGrid3X3GapFill } from 'react-icons/bs';
import { Link as RouterLink } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { PiGearSix } from "react-icons/pi";

const Sidebr = ({ children }) => {
  const sidebarItems = [
    { label: 'Dashboard', icon: BsFillGrid3X3GapFill, to: '/admin' },
    { label: 'Admission Request', icon: CgProfile, to: '/admin/students-admission' },
    { label: 'Inquery Leads', icon: PiGearSix, to: '/admin/leads' },
  ];

  return (
    <Flex justify={'space-between'} w='full'>
      <Flex justify={'space-between'} flexDir={'column'} as="nav" h="100vh" bg="#b52828" color="white" w='full' maxW={'18rem'} p={4} boxShadow="lg" >
        
        <Flex align="center" mb={4}>
          <Text fontSize="2xl" fontWeight="bold">
            Upskillnexus
          </Text>
        </Flex>

        <VStack h='90vh' spacing={4} align="stretch">
          {sidebarItems.map((item, index) => (
            <Link fontSize={'20px'} key={index} as={RouterLink} to={item.to} display="flex" alignItems="center" p={2} rounded="md" _hover={{ bg: 'rgba(0,0,0,0.2)' }}>
              <Icon as={item.icon} mr={2} />
              {item.label}
            </Link>
          ))}
        </VStack>

        <Flex cursor={'pointer'} align={'center'} gap='3'>
            <Avatar name='Katillboyy' src='https://bit.ly/tioluwani-kolawole' />
            <Flex m='0' p='0' flexDir={'column'} >
                <Heading m='0' as='h3' size={'sm'}>Katillboyy</Heading>
                <Text m='0' color={'#cccc'} fontSize={'13   px'}>Katillboyy@gmail.com</Text>
            </Flex>
        </Flex>
      </Flex>

      <Box w='full' pos={'relative'} zIndex={0}>
        {children}
      </Box>
    </Flex>
  );
};

export default Sidebr;
