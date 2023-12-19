import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { FabConfigWiz } from "./ConfigWiz";
import TunnelSelector from "./TunnelSelector";

export default function Heating() {
  return (
    <Box>
      <TunnelSelector multipleChoice={true} />
      <Typography component="h1" variant="h5">
        Heating
      </Typography>
      <FabConfigWiz wizTitle={"Add Heating"} action={"addHeater"} />
    </Box>
  );
}
