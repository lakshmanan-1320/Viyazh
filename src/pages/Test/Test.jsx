import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Box } from '@mui/material'
import TestHeader from '../../PageInnerComponent/Test/TestHeader'
import TestSearch from '../../PageInnerComponent/Test/TestSearch'
import TestTable from '../../PageInnerComponent/Test/TestTable'

const Test = () => {
  return (
      <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1 }}>
        <Navbar />  

        <Box component="main" sx={{ p: 3 }}>
            <TestHeader/>
            <TestSearch/>
            <TestTable/>
        </Box>
      </Box>
    </Box>
  )
}

export default Test
