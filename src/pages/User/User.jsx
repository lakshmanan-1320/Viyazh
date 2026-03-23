import { Box } from '@mui/material'
import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import UserInner from '../../PageInnerComponent/Users/UserInner'

const User = () => {
  return (
    <Box sx={{ display: "flex" }}>
                <Sidebar />
    
                <Box sx={{ flexGrow: 1 }}>
                    <Navbar />
    
                    <Box component="main" sx={{ p: 3 }}>
                        <UserInner/>
                    </Box>
                </Box>
            </Box>
  )
}

export default User
