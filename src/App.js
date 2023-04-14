import * as React from 'react';
import Dashboard from "./components/Dashboard";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const farTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2b1C1C',
    },
    secondary: {
      main: '#f79422',
    },
    background: {
      default: '#e2e2d1',
      paper: '#f5f5e9',
    },
    success: {
      main: '#839339',
    },
    warning: {
      main: '#f79422',
    },
    info: {
      main: '#355a6c',
    },
    error: {
      main: '#d13345',
    },
  },
});

function App() {
  return (
      <ThemeProvider theme={farTheme}>
        <CssBaseline />
          <Dashboard></Dashboard>
      </ThemeProvider>
  )
}

export default App;
