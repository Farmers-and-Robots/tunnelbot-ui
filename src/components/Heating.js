import Typography from "@mui/material/Typography";
import * as React from "react";
import CreateButton from "./CreateButton";
import TunnelSelector from "./TunnelSelector";
import Box from "@mui/material/Box";

export default function Heating() {
  return (
    <Box>
      <TunnelSelector/>
      <Typography component="h1" variant="h5">
        Heating
      </Typography>
      <CreateButton/>
    </Box>
  )
}