import { FormControl, FormLabel } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import * as React from "react";
import TunnelSelector from "./TunnelSelector";

const formTextStyle = {
  mb: 2,
};

function CancelAnd({ action }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        mt: 2,
      }}
    >
      <Button variant="outlined">Cancel</Button>
      <Button variant="contained">{action}</Button>
    </Box>
  );
}

const formStyle = {
  width: "100%",
  maxWidth: 700,
};

function createFarm() {
  return (
    <FormControl sx={formStyle}>
      <FormLabel>Farm Name</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <FormLabel>Address</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <FormControlLabel
        control={<Checkbox />}
        label="Make farm discoverable"
        sx={{ mb: 2 }}
      ></FormControlLabel>
      <CancelAnd action={"Create"} />
    </FormControl>
  );
}

function requestFarmAccess() {
  return (
    <FormControl sx={formStyle}>
      <FormLabel>Farm Name</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <FormLabel>Address</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      or
      <br />
      <FormLabel>Farm Owner</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <CancelAnd action={"Send"} />
    </FormControl>
  );
}

function addTunnel() {
  return (
    <FormControl sx={formStyle}>
      <FormLabel>Name</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <FormLabel>Description</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <CancelAnd action={"Add"} />
    </FormControl>
  );
}

function addDevice() {
  return (
    <FormControl sx={formStyle}>
      <FormLabel>Name</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <FormLabel>Description</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <TunnelSelector mt={2} multipleChoice={false} />
      <CancelAnd action={"Add"} />
    </FormControl>
  );
}

function addCamera() {
  return (
    <FormControl sx={formStyle}>
      <FormLabel>Name</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <FormLabel>Description</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <TunnelSelector mt={2} multipleChoice={false} />
      <CancelAnd action={"Add"} />
    </FormControl>
  );
}

function addHeater() {
  return (
    <FormControl sx={formStyle}>
      <FormLabel>Name</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <FormLabel>Description</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <TunnelSelector mt={2} multipleChoice={false} />
      <CancelAnd action={"Add"} />
    </FormControl>
  );
}

function addIrrigation() {
  return (
    <FormControl sx={formStyle}>
      <FormLabel>Name</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <FormLabel>Description</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <TunnelSelector mt={2} multipleChoice={false} />
      <CancelAnd action={"Add"} />
    </FormControl>
  );
}

function addCurtain() {
  return (
    <FormControl sx={formStyle}>
      <FormLabel>Name</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <FormLabel>Description</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <TunnelSelector mt={2} multipleChoice={false} />
      <CancelAnd action={"Add"} />
    </FormControl>
  );
}

function addWeatherStation() {
  return (
    <FormControl sx={formStyle}>
      <FormLabel>Name</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <FormLabel>Description</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <CancelAnd action={"Add"} />
    </FormControl>
  );
}

export default function GetForm({ formKind }) {
  switch (formKind) {
  case "createFarm":
    return createFarm();
  case "requestFarmAccess":
    return requestFarmAccess();
  case "addTunnel":
    return addTunnel();
  case "addDevice":
    return addDevice();
  case "addHeater":
    return addHeater();
  case "addIrrigation":
    return addIrrigation();
  case "addCurtain":
    return addCurtain();
  case "addCamera":
    return addCamera();
  case "addWeatherStation":
    return addWeatherStation();
  default:
    return null;
  }
}
