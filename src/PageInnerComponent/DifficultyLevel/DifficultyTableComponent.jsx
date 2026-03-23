import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  CircularProgress,
} from "@mui/material";

const DifficultyTableComponent = ({ columns, rows, loading }) => {
  return (
    <TableContainer sx={{ marginTop: "50px", padding: "0px 30px" }}>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", padding: "20px" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Table sx={{ border: "2px solid #0000003D" }}>
          {/* Table Header */}
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell
                  key={col.field}
                  align="center"
                  sx={{
                    fontWeight: "600",
                    fontSize: "18px",
                    fontFamily: "Poppins",
                    color: "#3B3B3B",
                    border: "2px solid #0000003D",
                    padding: "22px",
                  }}
                >
                  {col.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody sx={{ border: "2px solid #0000003D" }}>
            {rows && rows.length > 0 ? (
              rows.map((row, rowIndex) => (
                <TableRow key={row.id || rowIndex}>
                  {columns.map((col) => (
                    <TableCell
                      key={col.field}
                      align="center"
                      sx={{
                        border: "2px solid #0000003D",
                        fontSize: "14px !important",
                        fontWeight: "500",
                        textAlign: "center",
                        fontFamily: "Poppins !important",
                        color: "#3B3B3B !important",
                        padding: "20px 23px",
                      }}
                    >
                      {col.renderCell
                        ? col.renderCell({ row })
                        : row[col.field]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  No data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default DifficultyTableComponent;
