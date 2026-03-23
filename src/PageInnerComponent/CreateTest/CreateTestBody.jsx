import { Create } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'
import CreateTestLeft from './CreateTestLeft'
import CreateTestRight from './CreateTestRight'

const CreateTestBody = () => {
  return (
    <Box className='createTestBody'>
        <CreateTestLeft/>
        <CreateTestRight/>
    </Box>
  )
}

export default CreateTestBody
