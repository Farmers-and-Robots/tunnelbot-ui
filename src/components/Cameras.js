import Typography from "@mui/material/Typography";
import * as React from "react";
import TunnelSelector from "./TunnelSelector";
import Box from "@mui/material/Box";
import {FabConfigWiz} from "./ConfigWiz";

export default function Cameras() {
  return (
    <Box>
      <TunnelSelector multipleChoice={true}/>
      <Typography component="h1" variant="h5">
        Cameras
      </Typography>
      <FabConfigWiz wizTitle={"Add Camera"} action={"addCamera"}/>
    </Box>
  )
}