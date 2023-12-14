import Typography from "@mui/material/Typography";
import * as React from "react";
import Box from "@mui/material/Box"
import TunnelSelector from "./TunnelSelector";
import CreateButton from "./CreateButton";

export default function Operations() {
  return (
    <Box>
      <TunnelSelector/>
      <Typography component="h1" variant="h5">
        Operations
      </Typography>
      <CreateButton/>
    </Box>
  )
}