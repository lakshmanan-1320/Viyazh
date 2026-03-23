import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { FiSend } from "react-icons/fi";

/* ================= MOCK DATA ================= */
const candidates = [
  { id: "STU123", name: "Liam Harper", class: "CSE A", domain: "Front-end", email: "liam.harper@example.com" },
  { id: "STU456", name: "Olivia Bennett", class: "CSE B", domain: "Back-end", email: "olivia.bennett@example.com" },
  { id: "STU789", name: "Noah Carter", class: "CSE C", domain: "UI/UX", email: "noah.carter@example.com" },
  { id: "STU012", name: "Emma Davis", class: "ECE A", domain: "Front-end", email: "emma.davis@example.com" },
  { id: "STU345", name: "Ethan Foster", class: "CSE A", domain: "Back-end", email: "ethan.foster@example.com" },
  { id: "STU678", name: "Sophia Lee", class: "CSE B", domain: "UI/UX", email: "sophia.lee@example.com" },
  { id: "STU901", name: "James Brown", class: "ECE B", domain: "Front-end", email: "james.brown@example.com" },
];

/* ================= COMPONENT ================= */
const GrpInvite = () => {
  const rowsPerPage = 5;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(candidates.length / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const paginatedData = candidates.slice(startIndex, startIndex + rowsPerPage);

  return (
    <Box className="bulkInviteContainer">
      {/* ===== Filter Section ===== */}
      <Typography className="sectionTitle">Filter Candidates</Typography>

      <Box className="filterRow">
        <FormControl className="filterControl">
          <Typography className="filterLabel">Domain</Typography>
          <Select size="small" defaultValue=""
           sx={{
      borderRadius: 0, // remove rounded corners
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent", // remove border color
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
      },
    }}>
            <MenuItem value="">Selected Domain</MenuItem>
            <MenuItem value="frontend">Front-end</MenuItem>
            <MenuItem value="backend">Back-end</MenuItem>
            <MenuItem value="uiux">UI/UX</MenuItem>
          </Select>
        </FormControl>

        <FormControl className="filterControl">
          <Typography className="filterLabel">Class</Typography>
          <Select size="small" defaultValue=""  sx={{
      borderRadius: 0, // remove rounded corners
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent", // remove border color
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
      },
    }}>
            <MenuItem value="">Selected Class</MenuItem>
            <MenuItem value="csea">CSE A</MenuItem>
            <MenuItem value="cseb">CSE B</MenuItem>
          </Select>
        </FormControl>

        <FormControl className="filterControl">
          <Typography className="filterLabel">Score Range</Typography>
          <Select size="small" defaultValue=""
           sx={{
      borderRadius: 0, // remove rounded corners
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent", // remove border color
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
      },
    }}>
            <MenuItem value="">Selected Score Range</MenuItem>
            <MenuItem value="60-80">60 - 80</MenuItem>
            <MenuItem value="80-100">80 - 100</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* ===== Table ===== */}
      <Typography className="sectionTitle">
        Selected Candidates Preview
      </Typography>

      <TableContainer component={Paper} className="candidateTableWrapper">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">Select</TableCell>
              <TableCell>Student ID</TableCell>
              <TableCell>Student Name</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Domain</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedData.map((row) => (
              <TableRow key={row.id}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.class}</TableCell>
                <TableCell>{row.domain}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* ===== Pagination (Dynamic) ===== */}
      <Box className="tableFooter">
        <Box className="pagination">
          <IconButton
            size="small"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            <ArrowBackIosNewIcon fontSize="inherit" />
          </IconButton>

          {Array.from({ length: totalPages }).map((_, index) => {
            const pageNumber = index + 1;
            return (
              <Button
                key={pageNumber}
                className={`pageBtn ${page === pageNumber ? "active" : ""}`}
                onClick={() => setPage(pageNumber)}
              >
                {pageNumber}
              </Button>
            );
          })}

          <IconButton
            size="small"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            <ArrowForwardIosIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </Box>

      {/* ===== Actions ===== */}
      <Box className="actionButtons">
        <Button variant="outlined" className="groupInviteBtn">
         Create Group
        </Button>
         <Button
                            variant="contained"
                            className="invite_save_btn email_btn_invite"
                            sx={{ gap: "5px" }}
                            endIcon={<FiSend size={18} />}
                          >
                            Send Invite
                          </Button>
      </Box>
    </Box>
  );
};

export default GrpInvite;
