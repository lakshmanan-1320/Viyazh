import React, { useState, useEffect } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const ActiveUserTable = ({ search }) => {
  const [rows, setRows] = useState([]);

  /* ---------------- MOCK DATA ---------------- */
  useEffect(() => {
    setRows([
      {
        id: 1,
        sno: 1,
        name: "John Doe",
        email: "john@example.com",
        role: "Admin",
        designation: "Manager",
        createdBy: "System",
        joinedAt: "2024-01-10",
        active: true,
      },
      {
        id: 2,
        sno: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        role: "ContentCreator",
        designation: "Editor",
        createdBy: "Admin",
        joinedAt: "2024-02-05",
        active: true,
      },
    ]);
  }, []);

  /* ---------------- SEARCH FILTER ---------------- */
  const filteredRows = rows.filter(
    (row) =>
      row.name.toLowerCase().includes(search.toLowerCase()) ||
      row.email.toLowerCase().includes(search.toLowerCase())
  );

  /* ---------------- STATUS TOGGLE ---------------- */
  const handleToggleStatus = (id) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === id ? { ...row, active: !row.active } : row
      )
    );
  };

  if (!filteredRows.length) {
    return (
      <Box
        sx={{
          marginTop: "50px",
          textAlign: "center",
          color: "red",
          padding: "0px 30px",
        }}
      >
        No Active Users Found
      </Box>
    );
  }

  return (
    <Box sx={{ marginTop: "50px", padding: "0px 30px" }}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow className="users_table_head">
              <TableCell>S.No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Designation</TableCell>
              <TableCell>Created By</TableCell>
              <TableCell>Joined At</TableCell>
              <TableCell>Inactive</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredRows.map((row) => (
              <TableRow key={row.id} className="users_table_body">
                <TableCell>{row.sno}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.designation}</TableCell>
                <TableCell>{row.createdBy}</TableCell>
                <TableCell>{row.joinedAt}</TableCell>
                <TableCell>
                  <Box className="toggle-container">
                    <label className="switch custom-switch">
                      <input
                        type="checkbox"
                        checked={!row.active}
                        onChange={() => handleToggleStatus(row.id)}
                      />
                      <span className="slider"></span>
                    </label>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination intentionally kept commented (UI parity) */}
      {/*
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={5}
        page={0}
      />
      */}
    </Box>
  );
};

export default ActiveUserTable;
