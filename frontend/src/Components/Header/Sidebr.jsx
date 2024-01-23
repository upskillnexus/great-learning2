import React, { useState } from 'react';
import { Box, Flex, Link, Icon, Text, VStack, Avatar, Heading, Collapse } from '@chakra-ui/react';
import {  BsFillGrid3X3GapFill } from 'react-icons/bs';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { PiGearSix } from "react-icons/pi";
import { IoIosArrowDown, IoIosEye } from "react-icons/io";
import { MdOutlineEventNote } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

const Sidebr = ({ children }) => {
  const { pathname } = useLocation()
  const [openIndex, setOpenIndex] = useState(null);
  
  const sidebarItems = [
    { 
      label: 'Dashboard', 
      icon: BsFillGrid3X3GapFill, 
      to: '/admin' 
    },
    { 
      label: 'Admission',
       icon: IoIosArrowDown, 
       arr: [
        {
          label: 'Admission Request',
          icon: CgProfile, 
          to: '/admin/students-admission',
        },
       ]
    },
    
    { 
      label: 'Course',
       icon: IoIosArrowDown, 
       arr: [
         {
           label: 'View',
           icon: IoIosEye, 
           to: '/admin/course',
         },
        {
          label: 'Add Course',
          icon: FaPlus, 
          to: '/admin/course/create',
        },
       ]
    },
    // { 
    //   label: 'Inquery Leads',
    //    icon: PiGearSix, 
    //    to: '/admin/leads' 
    // },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Flex justify={'space-between'} w='full'>
      <Flex justify={'space-between'} flexDir={'column'} as="nav" h="100vh" bg="#b52828" color="white" w='full' maxW={'18rem'} p={4} boxShadow="lg" >
        
        <Flex align="center" mb={4}>
          <Text fontSize="2xl" fontWeight="bold">
            Upskillnexus
          </Text>
        </Flex>

        <VStack h="90vh" spacing={2} align="stretch">
          {sidebarItems.map((item, index) => (
            <div key={index}>
              <Link
                as={RouterLink}
                to={item.to}
                display="flex"
                alignItems="center"
                gap='5'
                p={2}
                rounded="md"
                _hover={{ bg: 'rgba(0,0,0,0.2)' }}
                bg={`${pathname == item.to && 'rgba(0,0,0,0.2)'} `}
                fontSize="18px"
                onClick={() => handleToggle(index)}
              >
                <Icon as={item.icon} mr={2} />
                <Text as={'span'}>{item.label}</Text>
              </Link>

              {/* Check if there are nested items */}
              {item.arr && (
                <Collapse in={openIndex === index}>
                  <VStack spacing={2} ml={4} mt='2' align="stretch">
                    {item.arr.map((nestedItem, nestedIndex) => (
                      <Link
                        key={nestedIndex}
                        as={RouterLink}
                        to={nestedItem.to}
                        display="flex"
                        alignItems="center"
                        p={2}
                        rounded="md"
                        _hover={{ bg: 'rgba(0,0,0,0.2)' }}
                        bg={`${pathname == nestedItem?.to && 'rgba(0,0,0,0.2)'}`}
                        fontSize="14px"
                      >
                        <Icon as={nestedItem.icon} mr={2} />
                        {nestedItem.label}
                      </Link>
                    ))}
                  </VStack>
                </Collapse>
              )}
            </div>
          ))}
        </VStack>

        <Flex cursor={'pointer'} align={'center'} gap='3'>
            <Avatar name='Katillboyy' src='' />
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
