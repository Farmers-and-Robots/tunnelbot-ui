import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { FarmConfigWiz } from "../../components/ConfigWiz";
import TunnelSelector from "../../components/TunnelSelector";

function fetchFarmData() {
  let farms = [];
  if (farms.length === 0) {
    return (
      <Typography
        variant="h6"
        mt={4}
        data-testid="nofarms"
        sx={{ textAlign: "center" }}
      >
        No farms found.
        <br />
        <FarmConfigWiz wizTitle={"Create a Farm"} action={"createFarm"} />
        <br />
        or
        <br />
        <FarmConfigWiz
          wizTitle={"Request Access to a Farm"}
          action={"requestFarmAccess"}
        />
      </Typography>
    );
  } else {
    return <Typography>EVENTS</Typography>;
  }
}

export default function Events() {
  let farmData = fetchFarmData();

  return (
    <Box>
      <TunnelSelector multipleChoice={true} />
      {farmData}
    </Box>
  );
}
