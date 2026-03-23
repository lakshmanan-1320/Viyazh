import React from 'react';
import { Box, Typography } from '@mui/material';
// import cancel from '../../assets/icon/cancel.svg';
import { MdOutlineCancel } from "react-icons/md";

import { Link } from 'react-router-dom';
import McqCreateQuestions from './McqCreateQuestions';

// Dummy MCQ data
const dummyMcqs = [
  { id: 1, question_text: "What is the capital of India?" },
  { id: 2, question_text: "Which planet is known as the Red Planet?" },
  { id: 3, question_text: "Who wrote 'The Ramayana'?" },
  { id: 4, question_text: "What is the largest ocean on Earth?" },
];

const McqQuestionMain = () => {
  return (
    <Box>
      <Box className='add_Topic_header'>
        <Box sx={{ display: 'flex', alignItems: 'end' }}>
          {/* Dummy back link - you may update it later */}
          <Link to="/contentCreator/addTopicMain">
           <MdOutlineCancel />

          </Link>
        </Box>
      </Box>

      <Box className='add_Topic_body'>
        {/* Left Section */}
        <Box className='add_Topic_left mcq_left_section'>
          <Typography className='q_topic'>Question order</Typography>

          {dummyMcqs.map((mcq, index) => (
            <Box key={mcq.id} className='mcq_left_q'>
              {index + 1}. {mcq.question_text}
            </Box>
          ))}
        </Box>

        {/* Right Section */}
        <Box className='add_Topic_right'>
          <McqCreateQuestions />
        </Box>
      </Box>
    </Box>
  );
};

export default McqQuestionMain;
