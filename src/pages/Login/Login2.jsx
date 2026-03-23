import React from "react";
import {
  Box,
  TextField,
  Button,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Typography
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./Login2.css";

const Login2 = () => {
  return (
    <Box className="login_page">
      <Box className="login_card">
        <Typography variant="h4" className="title">Welcome!</Typography>
        <Typography className="subtitle">Log in to start your session</Typography>

        <TextField
          fullWidth
          label="Email ID"
          placeholder="eg: john258@gmail.com"
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PersonIcon sx={{ color: "#fff" }} />
              </InputAdornment>
            ),
          }}
          className="input_field"
        />

        <TextField
          fullWidth
          type="password"
          label="Password"
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityOffIcon sx={{ color: "#fff" }} />
              </InputAdornment>
            ),
          }}
          className="input_field"
          style={{ marginTop: 30 }}
        />

        <Box className="remember_forgot">
          <FormControlLabel
            control={<Checkbox sx={{ color: "#fff" }} />}
            label="Remember me"
            className="remember"
          />
          <a href="/" className="forgotLink">Forget Password?</a>
        </Box>

        <Button fullWidth className="login_btn">Login</Button>

        <Typography className="registerText">
          New Here? Let’s <a href="/">Create Your Account</a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login2;
