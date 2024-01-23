import React from 'react'
import isAuth from '../../Libs/Quirys/isAuth'
import { Header } from './Header'
import { useLocation } from 'react-router-dom'
import Sidebr from './Sidebr'
import { Box } from '@chakra-ui/react'

const ScreenHeader = ({ children }) => {
  const { pathname } = useLocation()
  
  const path = [
    '/admin/students-admission',
    '/admin/leads',
    '/admin',
    '/admin/course/create',
    '/admin/course',
  ]
  
  return (
    <>
      {path?.includes(pathname) ?
        <Box>
          <Sidebr>{children}</Sidebr>  
        </Box>
      : 
        <Box>
          <Header>{children}</Header> 
        </Box>
      }
    </>
  )
}

export default ScreenHeader