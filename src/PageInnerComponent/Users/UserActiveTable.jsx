import React, { useState, useEffect } from "react";
import { Tab, Tabs, Box } from "@mui/material";
import InactiveUserTable from "./InactiveUserTable";
import ActiveUserTable from "./ActiveUserTable";
import PendingUser from "./PendingUser";

const UserActiveTable = ({ search }) => {
  const [tabValue, setTabValue] = useState(0);

  /* ---------------- MOCK COUNTS ---------------- */
  const [activeCount, setActiveCount] = useState(0);
  const [inactiveCount, setInactiveCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);

  useEffect(() => {
    // Simulated counts (replace with API later)
    setActiveCount(3);
    setInactiveCount(2);
    setPendingCount(4);
  }, []);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        aria-label="User Status Tabs"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#9d24e5",
            height: "3px",
          },
        }}
        sx={{
          borderBottom: "1px solid #0000003D",
          padding: "0px 30px",
        }}
      >
        <Tab
          label={`Active Users (${activeCount})`}
          className="active_tab"
        />
        <Tab
          label={`Inactive Users (${inactiveCount})`}
          className="active_tab"
        />
        <Tab
          label={`Pending Invites (${pendingCount})`}
          className="active_tab"
        />
      </Tabs>

      <Box sx={{ p: 3 }}>
        {tabValue === 0 && <ActiveUserTable search={search} />}
        {tabValue === 1 && <InactiveUserTable search={search} />}
        {tabValue === 2 && <PendingUser search={search} />}
      </Box>
    </Box>
  );
};

export default UserActiveTable;
