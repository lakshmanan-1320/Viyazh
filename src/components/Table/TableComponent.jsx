import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
  LinearProgress,
} from "@mui/material";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

const TableComponent = ({
  columns,
  data,
  page,
  rowsPerPage,
  onMenuOpen,
}) => {
  return (
    <TableContainer component={Paper} className="tableCard">
      <Table>
        {/* ================= TABLE HEAD ================= */}
        <TableHead className="tableHead">
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col.id}>{col.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* ================= TABLE BODY ================= */}
        <TableBody>
          {data
            .slice(
              (page - 1) * rowsPerPage,
              (page - 1) * rowsPerPage + rowsPerPage
            )
            .map((row, index) => (
              <TableRow key={row.id} className="tableRow">
                {columns.map((col) => {
                  switch (col.id) {
                    case "sno":
                      return (
                        <TableCell key={col.id}>
                          {String(
                            (page - 1) * rowsPerPage + index + 1
                          ).padStart(2, "0")}
                        </TableCell>
                      );

                    case "name":
                      return (
                        <TableCell key={col.id}>
                          <Box className="testTitle">{row.name}</Box>
                          <Box className="subText">
                            Created on {row.created}
                          </Box>
                        </TableCell>
                      );

                    case "completed":
                      return (
                        <TableCell key={col.id} className="completedCol">
                          <strong>
                            {row.completed}/{row.invited}
                          </strong>
                          <LinearProgress
                            variant="determinate"
                            value={(row.completed / row.invited) * 100}
                            className="progressBar"
                          />
                        </TableCell>
                      );

                    case "viewport":
                      return (
                        <TableCell key={col.id}>
                          <IconButton className="iconBtn">
                         <Link to="/admin/report">   <OpenInNewIcon className="openIcon" /> </Link>
                          </IconButton>
                        </TableCell>
                      );

                    case "actions":
                      return (
                        <TableCell key={col.id}>
                          <IconButton
                            onClick={(e) => onMenuOpen(e, row.id)}
                          >
                            <MoreVertIcon />
                          </IconButton>
                        </TableCell>
                      );

                    default:
                      return (
                        <TableCell key={col.id}>
                          {row[col.id]}
                        </TableCell>
                      );
                  }
                })}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
