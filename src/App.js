import * as React from 'react';
import Slider from '@mui/material/Slider';
import Dashboard from "./components/Dashboard";

const marks = [
  {
    value: 0,
    label: 'closed',
  },
  {
    value: 5,
    label: 'cracked',
  },
  {
    value: 33,
    label: 'under the bench',
  },
  {
    value: 100,
    label: 'open',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function App() {
  return <Dashboard></Dashboard>
}

export default App;
