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
import { db } from "../firebase"
import { onValue, ref, set } from "firebase/database"


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

function ThermostatRemote() {
    return (
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
                                <Switch disabled defaultChecked />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

function CurtainRemoteContent({curtainName}) {
    const [netStat, setNetStat] = React.useState("CONNECTED");
    const handleNetStat = (event, newStat) => {
        setNetStat(newStat)
    }

    const [sliderVal, setSliderVal] = React.useState(0)
    const [curtainOpenVal, setCurtainValText] = React.useState(null);
    const curtainId = curtainName.split(' ').join('_').toLowerCase();
    const [curtainOnloadVal, setCurtainOnloadVal] = React.useState(null);
    React.useEffect(() => {
        const query = ref(db, curtainId)
        return onValue(query, (snapshot) => {
            setCurtainValText(snapshot.val()["current_posistion"])
            setSliderVal(snapshot.val()["current_posistion"])
            setCurtainOnloadVal(snapshot.val()["current_posistion"])
        });
    }, []);

    const handleChange = (event, newValue) => {
        setCurtainValText(newValue)
        setSliderVal(newValue)
    }

    {/* This is where the request to the motor and/or db will go. */}
    function handleSubmit(event) {
        event.preventDefault();
        console.log({curtainOpenVal})
        console.log({curtainOnloadVal})
        handleNetStat(event, "UPDATING...")
        set(ref(db, curtainId), {
            current_posistion: curtainOnloadVal,
            desired_posisition: curtainOpenVal
        });
        const curtainCommand = "move_" + curtainId
        set(ref(db, 'control/'), {
            command: curtainCommand,
            command_executed: false
        });
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
              maxWidth: 500,
          }}
      >
          <Box sx={{ flexGrow: 1 }}>
              <Grid sx={{ height: '100%' }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                  <Grid item xs={9}>
                      <Stack spacing={0} sx={{ my: 1 }}>
                          <Typography sx={{ fontSize: 12,
                              fontWeight: 'bold',
                              color: 'success.main',
                          }}>
                              NETWORK STATUS: {netStat}
                          </Typography>
                          <Typography component="p" variant="h6" sx={{ fontWeight: 'bold' }}>
                              {curtainName}
                          </Typography>
                          <Box display='flex' justifyContent='center' alignItems='center' sx={{ my: 2 }}>
                              <Typography variant="h1" sx={{ fontWeight: 'bold', my: 3}} >
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
                                              <Button variant="contained" fullWidth color="primary" onClick={handleSubmit}>
                                                  Update
                                              </Button>
                                          </TableCell>
                                      </TableRow>
                                  </TableBody>
                              </Table>
                          </TableContainer>
                          <ThermostatRemote />
                      </Stack>
                    </Grid>
                    <Grid item xs={3} sx={{ mb: 3, mt: 2 }}>
                          <Slider
                              aria-label="Percent Open"
                              orientation="vertical"
                              value={sliderVal}
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

export default function CurtainRemote({curtainName}) {
  return <CurtainRemoteContent curtainName={curtainName}/>;
}
