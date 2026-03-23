import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import './CreateTest.css'
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';


const CreateTestNav = () => {
    return (
        <Box className='createTestNav'>
            <Box className='createTestNavLeft'>
                <Box className='backIcon'>
                 <Link to='/admin/test'>   <IoMdArrowBack /> </Link>
                </Box>
                <h3>Create Test</h3>
                <TextField
                    id="outlined-basic"
                    className="createTextfield"
                    variant="outlined"
                    placeholder="Main Test 01"
                />
                </Box>
            <Box className='createTestNavRight'>
            <Link to='/admin/createTestOne'>  <Button variant='contained' className='createTestBtn'>Create Test</Button></Link>  
            </Box>
        </Box>
    )
}

export default CreateTestNav
