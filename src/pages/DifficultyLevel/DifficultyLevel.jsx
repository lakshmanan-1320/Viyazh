import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import { Box } from '@mui/material'
import DifficultyInner from '../../PageInnerComponent/DifficultyLevel/DifficultyInner'

const DifficultyLevel = () => {
  return (
    <Box sx={{ display: "flex" }}>
                <Sidebar />
    
                <Box sx={{ flexGrow: 1 }}>
                    <Navbar />
    
                    <Box component="main" sx={{ p: 3 }}>
                        <DifficultyInner />
                    </Box>
                </Box>
            </Box>
  )
}

export default DifficultyLevel
