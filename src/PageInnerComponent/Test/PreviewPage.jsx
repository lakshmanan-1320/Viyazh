import React from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";

// import "../../Style/Invited.css";
// import fadeArrow from "../../assets/icon/fadeArrow.svg";
import { FaArrowLeft } from "react-icons/fa6";


/* ================= DUMMY DATA ================= */

const dummyTestInfo = {
    companyName: "Techno Tackle Software Solutions",
    testName: "Frontend Developer Assessment",
    createdDate: "Dec 15 14:30",
};

const dummySections = [
    {
        id: 1,
        sectionName: "HTML & CSS",
        totalQuestions: 10,
        timeLimit: 15,
    },
    {
        id: 2,
        sectionName: "JavaScript",
        totalQuestions: 15,
        timeLimit: 20,
    },
    {
        id: 3,
        sectionName: "React",
        totalQuestions: 12,
        timeLimit: 25,
    },
];

const PreviewPage = () => {
    return (
        <Box className="invited_pre createOne_main">
            {/* ================= HEADER ================= */}
            <Box className="invited_header_cancel edit_section_space" sx={{ marginBottom: "49px" }}>
                <Box
                    className="invited_inner_header_cancel edit_header cus-ct"
                    sx={{ width: "100%", padding: "0 16px" }}
                >
                    <Link to="/admin/test">
                        {/* <img src={fadeArrow} alt="back" /> */}
                        <FaArrowLeft />

                    </Link>

                    {/* <Typography className="fade_header_text" style={{ opacity: 0.6 }}>
                        Create Test
                    </Typography> */}
                </Box>
            </Box>

            {/* ================= CONTENT ================= */}
            <Box sx={{ padding: "0 25px" }}>
                <Box className="invited_box edit_section_box createTestOne preview_box">
                    <Typography
                        variant="h5"
                        className="invited_inner_header_text createTestOne_heading"
                        sx={{ fontSize: "20px !important" }}
                    >
                        {dummyTestInfo.companyName}{" "}
                        {dummyTestInfo.testName} - {dummyTestInfo.createdDate}
                    </Typography>

                    <Box className="createTestOne_box_inner preview_box_inner">
                        {/* ================= TABLE ================= */}
                        <Box className="preview_table">
                            <TableContainer>
                                <Table>
                                    <TableHead className="preview_table_header">
                                        <TableRow>
                                            <TableCell sx={{ width: "15%" }}>Section</TableCell>
                                            <TableCell sx={{ width: "15%", textAlign: "center" }}>
                                                Questions
                                            </TableCell>
                                            <TableCell sx={{ width: "15%", textAlign: "center" }}>
                                                Time Limit
                                            </TableCell>
                                            <TableCell
                                                sx={{
                                                    width: "100%",
                                                    textAlign: "end",
                                                    paddingRight: "50px",
                                                }}
                                            >
                                                Status
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody className="preview_table_body">
                                        {dummySections.map((section, index) => (
                                            <TableRow key={section.id}>
                                                <TableCell>
                                                    {index + 1}. {section.sectionName}
                                                </TableCell>

                                                <TableCell sx={{ textAlign: "center" }}>
                                                    {section.totalQuestions}
                                                </TableCell>

                                                <TableCell sx={{ textAlign: "center" }}>
                                                    {section.timeLimit} mins
                                                </TableCell>

                                                <TableCell sx={{ textAlign: "end" }}>
                                                    <Link to="/admin/previewPageQuestions">
                                                        <Button
                                                            variant="contained"
                                                            startIcon={<LuArrowRight />}
                                                            className="invite_save_btn"
                                                        >
                                                            Begin
                                                        </Button>
                                                    </Link>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                        {/* ================= END TABLE ================= */}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default PreviewPage;
