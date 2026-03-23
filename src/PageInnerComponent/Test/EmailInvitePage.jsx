import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
// import "../../Style/Invited.css";
import { FiSend } from "react-icons/fi";

const EmailInvitePage = () => {
  /* ================= DUMMY STATE ================= */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  /* ================= DUMMY DATES ================= */
  const ActiveDate = "15-12-2024 : 10:00 AM";
  const InactiveDate = "16-12-2024 : 10:00 AM";

  return (
    <Box sx={{ marginTop: "36px", padding: "0 25px" }}>
      {/* ================= CANDIDATE DETAILS ================= */}
      <Box className="email_invite_c_name">
        <Box className="email_invite_c_name_inner">
          <label>Candidate name</label>
          <TextField
            variant="outlined"
            value={name}
            placeholder="Enter Candidate Name"
            onChange={(e) => setName(e.target.value)}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { border: "none" },
                "& .MuiInputBase-input::placeholder": {
                  color: "#000000A8 !important",
                  fontFamily: "Poppins",
                  fontSize: "12px !important",
                  fontWeight: "400 !important",
                },
                fontFamily: "Poppins",
                fontSize: "16px !important",
                fontWeight: "500 !important",
              },
            }}
          />
        </Box>

        <Box className="email_invite_c_name_inner">
          <label>Candidate Email</label>
          <TextField
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Candidate Email"
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { border: "none" },
                "& .MuiInputBase-input::placeholder": {
                  color: "#000000A8 !important",
                  fontFamily: "Poppins",
                  fontSize: "12px !important",
                  fontWeight: "400 !important",
                },
                fontFamily: "Poppins",
                fontSize: "16px !important",
                fontWeight: "500 !important",
              },
            }}
          />
        </Box>
      </Box>

      {/* ================= EMAIL PREVIEW ================= */}
      <Box sx={{ marginTop: "32px" }}>
        <Box className="email_invite_c_name_inner cus_can_name">
          <label>Hi Candidate name</label>
          <TextField
            variant="outlined"
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { border: "none" },
              },
            }}
          />
        </Box>

        <Typography className="email_assestment_text">
          You can start the assessment by clicking here:
        </Typography>

        <Box className="email_assestment_link">
          <Button variant="contained" className="invite_save_btn email_btn_invite">
            Start now
          </Button>
          <Typography className="email_assestment_link_text">
            Alternatively, you can use<span> this link</span> to access the
            assessment
          </Typography>
        </Box>

        <Typography className="email_assestment_text_note">
          A couple of things to keep in mind while taking the assessment:
        </Typography>

        <Box className="email_assestment_text_note_inner">
          <Typography className="assestemnt_list">
            1. This invite is valid from <span>{ActiveDate}</span> till{" "}
            <span>{InactiveDate}</span>
          </Typography>
          <Typography className="assestemnt_list cus-assestemnt_list">
            2. Please take the test on your desktop or laptop.
          </Typography>
          <Typography className="assestemnt_list cus-assestemnt_li">
            3. Choose a quiet location where you will not be interrupted.
          </Typography>
          <Typography className="assestemnt_list cus-assestemnt_li">
            4. Ensure you have a reliable internet connection before starting.
          </Typography>
        </Box>

        {/* ================= SEND BUTTON ================= */}
        <Box
          className="email_assestment_link_btn_bottom"
          sx={{ width: "82%" }}
        >
          <Button
            variant="contained"
            className="invite_save_btn email_btn_invite"
            sx={{ gap: "25px" }}
            endIcon={<FiSend size={18} />}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EmailInvitePage;
