import React, { useState, useRef } from 'react'
import {
  Box, Grid, Typography, TextField, Button, CircularProgress,
  Modal, IconButton, InputAdornment
} from '@mui/material'
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './AccountInner.css'

const AccountInner = () => {

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('lakshmanan@gmail.com');
  const [name, setName] = useState('lakshmanan');

  const [opassword, setOpassword] = useState('');
  const [newpassword, setNewpassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showconfirmPassword, setShowConfirmPassword] = useState(false);

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const fileInputRef = useRef(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [missingFields, setMissingFields] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && !['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)) {
      toast.error('Please upload a valid image (JPG, PNG, or JPEG)');
      return;
    }
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSaveAccount = () => {
    const missing = [];

    if (!name) missing.push("Name");
    if (!email) missing.push("Email");
    if (!opassword) missing.push("Old Password");
    if (!newpassword) missing.push("New Password");
    if (!confirmpassword) missing.push("Confirm Password");
    if (!image) missing.push("Profile Image");

    if (newpassword && newpassword.length < 5) {
      missing.push("New Password (Minimum 5 characters)");
    }

    if (newpassword !== confirmpassword) {
      missing.push("New and Confirm Password do not match");
    }

    if (missing.length > 0) {
      setMissingFields(missing);
      setModalOpen(true);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Account updated successfully");
      setOpassword("");
      setNewpassword("");
      setConfirmpassword("");
    }, 1000);
  };

  return (
    <Box sx={{ width: "100%" }}>

      <Typography className='company_title'>My account</Typography>

      <Box className="company_body" sx={{ width: "100%" }}>
        <Grid container spacing={3}>

          {/* LEFT COLUMN */}
          <Grid item xs={12} md={6}>
            <Box className='company_box' sx={{ width: "100%" }}>

              <span className="diff_label company_text">Email ID</span>
              <TextField
                value={email}
                onChange={e => setEmail(e.target.value)}
                sx={{ width: "100%", maxWidth: "446px", backgroundColor: "#F8F8F88C", borderRadius: "12px" }}
              />

              <span className="diff_label company_text" style={{ marginTop: "26px" }}>Your name</span>
              <TextField
                value={name}
                onChange={e => setName(e.target.value)}
                sx={{ width: "100%", maxWidth: "446px", backgroundColor: "#F8F8F88C", borderRadius: "12px" }}
              />

              <Typography className='company_text_title' sx={{ marginTop: "40px" }}>
                Change Your Password
              </Typography>

              <TextField
                type={showOldPassword ? "text" : "password"}
                value={opassword}
                placeholder="Old Password"
                onChange={e => setOpassword(e.target.value)}
                sx={{ width: "100%", maxWidth: "446px", mt: 2 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowOldPassword(!showOldPassword)}>
                        {showOldPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />

              <TextField
                type={showNewPassword ? "text" : "password"}
                value={newpassword}
                placeholder="New Password"
                onChange={e => setNewpassword(e.target.value)}
                sx={{ width: "100%", maxWidth: "446px", mt: 2 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowNewPassword(!showNewPassword)}>
                        {showNewPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />

              <TextField
                type={showconfirmPassword ? "text" : "password"}
                value={confirmpassword}
                placeholder="Confirm Password"
                onChange={e => setConfirmpassword(e.target.value)}
                sx={{ width: "100%", maxWidth: "446px", mt: 2 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowConfirmPassword(!showconfirmPassword)}>
                        {showconfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Box>

            <Box sx={{ mt: 5}} style={{ display: "flex", justifyContent: "center" }}>
              <Button className='settings_save_btn company_save_btn' onClick={handleSaveAccount}>
                {loading ? <CircularProgress size={24} /> : "Save"}
              </Button>
            </Box>
          </Grid>

          {/* RIGHT COLUMN */}
          <Grid item xs={12} md={6}>
            <Box className='company_box_2' sx={{ mt: "50px", width: "100%" }}>
              <Typography className='company_logo_text'>Upload your profile picture</Typography>

              <Box className='company_logo'>
                {imagePreview && <img src={imagePreview} width={180} height={180} alt="preview" />}
              </Box>
             
              <Button className='settings_save_btn company_save_btn' onClick={() => fileInputRef.current.click()}>
                Upload
              </Button>

              <input type="file" hidden ref={fileInputRef} onChange={handleImageChange} />
            </Box>
          </Grid>

        </Grid>
      </Box>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box sx={{ p: 4, bgcolor: "white", width: 400, mx: "auto", mt: "20%" }}>
          <Typography variant="h6">Missing Fields</Typography>
          <ul>
            {missingFields.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
          <Button onClick={() => setModalOpen(false)}>OK</Button>
        </Box>
      </Modal>

      <ToastContainer />

    </Box>
  )
}

export default AccountInner;
