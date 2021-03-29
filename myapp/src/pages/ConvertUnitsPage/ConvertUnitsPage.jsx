import React from "react";
import "./ConvertUnitsPage.css";

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ConvertButton from "./../../components/ConvertButton";
import ConversionForm from "./../../components/ConversionForm";
import {useLocation} from "react-router-dom";
import Header from "../../components/Header";

// This page converts meters to feet, and feet to meters

const ConvertUnitsPage = ({ props }) => {
  
  // Grab the username from the login page
  let data = useLocation();
  const username = data.state.username;

  const [mode, setMode] = React.useState("feetToInches");

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
                      <ConversionForm mode={mode}/>
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
