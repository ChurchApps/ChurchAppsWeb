import React from "react";
import { ErrorMessages } from "../../components";
import { Register } from "@churchapps/apphelper";
import { Container, Grid } from "@mui/material";

export function HomeRegister() {
  const [customErrors, setCustomErrors] = React.useState<string[]>([]);

  return (
    <div className="homeSection" id="registerSection">
      <Container fixed>
        <div id="register"></div>

        <Grid container spacing={3}>
          <Grid item md={6} xs={0}><img src="/images/home/register.png" alt="register" /></Grid>
          <Grid item md={6} xs={12}>
            <div className="title"><span>Join CHUMS</span></div>
            <h2>Register for a Free Account</h2>
            <p>You'll be up and running in less than a minute.</p>

            <ErrorMessages errors={customErrors} />
            <Register updateErrors={setCustomErrors} appName="CHUMS" appUrl={window.location.href.replace("https://", "https://app.")} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
