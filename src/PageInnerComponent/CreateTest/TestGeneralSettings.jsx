import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";


const TestGeneralSettings = () => {

    const [iswebPoratlChecked, setIswebPoratlChecked] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [offTabchecked, setoffTabchecked] = useState(false);
    const [offtab, setoffTab] = useState(3);

    // Handlers (RETAINED)
    const handlewebporatlToggle = () => {
        setIswebPoratlChecked(prev => !prev);
    };

    const handleOffTabToggle = () => {
        setoffTabchecked(prev => !prev);
    };

    const handleTimeLimitChange = (e) => {
        setoffTab(e.target.value);
    };

    const handleComplete = () => {
        setCompleted(prev => !prev);
    };

    return (
        <Box className="invited createOne_main invited_box_2">

            {/* <Box className="invited_header_cancel edit_section_space" sx={{ marginBottom: "49px" }}>
                <Box className="invited_inner_header_cancel edit_header" sx={{ width: "100%", padding: "0 16px" }}>
                    <img src={fadeArrow} alt="editsection" style={{ opacity: 0.2 }} />
                    <Typography className="fade_header_text" style={{ opacity: 0.2 }}>
                        Create Test
                    </Typography>
                </Box>
            </Box> */}

            <Box sx={{ padding: "0 25px" }}>
                <Box className="invited_box  edit_section_box createTestOne">

                    <Typography variant="h5" className="invited_inner_header_text createTestOne_heading" sx={{ fontSize: "20px !important" }}>
                        General Settings
                    </Typography>

                    <Box className="createTestOne_box_inner">

                        {/* LEFT SIDE STEPPER */}
                        <Box className="createTestOne_box_inner_left">
                            <Box className="createTestOne_box_inner_left_line"></Box>

                            <Box className="createTestOne_box_inner_left_circle_area">
                                <Box className="createTestOne_box_inner_left_circle circle_active">1</Box>
                                <Box className="createTestOne_box_inner_left_circle circle_active">2</Box>
                                {/* <Box className="createTestOne_box_inner_left_circle circle_active">3</Box> */}
                            </Box>
                        </Box>

                        {/* RIGHT SIDE CONTENT */}
                        <Box className="createTestOne_box_inner_right" sx={{ flex: 1 }}>

                            {/* Off tab Section */}
                            <Box className="edit_section_main_inner" sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
                                <Box sx={{ flex: 1, minWidth: "30%" }}>
                                    <Typography className="edit_section_inner_text general_settings_text">
                                        Off tab activity tracking
                                    </Typography>
                                </Box>

                                <Box className="toggle-container-time" sx={{ flex: 2, display: "flex", alignItems: "center", gap: "10px" }}>
                                    <label className="switch">
                                        <input type="checkbox" checked={offTabchecked} onChange={handleOffTabToggle} />
                                        <span className="slider"></span>
                                    </label>

                                    <TextField
                                        type="number"
                                        value={offtab}
                                        onChange={handleTimeLimitChange}
                                        className="time_limit_input"
                                        variant="outlined"
                                        size="small"
                                        sx={{ marginLeft: "10px", maxWidth: "80px" }}
                                        inputProps={{ min: 0, max: 30 }}
                                    />
                                </Box>
                            </Box>

                            {/* Web Proctoring Section */}
                            <Box className="edit_section_main_inner" sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
                                <Box sx={{ flex: 1, minWidth: "30%" }}>
                                    <Typography className="edit_section_inner_text general_settings_text">
                                        Web proctoring
                                    </Typography>
                                </Box>

                                <Box className="toggle-container" sx={{ flex: 2, display: "flex", justifyContent: "flex-start" }}>
                                    <label className="switch">
                                        <input type="checkbox" checked={iswebPoratlChecked} onChange={handlewebporatlToggle} />
                                        <span className="slider"></span>
                                    </label>
                                </Box>
                            </Box>

                            {/* Completion Alerts Section */}
                            <Box className="edit_section_main_inner" sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
                                <Box sx={{ flex: 1, minWidth: "30%" }}>
                                    <Typography className="edit_section_inner_text general_settings_text">
                                        Completion alerts
                                    </Typography>
                                </Box>

                                <Box className="toggle-container" sx={{ flex: 2, display: "flex", justifyContent: "flex-start" }}>
                                    <label className="switch">
                                        <input type="checkbox" checked={completed} onChange={handleComplete} />
                                        <span className="slider"></span>
                                    </label>
                                </Box>
                            </Box>

                        </Box>
                    </Box>

                    {/* <Box className="createTestOne_box_bottom_line"></Box> */}

                    {/* BOTTOM BUTTONS */}
                    <Box sx={{ display: "flex", justifyContent: "end", gap: 2, marginTop: "32px", marginRight: "30px", marginBottom: "32px" }}>
                        <Link to={`/admin/createTestOne`}>
                            <Button variant="contained" className="invite_cancel_btn">Back</Button>
                        </Link>

                        <Box>
                            <Button variant="contained" className="invite_save_btn" sx={{ width: "100%" }}>
                                <Link to={'/admin/launchCompleteTest'}>
                                    Next
                                </Link>
                            </Button>
                        </Box>
                    </Box>

                </Box>
            </Box>

        </Box>
    );
};

export default TestGeneralSettings;
