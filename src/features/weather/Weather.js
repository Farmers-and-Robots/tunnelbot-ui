import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { FabConfigWiz } from "../../components/ConfigWiz";

export default function Weather() {
  return (
    <Box>
      <Typography component="h1" variant="h5">
        Weather
      </Typography>
      <FabConfigWiz
        wizTitle={"Add weather Station"}
        action={"addWeatherStation"}
      />
    </Box>
  );
}
