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

const InactiveUserTable = ({ search }) => {
  const [rows, setRows] = useState([]);

  /* ---------------- MOCK DATA ---------------- */
  useEffect(() => {
    setRows([
      {
        id: 1,
        sno: 1,
        name: "Alex Brown",
        email: "alex@example.com",
        role: "Admin",
        designation: "Manager",
        createdBy: "System",
        joinedAt: "2023-12-10",
        active: false,
      },
      {
        id: 2,
        sno: 2,
        name: "Sara White",
        email: "sara@example.com",
        role: "ContentCreator",
        designation: "Writer",
        createdBy: "Admin",
        joinedAt: "2024-01-05",
        active: false,
      },
    ]);
  }, []);

  /* ---------------- SEARCH FILTER ---------------- */
  const filteredRows = rows.filter(
    (row) =>
      row.name.toLowerCase().includes(search.toLowerCase()) ||
      row.email.toLowerCase().includes(search.toLowerCase())
  );

  /* ---------------- TOGGLE STATUS ---------------- */
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
        No Inactive Users Found
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
              <TableCell>Active</TableCell>
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
    </Box>
  );
};

export default InactiveUserTable;
