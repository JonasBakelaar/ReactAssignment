import React from "react";
import "./ConvertUnitsPage.css";

import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import ConvertButton from "./../../components/ConvertButton";
import {useLocation} from "react-router-dom";
import Header from "../../components/Header";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));

// This page converts meters to feet, and feet to meters

const ConvertUnitsPage = ({ props }) => {
  
  // Grab the username from the login page
  let data = useLocation();
  const username = data.state.username;

  const classes = useStyles();
  const [mode, setMode] = React.useState("feetToInches");
  const [values, setValues] = React.useState({
    feet: '',
    meters: ''
  });

  const handleConversion = (target) => {
    if(target.id === "meters") {
      // Convert current feet value to meters value specified, set both values
      return target.value * 3.37;
    } else {
      // Convert current feet value to meters value specified, set both values
      return target.value / 3.37;
    }
  }

  const handleChange = (prop) => (event) => {
    let conversionValue = handleConversion(event.target)
    console.log(prop);
    if(prop === "feet") {
      setValues({ ...values, [prop]: event.target.value, meters: conversionValue});
    } else {
      setValues({ ...values, [prop]: event.target.value, feet: conversionValue});
    }
  };

  return (
    <div>
      <Header title={username} />
      <Grid container 
            spacing={12}>
        <Grid container 
              direction="row"
              justify="center"
              alignItems="center">
          <Grid item xs={12} sm={6}>
            <Box className="conversion-container">
              <Grid container direction="Row">
                <Grid Item sm={6}
                      justify="center"
                      alignItems="center">
                  <ConvertButton onClick={() => setMode("metersToFeet")}>
                    meters to feet
                  </ConvertButton>
                </Grid>
                <Grid Item sm={6}
                      justify="center"
                      alignItems="center">
                  <ConvertButton onClick={() => setMode("feetToMeters")}>
                    feet to meters
                  </ConvertButton>
                </Grid>
              </Grid>


              <Box className="conversion-content-container">
                <Grid container direction="row">
                  <Grid Item sm={12} >
                    <Box px={10}>
                      {mode === "feetToMeters" ? (
                        <Box>
                          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <OutlinedInput
                              id="feet"
                              value={values.feet}
                              onChange={handleChange('feet')}
                              endAdornment={<InputAdornment position="end">Feet</InputAdornment>}
                              aria-describedby="outlined-weight-helper-text"
                              inputProps={{
                                'aria-label': 'weight',
                              }}
                              labelWidth={0}
                            />
                          </FormControl>
                          <br />
                          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <OutlinedInput
                              id="meters"
                              value={values.meters}
                              onChange={handleChange('meters')}
                              endAdornment={<InputAdornment position="end">Meters</InputAdornment>}
                              aria-describedby="outlined-weight-helper-text"
                              inputProps={{
                                'aria-label': 'weight',
                              }}
                              labelWidth={0}
                            />
                          </FormControl>
                        </Box>
                      ) : (
                        <Box>
                          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <OutlinedInput
                              id="meters"
                              value={values.meters}
                              onChange={handleChange('meters')}
                              endAdornment={<InputAdornment position="end">Meters</InputAdornment>}
                              aria-describedby="outlined-weight-helper-text"
                              inputProps={{
                                'aria-label': 'weight',
                              }}
                              labelWidth={0}
                            />
                          </FormControl>
                          <br />
                          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <OutlinedInput
                              id="feet"
                              value={values.feet}
                              onChange={handleChange('feet')}
                              endAdornment={<InputAdornment position="end">Feet</InputAdornment>}
                              aria-describedby="outlined-weight-helper-text"
                              inputProps={{
                                'aria-label': 'weight',
                              }}
                              labelWidth={0}
                            />
                          </FormControl>
                        </Box>
                      )}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ConvertUnitsPage;
