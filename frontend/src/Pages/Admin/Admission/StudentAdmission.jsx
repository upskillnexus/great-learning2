import React, { useEffect, useState } from 'react'
import useGetAdmissions from '../../../Libs/Quirys/Admission/useGetAdmissions'
import DataTable from 'react-data-table-component'
import { Avatar, Box, Button, Flex, Grid, Heading, IconButton, Text, useDisclosure } from '@chakra-ui/react'
import { FaCheck } from 'react-icons/fa6'
import { MdOutlineClose, MdOutlineRemoveRedEye } from 'react-icons/md'
import AdmissionDetailsDrawer from '../../../Components/Admin/modal_drawr/StudentDetailsDrawr'

const StudentAdmission = () => {
    const [limit, setLimit] = useState(4)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data, setData ] = useState({})
    const {data: admissions , isPending: loading, refetch } = useGetAdmissions({limit})

    const columns = [
        {
          name: 'Name',
          sortable: true,
          selector: row => (
            <Flex gap='2' justify={'start'} align='center'>
                <Avatar size={'sm'} name={row.fullname} />
                <Text fontWeight={600}>{row.fullname}</Text>
            </Flex>
          ),
        },
        { name: 'Course' , selector: (row,i) => 
            row.course, sortable: true 
        },
        { name: 'Email', selector: (row,i) =>  
            row.email, sortable: true 
        },
        { name: 'Phone', selector: (row,i) =>  
            row.mobileNumber, sortable: true 
        },
        { name: 'Branch', selector: (row,i) =>  
            row.branch, sortable: true 
        },
        { name: 'City', selector: (row,i) =>  
            row.city, sortable: true 
        },
        { name: 'Occupation', selector: (row,i) =>  
            row.occupation, sortable: true 
        },
        { name: 'Gender', selector: (row,i) =>  
            row.gender, sortable: true 
        },

        {name: "Action",  width: 'auto',selector: (row,i) => (
                <Flex justify={'start'} gap='2'>
                    <IconButton bg='success' size='sm' icon={<FaCheck />} />
                    <IconButton onClick={() => studentDetails(row)} size='sm' icon={<MdOutlineRemoveRedEye />} />
                    <IconButton bg='#b9292f' color='white' size='sm' icon={<MdOutlineClose />} />
                </Flex>
            )
        }
      ];


      const handlePageChange = (page) => {
        console.log(page);
        setLimit(limit + 5)
      };
      
    
      const handlePerRowsChange = async (newPerPage, page) => {
        setLimit(newPerPage);
      };
    
    useEffect(() => {
        refetch()
    },[limit])

    const studentDetails = ( data)=> {
        setData(data)
        onOpen()
    }


  return (
    <>
        <AdmissionDetailsDrawer onOpen={onOpen} isOpen={isOpen} onClose={onClose} id={data}  />
        <Flex justify={'center'}>
            <Box mt='10' w='90%' maxH={'80vh'} h='450px' py='7'>
                <DataTable
                    title={
                        <Heading size={'lg'}>Admission Requests</Heading>
                    }
                    columns={columns}
                    data={admissions?.data}
                    progressPending={loading}
                    pagination
                    paginationServer
                    // onRowClicked={(row) => studentDetails(row)}

                    paginationTotalRows={admissions?.count}
                    paginationPerPage={2}

                    paginationComponentOptions={{
                        // noRowsPerPage: true, // Hide rows per page dropdown
                        rangeSeparatorText: 'of', // Text between current and total pages
                    }}
                    onChangeRowsPerPage={handlePerRowsChange}
                    onChangePage={handlePageChange}
                />

            </Box>
        </Flex>
    </>
  )
}

export default StudentAdmission