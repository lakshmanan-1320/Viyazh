import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Pagination } from "@mui/material";
import { FiMail, FiXCircle } from "react-icons/fi";
import { toast } from "react-toastify";

const PendingUser = ({ search }) => {
  const [offset, setOffset] = useState(1);
  const pageSize = 5;

  const [rows, setRows] = useState([]);

  /* ---------------- MOCK DATA ---------------- */
  useEffect(() => {
    setRows([
      {
        id: 1,
        sno: 1,
        name: "Kevin Lee",
        email: "kevin@example.com",
        role: "Admin",
        designation: "Supervisor",
      },
      {
        id: 2,
        sno: 2,
        name: "Olivia Green",
        email: "olivia@example.com",
        role: "TestCreator",
        designation: "QA Lead",
      },
    ]);
  }, []);

  /* ---------------- SEARCH FILTER ---------------- */
  const filteredRows = rows.filter(
    (row) =>
      row.name.toLowerCase().includes(search.toLowerCase()) ||
      row.email.toLowerCase().includes(search.toLowerCase())
  );

  /* ---------------- ACTIONS ---------------- */
  const handleResendInvite = (id) => {
    toast.success("Invite resent successfully");
  };

  const handleRevokeInvite = (id) => {
    setRows((prev) => prev.filter((row) => row.id !== id));
    toast.success("Invite revoked successfully");
  };

  const handlePageChange = (event, page) => {
    setOffset(page);
  };

  const columns = [
    { field: "sno", headerName: "S.No", minWidth: 70, headerAlign: "center" },
    { field: "name", headerName: "Name", flex: 1, headerAlign: "center" },
    { field: "email", headerName: "Email", flex: 2, headerAlign: "center" },
    { field: "role", headerName: "Role", flex: 1, headerAlign: "center" },
    {
      field: "designation",
      headerName: "Designation",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "options",
      headerName: "Options",
      flex: 2,
      headerAlign: "center",
      renderCell: (params) => (
        <Box display="flex" gap="15px">
          <Button
            className="resend-invite-btn"
            endIcon={<FiMail />}
            onClick={() => handleResendInvite(params.row.id)}
          >
            Resend Invite
          </Button>

          <Button
            className="resend-invite-btn revoke-invite-btn"
            endIcon={<FiXCircle />}
            onClick={() => handleRevokeInvite(params.row.id)}
          >
            Revoke Invite
          </Button>
        </Box>
      ),
    },
  ];

  if (!filteredRows.length) {
    return (
      <Box textAlign="center" mt={4}>
        No pending users to display.
      </Box>
    );
  }

  return (
    <Box sx={{ marginTop: "50px", padding: "0px 30px" }}>
      <DataGrid
        rows={filteredRows}
        columns={columns}
        pageSize={pageSize}
        hideFooter
        rowHeight={68}
        sx={{
          border: "none",
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#f5f5f5",
            fontWeight: "600",
            textAlign: "center",
          },
          "& .MuiDataGrid-columnHeader": {
            border: "1px solid #0000003D",
            fontWeight: "600",
            color: "#3B3B3B",
          },
          "& .MuiDataGrid-cell": {
            border: "1px solid #0000003D",
            display: "flex",
            justifyContent: "center",
            fontFamily: "Poppins",
            fontSize: "14px",
            fontWeight: "500",
            color: "#3B3B3B",
          },
        }}
      />

      <Box sx={{ display: "flex", justifyContent: "end", mt: 2 }}>
        <Pagination
          count={2}
          page={offset}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#9d24e5",
              borderColor: "##9d24e5",
            },
            "& .MuiPaginationItem-page.Mui-selected": {
              backgroundColor: "#9d24e5",
              color: "#fff",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default PendingUser;
