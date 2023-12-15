import Typography from "@mui/material/Typography";
import * as React from "react";
import CreateButton from "./CreateButton";
import Box from "@mui/material/Box";
import TunnelSelector from "./TunnelSelector";
import ConfigWiz from "./ConfigWiz";

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
        <ConfigWiz wizTitle={"Create a Farm"}/><br/>
        or<br/>
        <ConfigWiz wizTitle={"Request Access to a Farm"}/>
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