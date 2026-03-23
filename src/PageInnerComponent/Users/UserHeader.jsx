import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  Typography,
  TextField,
  MenuItem,
  Select,
  CircularProgress,
  FormHelperText,
  InputAdornment,
} from "@mui/material";
import { FiSearch, FiX } from "react-icons/fi";
import { toast } from "react-toastify";

const UserHeader = ({ search, setsearch }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [designation, setDesignation] = useState("");
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    role: "",
  });

  const roles = ["Admin", "TestCreator", "ContentCreator"];

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors({ name: "", email: "", role: "" });

    if (!name || !email || !role) {
      setErrors({
        name: !name ? "Name is required" : "",
        email: !email ? "Email is required" : "",
        role: !role ? "Role is required" : "",
      });
      return;
    }

    setLoading(true);

    // Simulated save
    setTimeout(() => {
      toast.success("User created successfully!");
      setName("");
      setEmail("");
      setRole("");
      setDesignation("");
      setLoading(false);
      handleClose();
    }, 800);
  };

  return (
    <Box className="UserHeader" sx={{ padding: "0px 40px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ display: "flex", gap: "26px" }}>
          <Button className="que_bank_btn">Users</Button>
          <Button className="que_domain_btn" onClick={handleOpen}>
            Create new users
          </Button>
        </Box>

        <TextField
          placeholder="Search"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          variant="outlined"
          className="test-search-field"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FiSearch />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              border: "none",
              "& fieldset": { border: "none" },
              "& .MuiInputBase-input::placeholder": {
                color: "#000000A8 !important",
                fontFamily: "Poppins",
                fontSize: "14px",
                opacity: 1,
              },
            },
          }}
        />
      </Box>

      {/* MODAL */}
      <Modal open={open} onClose={handleClose}>
        <Box className="user_modal_box">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px 60px 27px",
              borderBottom: "1px solid #000000",
            }}
          >
            <Typography className="user_modal_title">Create new user</Typography>
            <FiX size={22} style={{ cursor: "pointer" }} onClick={handleClose} />
          </Box>

          <Box className="user_modal_body">
            <form onSubmit={handleSubmit}>
              {/* NAME */}
              <span className="diff_label">Name</span>
              <TextField
                value={name}
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
                sx={{
                  backgroundColor: "#F8F8F88C",
                  borderRadius: "12px",
                  border: errors.name ? "1px solid red" : "1px solid #0000001F",
                  height: "52px",
                  width: "366px",
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                }}
              />
              {errors.name && <FormHelperText error>{errors.name}</FormHelperText>}

              {/* EMAIL */}
              <span className="diff_label" style={{ marginTop: "24px" }}>
                Email
              </span>
              <TextField
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  backgroundColor: "#F8F8F88C",
                  borderRadius: "12px",
                  border: errors.email ? "1px solid red" : "1px solid #0000001F",
                  height: "52px",
                  width: "366px",
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                }}
              />
              {errors.email && <FormHelperText error>{errors.email}</FormHelperText>}

              {/* ROLE */}
              <span className="diff_label" style={{ marginTop: "24px" }}>
                Role
              </span>
              <Select
                value={role}
                displayEmpty
                onChange={(e) => setRole(e.target.value)}
                sx={{
                  backgroundColor: "#F8F8F88C",
                  borderRadius: "12px",
                  border: errors.role ? "1px solid red" : "1px solid #0000001F",
                  height: "52px",
                  width: "366px",
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                }}
              >
                <MenuItem disabled value="">
                  <Typography sx={{ color: "#b9b9b9" }}>Select Role</Typography>
                </MenuItem>
                {roles.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
              {errors.role && <FormHelperText error>{errors.role}</FormHelperText>}

              {/* DESIGNATION */}
              <span className="diff_label" style={{ marginTop: "24px" }}>
                Destination
              </span>
              <TextField
                placeholder="Enter Destination"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                sx={{
                  backgroundColor: "#F8F8F88C",
                  borderRadius: "12px",
                  border: "1px solid #0000001F",
                  height: "52px",
                  width: "366px",
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                }}
              />

              {/* SAVE */}
              <Box sx={{ marginTop: "80px" }}>
                <Button type="submit" className="user_save_invite_btn " disabled={loading}>
                  {loading && <CircularProgress size={22} color="inherit" />}
                  Save & Send invite
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default UserHeader;
