import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { FabConfigWiz } from "./ConfigWiz";
import TunnelSelector from "./TunnelSelector";

export default function Tunnels() {
  return (
    <Box>
      <TunnelSelector multipleChoice={true} />
      <Typography component="h1" variant="h5">
        Tunnels
      </Typography>
      <FabConfigWiz wizTitle={"Add Tunnel"} action={"addTunnel"} />
    </Box>
  );
}
