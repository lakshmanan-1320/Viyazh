// CreateTestPage.jsx
import React, { useState } from "react";
import { Box, TextField, Slider, Button } from "@mui/material";
import CreateTestDetail from "./CreateTestDetail"; // make sure the path is correct

const CreateTestPage = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [value, setValue] = useState(40);

  // open popup handler (pass this to child)
  const openPopupHandler = () => {
    console.log("Popup triggered");
    setOpenPopup(true);
  };

  const closePopup = () => setOpenPopup(false);

  return (
    <>
      {/* Pass the handler to the child with the exact same prop name */}
      <CreateTestDetail openPopupHandler={openPopupHandler} cutoff={value} />

      {openPopup && (
        <Box className="admin-popup">
          <Box
            className="admin-popup-overlay create-pop-up"
            onClick={closePopup}
            sx={{
              position: "fixed",
              inset: 0,
              zIndex: 999,
            }}
          />

          <Box
            className="admin-popup-content range_slider"
            sx={{
              position: "fixed",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1000,
              bgcolor: "background.paper",
              p: 3,
              borderRadius: 2,
              boxShadow: 6,
              minWidth: 320,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <TextField
                label="%"
                type="number"
                value={value}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  if (!Number.isNaN(v)) setValue(Math.max(0, Math.min(100, v)));
                }}
                variant="outlined"
                size="small"
                sx={{ width: 80 }}
              />

              <Slider
                value={value}
                onChange={(_, v) => setValue(v)}
                min={0}
                max={100}
                sx={{ flex: 1, color: "#00C7A9" }}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
              <Button onClick={closePopup} variant="contained">Close</Button>
              <Button
                onClick={() => {
                  console.log("Set cutoff:", value);
                  closePopup();
                }}
                variant="contained"
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

export default CreateTestPage;
