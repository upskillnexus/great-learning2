import { Avatar, Box, Flex, Heading, IconButton, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import useGetCourses from '../../../Libs/Quirys/course/useGetCourses'
import { MdDeleteOutline, MdOutlineClose, MdOutlineRemoveRedEye } from 'react-icons/md'
import { CiEdit } from 'react-icons/ci'
import useDeleteCourse from '../../../Libs/Mutation/Course/useDeleteCourse'
import { UpdateCourseModal } from '../../../Components/Admin/modal_drawr/UpdateCourse'

const AllCourses = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ind, setInd] = useState()
    const [course, setCourse] = useState()
    const {data: courses, isPending: loading} = useGetCourses();
    const {mutate: handleDeleteCourse, isPending: deleting} = useDeleteCourse()
    
    const columns = [
        {
          name: 'Name',
          sortable: true,
          selector: row => (
            <Flex gap='2' justify={'start'} align='center'>
                <Avatar size={'sm'} name={row?.programName} />
                <Text fontWeight={600}>{row?.programName}</Text>
            </Flex>
          ),
        },
        { name: 'Course Name' , selector: (row,i) => 
            row.programName, sortable: true 
        },
        { name: 'Duration', selector: (row,i) =>  
            row.duration, sortable: true 
        },
        { name: 'Fee', selector: (row,i) =>  
            row.fee, sortable: true 
        },
        { name: 'Eegistration Fee', selector: (row,i) =>  
            row.registrationFee, sortable: true 
        },
        {name: "Action", selector: (row,i) => (
                <Flex justify={'start'} gap='2'>
                    <IconButton onClick={() => {setCourse(row), onOpen()}} size='sm' icon={<CiEdit />} />
                    <IconButton isLoading={deleting && i == ind} onClick={() => handleDelete({id:row?._id, ind: i})} bg='#b9292f' color='white' size='sm' icon={<MdDeleteOutline />} />
                </Flex>
            )
        }
      ];

      const handleDelete = ({id , ind}) => {
        setInd(ind)
        handleDeleteCourse(id)
      }
    
  return (
    <>
        <UpdateCourseModal course={course} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <Flex h='100vh' justify={'center'} align={'center'}>
            <Box w='80%'>
                <DataTable
                    title={
                        <Heading size={'lg'}>Courses</Heading>
                    }
                    columns={columns}
                    data={courses?.data}
                    progressPending={loading}
                    pagination
                    // paginationServer
                    paginationTotalRows={courses?.count}

                    // onChangeRowsPerPage={handlePerRowsChange}
                    // onChangePage={handlePageChange}
                />
            </Box>
        </Flex>
    </>
  )
}

export default AllCourses