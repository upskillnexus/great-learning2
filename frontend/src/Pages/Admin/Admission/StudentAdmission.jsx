import React, { useState } from 'react'
import useGetAdmissions from '../../../Libs/Quirys/Admission/useGetAdmissions'
import DataTable from 'react-data-table-component'
import { Avatar, Box, Button, Flex, Grid, Heading, IconButton, Text } from '@chakra-ui/react'
import { FaCheck } from 'react-icons/fa6'
import { MdOutlineClose } from 'react-icons/md'

const StudentAdmission = () => {
    const [limit, setLimit] = useState(0)
    const {data: admissions , isPending: loading } = useGetAdmissions({limit})

    const columns = [
        {
          name: 'Name',
          sortable: true,
          selector: row => (
            <Flex gap='2' justify={'center'} align='center'>
                <Avatar size={'sm'} name={row.fullname} />
                <Text fontWeight={600}>{row.fullname}</Text>
            </Flex>
          ),
        },
        { name: 'Course', selector: (row,i) => 
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

        {name: "Action", selector: (row,i) => (
                <Flex gap='2'>
                    <IconButton bg='success' size='sm' icon={<FaCheck />} />
                    <IconButton bg='#b9292f' color='white' size='sm' icon={<MdOutlineClose />} />
                </Flex>
            )
        }
      ];

    const handleLimitChange = (limit) => {
        setLimit(limit + 10)
    }

    const customFooter = () => (
        <Box display="flex" justifyContent="center" alignItems="center" py="4">
          <Button onClick={handleLimitChange} colorScheme="teal">
            Load More
          </Button>
        </Box>
      );
  return (
    <Flex justify={'center'}>
        <Box mt='10' w='80%' maxH={'80vh'} h='450px' py='7'>
            <DataTable
                title={
                    <Heading size={'lg'}>Admission Requests</Heading>
                }
                columns={columns}
                data={admissions?.data}
                progressPending={loading}
                pagination
                paginationServer
                paginationTotalRows={admissions?.totalRows || 0}
                paginationPerPage={0} // Adjust the number of rows per page as needed
                paginationRowsPerPageOptions={[10, 20, 30]} // Customize available rows per page
                paginationComponentOptions={{
                    noRowsPerPage: true, // Hide rows per page dropdown
                    rangeSeparatorText: 'of', // Text between current and total pages
                }}
                customFooter={customFooter}
            />
        </Box>
    </Flex>
  )
}

export default StudentAdmission