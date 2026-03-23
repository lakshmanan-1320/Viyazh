import React from "react";
import { Box, Typography } from "@mui/material";
import {
  FaRegFileAlt,
  FaUserTie,
  FaCalendarAlt,
  FaHashtag,
} from "react-icons/fa";

const Information = () => {
  /* ================= DUMMY DATA ================= */
  const testName = "Frontend Developer Assessment";
  const owner = "John Doe";
  const createdDate = "2024-12-15";
  const assessmentId = "ASMT-10234";

  const iconStyle = {
    fontSize: "18px",
    color: "#7158E2",
  };

  return (
    <Box sx={{ marginTop: "80px", padding: "0 55px 0 30px" }}>
      {/* ===== NAME ===== */}
      <Box className="information_section">
        <Box className="information_left">
          <Box className="information_left_inner">
            <FaRegFileAlt style={iconStyle} />
            <Typography className="information_text">
              Name of the assessment
            </Typography>
          </Box>
          <Typography className="information_text">:</Typography>
        </Box>

        <Box className="infromation_right">
          <Typography className="information_text_right">
            {testName}
          </Typography>
        </Box>
      </Box>

      {/* ===== OWNER ===== */}
      <Box className="information_section">
        <Box className="information_left">
          <Box className="information_left_inner">
            <FaUserTie style={iconStyle} />
            <Typography className="information_text">
              Assessment owned by
            </Typography>
          </Box>
          <Typography className="information_text">:</Typography>
        </Box>

        <Box className="infromation_right">
          <Typography className="information_text_right">
            {owner}
          </Typography>
        </Box>
      </Box>

      {/* ===== CREATED DATE ===== */}
      <Box className="information_section">
        <Box className="information_left">
          <Box className="information_left_inner">
            <FaCalendarAlt style={iconStyle} />
            <Typography className="information_text">
              Date of assessment creation
            </Typography>
          </Box>
          <Typography className="information_text">:</Typography>
        </Box>

        <Box className="infromation_right">
          <Typography className="information_text_right">
            {createdDate}
          </Typography>
        </Box>
      </Box>

      {/* ===== ASSESSMENT ID ===== */}
      <Box className="information_section">
        <Box className="information_left">
          <Box className="information_left_inner">
            <FaHashtag style={iconStyle} />
            <Typography className="information_text">
              Assessment ID
            </Typography>
          </Box>
          <Typography className="information_text">:</Typography>
        </Box>

        <Box className="infromation_right">
          <Typography className="information_text_right">
            #{assessmentId}
          </Typography>
        </Box>
      </Box>

      {/* ===== FOOTER SPACE (RETAINED) ===== */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          gap: 2,
          marginRight: "30px",
          marginTop: "50px",
          marginBottom: "32px",
        }}
      />
    </Box>
  );
};

export default Information;
