import { Box } from '@mui/material'
import React from 'react'
import CreateTestNav from '../../PageInnerComponent/CreateTest/CreateTestNav'
import CreateTestDetail from '../../PageInnerComponent/CreateTest/CreateTestDetail'
import CreateTestBody from '../../PageInnerComponent/CreateTest/CreateTestBody'

const CreateTest = () => {
  return (
    <Box className='createTest'>
       <CreateTestNav/>
       <CreateTestDetail/>
       <CreateTestBody/>
    </Box>
  )
}

export default CreateTest
