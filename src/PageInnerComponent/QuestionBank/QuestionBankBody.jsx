import React, { useState } from 'react';
import { Box, Typography, Button, Modal, TextField } from '@mui/material';
import editAdmin from '../../assets/img/edit.svg'
import addQue from '../../assets/img/addquestion.svg';
import archeive from '../../assets/img/archieve.svg';

const QuestionBankBody = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);
    const [rename, setRename] = useState("");
    const [selectedLanguageId, setSelectedLanguageId] = useState(null);

    const dummyLanguages = [
        {
            id: 1,
            language_name: "JavaScript",
            Topics: [{ topic_name: "Loops" }, { topic_name: "Functions" }],
            totalQuestions: 15
        },
        {
            id: 2,
            language_name: "Python",
            Topics: [{ topic_name: "Lists" }],
            totalQuestions: 8
        }
    ];

    return (
        <Box className='question-section'>

            {dummyLanguages.map((language) => (
                <Box
                    key={language.id}
                    className='question-section-left'
                    sx={{
                        marginBottom: '20px',
                        padding: '15px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        cursor: 'pointer'
                    }}
                >
                    <Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Typography className='question-section-title'>
                                {language.language_name} &nbsp;&nbsp;
                            </Typography>

                            <Box className='question_bank_btn'>
                                <Box
                                    className='icon-style edit-icon-style'
                                    onClick={() => setIsRenameModalOpen(true)}  // ✔ OPEN RENAME MODAL
                                >
                                    <img src={editAdmin} alt="edit" />
                                </Box>

                                <Box
                                    className='icon-style archieve-icon-style'
                                    onClick={() => setIsModalOpen(true)}  // ✔ OPEN DELETE MODAL
                                >
                                    <img src={archeive} alt="archive" />
                                </Box>
                            </Box>
                        </Box>

                        <Typography className='que_sec_text'>
                            {language.Topics.length > 0
                                ? `${language.Topics.length} Topics: ${language.Topics.map(t => t.topic_name).join(', ')}`
                                : 'No Topics Available'}
                            <span>.....view more</span>
                        </Typography>

                        <Typography className='que_sec_text que_sec_text_2'>
                            Total Questions: {language.totalQuestions}
                        </Typography>
                    </Box>

                    <Box className='question-section-right'>
                        <Button className='add_que_btn' endIcon={<img src={addQue} alt="add" />}>
                            Add Questions
                        </Button>
                    </Box>
                </Box>
            ))}

            {/* DELETE MODAL */}
            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 658,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        padding: "63px 63px 35px 63px",
                        borderRadius: 2,
                        textAlign: "center"
                    }}
                >
                    <Typography className='modal_title_question'>
                        "Questions and topics under this domain will be archived."
                    </Typography>

                    <Typography className='modal_title_question_2'>
                        Are you sure do want archive this domain
                    </Typography>

                    <Box sx={{ marginTop: '46px', display: "flex", justifyContent: "end", gap: 2 }}>
                        <Button className='modal_delete_btn'>Delete</Button>
                        <Button className='modal_cancel_btn' onClick={() => setIsModalOpen(false)}>
                            Cancel
                        </Button>
                    </Box>
                </Box>
            </Modal>

            {/* RENAME MODAL */}
            <Modal open={isRenameModalOpen} onClose={() => setIsRenameModalOpen(false)}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        Rename Domain
                    </Typography>

                    <TextField
                        fullWidth
                        label="Domain Name"
                        variant="outlined"
                        value={rename}
                        onChange={(e) => setRename(e.target.value)}
                        sx={{ mb: 2 }}
                    />

                    <Box sx={{ display: "flex", justifyContent: "end", gap: 2 }}>
                        <Button variant="contained" className='modal_save_btn'>
                            Save
                        </Button>
                        <Button variant="outlined" className='modal_cancel_btn' onClick={() => setIsRenameModalOpen(false)}>
                            Cancel
                        </Button>
                    </Box>
                </Box>
            </Modal>

        </Box>
    );
};

export default QuestionBankBody;
