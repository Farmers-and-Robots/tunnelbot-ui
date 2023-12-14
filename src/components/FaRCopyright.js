import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";

export default function FaRCopyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props} sx={{position: "absolute", bottom: 16}}>
      {"Copyright © "}
      <Link color="inherit" href="https://farmersandrobots.com/">
                Farmers and Robots
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}