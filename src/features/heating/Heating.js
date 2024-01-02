import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { FabConfigWiz } from "../../components/ConfigWiz";
import TunnelSelector from "../../components/TunnelSelector";

export default function Heating() {
  return (
    <Box>
      <TunnelSelector multipleChoice={true} />
      <Typography component="h1" variant="h5">
        Heating
      </Typography>
      <FabConfigWiz wizTitle={"Add heating"} action={"addHeater"} />
    </Box>
  );
}
