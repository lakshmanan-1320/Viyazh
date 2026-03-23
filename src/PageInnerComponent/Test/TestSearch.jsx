import { Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const TestSearch = () => {
  return (
    <Box className="searchField" >


      <Box
        sx={{
          backgroundColor: "#F7F7F7",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 1,
          padding: "10px 16px",
          width: "100%",
          maxWidth: 500,
          border: "1px solid #D9D9D9 "
        }}


      >
        <SearchIcon sx={{ color: "#ADAEBC", fontSize: 20 }} />
        <InputBase
          placeholder="Search assessments & users"
          sx={{
            flex: 1,
            fontSize: "14px",
            color: "#11044cff",
            "::placeholder": { color: "#ADAEBC" }
          }}
        />
      </Box>

    </Box>
  );
};

export default TestSearch;
