import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette:{
        primary:{
            main: "#16141E",
            light: "#240042ff"
        },
        secondary: {
            main: "#F2F2F2"
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
})