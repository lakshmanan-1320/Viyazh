import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Tooltip,
  CircularProgress,
} from "@mui/material";
// import "../../Style/Test.css";

const General = ({ handleClosePopup }) => {
  /* ================= DUMMY STATES ================= */
  const [testName, setTestName] = useState("Sample Assessment Name");
  const [copySuccess, setCopySuccess] = useState(false);

  const [isShuffleChecked, setIsShuffleChecked] = useState(true);
  const [iswebCamChecked, setIswebCamChecked] = useState(false);
  const [isoffTabChecked, setIsoffTabChecked] = useState(true);

  /* ================= DUMMY HANDLERS ================= */
  const handleCopyLink = () => {
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 1500);
  };

  return (
    <Box sx={{ marginTop: "40px", padding: "0 55px 0 30px" }}>
      <Typography className="genaral_heading_text">General</Typography>

      {/* ================= TEST NAME ================= */}
      <Box className="genaral_settings_box">
        <Box className="genaral_settings_box_left">
          <Typography className="genaral_heading_text cus_general_text_name">
            Assessment name
          </Typography>

          <TextField
            variant="outlined"
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
            fullWidth
            className="genaral_textfield"
            sx={{
              width: "80%",
              height: 44,
              "& .MuiOutlinedInput-root": {
                height: 44,
                display: "flex",
                color: "#3B3B3B",
                opacity: 0.5,
                alignItems: "center",
                "& fieldset": {
                  border: "none",
                },
              },
            }}
          />
        </Box>

        <Box className="genaral_settings_box_right">
          <Typography className="genaral_heading_text cus_general_text">
            Completion alert
          </Typography>

          <Box className="toggle-container" sx={{ width: "50%" }}>
            <label className="switch">
              <input
                type="checkbox"
                checked={isShuffleChecked}
                onChange={() => setIsShuffleChecked(!isShuffleChecked)}
              />
              <span className="slider"></span>
            </label>
          </Box>
        </Box>
      </Box>

      {/* ================= TOGGLE SETTINGS ================= */}
      <Typography className="genaral_heading_text" sx={{ marginTop: "26px" }}>
        Toggle settings
      </Typography>

      <Box className="genaral_settings_box">
        <Box className="genaral_settings_box_toggle_left">
          <Typography className="genaral_heading_text cus_general_text">
            Web cam proctoring
          </Typography>

          <Box className="toggle-container">
            <label className="switch">
              <input
                type="checkbox"
                checked={iswebCamChecked}
                onChange={() => setIswebCamChecked(!iswebCamChecked)}
              />
              <span className="slider"></span>
            </label>
          </Box>
        </Box>

        <Box className="genaral_settings_box_toggle_right">
          <Typography className="genaral_heading_text cus_general_text">
            Off-tab tracking
          </Typography>

          <Box className="toggle-container">
            <label className="switch">
              <input
                type="checkbox"
                checked={isoffTabChecked}
                onChange={() => setIsoffTabChecked(!isoffTabChecked)}
              />
              <span className="slider"></span>
            </label>
          </Box>
        </Box>
      </Box>

      {/* ================= OPEN LINK SETTINGS ================= */}
      <Typography className="genaral_heading_text" sx={{ marginTop: "26px" }}>
        Open link settings
      </Typography>

      <Box className="genaral_settings_box_2">
        <Box className="genaral_settings_copy_link_area">
          <span
            className="open_link"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: "80%",
            }}
          >
            https://dummy-test-link.com/sample-test
          </span>

          <Box sx={{ display: "flex", gap: "20px" }}>
            <Tooltip title={copySuccess ? "Copied!" : "Copy to clipboard"} arrow>
              <Button
                variant="contained"
                className="copy_link_bt"
                onClick={handleCopyLink}
              >
                {copySuccess ? "Copied" : "Copy link"}
              </Button>
            </Tooltip>

            <Button variant="contained" className="regenerate_bt">
              Regenerate
            </Button>
          </Box>
        </Box>
      </Box>

      {/* ================= ACTION BUTTONS ================= */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          gap: 2,
          marginTop: "60px",
          paddingBottom: "30px",
        }}
      >
        <Button
          variant="contained"
          className="invite_cancel_btn"
          onClick={handleClosePopup}
        >
          Cancel
        </Button>

        <Button variant="contained" className="invite_save_btn">
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default General;
