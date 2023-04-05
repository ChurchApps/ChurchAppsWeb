import React from "react";
import { Container, Grid, Box } from "@mui/material";
import { ErrorMessages, EnvironmentHelper } from "./";
import { Register } from "../appBase/pageComponents/components/Register";

export function HomeRegister() {
  const [customErrors, setCustomErrors] = React.useState<string[]>([]);

  return (
    <div className="homeSection" id="registerSection">
      <Container fixed>
        <div id="register"></div>
        <Grid container spacing={3}>
          <Grid item md={5} lg={4} sm={0}>
            <Box><img src="/images/home/register.png" alt="register" /></Box>
          </Grid>
          <Grid item md={7} lg={6}>
            <div className="title"><span>Sign up for ChurchApps</span></div>
            <h2 style={{marginTop: 0}}>Create an Account</h2>
            <ErrorMessages errors={customErrors} />
            <Register updateErrors={setCustomErrors} appName="ChurchApps" appUrl={EnvironmentHelper.AppUrl} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );

}
