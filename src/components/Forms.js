import {FormControl, FormLabel} from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import * as React from "react";

const formTextStyle = {
  mb: 2,
  maxWidth: 500
}

function createFarm() {
  return (
    <FormControl sx={{m: 2}}>
      <FormLabel>Farm Name</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <FormLabel>Address</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <FormControlLabel control={<Checkbox />} label="Make farm discoverable"></FormControlLabel>
      <Button variant="contained">Submit</Button>
    </FormControl>
  )
}

export default function GetForm({formKind}) {
  switch(formKind) {
  case "createFarm":
    return createFarm()
  case "":
    return <h1>No form created</h1>
  default:
    return null
  }
  
}