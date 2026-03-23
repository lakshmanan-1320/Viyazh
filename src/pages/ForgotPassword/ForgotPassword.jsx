import { Box, Button, Checkbox, IconButton, FormControlLabel, InputAdornment, TextField, Typography } from '@mui/material'
import PersonIcon from "@mui/icons-material/Person";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { LuEyeClosed } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import '../Log/Login.css'
import asset from '../../assets/img/login_ass.svg'
import asset2 from '../../assets/img/asset2.svg'
import logo from '../../assets/img/logo_full.svg'
import pic from '../../assets/img/login_pic.svg'
import login2 from '../../assets/img/login_pic2.svg'
import forgot from '../../assets/img/forgotpassword.svg'
import { Link } from 'react-router-dom';


const ForgotPassword = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Box className='login_pag'>
            <Box className='login_container'>
                <Box className="login_left">
                    {/* <Typography variant="h4" className="title">Welcome!</Typography> */}
                    <Typography className="subtitle_left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima officiis atque fuga quas aperiam esse doloremque quasi ullam saepe laborum quos provident vel numquam earum reprehenderit, repellat corporis dolore animi!</Typography>
                    <img src={forgot} alt="logopic" className='login_pict' />
                </Box>
                <Box className="login_right">
                    <img src={asset} alt='assets' className='asset1_login' />

                    <Box className="login_right_inner">


                        <img src={logo} alt='assets' className='logo_sec' />
                        {/* {/* <Typography variant="h4" className="title login_title">Welcome!</Typography> */}
                        <Typography className="subtitle login_subtitle">You forgot your password? Here you can
                            easily retrieve a new password.</Typography>
                        <TextField
                            fullWidth
                            label="Email ID"
                            placeholder="eg: john258@gmail.com"
                            variant="standard"
                            className="input_field cus_email"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        {/* <Person  /> */}
                                        <CiUser />
                                    </InputAdornment>
                                ),
                                style: { color: "#A31DE5" }
                            }}
                            InputLabelProps={{
                                style: { color: "#A31DE5" }
                            }}
                            sx={{
                                "& .MuiInput-underline:before": { borderBottomColor: "#A31DE5 !important" },
                                "& .MuiInput-underline:hover:before": { borderBottomColor: "#A31DE5 !important" },
                                "& .MuiInput-underline:after": { borderBottomColor: "#A31DE5 !important" },
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "#A31DE5 !important",
                                },
                                "& .MuiInputBase-input": {
                                    color: "#A31DE5 !important",
                                },
                            }}
                        />

                        {/* <TextField
                            fullWidth
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            variant="standard"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword(!showPassword)} sx={{ padding: 0 }}>
                                            {showPassword ? <LuEyeClosed /> : <IoEyeOutline />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                            InputLabelProps={{
                                style: { color: "#A31DE5" }
                            }}
                            sx={{
                                "& .MuiInput-underline:before": { borderBottomColor: "#A31DE5 !important" },
                                "& .MuiInput-underline:hover:before": { borderBottomColor: "#A31DE5 !important" },
                                "& .MuiInput-underline:after": { borderBottomColor: "#A31DE5 !important" },
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "#A31DE5 !important",
                                },
                                "& .MuiInputBase-input": {
                                    color: "#A31DE5 !important",
                                },
                            }}
                            className="input_field cus_password"
                        /> */}

                        {/* <Box className="remember_forgot">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        className="mui_checkbox"
                                        disableRipple
                                        sx={{
                                            color: "#A31DE5",
                                            '&.Mui-checked': { color: "#A31DE5" },
                                        }}
                                    />
                                }
                                label="Remember me"
                                sx={{ color: "#A31DE5", fontSize: "12px !important" }}
                            />
                            <a href="/" className="for_pass" >Forget Password?</a>
                        </Box> */}

                        <Button fullWidth variant="primary" className="login_btn">
                         <Link to='/recoveryPassword'> Recovery Link</Link>  
                        </Button>

                        <Typography className="create_text">
                            <Link to='/'>Login</Link>
                        </Typography>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default ForgotPassword

