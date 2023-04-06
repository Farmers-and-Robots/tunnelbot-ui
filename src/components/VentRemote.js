import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";
import {Button, Paper, Stack, Switch} from "@mui/material";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import SettingsIcon from '@mui/icons-material/Settings';

function valuetext(value) {
    return `${value}°C`;
}

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function VentRemoteContent() {

  return (
      <Box sx={{ flexGrow: 1 }}>
          <Grid sx={{ height: '100%' }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
              <Grid item xs={9} >
                  <Stack spacing={3} sx={{ alignItems: 'center', my: 1 }}>
                      <Typography component="p" variant="h6" >
                          curtain-name
                      </Typography>
                      <Typography component="p" variant="h1">
                          34
                      </Typography>
                      <Button variant="contained" fullWidth>
                          Update
                      </Button>
                  </Stack>
                  <Grid
                      sx={{
                      width: '100%',
                      border: 1,
                      borderColor: 'primary.light',
                      px: 2,
                      py: 1,
                     }}
                  >
                      <Grid item>
                          <Typography variant="h6">
                              thermostat
                          </Typography>
                      </Grid>
                      <Grid item style={{ width: "10%"}}>
                            <SettingsIcon></SettingsIcon>
                      </Grid>
                      <Grid item>
                            <Switch {...label} defaultChecked />
                      </Grid>
                  </Grid>
                 </Grid>
              <Grid item xs={3}>
                  <Slider
                      aria-label="Temperature"
                      orientation="vertical"
                      getAriaValueText={valuetext}
                      valueLabelDisplay="auto"
                      defaultValue={30}
                  />
              </Grid>
          </Grid>
      </Box>
  );
}

export default function VentRemote() {
  return <VentRemoteContent />;
}
