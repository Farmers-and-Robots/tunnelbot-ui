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
      default: "#e2e2d1",
      paper: "#F0F0DD",
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
