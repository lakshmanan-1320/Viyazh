import React from 'react'
import { Box, Typography } from '@mui/material'
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Instructions = () => {
    return (
        <Box sx={{ marginTop: "40px", padding: "0 55px 0 30px" }}>

            <Typography className="instruction_title">Edit the Instructions and Agreement of "Techno Tackle Software Solutions</Typography>

            <Typography className='genaral_heading_text' >Instruction editor</Typography>
            <Box className='Description_settings_box' sx={{ marginTop: " 18px" }}>


                <ol className='insruction_list'>
                    <li className='des_text'>Please complete this assessment in one continuous browser session. You cannot pause, restart or re-take it once you start the assessment.</li>
                    <li className='des_text'>Once a section is submitted, you cannot revisit and edit your responses.</li>
                    <li className='des_text'>Do not navigate away from the test browser or open new tabs. These actions may lead to disqualification.
                    </li>
                    <li className='des_text'>There is no negative marking for unattempted questions.</li>
                    <li className='des_text'>You can use the Next and Previous buttons to navigate.</li>
                    <li className='des_text'>Alternatively, use the question numbers provided to navigate quickly.</li>
                    <li className='des_text'>You can also Mark questions to visit them later.</li>
                </ol>



            </Box>

            <Typography className='genaral_heading_text' sx={{ marginTop: "20px" }} >Agreement editor</Typography>
            <Box className='Description_settings_box' sx={{ marginTop: " 18px" }}>


                <Typography className='des_text'>I agree to take this assessment based only on my immediate abilities. I also agree not to participate in any malpractice by copying, taking external help, or using any additional resources to improve my performance.</Typography>




            </Box>
            <Box sx={{ display: "flex", justifyContent: "end", gap: 2, marginRight: "30px", marginTop: "50px", marginBottom: "32px" }}>


                {/* <Button variant="contained" onClick={handleClosePopup} className="invite_cancel_btn ">
                    Cancel
                </Button>

                <Link to="/admin/testGeneralSettings">

                    <Button variant="contained" className="invite_save_btn ">
                        Save
                    </Button>
                </Link> */}
            </Box>
        </Box>
    )
}

export default Instructions
