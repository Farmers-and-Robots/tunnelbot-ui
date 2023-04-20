import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import {Button, Stack, Switch} from "@mui/material";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from "@mui/material/Paper";

const networkStatus = "CONNECTED"
const marker = String.fromCodePoint(9668)
const marks = [
    {
        value: 5,
        label: marker,
    },
    {
        value: 33,
        label: marker,
    },
];

function VentRemoteContent({curtainName}) {

    const [curtainOpenVal, setCurtainValText] = React.useState(0);
    const handleChange = (e, newValue) => {
        setCurtainValText(newValue)
    }

  return (
      <Grid item xs={12} md={8} lg={9}>
      <Paper
          sx={{
              pt: 0,
              px: 2,
              display: 'flex',
              flexDirection: 'row',
              height: 390,
          }}
      >
          <Box sx={{ flexGrow: 1 }}>
              <Grid sx={{ height: '100%' }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                  <Grid item xs={9}>
                      <Stack spacing={0} sx={{ my: 1 }}>
                          <Typography sx={{ fontSize: 12, fontWeight: 'bold', color: 'success.main'}}>NETWORK STATUS: {networkStatus}</Typography>
                          <Typography component="p" variant="h6" sx={{ fontWeight: 'bold' }}>
                              {curtainName}
                          </Typography>
                          <Box display='flex' justifyContent='center' alignItems='center'>
                              <Typography sx={{ fontSize: 'h1', fontWeight: 'bold', my: 3}} >
                                  {curtainOpenVal}%
                              </Typography>
                          </Box>
                          <TableContainer>
                              <Table  sx={{ mb: 1 }}>
                                  <TableBody>
                                      <TableRow>
                                          <TableCell align="left"  sx={{ p: 1, borderBottom: "none" }} >
                                              <Button variant="outlined" fullWidth>
                                                  Cancel
                                              </Button>
                                          </TableCell>
                                          <TableCell align="right" sx={{ p: 1, borderBottom: "none" }} >
                                              <Button variant="contained" fullWidth color="primary">
                                                  Update
                                              </Button>
                                          </TableCell>
                                      </TableRow>
                                  </TableBody>
                              </Table>
                          </TableContainer>
                          <Box sx={{
                              px: 1,
                              py: 0,
                              width: "100%",
                              background: '#e2e2d1',
                          }}>
                              <TableContainer sx={{ p: 0, my: 1 }}>
                                  <Table>
                                      <TableBody >
                                          <TableRow>
                                              <TableCell align="left"  sx={{ p: 0, borderBottom: "none", fontWeight: 'bold', fontSize: 16 }} >
                                                    Thermostat
                                              </TableCell>
                                              <TableCell align="right"  sx={{ p: 0, borderBottom: "none" }} >
                                                    <Switch />
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
                              marks={marks}
                          />
                    </Grid>
              </Grid>
          </Box>
      </Paper>
      </Grid>
  );
}

export default function VentRemote({curtainName}) {
  return <VentRemoteContent curtainName={curtainName}/>;
}
