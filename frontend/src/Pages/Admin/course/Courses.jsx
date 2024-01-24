import { Avatar, Box, Flex, Heading, IconButton, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import useGetCourses from '../../../Libs/Quirys/course/useGetCourses'
import { MdDeleteOutline, MdOutlineClose, MdOutlineRemoveRedEye } from 'react-icons/md'
import { CiEdit } from 'react-icons/ci'
import useDeleteCourse from '../../../Libs/Mutation/Course/useDeleteCourse'
import { UpdateCourseModal } from '../../../Components/Admin/modal_drawr/UpdateCourse'
import { DySureModal } from '../../../Components/Modal/DySureModal'

const AllCourses = () => {
    const { isOpen:isOpen1, onOpen:onOpen1, onClose:onClose1 } = useDisclosure()
    const { isOpen:isOpen2, onOpen:onOpen2, onClose:onClose2 } = useDisclosure()

    const [ind, setInd] = useState()
    const [course, setCourse] = useState()
    const {data: courses, isPending: loading} = useGetCourses();
    const {mutate: handleDeleteCourse, isPending: deleting, isSuccess: deleted} = useDeleteCourse()
    
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
                    <IconButton onClick={() => {setCourse(row), onOpen1()}} size='sm' icon={<CiEdit />} />
                    <IconButton onClick={() => {setCourse(row) , onOpen2()}} bg='#b9292f' color='white' size='sm' icon={<MdDeleteOutline />} />
                </Flex>
            )
        }
      ];

      const handleDelete = () => {
        // setInd(ind)
        handleDeleteCourse(course?._id)
      }
    
      useEffect(() => {
        if(deleted){
            onClose2()
        }
      },[deleted, deleting])


      const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
      const paginatorRight = <Button type="button" icon="pi pi-download" text />;

      useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []);

  return (
    <>
        <UpdateCourseModal course={course} isOpen={isOpen1} onOpen={onOpen1} onClose={onClose1} />
        <DySureModal onSubmit={handleDelete} isOpen={isOpen2} onOpen={onOpen2} onClose={onClose2} message={'Are You Sure You Wanna Delete This Course'} />
        <Flex h='100vh' justify={'center'} align={'center'}>
            <Box overflowY={'scroll'} p='7' border={'2px solid #cccc'} rounded={'md'} w='80%' h='80vh' shadow={'md'}>

            <DataTable 
                value={columns} 
                paginator 
                rows={5} 
                rowsPerPageOptions={[5, 10, 25, 50]} 
                tableStyle={{ minWidth: '50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" 
                paginatorLeft={paginatorLeft} 
                paginatorRight={paginatorRight} 
            />
                    {/* title={
                        <Heading size={'lg'}>Courses</Heading>
                    }
                    columns={columns}
                    data={courses?.data}
                    progressPending={loading}
                    pagination
                    paginationServer
                    fixedHeader
                    paginationTotalRows={courses?.count}

                    // onChangeRowsPerPage={handlePerRowsChange}
                    // onChangePage={handlePageChange} */}
                {/* /> */}
            </Box>
        </Flex>
    </>
  )
}

export default AllCourses