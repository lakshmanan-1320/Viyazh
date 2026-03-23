import { Box, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

// import fadeArrow from '../../assets/icon/fadeArrow.svg';
// import cancel from '../../assets/icon/cancel.svg';

const NameDescription = () => {

  return (
    <Box className='invited createOne_main'>

      <Box
        
      >
        {/* <Box className='invited_inner_header_cancel edit_header' sx={{ width: '100%', padding: '0 16px' }}>
          <img src={fadeArrow} alt="editsection" style={{ opacity: 0.2 }} />
          <Typography className='fade_header_text' style={{ opacity: 0.2 }}>
            Create Test
          </Typography>
        </Box> */}

        <Box>
          <Link to='/admin/createTest'>
            {/* <img src={cancel} alt="cancel" /> */}
          </Link>
        </Box>
      </Box>

      <Box sx={{ padding: '0 25px' }}>
        <Box className='invited_box edit_section_box createTestOne'>

          <Typography
            variant='h5'
            className='invited_inner_header_text createTestOne_heading'
            sx={{ fontSize: '20px !important' }}
          >
            Name & Description
          </Typography>

          <Box className="createTestOne_box_inner">

            <Box className="createTestOne_box_inner_left">
              <Box className="createTestOne_box_inner_left_line"></Box>

              <Box className="createTestOne_box_inner_left_circle_area">
                <Box className="createTestOne_box_inner_left_circle circle_active">1</Box>
                <Box className="createTestOne_box_inner_left_circle">2</Box>
                {/* <Box className="createTestOne_box_inner_left_circle">3</Box> */}
              </Box>
            </Box>

            <Box className="createTestOne_box_inner_right" sx={{ flex: 1 }}>

              <Typography className='createTestOne_box_inner_right_text_heading'>Test name</Typography>

              <TextField
                id="outlined-basic"
                fullWidth
                variant="outlined"
                value="Sample Test Name"
                className='createTestOne_box_inner_right_text_field'
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                  },
                }}
              />

              <Typography className='createTestOne_box_inner_right_text_heading'>
                Test Description <span>(Optional)</span>
              </Typography>

              <Box className="createTestOne_box_inner_right_description">
                <Typography>
                  Thank you for showing interest in Techno Tackle Software Solutions.
                  We hope you have a great time taking this test.
                </Typography>

                <Typography>Before you start with the test, make sure to:</Typography>

                <List sx={{ padding: 0 }} className='custom-list-main'>
                  <ListItem disablePadding>
                    <ListItemText>
                      <Typography component="span" className="custom-list-item">
                        Take this test on a laptop or desktop rather than a mobile phone.
                      </Typography>
                    </ListItemText>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemText>
                      <Typography component="span" className="custom-list-item">
                        Close all other applications to avoid distractions.
                      </Typography>
                    </ListItemText>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemText>
                      <Typography component="span" className="custom-list-item">
                        Block time to start and finish the test without interruptions.
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </List>

                <Typography>All the best!</Typography>
              </Box>

            </Box>
          </Box>

          {/* <Box className="createTestOne_box_bottom_line"></Box> */}

          <Box sx={{ display: "flex", justifyContent: "end", gap: 2, marginTop: "32px", marginRight: "30px", marginBottom: "32px" }}>
            <Link to='/admin/createTest'>
            <Button variant="contained" className='invite_cancel_btn'>Back</Button>
            </Link>

            <Link to={`/admin/generalTestSettings`}>
              <Button variant="contained" className='invite_save_btn'>Next</Button>
            </Link>
          </Box>

        </Box>
      </Box>

    </Box>
  );
};

export default NameDescription;
