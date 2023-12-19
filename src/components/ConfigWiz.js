import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import GetForm from "./Forms"
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16,
};

function FabConfigWiz({wizTitle, action}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Fab color="primary" aria-label="add" sx={fabStyle} onClick={handleClickOpen} >
        <AddIcon />
      </Fab>
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
          </Toolbar>
        </AppBar>
        <Box sx={{m:2}}>
          <GetForm formKind={action} />
        </Box>
      </Dialog>
    </React.Fragment>
  );
}

const FarmButtonStyle = {
  mt: 2,
  mb: 2
}

function FarmConfigWiz({wizTitle, action}) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" sx={FarmButtonStyle} onClick={handleClickOpen}>
        {wizTitle}
      </Button>
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
          </Toolbar>
        </AppBar>
        <Box sx={{m:2}}>
          <GetForm formKind={action} />
        </Box>
      </Dialog>
    </React.Fragment>
  );
}

export {
  FarmConfigWiz,
  FabConfigWiz,
  FarmButtonStyle
}