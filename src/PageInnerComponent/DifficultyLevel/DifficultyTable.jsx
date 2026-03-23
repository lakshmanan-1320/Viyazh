import React, { useState, useEffect } from "react";
import { Box, Modal, Tooltip, Button, Typography, Grid, TextField, MenuItem, Select } from "@mui/material";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";
import DifficultyTableComponent from "./DifficultyTableComponent";

const DifficultyTable = () => {
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [difficulty, setDifficulty] = useState("");
  const [time, setTime] = useState(0);
  const [score, setScore] = useState(0);
  const [updateLoading, setUpdateLoading] = useState(false);

  const [rows, setRows] = useState([]);

  /* ---------------- MOCK DATA ---------------- */
  useEffect(() => {
    setRows([
      {
        id: 1,
        sno: 1,
        difficulty: "Easy",
        time: 600000,
        score: 10,
        status: "Active",
      },
      {
        id: 2,
        sno: 2,
        difficulty: "Medium",
        time: 900000,
        score: 20,
        status: "Inactive",
      },
    ]);
  }, []);

  /* ---------------- HANDLERS ---------------- */
  const handleOpenModal = (row) => {
    setSelectedId(row.id);
    setDifficulty(row.difficulty);
    setTime(row.time / 60000);
    setScore(row.score);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleUpdate = () => {
    if (!difficulty || time <= 0 || score <= 0) {
      toast.error("All fields are required, and time/score must be greater than 0.");
      return;
    }

    setUpdateLoading(true);

    setTimeout(() => {
      setRows((prev) =>
        prev.map((row) =>
          row.id === selectedId
            ? {
                ...row,
                difficulty,
                time: time * 60000,
                score,
              }
            : row
        )
      );

      toast.success("Difficulty level updated successfully!");
      setUpdateLoading(false);
      handleClose();
    }, 700);
  };

  const handleStatusToggle = (id) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === id
          ? { ...row, status: row.status === "Active" ? "Inactive" : "Active" }
          : row
      )
    );
  };

  const handleClickOpenDelete = (id) => {
    setSelectedId(id);
    setOpenDelete(true);
  };

  const handleDelete = () => {
    setRows((prev) => prev.filter((row) => row.id !== selectedId));
    toast.success("Difficulty level archived successfully!");
    setOpenDelete(false);
  };

  /* ---------------- COLUMNS ---------------- */
  const columns = [
    { field: "sno", headerName: "S No", width: 100, headerAlign: "center" },
    { field: "difficulty", headerName: "Difficulty", flex: 1, headerAlign: "center" },
    {
      field: "time",
      headerName: "Time",
      flex: 1,
      headerAlign: "center",
      renderCell: (params) => `${params.row.time / 60000} Mins`,
    },
    {
      field: "score",
      headerName: "Score",
      flex: 1,
      headerAlign: "center",
      renderCell: (params) => `${params.row.score} Points`,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      headerAlign: "center",
      renderCell: (params) => (
        <Box className="toggle-container" sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <label className="switch custom-switch">
            <input
              type="checkbox"
              checked={params.row.status === "Active"}
              onChange={() => handleStatusToggle(params.row.id)}
            />
            <span className="slider"></span>
          </label>
          <span>{params.row.status}</span>
        </Box>
      ),
    },
    {
      field: "settings",
      headerName: "Settings",
      headerAlign: "center",
      width: 180,
      renderCell: (params) => (
        <Box sx={{ display: "flex", gap: "30px", justifyContent: "center" }}>
          <Tooltip title="Edit">
            <FiEdit2
              size={18}
              style={{ cursor: "pointer" }}
              onClick={() => handleOpenModal(params.row)}
            />
          </Tooltip>

          <Tooltip title="Delete">
            <FiTrash2
              size={18}
              color="red"
              style={{ cursor: "pointer" }}
              onClick={() => handleClickOpenDelete(params.row.id)}
            />
          </Tooltip>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ marginTop: "50px", padding: "0px 30px" }}>
      <DifficultyTableComponent columns={columns} rows={rows} loading={false} />

      {/* UPDATE MODAL */}
      <Modal open={open} onClose={handleClose}>
        <Box className="diff_level_modal">
          <Typography className="diff_heading">Update Difficulty Level</Typography>

          <Box className="diff_level_body">
            <Grid container spacing={2} style={{display: "flex", flexDirection: "column",gap:"10px"}}>
              <Grid item xs={12} md={6}>
                <span className="diff_label">Difficulty</span>
                <Select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} fullWidth>
                  {["Easy", "Medium", "Hard"].map((opt) => (
                    <MenuItem key={opt} value={opt}>
                      {opt}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>

              <Grid item xs={12} md={6}>
                <span className="diff_label">Time (in minutes)</span>
                <TextField type="number" value={time} onChange={(e) => setTime(Math.max(0, e.target.value))} fullWidth />
              </Grid>

              <Grid item xs={12} md={6}>
                <span className="diff_label">Score</span>
                <TextField type="number" value={score} onChange={(e) => setScore(Math.max(0, e.target.value))} fullWidth />
              </Grid>

              <Grid item xs={12} display="flex" justifyContent="flex-end" gap={2} sx={{ mt: 4 }}>
                <Button variant="outlined" onClick={handleUpdate} disabled={updateLoading} className="save_btn_diff">
                  {updateLoading ? "Updating..." : "Update"}
                </Button>
                <Button variant="contained" onClick={handleClose} className="save_btn_diff cancel_btn_diff">
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>

      {/* DELETE MODAL */}
      <Modal open={openDelete} onClose={() => setOpenDelete(false)}>
        <Box sx={{ width: 470, p: 4, borderRadius: 2, bgcolor: "#fff", mx: "auto", mt: "15%" }}>
          <Typography fontWeight={600} fontSize={20}>Confirm Archive</Typography>
          <Typography mt={1}>Are you sure you want to archive this Difficulty Level?</Typography>

          <Box mt={3} display="flex" justifyContent="flex-end" gap={2}>
            <Button variant="contained" onClick={handleDelete} className="invite_save_btn">
              Yes, Archive
            </Button>
            <Button variant="outlined" onClick={() => setOpenDelete(false)} className="invite_cancel_btn">
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default DifficultyTable;
