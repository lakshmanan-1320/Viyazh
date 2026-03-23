import React from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
} from "@mui/material";

const CustomReportTable = ({ columns, rows }) => {
  return (
    <TableContainer  sx={{  marginTop: "20px" }}>
    <Table sx={{ border: "2px solid #0000003D" }}>
      {/* Table Header */}
      <TableHead >
        <TableRow >
          {columns.map((col) => (
            <TableCell
              key={col.field}
              align="center"
              sx={{
                fontWeight: "600",
                fontSize: "16px",
                fontFamily: "Poppins",
                color: "#3B3B3B",
                border: "2px solid #0000003D",
                padding: "24px 22px",
              }}
            >
              {col.headerName}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>

      {/* Table Body */}
      <TableBody sx={{ border: "2px solid #0000003D" }}>
        {rows.length > 0 ? (
          rows.map((row, rowIndex) => (
            <TableRow key={row.id || rowIndex} hover>
              {columns.map((col) => (
                <TableCell key={col.field} align="center"
                sx={{
                    border: "2px solid #0000003D",
                    padding: "8px",
                    fontSize: "14px ! important",
                    fontWeight: "500",
                    textAlign: "center",
                    fontFamily: "Poppins ! important",
                    color: "#3B3B3B ! important",
                    padding: "10px 22px",
                  }}>
                  {col.renderCell ? col.renderCell({ row }) : row[col.field]}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} align="center">
              Candidate not found
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default CustomReportTable
