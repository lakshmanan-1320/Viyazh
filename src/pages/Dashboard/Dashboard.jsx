import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Box } from '@mui/material'

const Dashboard = () => {
  return (
      <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1 }}>
        <Navbar />  

        <Box component="main" sx={{ p: 3 }}>
            <h1>Dashboard</h1>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard
