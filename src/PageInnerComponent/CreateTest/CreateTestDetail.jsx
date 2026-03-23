import React, { useState } from "react";
import { Box, TextField, Slider, Button } from "@mui/material";
import { TbBrandDatabricks } from "react-icons/tb";
import { RiTimeFill } from "react-icons/ri";
import { AiOutlineLineChart } from "react-icons/ai";

const CreateTestDetail = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [cutoff, setCutoff] = useState(40);

  const handleSlider = (_, v) => setCutoff(v);
  const handleInput = (e) => setCutoff(Number(e.target.value));

  return (
    <>
      {/* Main Detail Section */}
      <Box className="createTestDetail">
        <Box className="createTestsection">
          <TbBrandDatabricks />
          <Box>
            <p>Sections</p>
            <h4>3 Sections</h4>
          </Box>
        </Box>

        <hr />

        <Box className="createTestsection createtestTime">
          <RiTimeFill />
          <Box>
            <p>Duration</p>
            <h4>60 min</h4>
          </Box>
        </Box>

        <hr />

        {/* CLICK TO OPEN POPUP */}
        <Box
          className="createTestsection createtestCutoff"
          onClick={() => setOpenPopup(true)}
          style={{ cursor: "pointer" }}
        >
          <AiOutlineLineChart />
          <Box>
            <p>Cut-off</p>
            <h4>{cutoff}%</h4>
          </Box>
        </Box>
      </Box>

      {/* POPUP */}
      {openPopup && (
        <Box className="admin-popup">

          {/* Overlay */}
          <Box
            className="admin-popup-overlay create-pop-up"
            onClick={() => setOpenPopup(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.4)",
              zIndex: 999,
            }}
          />

          {/* Popup Content */}
          <Box
            className="admin-popup-content range_slider"
            style={{
              position: "fixed",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1000,
              background: "#fff",
              padding: "24px",
              borderRadius: "12px",
              width: "350px",
            }}
          >
            <h3>Set Cut-off</h3>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
              <TextField
                label="%"
                type="number"
                value={cutoff}
                onChange={handleInput}
                size="small"
                sx={{ width: 80 }}
              />

              <Slider
                value={cutoff}
                onChange={handleSlider}
                min={0}
                max={100}
                sx={{ color: "#cd4fc3ff" }}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 3 }}>
              <Button variant="contained" className="pop_btn2" onClick={() => setOpenPopup(false)}>
                Close
              </Button>

              <Button
                variant="contained"
                className="pop_btn"
                onClick={() => setOpenPopup(false)}
              >
                Set
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default CreateTestDetail;
