import React from 'react';
import { Box, Typography, Autocomplete, TextField, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { DataGrid } from "@mui/x-data-grid";
// import fadearrow from '../../assets/icon/fadeArrow.svg';
// import upload from '../../assets/icon/upload.svg';
import { FaArrowLeft } from "react-icons/fa6";

import { FiUpload } from "react-icons/fi";


// Sample columns for MCQ format
const columns = [
    { field: "question", headerName: "Question", flex: 1, minWidth: 200, headerAlign: 'center' },
    { field: "a", headerName: "A", flex: 1, minWidth: 150, headerAlign: 'center' },
    { field: "b", headerName: "B", flex: 1, minWidth: 150, headerAlign: 'center' },
    { field: "c", headerName: "C", flex: 1, minWidth: 150, headerAlign: 'center' },
    { field: "d", headerName: "D", flex: 1, minWidth: 150, headerAlign: 'center' },
    { field: "answer", headerName: "Answer", flex: 1, minWidth: 120, headerAlign: 'center' },
    { field: "difficulty", headerName: "Difficulty", flex: 1, minWidth: 120, headerAlign: 'center' },
];

// Dummy realistic data (matches expected CSV upload format)
const rows = [
    { 
        id: 1, 
        question: "What does HTML stand for?", 
        a: "Hyper Text Markup Language", 
        b: "High Text Markup Language", 
        c: "Hyperlink and Text Markup Language", 
        d: "Home Tool Markup Language", 
        answer: "A", 
        difficulty: "Easy" 
    },
    { 
        id: 2, 
        question: "Which of the following is not a JavaScript framework?", 
        a: "React", 
        b: "Angular", 
        c: "Vue", 
        d: "Laravel", 
        answer: "D", 
        difficulty: "Medium" 
    },
    { 
        id: 3, 
        question: "What is the correct syntax for referring to an external CSS file?", 
        a: "<style src='styles.css'>", 
        b: "<link rel='stylesheet' href='styles.css'>", 
        c: "<css href='styles.css'>", 
        d: "<stylesheet>styles.css</stylesheet>", 
        answer: "B", 
        difficulty: "Easy" 
    },
    { 
        id: 4, 
        question: "Inside which HTML element do we put the JavaScript?", 
        a: "<js>", 
        b: "<scripting>", 
        c: "<javascript>", 
        d: "<script>", 
        answer: "D", 
        difficulty: "Easy" 
    },
    { 
        id: 5, 
        question: "How do you create a function in JavaScript?", 
        a: "function:myFunction()", 
        b: "function = myFunction()", 
        c: "function myFunction()", 
        d: "create function myFunction()", 
        answer: "C", 
        difficulty: "Easy" 
    },
];

const UploadQuestions = () => {
    return (
        <Box>
            <Box className='add_Topic_header upl_header'>
                <Link to={`/contentCreator/questionBank`}>
                   <FaArrowLeft />

                </Link>
                <Typography className='upl_text'>Upload Multiple MCQ Questions</Typography>
            </Box>

            <Box className='upload_body'>
                <Typography className='upload_text'>
                    <span className='upload_text_span'>Note*</span> You can upload multiple questions by uploading a CSV file with the required format. Note that questions are uploaded 
                    according to the selected domain.
                    {/* <span className='upload_text_span2'> Click here to view the sample format</span> */}
                </Typography>

                <Box sx={{ width: "100%", marginTop: "30px" }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        hideFooter
                        rowsPerPageOptions={[5]}
                        disableSelectionOnClick
                        sx={{
                            border: "1px solid #0000003D",
                            "& .MuiDataGrid-columnHeaders": {
                                color: "#00C7A9",
                                textAlign: "center",
                                borderRight: "1px solid #ccc",
                            },
                            "& .MuiDataGrid-columnHeaderTitle": {
                                fontWeight: "500",
                                fontSize: "18px",
                                fontFamily: "Inter",
                                textAlign: "center",
                                width: "100%",
                            },
                            "& .MuiDataGrid-columnHeader": {
                                borderRight: "1px solid #ccc",
                            },
                            "& .MuiDataGrid-cell": {
                                textAlign: "center",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                // textWrap: "wrap",
                                fontFamily: "Inter",
                                fontSize: "18px",
                                color: "#3B3B3B",
                                // width: "100%",
                                fontWeight: "400",
                                borderRight: "1px solid #ccc",
                            },
                        }}
                    />
                </Box>

                <Typography className='upload_text2' sx={{ margin: "57px 0px 47px 0px" }}>
                    Select the domain for which you’re uploading the questions
                </Typography>

                <Box className='drop_down_boxs'>
                    <Box sx={{ width: "369px" }}>
                        <Autocomplete
                            options={[{ label: "Web Development", id: 1 }, { label: "Mobile Development", id: 2 }]}
                            getOptionLabel={(option) => option.label}
                            defaultValue={{ label: "Web Development", id: 1 }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    placeholder="Select a domain"
                                    className="upload_input"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            "& fieldset": { border: "none" },
                                        },
                                        "& .MuiInputBase-input": {
                                            color: "#000 !important",
                                            fontFamily: "Inter",
                                            fontSize: "16px",
                                            fontWeight: 500,
                                        },
                                    }}
                                />
                            )}
                            PaperComponent={(props) => (
                                <Paper {...props} sx={{
                                    backgroundColor: "#fff",
                                    border: "1px solid #0000003D",
                                    "& .MuiAutocomplete-option": {
                                        fontSize: "16px",
                                        fontWeight: 500,
                                        fontFamily: "Inter",
                                        borderBottom: "1px solid #ccc",
                                        padding: "10px 16px",
                                        "&:last-child": { borderBottom: "none" },
                                    },
                                }} />
                            )}
                        />
                    </Box>

                    <Box sx={{ width: "369px" }}>
                        <Autocomplete
                            options={[{ label: "JavaScript", id: 1 }, { label: "React", id: 2 }, { label: "HTML/CSS", id: 3 }]}
                            getOptionLabel={(option) => option.label}
                            defaultValue={{ label: "JavaScript", id: 1 }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    placeholder="Select Language"
                                    className="upload_input"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            "& fieldset": { border: "none" },
                                        },
                                        "& .MuiInputBase-input": {
                                            color: "#3B3B3B !important",
                                            fontFamily: "Inter",
                                            fontSize: "16px",
                                            fontWeight: 500,
                                        },
                                    }}
                                />
                            )}
                            PaperComponent={(props) => (
                                <Paper {...props} sx={{
                                    backgroundColor: "#fff",
                                    border: "1px solid #0000003D",
                                    "& .MuiAutocomplete-option": {
                                        fontSize: "16px",
                                        fontWeight: 500,
                                        fontFamily: "Inter",
                                        borderBottom: "1px solid #ccc",
                                        padding: "10px 16px",
                                        "&:last-child": { borderBottom: "none" },
                                    },
                                }} />
                            )}
                        />
                    </Box>

                    <Button
                        className="upload_csv_btn"
                        endIcon={<FiUpload />
}
                        sx={{
                            opacity: 1,
                            pointerEvents: "auto",
                        }}
                    >
                        Upload CSV file
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default UploadQuestions;