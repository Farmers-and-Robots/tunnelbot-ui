import * as React from 'react';
import Slider from '@mui/material/Slider';

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
  return <Slider
      aria-label="Always visible"
      defaultValue={80}
      getAriaValueText={valuetext}
      step={1}
      marks={marks}
      valueLabelDisplay="on"
  />
}

export default App;
