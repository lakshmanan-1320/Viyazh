import React from 'react'
import { Box,Typography } from '@mui/material'

const Description = () => {
  return (
    <Box sx={{ marginTop: "40px", padding: "0 55px 0 30px" }}>
         <Typography className='genaral_heading_text' >Edit Description</Typography>
         <Box className='Description_settings_box'>
                <Typography className='des_text'>Thank you for showing interest in Techno Tackle Software Solutions. We hope you have a great time taking this assessment.</Typography>
                <Typography className='des_text'>Answer the questions within this assessment to the best of your ability.</Typography>
                <Typography className='des_text'>Before you start with the assessment, make sure to:</Typography>
                
                <ul className='des_list'>
                    <li className='des_text'>Take up this assessment on a laptop or desktop rather than on a mobile phone.</li>
                    <li className='des_text'>Close all other applications and browser tabs to ensure no distractions.</li>
                    <li className='des_text'>Block time to start and finish the assessment in one go. Please make sure you are not interrupted.
                    </li>
                </ul>

                <Typography className='des_text' sx={{ marginTop: "30px" }}>All the best!</Typography>

        </Box>
    </Box>
  )
}

export default Description
