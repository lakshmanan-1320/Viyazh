import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import AddTopicRightInner from './AddTopicRightInner';

const AddTopicRight = () => {
  return (
    <Box className="addTopicRight_body">

      <Box className="add-que-box cus_add_que_box">
        <Box className="add-que-box-inner">
          <Typography className="Topic_section_title">
          Frontend
          </Typography>

          <Box className="add-que-right">

            <Box className="add-que-topic-right">
              <Typography className="add-que-topic">
                5
              </Typography>
              <Typography className="add-que-topic_bot">Topic</Typography>
            </Box>

            <Box className="add-que-topic-right">
              <Typography className="add-que-topic">
                34
              </Typography>
              <Typography className="add-que-topic_bot">Questions</Typography>
            </Box>

            <Box>
              <Link to="/contentCreator/uploadQuestion">
                <Button className="que-upload-button">Upload</Button>
              </Link>
            </Box>

          </Box>
        </Box>
      </Box>

     {/* add topic right mcq and coding section */}
     <AddTopicRightInner/>

    </Box>
  );
};

export default AddTopicRight;
