import Typography from "@mui/material/Typography";
import * as React from "react";
import CreateButton from "./CreateButton";
import Box from "@mui/material/Box";
import TunnelSelector from "./TunnelSelector";
import Button from "@mui/material/Button"

const farmButtonStyle = {
  mt: 2,
  mb: 2
}

function fetchFarmData() {
  let farms = []
  if (farms.length === 0) {
    return (
      <Typography
        variant="h6"
        mt={4}
        sx={{ textAlign:"center"}}
        component="h1"
      >
        No farms found.<br/>
        <Button sx={farmButtonStyle} variant="contained">Create a farm</Button><br/>
        or<br/>
        <Button sx={farmButtonStyle} variant="contained">Request access to a farm</Button>
      </Typography>
    ) } else {
    return (
      <Typography>HI IM A FARM</Typography>
    )
  }
}

export default function Home() {
  let farmData = fetchFarmData()
  
  return (
    <Box>
      <TunnelSelector/>
      {farmData}
      < CreateButton />
    </Box>
  )
}