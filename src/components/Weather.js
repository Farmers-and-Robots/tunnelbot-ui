import Typography from "@mui/material/Typography";
import * as React from "react";
import CreateButton from "./CreateButton";
import Box from "@mui/material/Box";

export default function Weather() {
  return (
    <Box>
      <Typography component="h1" variant="h5">
        Weather
      </Typography>
      <CreateButton/>
    </Box>
  )
}