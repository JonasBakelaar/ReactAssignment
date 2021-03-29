import React from "react";
import "./ConversionForm.css";

import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

// This class creates the Header on the actual conversion page


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

const ConversionForm = ({ mode }) => {
  const classes = useStyles();
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
    <React.Fragment>
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
    </React.Fragment>
  );
};
export default ConversionForm;
