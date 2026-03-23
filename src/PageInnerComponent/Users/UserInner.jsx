import React, { useState } from "react";
import { Box } from "@mui/material";
import UserHeader from "./UserHeader";
import "./User.css";
import UserActiveTable from "./UserActiveTable";

const UserInner = () => {
  const [search, setsearch] = useState("");

  return (
    <Box className="user_Body">
      <UserHeader search={search} setsearch={setsearch} />
      <UserActiveTable search={search} />
    </Box>
  );
};

export default UserInner;
