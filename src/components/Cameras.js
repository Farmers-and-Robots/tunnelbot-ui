import Typography from "@mui/material/Typography";
import * as React from "react";
import TunnelSelector from "./TunnelSelector";
import Box from "@mui/material/Box";
import CreateButton from "./CreateButton";

export default function Cameras() {
  return (
    <Box>
      <TunnelSelector/>
      <Typography component="h1" variant="h5">
        Cameras
      </Typography>
      <CreateButton/>
    </Box>
  )
}