import React, { useState } from 'react'
import logo from '../assets/CPCL_Logo.png'
import refinery from '../assets/refinery.jpg'
import { Paper, CssBaseline, TextField, IconButton, Button } from '@mui/material'
import { InputAdornment } from '@mui/material'
import { LockRounded, LoginRounded, VisibilityRounded, VisibilityOffRounded } from '@mui/icons-material'

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
        <div className="flex flex-col items-center justify-center md:flex-row h-screen">
            <CssBaseline />
            <div className='hidden md:flex flex-col w-full md:w-[50%] lg:w-[60%] h-1/4 md:h-full md:border-r-8 md:border-[#2E3192]'>
                <div className='p-4 bg-transparent w-full flex flex-col items-center'>
                    <p className='md:text-md lg:text-2xl xl:text-4xl xxxl:text-6xl md:font-bold lg:font-semibold text-center tracking-tight font-poppins text-center text-[#2E3192]'>
                        Chennai Petroleum Corporation Limited
                    </p>
                    <p className='md:text-[0.5rem] lg:text-xs xl:text-sm xxxl:text-xl xxxl:mt-3 font-poppins font-bold text-[#EC1F24] text-center tracking-widest'>
                        A GOVERNMENT OF INDIA ENTERPRISE AND GROUP COMPANY OF IOCL
                    </p>
                </div>
                <div className='w-full h-full relative '>
                    <img src={refinery} alt='MANALI REFINERY' className='w-full h-full object-cover' />
                </div>
            </div>
            <div className='flex flex-col items-center justify-center w-full md:w-[50%] lg:w-[40%] items-center m-4'>
                <Paper elevation={6} className="p-10 rounded-lg shadow-md border-2 border-[#2E3192]" sx={{ bgcolor: '#fff2f3' }} component="form" >

                    <div className="flex items-center justify-evenly mb-6">
                        <div>
                            <img
                                src={logo}
                                alt='CPCL'
                                className="w-10 md:w-12 lg:w-14 xl:w-16 xxxl:w-20"
                            />
                        </div>
                        <div className='flex flex-col items-center ml-2'>
                            <p className='text-3xl lg:text-4xl xxl:text-5xl xxxl:text-6xl font-poppins font-bold text-[#2E3192] md:mb-2 xl:mb-4'>
                                e-SafeView
                            </p>
                            <p className='text-[0.5rem] lg:text-[0.6rem] xl:text-xs xxxl:text-lg font-poppins text-center font-bold xl:tracking-wide text-[#EC1F24]'>
                                CENTRALIZED SAFETY MONITORING SYSTEM
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <div className="mb-2">
                            <TextField
                                margin="normal"
                                color='secondary'
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
                                size={window.innerWidth < 640 ? "small" : "medium"} // Dynamically adjust size
                                InputProps={{
                                    className: "xs:text-sm",
                                }}
                            />
                        </div>
                        <div className="mb-2">
                            <TextField
                                margin="normal"
                                color='secondary'
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
                                size={window.innerWidth < 640 ? "small" : "normal"} // Dynamically adjust size
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

                        <Button
                            type="submit"
                            variant="contained"
                            // onClick={handleLogin}
                            sx={{ mt: 3, mb: 2 }}
                            endIcon={<LoginRounded />}
                        >
                            Log In
                        </Button>
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


        //     <Container
        //         component="main"
        //         maxWidth="sm"
        //         sx={{ minHeight: "100vh", display: "flex" }}
        //     >
        //         <CssBaseline />
        //         <div className='flex items-center justify-center p-10'>
        //             <div className='p-10 border-2 border-[#2E3192] rounded-xl shadow-custom'>

        //                 <div className="flex justify-evenly mb-10">
        //                     <div>
        //                         <img src={logo} alt='CPCL' width='60px'/>
        //                     </div>
        //                     <div className='flex flex-col items-center'>
        //                         <p className='text-5xl font-sans font-bold text-[#2E3192] mb-1'>
        //                         e-SafeView</p>
        //                         <p className='text-xs font-sans font-bold text-[#EC1F24]'>CENTRALIZED SAFETY MONITORING SYSTEM</p>
        //                     </div>
        //                 </div>

        //                 <form className='mt-1 flex flex-wrap justify-center'
        //                 >
        //                     <TextField
        //                         margin="normal"
        //                         color='secondary'
        //                         required
        //                         fullWidth
        //                         id="username"
        //                         label="Username"
        //                         name="username"
        //                         autoComplete="username"
        //                         value={username}
        //                         onChange={(e) => {
        //                             setUsername(e.target.value);
        //                         }}
        //                         autoFocus
        //                     />
        //                     <TextField
        //                         margin="normal"
        //                         color='secondary'
        //                         required
        //                         fullWidth
        //                         name="password"
        //                         label="Password"
        //                         type={showPassword ? "text" : "password"}
        //                         id="password"
        //                         value={password}
        //                         onChange={(e) => {
        //                             setPassword(e.target.value);
        //                         }}
        //                         autoComplete="current-password"
        //                         InputProps={{
        //                             endAdornment: (
        //                                 <InputAdornment position="end">
        //                                     <IconButton
        //                                         aria-label="toggle password visibility"
        //                                         onClick={handleClickShowPassword}
        //                                         onMouseDown={handleMouseDownPassword}
        //                                     >
        //                                         {showPassword ? (
        //                                             <VisibilityOffRounded />
        //                                         ) : (
        //                                             <VisibilityRounded />
        //                                         )}
        //                                     </IconButton>
        //                                 </InputAdornment>
        //                             ),
        //                         }}
        //                     />

        //                     <Button
        //                         type="submit"
        //                         variant="contained"
        //                         // onClick={handleLogin}
        //                         sx={{ mt: 3, mb: 2 }}
        //                         endIcon={<LoginRounded />}
        //                     >
        //                         Log In
        //                     </Button>
        //                 </form>
        //             </div>
        //         </div>
        //         {/* <Snackbar
        //     anchorOrigin={{ vertical: "top", horizontal: "center" }}
        //     open={successOpen}
        //     autoHideDuration={3000}
        //     onClose={handleSuccessClose}
        //   >
        //     <Alert
        //       onClose={handleSuccessClose}
        //       severity="success"
        //       variant="filled"
        //       sx={{ width: "100%" }}
        //     >
        //       Login Successful
        //     </Alert>
        //   </Snackbar>

        //   <Snackbar
        //     anchorOrigin={{ vertical: "top", horizontal: "center" }}
        //     open={errorOpen}
        //     autoHideDuration={3000}
        //     onClose={handleErrorClose}
        //   >
        //     <Alert
        //       onClose={handleErrorClose}
        //       severity="error"
        //       variant="filled"
        //       sx={{ width: "100%" }}
        //     >
        //       Enter valid credentials
        //     </Alert>
        //   </Snackbar> */}
        //     </Container>
    )
}

export default Login