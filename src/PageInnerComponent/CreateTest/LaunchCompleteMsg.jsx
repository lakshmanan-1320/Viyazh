import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import launch from "../../assets/img/launch.svg";
import { useNavigate } from "react-router-dom";

const LaunchCompleteMsg = () => {
  const navigate = useNavigate();

  // Redirect after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/admin/test/`, { replace: true });
    }, 2000); 

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box className="invited createOne_main">
      {/* <Box
        className="invited_header_cancel edit_section_space"
        sx={{ marginBottom: "49px" }}
      >
        <Box
          className="invited_inner_header_cancel edit_header"
          sx={{ width: "100%", padding: "0 16px" }}
        >
          <img src={fadeArrow} alt="editsection" style={{ opacity: -0.2 }} />
          <Typography className="fade_header_text" style={{ opacity: -0.2 }}>
            Create Test
          </Typography>
        </Box>
      </Box> */}

      <Box sx={{ padding: "0 25px" }}>
        <Box className="invited_box edit_section_box createTestOne">
          <Box className="launch_complete">
            <img src={launch} alt="launch" />
            <Typography className="launch_text_h4">
              Test has been created successfully!
            </Typography>
            <Typography sx={{color:"#858585"}}>Now loading all test please wait...</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LaunchCompleteMsg;
