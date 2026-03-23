import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
// import "../../Style/Settings.css";
import './Settings.css'
import { toast } from "react-toastify";

const SettingsInner = () => {
  // Simulated initial value (instead of API)
  const initialOffTabCount = 3;

  const [tab, setTab] = useState(initialOffTabCount);
  const [loading, setLoading] = useState(false);

  // Simulate fetching value on load
  useEffect(() => {
    setTab(initialOffTabCount);
  }, []);

  const handleTabChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 0) {
      setTab(value);
    } else {
      setTab(0);
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      toast.success("Off Tab Tracking Count updated successfully!");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong!");
    }
  };

  return (
    <Box className="settings_inner" >
      <Typography className="settings_title">
        Off Tab Tracking
      </Typography>

      <Box className="settings_body" sx={{ width: "38.5%" }}>
        <span className="diff_label" style={{ paddingBottom: "20px" }}>
          Off Tab Tracking Count
        </span>

        <TextField
          type="number"
          value={tab}
          onChange={handleTabChange}
          inputProps={{ min: 0 }}
          sx={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            border: "1px solid #0000001F",
            height: "52px",
            width: "400px",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiInputBase-input": {
              fontFamily: "Poppins, sans-serif !important",
              fontSize: "20px !important",
              fontWeight: "500 !important",
              color: "#3B3B3B !important",
            },
          }}
        />

        <Box
          sx={{
            marginTop: "56px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button className="settings_save_btn" onClick={handleSave}>
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Save"
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SettingsInner;
