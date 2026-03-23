import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import { Box } from '@mui/material'
import AccountInner from '../../PageInnerComponent/Account/AccountInner'

const Account = () => {
  return (
  <Box sx={{ display: "flex" }}>
                <Sidebar />
    
                <Box sx={{ flexGrow: 1 }}>
                    <Navbar />
    
                    <Box component="main" sx={{ p: 3 }}>
                       <AccountInner/>
                    </Box>
                </Box>
            </Box>
  )
}

export default Account
