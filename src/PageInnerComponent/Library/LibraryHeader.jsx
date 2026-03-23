import React from "react";
import { Box } from "@mui/material";
import { FaClipboardList } from "react-icons/fa";

const LibraryHeader = ({ activeTab, setActiveTab }) => {
  return (
    <Box className="invite">
      <Box sx={{ padding: "0 25px" }}>
        <Box className="cus_log_section">

          <div className="assessment-filter-head">
            <div className="assessment-btns">
              <FaClipboardList size={20} />
              <button className="assessment-button">
                Assessment Question
              </button>
            </div>
          </div>

          {/* ===== TABS ===== */}
          <div className="tabs">
            <button
              className={`tab ${activeTab === "MCQs" ? "active" : ""}`}
              onClick={() => setActiveTab("MCQs")}
            >
              MCQs
            </button>
            <button
              className={`tab ${activeTab === "Coding" ? "active" : ""}`}
              onClick={() => setActiveTab("Coding")}
            >
              Coding
            </button>
          </div>

        </Box>
      </Box>
    </Box>
  );
};

export default LibraryHeader;
