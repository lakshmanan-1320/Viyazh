import { Box } from '@mui/material'
import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import CompanyInner from '../../PageInnerComponent/Company/CompanyInner'

const Company = () => {
  return (
     <Box sx={{ display: "flex" }}>
                <Sidebar />
    
                <Box sx={{ flexGrow: 1 }}>
                    <Navbar />
    
                    <Box component="main" sx={{ p: 3 }}>
                        <CompanyInner/>
                    </Box>
                </Box>
            </Box>
  )
}

export default Company
