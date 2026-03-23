import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
// import "../../Style/Invited.css";

import { FaArrowLeft } from "react-icons/fa";
import EmailInvitePage from "./EmailInvitePage";
import BulkInvite from "./BulkInvite";
import GrpInvite from "./GrpInvite";
// import EmailInvitePage from "./EmailInvitePage";
// import OpenLink from "./OpenLink";

const InvitePage = () => {
  /* ================= DUMMY STATE ================= */
  const [mailType, setMailType] = useState("mail");

  /* ================= DUMMY DATA ================= */
  const testName = "Frontend Developer Assessment";
  const formattedDate = "Dec 15 14:30";
  const timezone = "Asia/Kolkata";

  return (
    <Box className="invited2  createOne_main">
      {/* ================= HEADER ================= */}
      <Box
        className="invited_header_cancel edit_section_space"
        sx={{ marginBottom: "49px" }}
      >
        <Box
          className="invited_inner_header_cancel edit_header"
          sx={{ width: "100%", padding: "0 16px" }}
        >
          <Link to="/admin/test">
            {/* <img src={fadeArrow} alt="back" /> */}
            <FaArrowLeft />

          </Link>

          <Typography
            className="fade_header_text"
            style={{ opacity: -0.2 }}
          >
            Create Test
          </Typography>
        </Box>
      </Box>

      {/* ================= CONTENT ================= */}
      <Box sx={{ padding: "0 25px" }}>
        <Box className="invited_box edit_section_box createTestOne">
          <Typography
            variant="h5"
            className="invited_inner_header_text createTestOne_heading email_invite_heading"
            sx={{ fontSize: "20px !important" }}
          >
            Invite Candidate for&nbsp;&nbsp;
            {testName} - {formattedDate}
            <span> (Your timezone is: {timezone})</span>
          </Typography>

          <Box className="createTestOne_box_inner invite_page_inner email_invite_inner">
            {/* ================= BUTTONS ================= */}
            <Box className="email_invite_button">
              <Button
                variant="contained"
                onClick={() => setMailType("mail")}
                className={
                  mailType === "mail"
                    ? "invite_save_btn email_btn_invite2"
                    : "invite_save_btn email_btn_invite_deactive"
                }
              >
                Email
              </Button>

              <Button
                variant="contained"
                onClick={() => setMailType("bulk")}
                className={
                  mailType === "bulk"
                    ? "invite_save_btn link_btn_invite"
                    : "invite_save_btn link_btn_invite_deactive"
                }
              >
                Bulk Invite
              </Button>
              <Button
                variant="contained"
                onClick={() => setMailType("link")}
                className={
                  mailType === "link"
                    ? "invite_save_btn grp_btn_invite"
                    : "invite_save_btn link_btn_invite_deactive"
                }
              >
                Group Invite
              </Button>
            </Box>

            {/* ================= DUMMY CONTENT ================= */}
            <Box>
              {mailType === "mail" ? (
                <EmailInvitePage />
              ) : 
              mailType === "bulk" ? (
                <BulkInvite />
              ) : (
                <GrpInvite/>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InvitePage;
