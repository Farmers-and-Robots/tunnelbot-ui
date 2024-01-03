import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { FabConfigWiz } from "../../components/ConfigWiz";
import TunnelSelector from "../../components/TunnelSelector";

export default function Irrigation() {
  return (
    <Box>
      <TunnelSelector multipleChoice={true} />
      <Typography component="h1" variant="h5">
        Irrigation
      </Typography>
      <FabConfigWiz wizTitle={"Add irrigation"} action={"addIrrigation"} />
    </Box>
  );
}
