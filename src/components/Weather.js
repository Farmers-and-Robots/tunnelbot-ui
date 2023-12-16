import Typography from "@mui/material/Typography";
import * as React from "react";
import Box from "@mui/material/Box";
import {FabConfigWiz} from "./ConfigWiz";

export default function Weather() {
  return (
    <Box>
      <Typography component="h1" variant="h5">
        Weather
      </Typography>
      <FabConfigWiz wizTitle={"Add Weather Station"} action={"addWeatherStation"}/>
    </Box>
  )
}