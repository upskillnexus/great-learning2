import React, { useEffect } from 'react';
import { Box, Button, Checkbox, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Grid, Heading, Image, Spinner, Text } from '@chakra-ui/react';
import { formatDate } from '../../../core/DateFormator';
import useGetSingleAdmissions from '../../../Libs/Quirys/Admission/useGetSingleAdmission';

const AdmissionDetailsDrawer = ({ onOpen,isOpen, onClose, id }) => {
    const {data: admissionData, isPending: loading, refetch} = useGetSingleAdmissions({id: id?._id});

    useEffect(() => {
        if(!loading){
            refetch()
        }
    },[id, ])

    const drawerContent = (
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color='#b52828'>Admission Details</DrawerHeader>
          <DrawerBody>
            {loading ?
                <Flex h={'100vh'} w='full' align={'center'} justify={'center'} >
                    <Spinner size={'xl'} color='#b52828' /> 
                </Flex>
            : 
                <Grid gap={"2"} gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }} align="start">
                    <Box  _hover={{
                            bg: '#b52828',
                            color: 'white',
                            '& .nested-element': {color: 'white',}
                    }}
                        transition={".3s"} p="4" border={"2px solid #b9292f"} borderRadius="md"
                    >

                        <Heading className='nested-element' size="md" color="#b9292f" >Personal Information</Heading>
                        <Flex justify={"space-between"}>
                            <Text fontWeight={'bold'}>Fullname: </Text>
                            <Text>{admissionData?.data?.fullname}</Text>
                        </Flex>

                        <Flex justify={"space-between"}>
                            <Text fontWeight={'bold'}>Date Of Birth: </Text>
                            <Text>{formatDate(admissionData?.data?.dateofbirth)}</Text>
                        </Flex>
                        <Flex justify={"space-between"}>
                            <Text fontWeight={'bold'}>Course: </Text>
                            <Text>{admissionData?.data?.course}</Text>
                        </Flex>
                        <Flex justify={"space-between"}>
                            <Text fontWeight={'bold'}>Gender: </Text>
                            <Text>{admissionData?.data?.gender}</Text>
                        </Flex>
                        <Flex justify={"space-between"}>
                            <Text fontWeight={'bold'}>Occupation: </Text>
                            <Text>{admissionData?.data?.occupation}</Text>
                        </Flex>
                    </Box>

                    {/*  */}

                    <Box  _hover={{
                            bg: '#b52828',
                            color: 'white',
                            '& .nested-element': {color: 'white',}
                    }}
                        transition={".3s"} p="4" border={"2px solid #b9292f"} borderRadius="md"
                    >
                        <Heading className='nested-element' size="md" color="#b9292f">Address</Heading>
                        <Flex justify={"space-between"}>
                            <Text fontWeight={'bold'}>Address: </Text>
                            <Text fontWeight={'bold'}>{admissionData?.data?.address}</Text>
                        </Flex>

                        <Flex justify={"space-between"}>
                            <Text fontWeight={'bold'}>State </Text>
                            <Text fontWeight={'bold'}>{admissionData?.data?.state}</Text>
                        </Flex>
                        <Flex justify={"space-between"}>
                            <Text fontWeight={'bold'}>Country: </Text>
                            <Text fontWeight={'bold'}>{admissionData?.data?.country}</Text>
                        </Flex>
                        <Flex justify={"space-between"}>
                            <Text fontWeight={'bold'}>Pincode: </Text>
                            <Text fontWeight={'bold'}>{admissionData?.data?.pincode}</Text>
                        </Flex>
                    </Box>

                    <Box  _hover={{
                            bg: '#b52828',
                            color: 'white',
                            '& .nested-element': {color: 'white',},
                            '& .divider' : {bg:'white', border: '1px solid white'}
                        }}
                        transition={".3s"} p="4" border={"2px solid #b9292f"} borderRadius="md"
                    >
                        <Heading className='nested-element' size="md" color="#b9292f">Educational Details</Heading>

                        {admissionData?.data?.occupation == "student" && (
                            <Flex justify={"space-between"}>
                                <Text fontWeight="bold" pr={2}>Institution Name:</Text>
                                <Text>{admissionData?.data?.institution_name}</Text>
                            </Flex>
                        )}

                        {admissionData?.data?.occupation != "student" && (
                        <>
                            <Flex justify={"space-between"}>
                                <Text fontWeight="bold" pr={2}>Qualifications:</Text>
                                <Text>{admissionData?.data?.educationalQualifications}</Text>
                            </Flex>
                            {/*  */}
                            <Flex justify={"space-between"}>
                                <Text fontWeight="bold" pr={2}>
                                    Designation:
                                </Text>
                                <Text>{admissionData?.data?.designation}</Text>
                            </Flex>
                        </>
                        )}
                        {/*  */}
                        <Divider className='divider' />

                        <Heading className='nested-element' size="md" my={2} color="#b9292f">Occupation Details</Heading>
                        <Flex justify={"space-between"}>
                            <Text fontWeight="bold" pr={2}>
                                Occupation:
                            </Text>
                            <Text>{admissionData?.data?.occupation}</Text>
                        </Flex>
                        {admissionData?.data?.occupation != "student" && (
                        <>
                            <Flex justify={"space-between"}>
                            <Text fontWeight="bold" pr={2}>
                                Company Name:
                            </Text>
                            <Text>{admissionData?.data?.companyName}</Text>
                            </Flex>
                        </>
                        )}

                        <Flex justify={"space-between"}>
                        <Text fontWeight="bold" pr={2}>
                            Course
                        </Text>
                        <Text fontWeight={'bold'}>{admissionData?.data?.course}</Text>
                        </Flex>
                    </Box>


                    <Box  _hover={{
                        bg: '#b52828',
                        color: 'white',
                        '& .nested-element': {color: 'white',}
                    }}
                        transition={".3s"} p="4" border={"2px solid #b9292f"} borderRadius="md"
                    >
                        <Flex justify={"space-between"}>
                        <Text fontWeight="bold" pr={2}>
                            How did you know about UpskillNexus:
                        </Text>
                        <Text>{admissionData?.data?.leadFrom}</Text>
                        </Flex>

                        <Heading className='nested-element' size="md" my={2} color="#b9292f">Declaration</Heading>
                        <Flex justify={"space-between"}>
                        <Checkbox isDisabled defaultChecked={admissionData?.data?.declaration}>
                            <Text p={2} fontWeight={"bold"}>
                                I certify that the information I have written on the application form and the
                                documents I have submitted are true and accurate.
                            </Text>
                        </Checkbox>
                        {/* <Text>{getValues.declaration ? "Yes" : "No"}</Text> */}
                        </Flex>
                    </Box>

                    <Box  _hover={{
                            bg: '#b52828',
                            color: 'white',
                            '& .nested-element': {color: 'white',}
                    }}
                        transition={".3s"} p="4" border={"2px solid #b9292f"} borderRadius="md"
                    >
                        <Heading className='nested-element' size="md" my={2} color="#b9292f">Passport Photo</Heading>
                        <Image w='full' src={admissionData?.data?.passportphoto?.location} />
                    </Box>
                    
                    <Box  _hover={{
                            bg: '#b52828',
                            color: 'white',
                            '& .nested-element': {color: 'white',}
                    }}
                        transition={".3s"} p="4" border={"2px solid #b9292f"} borderRadius="md"
                    >
                        <Heading className='nested-element' size="md" my={2} color="#b9292f">CV</Heading>
                        <Image w='full' src={admissionData?.data?.cv?.location} />
                    </Box>
                </Grid>
            }
    
          </DrawerBody>
        </DrawerContent>
      );

  return (
    <>
      <Drawer size={'lg'} isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay />
        
        {drawerContent}
      </Drawer>
    </>
  );
};

export default AdmissionDetailsDrawer;
