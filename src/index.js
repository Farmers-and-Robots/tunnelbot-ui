import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider, createTheme} from "@mui/material/styles";
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={farTheme}>
          <CssBaseline enableColorScheme />
            <App />
      </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
