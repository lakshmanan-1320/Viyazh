import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  Grid,
  MenuItem,
  TextField,
  Select,
} from "@mui/material";
import { FiPlus } from "react-icons/fi";
import { toast } from "react-toastify";

const DifficultyHeader = () => {
  // State management
  const [open, setOpen] = useState(false);
  const [difficulty, setDifficulty] = useState("Easy");
  const [time, setTime] = useState(0);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Modal handlers
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Save button handler (UI only)
  const handleSave = () => {
    if (!difficulty || time <= 0 || score <= 0) {
      toast.error(
        "All fields are required, and time/score must be greater than 0."
      );
      return;
    }

    setIsLoading(true);

    // Simulated save
    setTimeout(() => {
      toast.success("Difficulty level added successfully!");
      setIsLoading(false);
      handleClose();

      // Reset form
      setDifficulty("Easy");
      setTime(0);
      setScore(0);
    }, 800);
  };

  return (
    <Box className="difficulty_header">
      <Box className="que_bank_btns diff_header_grp">
        <Typography className="diff_header">Difficulty level</Typography>

        <Button
          className="que_bank_btn add_dii_btn"
          onClick={handleOpen}
          startIcon={<FiPlus size={18} />}
        >
          Add New Difficulty
        </Button>

        <Modal open={open} onClose={handleClose}>
          <Box className="diff_level_modal">
            <Typography className="diff_heading">
              Add New Difficulty Level
            </Typography>

            <Box className="diff_level_body">
              <form>
                <Grid container spacing={2} className="diff_level_form">
                  {/* Difficulty */}
                  <Grid item xs={12} md={6}>
                    <span className="diff_label">Difficulty</span>
                    <Select
                      value={difficulty}
                      onChange={(e) => setDifficulty(e.target.value)}
                      fullWidth
                      sx={{
                        backgroundColor: "#F8F8F88C",
                        borderRadius: "12px",
                        border: "1px solid #0000001F",
                        height: "52px",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiInputBase-input": {
                          fontFamily: "Inter, sans-serif !important",
                          fontSize: "14px !important",
                          fontWeight: "400 !important",
                          color: "#000000A8 !important",
                        },
                      }}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            boxShadow: "none",
                            borderRadius: "12px",
                          },
                        },
                        sx: {
                          "& .MuiMenuItem-root": {
                            borderRadius: "12px",
                            border: "1px solid #0000001F",
                            backgroundColor: "#F8F8F88C",
                            height: "52px",
                            fontFamily: "Inter, sans-serif !important",
                            fontSize: "14px !important",
                            fontWeight: "400 !important",
                            color: "#000000A8 !important",
                          },
                        },
                      }}
                    >
                      {["Easy", "Medium", "Hard"].map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>

                  {/* Time */}
                  <Grid item xs={12} md={6}>
                    <span className="diff_label">Time (in minutes)</span>
                    <TextField
                      type="number"
                      value={time}
                      onChange={(e) =>
                        setTime(Math.max(0, Number(e.target.value)))
                      }
                      inputProps={{ min: 0 }}
                      fullWidth
                      sx={{
                        backgroundColor: "#F8F8F88C",
                        borderRadius: "12px",
                        border: "1px solid #0000001F",
                        height: "52px",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiInputBase-input": {
                          fontFamily: "Inter, sans-serif !important",
                          fontSize: "14px !important",
                          fontWeight: "400 !important",
                          color: "#000000A8 !important",
                        },
                      }}
                    />
                  </Grid>

                  {/* Score */}
                  <Grid item xs={12} md={6} sx={{ marginTop: "15px" }}>
                    <span className="diff_label">Score</span>
                    <TextField
                      type="number"
                      value={score}
                      onChange={(e) =>
                        setScore(Math.max(0, Number(e.target.value)))
                      }
                      inputProps={{ min: 0 }}
                      fullWidth
                      sx={{
                        backgroundColor: "#F8F8F88C",
                        borderRadius: "12px",
                        border: "1px solid #0000001F",
                        height: "52px",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                        "& .MuiInputBase-input": {
                          fontFamily: "Inter, sans-serif !important",
                          fontSize: "14px !important",
                          fontWeight: "400 !important",
                          color: "#000000A8 !important",
                        },
                      }}
                    />
                  </Grid>

                  {/* Buttons */}
                  <Grid
                    item
                    xs={12}
                    display="flex"
                    justifyContent="flex-end"
                    gap={2}
                    sx={{ marginTop: "50px" }}
                  >
                    <Button
                      variant="outlined"
                      onClick={handleSave}
                      disabled={isLoading}
                      className="save_btn_diff"
                    >
                      {isLoading ? "Saving..." : "Save"}
                    </Button>

                    <Button
                      variant="contained"
                      onClick={handleClose}
                      className="save_btn_diff cancel_btn_diff"
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default DifficultyHeader;
