import * as React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";

const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16,
};

export default function CreateButton() {
  return (
    <Box>
      <Fab color="primary" aria-label="add" sx={fabStyle}>
        <AddIcon />
      </Fab>
    </Box>
  );
}
