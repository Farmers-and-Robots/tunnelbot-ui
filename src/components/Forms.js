import {FormControl, FormLabel} from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import * as React from "react";
import Box from "@mui/material/Box";
import TunnelSelector from "./TunnelSelector";

const formTextStyle = {
  mb: 2,
}

function CancelAnd({action}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}>
      <Button variant="outlined">Cancel</Button>
      <Button variant="contained">{action}</Button>
    </Box>
  )

}

const formStyle = {
  width: "100%",
  maxWidth: 700
}

function createFarm() {
  return (
    <FormControl sx={ formStyle }>
      <FormLabel>Farm Name</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <FormLabel>Address</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <FormControlLabel control={<Checkbox />} label="Make farm discoverable" sx={{ mb: 2}}></FormControlLabel>
      <CancelAnd action={"Create"}/>
    </FormControl>
  )
}

function requestFarmAccess() {
  return (
    <FormControl sx={ formStyle }>
      <FormLabel>Farm Name</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <FormLabel>Address</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      or<br/>
      <FormLabel>Farm Owner</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <CancelAnd action={"Send"}/>
    </FormControl>
  )

}

function addLight(){
  return (
    <FormControl sx={ formStyle }>
      <FormLabel>Name</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <FormLabel>Description</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <TunnelSelector mt={2} multipleChoice={false}/>
      <CancelAnd action={"Add"}/>
    </FormControl>
  )
}

function addCamera(){
  return (
    <FormControl sx={ formStyle }>
      <FormLabel>Name</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <FormLabel>Description</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <TunnelSelector mt={2} multipleChoice={false}/>
      <CancelAnd action={"Add"}/>
    </FormControl>
  )
}

function addHeater(){
  return (
    <FormControl sx={ formStyle }>
      <FormLabel>Name</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <FormLabel>Description</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <TunnelSelector mt={2} multipleChoice={false}/>
      <CancelAnd action={"Add"}/>
    </FormControl>
  )
}

function addIrrigation(){
  return (
    <FormControl sx={ formStyle }>
      <FormLabel>Name</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <FormLabel>Description</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <TunnelSelector mt={2} multipleChoice={false}/>
      <CancelAnd action={"Add"}/>
    </FormControl>
  )
}

function addCurtain(){
  return (
    <FormControl sx={ formStyle }>
      <FormLabel>Name</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <FormLabel>Description</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <TunnelSelector mt={2} multipleChoice={false}/>
      <CancelAnd action={"Add"}/>
    </FormControl>
  )
}

function addWeatherStation(){
  return (
    <FormControl sx={ formStyle }>
      <FormLabel>Name</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <FormLabel>Description</FormLabel>
      <TextField sx={formTextStyle}></TextField>
      <TunnelSelector mt={2} multipleChoice={false}/>
      <CancelAnd action={"Add"}/>
    </FormControl>
  )
}

export default function GetForm({formKind}) {
  switch(formKind) {
  case "createFarm":
    return createFarm()
  case "requestFarmAccess":
    return requestFarmAccess()
  case "addLight":
    return addLight()
  default:
    return null
  }
  
}