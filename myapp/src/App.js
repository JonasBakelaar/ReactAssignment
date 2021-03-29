import React from "react";
import ConvertUnitsPage from "./pages/ConvertUnitsPage";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import './App.css';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

export default function BasicExample() {
  return (
    <Router>
      <div className="main-page">
        <Switch>
          {/*
            These routes will render different components based on the url path
            */}
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route exact path="/convert-units">
            <ConvertUnitsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const LoginPage = () => {
  return (
    <React.Fragment>
      <Grid container 
            spacing={12}>
        <Grid container 
            direction="row"
            justify="center"
            alignItems="center">
          <Grid item xs={12} sm={6}>
            <Box className="title">
              Login
            </Box>
          </Grid>
        </Grid>
        
        <Grid container 
            direction="row"
            justify="center"
            alignItems="center">
          <Grid item xs={12} sm={6}>
            <Box className="content-container">
              <Grid container direction="row">
                <LoginForm />
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
