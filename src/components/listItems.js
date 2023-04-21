import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import {TunnelbotCurtainIcon,
    TunnelbotWeatherIcon,
    TunnelbotCameraIcon,
    TunnelbotLightsIcon,
    TunnelbotHeatingIcon,
    TunnelbotIrrigationIcon} from "./TunnelbotIcons";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <TunnelbotCurtainIcon />
      </ListItemIcon>
      <ListItemText primary="Curtains" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <TunnelbotHeatingIcon />
      </ListItemIcon>
      <ListItemText primary="Heating" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <TunnelbotIrrigationIcon />
      </ListItemIcon>
      <ListItemText primary="Irrigation" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <TunnelbotCameraIcon />
      </ListItemIcon>
      <ListItemText primary="Camera" />
    </ListItemButton>
    <ListItemButton>
        <ListItemIcon>
            <TunnelbotLightsIcon />
        </ListItemIcon>
      <ListItemText primary="Lights" />
    </ListItemButton>
    <ListItemButton>
        <ListItemIcon>
            <TunnelbotWeatherIcon />
        </ListItemIcon>
        <ListItemText primary="Weather" />
    </ListItemButton>
    </React.Fragment>
);

