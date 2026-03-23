import { Box, Grid, Popover, Button } from "@mui/material";
import React, { useState } from "react";
import logo from "../../assets/img/logo_full.svg";
import { FaBell } from "react-icons/fa6";
import admin from "../../assets/img/admin.svg";
import "./Navbar.css";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);

  return (
    <Box className="navbar">
      <Grid item xs={6} sm={3} md={2}>
        <Box display="flex" alignItems="center">
          {/* <img src={logo} alt="Logo" style={{ width: "150px" }} /> */}
        </Box>
      </Grid>

      <Grid item xs={6} sm={9} md={10}>
        <Box className="navbar-right-container">

          {/* Notification */}
          <Box className="notification-icon">
            <FaBell />
            <span className="notification-badge">4</span>
          </Box>

          {/* Admin Info Trigger */}
          <Box className="admin-info-container" onClick={handleClick} style={{ cursor: "pointer" }}>
            <img src={admin} alt="admin" />
            <Box className="admin-info">
              <h3>Admin</h3>
              <p>Super Admin</p>
            </Box>
          </Box>

          {/* Popover Modal */}
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Box sx={{ padding: "10px 15px" }}>
              <Button variant="outlined" fullWidth color="error">
                Logout
              </Button>
            </Box>
          </Popover>
        </Box>
      </Grid>
    </Box>
  );
};

export default Navbar;
