import { Card } from '@chakra-ui/react'
import React from 'react'
import DesCards from '../../../Components/Admin/Deshboard/DesCards'

const AdminDeshboard = () => {
  return (
    <Card h={'100vh'} rounded={'none'} w='full' >
        <DesCards />
    </Card>
  )
}

export default AdminDeshboard