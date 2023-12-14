import Typography from "@mui/material/Typography";
import * as React from "react";
import CreateButton from "./CreateButton";
import Box from "@mui/material/Box";
import TunnelSelector from "./TunnelSelector";

export default function Home() {
  return (
    <Box>
      <TunnelSelector/>
      <Typography component="h1" variant="h5">
      Farm
      </Typography>
      < CreateButton />
    </Box>
  )
}