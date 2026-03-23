import React, { useState } from "react";
import {
    Box,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Modal,
} from "@mui/material";

import { Link } from "react-router-dom";
import { FiX, FiEdit3, FiArchive, FiMoreVertical } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import AddTopicRight from "./AddTopicRight";

// import "../../Style/AddTopicPage.css";
// import "../../Style/QuestionBank.css";

const AddTopicPageMain = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showInitialPopup, setShowInitialPopup] = useState(false);

    // Dummy topics
    const dummyTopics = [
        { id: 1, topic_name: "HTML Basics", questionCount: 12 },
        { id: 2, topic_name: "CSS Styling", questionCount: 8 },
        { id: 3, topic_name: "JavaScript Intro", questionCount: 15 },
    ];

    return (
        <Box>
            <Box className="add_Topic_header">
                <Box sx={{ display: "flex", alignItems: "end" }}>
                    <Link to="/contentCreator/questionBank">
                             <MdOutlineCancel />
                            </Link>
                </Box>
            </Box>

            <Box className="add_Topic_body">
                {/* LEFT SIDE */}
                <Box className="add_Topic_left">
                    <Box className="Topic_section">
                        <Typography className="Topic_section_title">Topic</Typography>
                        <Button onClick={() => setShowInitialPopup(true)} className="tpc_btn">
                            Add Topics
                        </Button>
                    </Box>

                    {dummyTopics.map((topic, index) => (
                        <Box key={index} className="Topic_ques_box">
                            <Typography className="Topic_ques">
                                {topic.topic_name} ({topic.questionCount})
                            </Typography>

                            <Box>
                                <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                                    <FiMoreVertical size={20} />
                                </IconButton>

                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={() => setAnchorEl(null)}
                                    PaperProps={{
                                        sx: { boxShadow: "none", background: "transparent" },
                                        className: "custom-menu-test-table topic_menu",
                                    }}
                                >
                                    <MenuItem
                                        sx={{ "&:hover": { backgroundColor: "#fff" } }}
                                        onClick={() => setOpenDialog(true)}
                                    >
                                        Rename <FiEdit3 size={18} style={{ marginLeft: "5px" }} />
                                    </MenuItem>

                                    <MenuItem
                                        sx={{ "&:hover": { backgroundColor: "#fff" } }}
                                        onClick={() => setIsModalOpen(true)}
                                    >
                                        Archive <FiArchive size={18} style={{ marginLeft: "5px" }} />
                                    </MenuItem>
                                </Menu>
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* RIGHT SIDE  */}
                <Box className="add_Topic_right">
                   
                       <AddTopicRight/>
                    
                </Box>
            </Box>

            {/* RENAME DIALOG (dummy) */}
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle>Rename Topic</DialogTitle>

                <DialogContent>
                    <TextField fullWidth placeholder="Enter new topic name" />
                </DialogContent>

                <DialogActions>
                    <Button className="modal_cancel_btn" onClick={() => setOpenDialog(false)}>
                        Cancel
                    </Button>
                    <Button className="modal_save_btn" sx={{ textTransform: "inherit !important" }}>
                        Rename
                    </Button>
                </DialogActions>
            </Dialog>

            {/* ADD TOPIC POPUP (dummy) */}
            {showInitialPopup && (
                <Modal open={showInitialPopup} onClose={() => setShowInitialPopup(false)}>
                    <Box
                        sx={{
                            width: 500,
                            padding: "25px",
                            background: "white",
                            borderRadius: "10px",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%,-50%)",
                        }}
                    >
                        <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                            Add New Topic
                        </Typography>

                        <input
                            type="text"
                            placeholder="Enter topic name"
                            style={{
                                width: "100%",
                                marginTop: "20px",
                                padding: "10px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                            }}
                        />

                        <Box sx={{ mt: 4, display: "flex", justifyContent: "end", gap: "10px" }}>
                            <Button className="modal_cancel_btn" onClick={() => setShowInitialPopup(false)}>
                                Cancel
                            </Button>
                            <Button className="modal_save_btn">Create</Button>
                        </Box>
                    </Box>
                </Modal>
            )}

            {/* ARCHIVE CONFIRM MODAL (dummy) */}
            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Box
                    sx={{
                        width: 450,
                        p: 4,
                        background: "white",
                        borderRadius: 2,
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <Typography sx={{ fontWeight: "600", fontSize: "20px" }}>
                        Confirm Archive
                    </Typography>

                    <Typography sx={{ mt: 1 }}>
                        Are you sure you want to archive this topic?
                    </Typography>

                    <Box sx={{ mt: 3, display: "flex", justifyContent: "end", gap: "10px" }}>
                        <Button className="modal_save_btn">Yes, Archive</Button>
                        <Button className="modal_cancel_btn" onClick={() => setIsModalOpen(false)}>
                            Cancel
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};

export default AddTopicPageMain;
