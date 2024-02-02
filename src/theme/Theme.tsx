import { createTheme } from "@mui/material";

const customTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    typography: {
        h1: {
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 500,
            fontSize: "1.5rem",
        },
    },
});

const Theme = {
    ...customTheme,
};

export default Theme;