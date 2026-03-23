import React from 'react'
import './DifficultyInner.css'
import DifficultyTable from './DifficultyTable'
import DifficultyHeader from './DifficultyHeader'
import { Box } from '@mui/material'

const DifficultyInner = () => {
  return (
<Box className="user_Body" >

        <DifficultyHeader/>
        <DifficultyTable/>
      
    </Box>
  )
}

export default DifficultyInner
