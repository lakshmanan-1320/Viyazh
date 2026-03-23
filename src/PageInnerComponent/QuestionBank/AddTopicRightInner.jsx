import { Box, Typography, Button, Tabs, Tab } from '@mui/material';
import React, { useState } from 'react';
import McqQuestionList from './McqQuestionList';
import { Link } from 'react-router-dom';

const AddTopicRightInner = () => {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="add_Topic_right_inner_box">

      <Box className="topic_right_addQue">
        <Box>
          <Typography className='tpc_right_title'>Html Basics</Typography>
          <Typography className='tpc_right_title tpc_right_desc'>10 Questions</Typography>
        </Box>

        <Box>
          <Button className='tpc_right_btn'>
          <Link to="/contentCreator/mcqCreateQuestionMain">  Add Question</Link>
          </Button>
        </Box>
      </Box>

      <Box className="topic_right_addQue_tab">
        <Tabs
          value={value}
          onChange={handleChange}
          className='topic_right_addQue_tabs'
          sx={{
            borderBottom: "1px solid #D9D9D9",
            gap: "30px",
            "& .MuiTabs-indicator": {
              backgroundColor: "#7158E2",
            },
            "& .MuiTab-root": {
              textTransform: "inherit",
              paddingLeft: "0px !important",
              fontWeight: "600",
              color: "#3B3B3B",
              "&.Mui-selected": {
                color: "#7158E2",
              },
              "&:hover": {
                color: "#A31DE5",
              },
            },
          }}
        >
          <Tab label="MCQ Questions" sx={{ marginRight: 5 }} />
          <Tab label="Coding Questions" />
        </Tabs>

        <Box className="dummy_tab_content">
          {value === 0 && (
           <McqQuestionList/>
          )}

          {value === 1 && (
            <Typography className="dummy_text" sx={{ mt: 3 }}>
              Coding Question list will be displayed here.
            </Typography>
          )}
        </Box>
      </Box>

    </Box>
  );
};

export default AddTopicRightInner;
