import Typography from "@mui/material/Typography";
import * as React from "react";
import Box from "@mui/material/Box"
import Button from "@mui/material/Button";
import {signOut} from "firebase/auth";
import {auth} from "../firebase";
import {useNavigate} from "react-router-dom";
import {FarmButtonStyle} from "./ConfigWiz";


const handleSignOut = () => {
  signOut(auth).then(() => {
    const navigate = useNavigate()
    // Sign-out successful.
    navigate("/signin");
    console.log("Signed out successfully")
  }).catch((error) => {
    console.log(error)
  });
}

export default function Profile() {
  return (
    <Box>
      <Typography component="h1" variant="h5">
        Profile
      </Typography>
      <Button variant="contained" sx={FarmButtonStyle} onClick={handleSignOut}>Sign Out</Button>
    </Box>
  )
}