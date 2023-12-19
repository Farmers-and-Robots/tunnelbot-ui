import * as React from "react";
import { Link } from "react-router-dom"
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {TunnelbotCurtainIcon,
  TunnelbotWeatherIcon,
  TunnelbotCameraIcon,
  TunnelbotDevicesIcon,
  TunnelbotHeatingIcon,
  TunnelbotIrrigationIcon,
  TunnelbotFarmIcon,
  TunnelbotProfileIcon,
} from "./TunnelbotIcons";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to={"/farm/events"}>
      <ListItemIcon>
        <TunnelbotFarmIcon/>
      </ListItemIcon>
      <ListItemText primary="Farm"/>
    </ListItemButton>
    <ListItemButton component={Link} to={"/farm/curtains"}>
      <ListItemIcon>
        <TunnelbotCurtainIcon/>
      </ListItemIcon>
      <ListItemText primary="Curtains"/>
    </ListItemButton>
    <ListItemButton component={Link} to={"/farm/heating"}>
      <ListItemIcon>
        <TunnelbotHeatingIcon/>
      </ListItemIcon>
      <ListItemText primary="Heating"/>
    </ListItemButton>
    <ListItemButton component={Link} to={"/farm/irrigation"}>
      <ListItemIcon>
        <TunnelbotIrrigationIcon/>
      </ListItemIcon>
      <ListItemText primary="Irrigation"/>
    </ListItemButton>
    <ListItemButton component={Link} to={"/farm/camera"}>
      <ListItemIcon>
        <TunnelbotCameraIcon/>
      </ListItemIcon>
      <ListItemText primary="Camera"/>
    </ListItemButton>
    <ListItemButton component={Link} to={"/farm/devices"}>
      <ListItemIcon>
        <TunnelbotDevicesIcon/>
      </ListItemIcon>
      <ListItemText primary="Devices"/>
    </ListItemButton>
    <ListItemButton component={Link} to={"/farm/weather"}>
      <ListItemIcon>
        <TunnelbotWeatherIcon/>
      </ListItemIcon>
      <ListItemText primary="Weather"/>
    </ListItemButton>
    <ListItemButton component={Link} to={"/farm/people"}>
      <ListItemIcon>
        <TunnelbotProfileIcon/>
      </ListItemIcon>
      <ListItemText primary="People"/>
    </ListItemButton>
  </React.Fragment>
)

