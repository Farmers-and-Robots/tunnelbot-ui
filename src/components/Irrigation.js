import Typography from "@mui/material/Typography";
import * as React from "react";
import Box from "@mui/material/Box";
import TunnelSelector from "./TunnelSelector";
import {FabConfigWiz} from "./ConfigWiz";

export default function Irrigation() {
  return (
    <Box>
      <TunnelSelector multipleChoice={true}/>
      <Typography component="h1" variant="h5">
        Irrigation
      </Typography>
      <FabConfigWiz wizTitle={"Add Irrigation"} action={"addIrrigation"}/>
    </Box>
  )
}