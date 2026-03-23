import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Modal,
  IconButton,
} from '@mui/material';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { RiEdit2Line } from 'react-icons/ri';
import CheckIcon from '@mui/icons-material/Check';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';

// DOMPurify setup
const purify = DOMPurify(window);

const dummyMcqData = [
  {
    id: 1,
    question_text: `What is the value of <strong>∫ x² dx</strong> from 0 to 1?`,
    choice1: '1/3',
    choice2: '1/2',
    choice3: '1',
    choice4: '2',
    correct_answer: '1/3',
    points: 5,
    difficulty_level: 'Medium',
    time_limit: 120000,
  },
  {
    id: 2,
    question_text: `Which of the following is <u>not</u> a valid React hook?`,
    choice1: 'useState',
    choice2: 'useEffect',
    choice3: 'useReducer',
    choice4: 'useFetch',
    correct_answer: 'useFetch',
    points: 3,
    difficulty_level: 'Easy',
    time_limit: 90000,
  },
  {
    id: 3,
    question_text: `Solve for <i>x</i>: <code>log₁₀(x) = 2</code>`,
    choice1: '10',
    choice2: '100',
    choice3: '1000',
    choice4: '1',
    correct_answer: '100',
    points: 7,
    difficulty_level: 'Hard',
    time_limit: 180000,
  },
];

const McqQuestionList = () => {
  // Modal state
  const [open, setOpen] = useState(false);
  const [questionToDelete, setQuestionToDelete] = useState(null);

  const handleOpenModal = (id) => {
    setQuestionToDelete(id);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setQuestionToDelete(null);
  };

  const handleConfirmDelete = () => {
    // In real app: delete logic here
    console.log('Archived question ID:', questionToDelete);
    handleCloseModal();
    // toast.success('Question archived');
  };

  return (
    <Box>
      {dummyMcqData.map((item, index) => (
        <Box className="mcq_question_list" key={item.id}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '0px 30px', gap: '50px' }}>
            <Typography className="mcq_question_que">
              {index + 1}.{' '}
              <span
                dangerouslySetInnerHTML={{
                  __html: purify.sanitize(item.question_text),
                }}
              />
            </Typography>
            <span className="mcq_span">Multi Choice Question</span>
          </Box>

          <Box sx={{ display: 'flex', gap: '10px', padding: '0px 30px' }}>
            <span className="diff_span">Score: {item.points}</span>
            <span className="diff_span">
              {item.difficulty_level.charAt(0).toUpperCase() + item.difficulty_level.slice(1).toLowerCase()}
            </span>
            <span className="diff_span">Time Limit: {Math.round(item.time_limit / 60000)}</span>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '0px 30px 0px 42px', marginTop: '30px' }}>
            <Box>
              <RadioGroup>
                <Box display="flex" justifyContent="space-between" gap="28px" sx={{ marginBottom: '16px' }}>
                  {[item.choice1, item.choice2].map((choice, i) => (
                    <FormControlLabel
                      key={i}
                      value={choice}
                      control={
                        <Radio
                          checked={item.correct_answer === choice}
                          sx={{
                            '&.Mui-checked': { color: '#7158E2' },
                          }}
                          checkedIcon={
                            <div
                              style={{
                                borderRadius: '50%',
                                backgroundColor: '#7158E2',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 20,
                                height: 20,
                              }}
                            >
                              <CheckIcon style={{ color: 'white', fontSize: 16 }} />
                            </div>
                          }
                        />
                      }
                      label={
                        <span
                          dangerouslySetInnerHTML={{
                            __html: purify.sanitize(choice),
                          }}
                        />
                      }
                      sx={{
                        '& .MuiFormControlLabel-label': {
                          color: '#3B3B3B',
                          fontFamily: 'Poppins!important',
                          fontSize: '16px !important',
                          fontWeight: '400',
                        },
                      }}
                      className="mcq_option"
                    />
                  ))}
                </Box>

                <Box display="flex" justifyContent="space-between" gap="28px">
                  {[item.choice3, item.choice4].map((choice, i) => (
                    <FormControlLabel
                      key={i}
                      value={choice}
                      control={
                        <Radio
                          checked={item.correct_answer === choice}
                          sx={{
                            '&.Mui-checked': { color: '#7158E2' },
                          }}
                          checkedIcon={
                            <div
                              style={{
                                borderRadius: '50%',
                                backgroundColor: '#7158E2',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 20,
                                height: 20,
                              }}
                            >
                              <CheckIcon style={{ color: 'white', fontSize: 16 }} />
                            </div>
                          }
                        />
                      }
                      label={
                        <span
                          dangerouslySetInnerHTML={{
                            __html: purify.sanitize(choice),
                          }}
                        />
                      }
                      sx={{
                        '& .MuiFormControlLabel-label': {
                          color: '#3B3B3B',
                          fontFamily: 'Poppins!important',
                          fontSize: '16px !important',
                          fontWeight: '400',
                        },
                      }}
                      className="mcq_option"
                    />
                  ))}
                </Box>
              </RadioGroup>
            </Box>

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Box className="mcq_icon_btn">
                <IconButton onClick={() => handleOpenModal(item.id)}>
                  <RiDeleteBin5Line style={{ color: '#E5212180', fontSize: '22px' }} />
                </IconButton>
              </Box>
              <Box className="mcq_icon_btn">
                <IconButton>
               <Link to={`/contentCreator/mcqCreateQuestionMain`}>   <RiEdit2Line style={{ color: '#7158E2', fontSize: '22px' }} /></Link>
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}

      {/* Confirmation Modal */}
      <Modal open={open} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: 450 },
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            outline: 'none',
          }}
        >
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: 600, fontSize: '20px', color: '#3B3B3B', fontFamily: 'Poppins' }}
          >
            Confirm Archive
          </Typography>
          <Typography sx={{ mt: 1, fontFamily: 'Poppins', fontSize: '15px', color: '#3B3B3B' }}>
            Are you sure you want to archive this question?
          </Typography>

          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
            <Button
              variant="contained"
              onClick={handleConfirmDelete}
              sx={{
                backgroundColor: '#7158E2',
                textTransform: 'none',
                height: '40px',
                borderRadius: '12px',
                px: 3,
                '&:hover': { backgroundColor: '#5a47b3' },
              }}
            >
              Yes, Archive
            </Button>
            <Button variant="outlined" onClick={handleCloseModal} sx={{ textTransform: 'none', height: '40px' }}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default McqQuestionList;