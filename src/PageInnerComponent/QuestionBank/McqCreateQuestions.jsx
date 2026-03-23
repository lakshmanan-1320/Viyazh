import React, { useState } from 'react';
import { Box, Typography, Checkbox, FormControlLabel, Button, TextField, Modal } from '@mui/material';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
// import ReactQuill from 'react-quill';
// If you installed react-quill-new → change to:
import ReactQuill from 'react-quill-new';
// import 'react-quill/dist/quill.snow.css';
import "react-quill-new/dist/quill.snow.css";
import { RiDeleteBin5Line } from "react-icons/ri";

const McqCreateQuestions = () => {
    const [choices, setChoices] = useState(['', '', '', '']);
    const [isChecked, setIsChecked] = useState([false, false, false, false]);
    const [difficulty, setDifficulty] = useState('Medium');
    const [question, setQuestion] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [missingFields, setMissingFields] = useState([]);

    const topicDummy = "Dummy Topic Name";
    const MAX_CHOICES = 6;
    const MIN_CHOICES = 2;

    const addChoice = () => {
        if (choices.length < MAX_CHOICES) {
            setChoices([...choices, '']);
            setIsChecked([...isChecked, false]);
        } else {
            toast.warn(`Maximum ${MAX_CHOICES} choices allowed`);
        }
    };

    const handleChoiceChange = (index, newContent) => {
        const updatedChoices = [...choices];
        updatedChoices[index] = newContent;
        setChoices(updatedChoices);
    };

    const removeChoice = (index) => {
        if (choices.length <= MIN_CHOICES) {
            toast.warn(`At least ${MIN_CHOICES} choices are required`);
            return;
        }
        setChoices(choices.filter((_, i) => i !== index));
        setIsChecked(isChecked.filter((_, i) => i !== index));
    };

    // Fixed: Allow multiple correct answers
    const handleCheckboxChange = (index) => {
        const updatedChecked = [...isChecked];
        updatedChecked[index] = !updatedChecked[index];
        setIsChecked(updatedChecked);
    };

    const handleSave = () => {
        let missing = [];

        if (!question.trim()) missing.push("Question");
        
        const emptyChoices = choices
            .map((c, i) => (!c.trim() ? i + 1 : null))
            .filter(Boolean);
        if (emptyChoices.length > 0) {
            emptyChoices.forEach(num => missing.push(`Choice ${num}`));
        }

        if (choices.length < MIN_CHOICES) missing.push("At least 2 choices");

        if (!isChecked.some(Boolean)) missing.push("Correct Answer (select at least one)");

        if (missing.length > 0) {
            setMissingFields(missing);
            setOpenModal(true);
            return;
        }

        // Simulate save
        console.log("Question Saved:", {
            question,
            choices,
            correctAnswers: choices.filter((_, i) => isChecked[i]),
            difficulty
        });

        toast.success("Question saved successfully!");
    };

    const stripHtml = (html) => html.replace(/<[^>]*>/g, '').trim();

    return (
        <Box className='mcq_create_question'>
            <Box className='mcq_create_question_topic'>
                {topicDummy}
            </Box>

            <Box className='mcq_create_question_body'>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: "12px", mb: 3 }}>
                    <Typography className='mcq_create_question_no'>01</Typography>
                    <TextField
                        fullWidth
                        variant="standard"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Write your question here"
                        InputProps={{ style: { fontSize: '1.2rem' } }}
                    />
                </Box>

                <Box sx={{ mb: 3 }}>
                    {choices.map((content, index) => (
                        <Box key={index} className='mcq_create_question_box' sx={{ mb: 4, position: 'relative' }}>
                            <Box className="que_heading mcq_que_heading" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography className='mcq_create_question_no'>
                                    Choice {index + 1}
                                </Typography>
                                {choices.length > MIN_CHOICES && (
                                    <RiDeleteBin5Line
                                        size={20}
                                        style={{ cursor: 'pointer', color: '#f44336' }}
                                        onClick={() => removeChoice(index)}
                                    />
                                )}
                            </Box>

                            <Box sx={{ mt: 2 }}>
                                <ReactQuill
                                    theme="snow"
                                    value={content}
                                    onChange={(val) => handleChoiceChange(index, val)}
                                    placeholder={`Write choice ${index + 1} here`}
                                    className='mcq_create_question_quill'
                                    modules={{
                                        toolbar: [
                                            [{ 'header': [1, 2, false] }],
                                            ['bold', 'italic', 'underline'],
                                            ['image', 'code-block']
                                        ]
                                    }}
                                />  
                            </Box>

                            <Box className="crt_option" sx={{ mt: 1 }}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={isChecked[index] || false}
                                            onChange={() => handleCheckboxChange(index)}
                                            color="success"
                                        />
                                    }
                                    label="This is a correct answer"
                                />
                            </Box>
                        </Box>
                    ))}
                </Box>

                {choices.length < MAX_CHOICES && (
                    <Button
                        variant="outlined"
                        className='modal_save_btn cus_add_choice'
                        onClick={addChoice}
                        sx={{ mb: 4 }}
                    >
                        + Add Choice 
                    </Button>
                )}

                <Typography className='mcq_create_question_no' sx={{ mt: 3, mb: 2 }}>
                    Settings
                </Typography>

                <Box className='mcq_create_question_setting_box' sx={{ mb: 2 }}>
                    <Typography className='mcq_create_question_no'>Difficulty</Typography>
                    <Typography className='set_dec' sx={{ mb: 1 }}>Set a difficulty for this Question</Typography>

                    <Box className='mcq_create_question_setting_option' sx={{ display: 'flex', gap: 3 }}>
                        {['Easy', 'Medium', 'Hard'].map((level) => (
                            <Box
                                key={level}
                                onClick={() => setDifficulty(level)}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    cursor: 'pointer',
                                    padding: '8px 16px',
                                    borderRadius: 2,
                                    backgroundColor: difficulty === level ? '#9333EA' : 'transparent',
                                    border: difficulty === level ? '1px solid #9333EA' : '1px solid #ddd',
                                    transition: 'all 0.2s'
                                }}
                            >
                                <span className={`span_chocie_diff ${difficulty === level ? 'span_active_diff' : ''}`}></span>
                                <Typography sx={{ color: difficulty === level ? '#ffffffff' : '#3B3B3B', fontWeight: 500 }}>
                                    {level}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Box className='create-new-domain-btns' sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 8 }}>
                    <Link to="#">
                        <Button variant="outlined" className='cancel_btn_domain'>Cancel</Button>
                    </Link>
                    <Button
                        variant="contained"
                        className='save_btn'
                        onClick={handleSave}
                        sx={{ backgroundColor: '#00C7A9', '&:hover': { backgroundColor: '#00a089' } }}
                    >
                        Save Question
                    </Button>
                </Box>
            </Box>

            {/* Missing Fields Modal */}
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <Box sx={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: { xs: '90%', sm: 400 },
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Typography variant="h6" color="error" gutterBottom>Missing Required Fields</Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        Please complete the following:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                        {missingFields.map((field, i) => (
                            <li key={i} style={{ color: '#d32f2f', fontSize: '14px' }}>{field}</li>
                        ))}
                    </Box>
                    <Box textAlign="right">
                        <Button onClick={() => setOpenModal(false)} variant="contained">
                            Close
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};

export default McqCreateQuestions;