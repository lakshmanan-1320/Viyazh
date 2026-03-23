import React, { useState } from "react";
import {
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Tabs,
  Tab,
  Typography,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SendIcon from "@mui/icons-material/Send";
import SettingsIcon from "@mui/icons-material/Settings";

import CustomPagination from "./CustomPagination";
import TableComponent from "../../components/Table/TableComponent";
import { Link } from "react-router-dom";
import General from "./General";
import Description from "./Description";
import Instructions from "./Instructions";
import Information from "./Information";

/* ================= TABLE HEADINGS ================= */
const tableColumns = [
  { id: "sno", label: "S. No" },
  { id: "name", label: "Test Name" },
  { id: "invited", label: "Invited" },
  { id: "completed", label: "Completed" },
  { id: "viewport", label: "View Report" },
  { id: "actions", label: "Actions" },
];

/* ================= TABLE DATA ================= */
const tableData = [
  { id: 1, name: "Frontend Developer Assessment", invited: 45, completed: 32 },
  { id: 2, name: "Backend Developer Test", invited: 28, completed: 18 },
  { id: 3, name: "Mobile App Developer Assessment", invited: 52, completed: 41 },
  { id: 4, name: "Node Developer Test", invited: 12, completed: 6 },
  { id: 5, name: "DevOps Assessment", invited: 20, completed: 15 },
];

const TestTable = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const [anchorEl, setAnchorEl] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [tabvalue, setTabValue] = useState(0);

  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  /* ================= MENU HANDLERS ================= */
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOpenPopup = () => {
    setOpenPopup(true);
    handleMenuClose();
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
    setTabValue(0);
  };

  return (
    <Box className="testTableContainer">
      {/* ===== TABLE ===== */}
      <TableComponent
        columns={tableColumns}
        data={tableData}
        page={page}
        rowsPerPage={rowsPerPage}
        onMenuOpen={handleMenuOpen}
      />

      {/* ===== PAGINATION ===== */}
      <CustomPagination
        page={page}
        totalPages={totalPages}
        onChange={setPage}
      />

      {/* ===== ACTION MENU ===== */}
     <Menu
  anchorEl={anchorEl}
  open={Boolean(anchorEl)}
  onClose={handleMenuClose}
  PaperProps={{
    elevation: 3,
    sx: { width: 220, borderRadius: "12px", p: 1 },
  }}
>
  <MenuItem
    sx={{
      color: "#7158E2",
      "& .MuiListItemIcon-root": {
        color: "#7158E2",
      },
    }}
  >
    <ListItemIcon>
      <EditIcon fontSize="small" />
    </ListItemIcon>
    <Link to="/admin/createTest" style={{ textDecoration: "none", color: "inherit" }}>
      <ListItemText primary="Edit Test" />
    </Link>
  </MenuItem>

  <MenuItem
    sx={{
      color: "#7158E2",
      "& .MuiListItemIcon-root": {
        color: "#7158E2",
      },
    }}
  >
    <ListItemIcon>
      <VisibilityIcon fontSize="small" />
    </ListItemIcon>
    <Link to="/admin/previewPage" style={{ textDecoration: "none", color: "inherit" }}>
      <ListItemText primary="Preview Questions" />
    </Link>
  </MenuItem>

  <MenuItem
    sx={{
      color: "#7158E2",
      "& .MuiListItemIcon-root": {
        color: "#7158E2",
      },
    }}
  >
    <ListItemIcon>
      <SendIcon fontSize="small" />
    </ListItemIcon>
   <Link to='/admin/testInvite'> <ListItemText primary="Send Invitation" /></Link>
  </MenuItem>

  <MenuItem
    onClick={handleOpenPopup}
    sx={{
      color: "#7158E2",
      "& .MuiListItemIcon-root": {
        color: "#7158E2",
      },
    }}
  >
    <ListItemIcon>
      <SettingsIcon fontSize="small" />
    </ListItemIcon>
    <ListItemText primary="Test Settings" />
  </MenuItem>
</Menu>


      {/* ================= TEST SETTINGS POPUP ================= */}
      {openPopup && (
        <Box className="admin-popup">
          {/* Overlay */}
          <Box
            className="admin-popup-overlay create-pop-up test_pop_up"
            sx={{ backgroundColor: "rgb(243 243 243 / 92%)" }}
            onClick={handleClosePopup}
          />

          {/* Popup Content */}
          <Box className="admin-popup-content test_settings_popup">
            {/* Header */}
            <Box className="test_settings_header">
              <Box>
                <Tabs
                  value={tabvalue}
                  onChange={(e, newValue) => setTabValue(newValue)}
                  aria-label="test settings tabs"
                  sx={{
                    '& .MuiTab-root': {
                      color: '#ffffff',
                      fontSize: '16px',
                      fontWeight: 500,
                      textTransform: 'none',
                    },
                    '& .MuiTab-root.Mui-selected': {
                      color: '#ffffff',
                      fontWeight: 600,
                    },
                    '& .MuiTabs-indicator': {
                      backgroundColor: '#00C7A9',
                      height: '3px',
                    },
                  }}
                >
                  <Tab label="General" />
                  <Tab label="Description" />
                  {/* <Tab label="Registration form" /> */}
                  <Tab label="Instructions" />
                  <Tab label="Information" />
                </Tabs>
              </Box>

              <Box className="test_settings_right">
                <span
                  className="cancel_icon"
                  onClick={handleClosePopup}
                  style={{ cursor: "pointer" }}
                >
                  ✕
                </span>
              </Box>
            </Box>

            {/* Body */}
            <Box className="test_settings_body">
              {tabvalue === 0 && (
                <General/>
              )}
              {tabvalue === 1 && (
                <Description/>
              )}
              {/* {tabvalue === 2 && (
                <Typography>Dummy Registration Form Content</Typography>
              )} */}
              {tabvalue === 2 && (
                <Instructions/>
              )}
              {tabvalue === 3 && (
               <Information/>
              )}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default TestTable;
