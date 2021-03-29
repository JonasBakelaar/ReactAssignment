import React from "react";
import "./Header.css";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

// This creates the Header on the actual conversion page

const Header = ({ title }) => {
  return (
    <React.Fragment>
      <Grid container 
            spacing={12}>
        <Grid container 
            direction="row"
            justify="center"
            alignItems="center">
          <Grid item xs={12} sm={12}>
            <Box className="header">
              <Grid item xs={12} sm={8}>
                  <Box px={10}>
                    Meters and Feet Converter
                  </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box px={10}>
                  {title}
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Header;
