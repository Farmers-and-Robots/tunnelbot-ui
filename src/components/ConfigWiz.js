import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import { FormControl, FormLabel } from "@mui/material";
import MuiButton from "@mui/material/Button"
import { styled } from "@mui/material/styles"


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FarmButtonStyle = styled(MuiButton)(() => ({
  mt: 7,
  mb: 7
}));

export default function ConfigWiz({wizTitle}) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <FarmButtonStyle variant="contained" onClick={handleClickOpen}>
        {wizTitle}
      </FarmButtonStyle>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {wizTitle}
            </Typography>
            <Button color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <FormControl>
          <FormLabel>Farm Name</FormLabel>
          <TextField xs={{mr: 5, ml: 5}}></TextField>
          <FormLabel>Address</FormLabel>
          <TextField xs={{mr: 5, ml: 5}}></TextField>
        </FormControl>
      </Dialog>
    </React.Fragment>
  );
}