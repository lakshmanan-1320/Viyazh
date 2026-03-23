import { Box, Button } from '@mui/material'
import React from 'react'
import './Test.css'
import { HiOutlinePlusSm } from "react-icons/hi";
import { Link } from 'react-router-dom';


const TestHeader = () => {
    return (
        <Box className='testHeader'>
            <Box className='testHeaderLeft'>
                <h2>Tests</h2>
                <p>Manage and monitor all your assessments</p>
            </Box>
         <Link to='/admin/createTest'><Button className='createBtn' startIcon={<HiOutlinePlusSm />} variant='contained'>Create New Test</Button></Link>    </Box>


    )
}

export default TestHeader
