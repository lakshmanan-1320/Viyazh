import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Modal,
} from "@mui/material";
import "./Company.css";
import { toast } from "react-toastify";

const CompanyInner = () => {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [hiring, setHiring] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const fileInputRef = useRef(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [missingFields, setMissingFields] = useState([]);

  /* ---------------- MOCK DATA ---------------- */
  useEffect(() => {
    setName("InsightTech Pvt Ltd");
    setHiring("Image");
    setImage(null);
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file && !["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
      toast.error("Please upload a valid image (JPG, PNG, or JPEG).");
      return;
    }

    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSaveCompany = () => {
    const missing = [];
    if (!name) missing.push("Company Name");
    if (!hiring) missing.push("Send Invites");
    if (!image && !imagePreview) missing.push("Company Logo/Image");

    if (missing.length > 0) {
      setMissingFields(missing);
      setModalOpen(true);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Company details saved successfully!");
    }, 800);
  };

  const handleFileUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Box >
      <Typography className="company_title">Company</Typography>

      <Box className="company_body">
        <Grid container spacing={2} className="company_grid">
          {/* LEFT */}
          <Grid item xs={12} md={6}>
            <Box className="company_box">
              <Typography className="company_text_title">
                Candidates invitations left:
              </Typography>

              <span className="diff_label company_text" style={{ marginTop: "45px" }}>
                Your Company name
              </span>

              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your Company name"
                inputProps={{ maxLength: 70 }}
                sx={{
                  backgroundColor: "#F8F8F88C",
                  borderRadius: "12px",
                  border: "1px solid #0000001F",
                  height: "52px",
                  width: "446px",
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                }}
              />

              <span className="diff_label company_text" style={{ marginTop: "26px" }}>
                Send your invites
              </span>

              <TextField
                value={hiring}
                onChange={(e) => setHiring(e.target.value)}
                placeholder="Send your invites"
                sx={{
                  backgroundColor: "#F8F8F88C",
                  borderRadius: "12px",
                  border: "1px solid #0000001F",
                  height: "52px",
                  width: "446px",
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                }}
              />
            </Box>

            <Box
              sx={{
                marginTop: "56px",
                marginLeft: "178px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                className="settings_save_btn company_save_btn"
                onClick={handleSaveCompany}
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={24} sx={{ color: "#fff" }} />
                ) : (
                  "Save"
                )}
              </Button>
            </Box>
          </Grid>

          {/* RIGHT */}
          <Grid item xs={12} md={6}>
            <Box className="company_box" sx={{ marginTop: "50px" }}>
              <Typography className="company_logo_text">{hiring}</Typography>

              <Box
                className="company_logo"
                sx={{ display: "flex", justifyContent: "center" }}
              >
                {!imagePreview && image && (
                  <img src={image} alt="Company Logo" width={180} height={180} />
                )}
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Uploaded Preview"
                    width={180}
                    height={180}
                  />
                )}
              </Box>

              <Box className="company_logo_btn">
                <Button
                  className="settings_save_btn company_save_btn"
                  onClick={handleFileUploadClick}
                >
                  Upload
                </Button>

                <input
                  type="file"
                  accept="image/jpeg, image/png, image/jpg"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* MISSING FIELDS MODAL */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography sx={{ fontFamily: "Poppins", fontWeight: 600 }}>
            Missing Fields
          </Typography>

          <Typography sx={{ fontFamily: "Poppins", mt: 1 }}>
            Please fill in the following fields:
          </Typography>

          <ul
            style={{
              paddingLeft: "20px",
              marginTop: "10px",
              fontFamily: "Poppins",
              fontSize: "14px",
            }}
          >
            {missingFields.map((field, index) => (
              <li key={index}>{field}</li>
            ))}
          </ul>

          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button
              variant="contained"
              className="modal_save_btn"
              onClick={() => setModalOpen(false)}
            >
              OK
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default CompanyInner;
