import React, { useState } from 'react'
import logo from '../assets/CPCL_Logo.png'
import refinery from '../assets/refinery.jpg'
import { Paper, CssBaseline, TextField, IconButton, Button, InputLabel } from '@mui/material'
import { InputAdornment } from '@mui/material'
import { LockRounded, LoginRounded, VisibilityRounded, VisibilityOffRounded } from '@mui/icons-material'
import cpclLogo from '../assets/cpcl-fulllogo.png'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [successOpen, setSuccessOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="flex flex-col items-center justify-center md:flex-row h-dvh">
            <CssBaseline />
            <div className='hidden md:flex flex-col w-full md:w-[50%] lg:w-[60%] h-1/4 md:h-full md:border-r-8 md:border-primary'>
                <div className='p-4 bg-transparent w-full flex flex-col items-center'>
                    <p className='md:text-md lg:text-2xl xl:text-4xl xxxl:text-6xl md:font-bold tracking-tight font-inter text-center text-primary'>
                        Chennai Petroleum Corporation Limited
                    </p>
                    <p className='md:text-[0.5rem] lg:text-xs xl:text-sm xxxl:text-xl xxxl:mt-3 font-inter font-bold text-secondary text-center tracking-widest'>
                        A GOVERNMENT OF INDIA ENTERPRISE AND GROUP COMPANY OF IOCL
                    </p>
                </div>
                <div className='w-full h-full relative '>
                    <img src={refinery} alt='MANALI REFINERY' className='w-full h-full object-cover' />
                </div>
            </div>

            {/* <div className='md:hidden p-4 bg-white w-full flex flex-col items-center'>
                <p className='text-md font-bold tracking-tight font-inter text-center text-primary'>
                    Chennai Petroleum Corporation Limited
                </p>
                <p className='text-[0.5rem] font-inter font-bold text-secondary text-center tracking-wide'>
                    A GOVERNMENT OF INDIA ENTERPRISE AND GROUP COMPANY OF IOCL
                </p>
            </div> */}

            <div className="md:hidden p-1 flex justify-center">
                <img src={cpclLogo} alt="Chennai Petroleum Corporation Limited" className=' h-16' />
            </div>


            <div className='flex flex-col justify-center w-full md:w-[50%] lg:w-[40%] items-center p-4  bg-secondary-light h-full'>
                <Paper elevation={3} className="p-10 border-2 border-primary" component="form" >

                    <div className="flex items-center justify-center md:justify-evenly mb-8">
                        <div>
                            <img
                                src={logo}
                                alt='CPCL'
                                className="w-10 md:w-12 lg:w-14 xl:w-16 xxxl:w-20"
                            />
                        </div>
                        <div className='flex flex-col items-center ml-2'>
                            <p className='text-2xl md:text-2xl lg:text-4xl xxl:text-5xl xxxl:text-6xl font-poppins font-bold text-primary'>
                                e-SafeView
                            </p>
                            <p className='text-[0.5rem] md:text-[0.6rem] lg:text-xs xxxl:text-lg font-inter text-center font-semibold xl:tracking-wide text-secondary'>
                                Centralized Safety Monitoring System
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 items-center w-full">
                        <div className="mb-6 w-full">
                            <TextField
                                color='primary'
                                size='small'
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                                autoFocus
                                // size={window.innerWidth < 640 ? "small" : "medium"} // Dynamically adjust size
                                InputProps={{
                                    className: "xs:text-sm",
                                }}
                            />
                        </div>
                        <div className="mb-2 w-full">
                            <TextField
                                color='primary'
                                size='small'
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                autoComplete="current-password"
                                // size={window.innerWidth < 640 ? "small" : "normal"} // Dynamically adjust size
                                InputProps={{
                                    // className: "xs:text-sm",
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? (
                                                    <VisibilityOffRounded />
                                                ) : (
                                                    <VisibilityRounded />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>

                        <div className="flex flex-row-reverse mb-6 w-full cursor-pointer">
                            <a href='www.mlinfomap.com'><p className='text-[0.7rem] text-contrast font-inter font-semibold hover:text-secondary hover:underline hover:-translate-y-0.5 duration-300'>Forgot Password</p></a>
                        </div>

                        <div className='mb-2'>
                            <Button
                                type="submit"
                                variant="contained"
                                // onClick={handleLogin}
                                endIcon={<LoginRounded />}
                                sx={{
                                    bgcolor: 'primary.main',
                                    transition: 'all 0.3s ease 0.1s', // Transition with delay for smooth effect
                                    '&:hover': {
                                        bgcolor: 'secondary.main',
                                        transform: 'translateY(-3px)',
                                        // transition: 'all 0.3s ease-in-out',
                                    },
                                }}
                            >
                                Log In
                            </Button>
                        </div>
                    </div>
                </Paper>
            </div >


            {/* <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={successOpen}
        autoHideDuration={3000}
        onClose={handleSuccessClose}
      >
        <Alert
          onClose={handleSuccessClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Login Successful
        </Alert>
      </Snackbar>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={errorOpen}
        autoHideDuration={3000}
        onClose={handleErrorClose}
      >
        <Alert
          onClose={handleErrorClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Enter valid credentials
        </Alert>
      </Snackbar> */}
        </div >

    )
}

export default Login