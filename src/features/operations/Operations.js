import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import TunnelSelector from "../../components/TunnelSelector";

export default function Operations() {
  return (
    <Box>
      <TunnelSelector />
      <Typography component="h1" variant="h5">
        Operations
      </Typography>
    </Box>
  );
}
