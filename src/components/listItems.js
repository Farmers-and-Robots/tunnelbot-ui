import * as React from "react";
import { Link } from "react-router-dom"
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {TunnelbotCurtainIcon,
  TunnelbotWeatherIcon,
  TunnelbotCameraIcon,
  TunnelbotLightsIcon,
  TunnelbotHeatingIcon,
  TunnelbotIrrigationIcon} from "./TunnelbotIcons";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={ Link } to={ "/curtains" }>
      <ListItemIcon>
        <TunnelbotCurtainIcon />
      </ListItemIcon>
      <ListItemText primary="Curtains" />
    </ListItemButton>
    <ListItemButton component={ Link } to={ "/heating" }>
      <ListItemIcon>
        <TunnelbotHeatingIcon />
      </ListItemIcon>
      <ListItemText primary="Heating" />
    </ListItemButton>
    <ListItemButton component={ Link } to={ "/irrigation" }>
      <ListItemIcon>
        <TunnelbotIrrigationIcon />
      </ListItemIcon>
      <ListItemText primary="Irrigation" />
    </ListItemButton>
    <ListItemButton component={ Link } to={ "/camera" }>
      <ListItemIcon>
        <TunnelbotCameraIcon />
      </ListItemIcon>
      <ListItemText primary="Camera" />
    </ListItemButton>
    <ListItemButton component={ Link } to={ "/lights" }>
      <ListItemIcon>
        <TunnelbotLightsIcon />
      </ListItemIcon>
      <ListItemText primary="Lights" />
    </ListItemButton>
    <ListItemButton component={ Link } to={ "/weather" }>
      <ListItemIcon>
        <TunnelbotWeatherIcon />
      </ListItemIcon>
      <ListItemText primary="Weather" />
    </ListItemButton>
  </React.Fragment>
);

