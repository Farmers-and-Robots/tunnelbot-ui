import Typography from "@mui/material/Typography";
import * as React from "react";
import TunnelSelector from "./TunnelSelector";
import Box from "@mui/material/Box";
import {FabConfigWiz} from "./ConfigWiz";

export default function Lights() {
  return (
    <Box>
      <TunnelSelector/>
      <Typography component="h1" variant="h5">
        Lights
      </Typography>
      <FabConfigWiz wizTitle={"Add Lights"} action={"addLight"}/>
    </Box>
  )
}