import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: "#2E3192", 
        light: "#CDD5EF",
        'bg': "#e3e9f9"
      },
      secondary: {
        main: "#EC1F24",
        light: "#ffd4d5" ,
        'bg': "#ffeded"
      },
      'contrast': {
        main: "#333"
      }
    },
    typography: {
      fontFamily: '"Inter", sans-serif', // Apply Inter font globally
    },
  });

export default theme;  