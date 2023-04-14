import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import {Button, Stack, Switch} from "@mui/material";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import SettingsIcon from '@mui/icons-material/Settings';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';



const label = { inputProps: { 'aria-label': 'Switch demo' } };
const marks = [
    {
        value: 0,
        label: 'closed',
    },
    {
        value: 5,
        label: 'cracked',
    },
    {
        value: 33,
        label: 'under the bench',
    },
    {
        value: 100,
        label: 'open',
    },
];

function VentRemoteContent() {

    const [curtainOpenVal, setCurtainValText] = React.useState(0);
    const handleChange = (e, newValue) => {
        setCurtainValText(newValue)
    }

  return (
      <Box sx={{ flexGrow: 1 }}>
          <Grid sx={{ height: '100%' }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
              <Grid item xs={9}>
                  <Stack spacing={0} sx={{ my: 1 }}>
                      <Typography>
                          network status: connected
                      </Typography>
                      <Typography component="p" variant="h6" sx={{ fontWeight: 'bold' }}>
                          curtain-name
                      </Typography>
                      <Box display='flex' justifyContent='center' alignItems='center'>
                          <Typography sx={{ fontSize: 'h1', fontWeight: 'bold'}} >
                              {curtainOpenVal}
                          </Typography>
                      </Box>
                      <TableContainer>
                          <Table  sx={{ mb: 1 }}>
                              <TableBody>
                                  <TableRow>
                                      <TableCell align="left"  sx={{ p: 1, borderBottom: "none" }} >
                                          <Button variant="contained" fullWidth>
                                              Previous
                                          </Button>
                                      </TableCell>
                                      <TableCell align="right"  sx={{ p: 1, borderBottom: "none" }} >
                                          <Button variant="contained" fullWidth>
                                              Update
                                          </Button>
                                      </TableCell>
                                  </TableRow>
                              </TableBody>
                          </Table>
                      </TableContainer>
                      <Box sx={{
                          border: 1,
                          borderColor: 'primary.light',
                          p: 1,
                          width: "100%",
                          background: '#e0e0e0',
                      }}>
                          <Typography sx={{ fontWeight: 'bold' }} component="p" >
                              thermostat
                          </Typography>
                          <TableContainer sx={{ p: 0, my: 1 }}>
                              <Table>
                                  <TableBody >
                                      <TableRow>
                                          <TableCell align="left"  sx={{ p: 0, borderBottom: "none" }} >
                                              <SettingsIcon></SettingsIcon>
                                          </TableCell>
                                          <TableCell align="right"  sx={{ p: 0, borderBottom: "none" }} >
                                                <Switch {...label} defaultChecked />
                                          </TableCell>
                                      </TableRow>
                                  </TableBody>
                              </Table>
                          </TableContainer>
                      </Box>
                  </Stack>
                </Grid>
                <Grid item xs={3} sx={{ mb: 3, mt: 2 }}>
                      <Slider
                          aria-label="Percent Open"
                          orientation="vertical"
                          defaultValue={0}
                          onChange={handleChange}
                          valueLabelDisplay="off"
                      />
                </Grid>
          </Grid>
      </Box>
  );
}

export default function VentRemote() {
  return <VentRemoteContent />;
}
