import { createTheme } from "@mui/material/styles";

export const farTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2b1C1C",
    },
    secondary: {
      main: "#f79422",
    },
    background: {
      default: "#f5f5e9",
      paper: "#f8f8f0",
    },
    success: {
      main: "#839339",
    },
    warning: {
      main: "#f79422",
    },
    info: {
      main: "#355a6c",
    },
    error: {
      main: "#d13345",
    },
  },
});

export const signTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f5f5e9",
    },
    secondary: {
      main: "#f79422",
    },
    background: {
      default: "#2b1C1C",
      paper: "#190A2E",
    },
    success: {
      main: "#839339",
    },
    warning: {
      main: "#f79422",
    },
    info: {
      main: "#355a6c",
    },
    error: {
      main: "#d13345",
    },
    signin: {
      main: "#DC4B11",
    },
  },
});
