import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import * as React from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["tunnel-1", "tunnel-2", "tunnel-3"];

function getStyles(name, tunnelName, theme) {
  return {
    fontWeight:
      tunnelName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function TunnelSelector(props) {
  const multipleChoice = props.multipleChoice;
  const theme = useTheme();
  const [tunnelName, setTunnelName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTunnelName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
    );
  };
  if (multipleChoice) {
    return (
      <FormControl sx={{ mb: 1, width: "100%" }}>
        <InputLabel id="tunnel-selector-label">Tunnels</InputLabel>
        <Select
          labelId="tunnel-selector-label"
          id="tunnel-selector"
          multiple
          value={tunnelName}
          onChange={handleChange}
          input={<FilledInput label="Tunnels" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, tunnelName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  } else {
    return (
      <FormControl variant="standard" sx={{ mb: 1, width: "100%" }}>
        <InputLabel id="tunnel-selector-label">Tunnel</InputLabel>
        <Select
          labelId="tunnel-selector-label"
          id="tunnel-selector"
          value={tunnelName}
          onChange={handleChange}
          width={"100%"}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, tunnelName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}
