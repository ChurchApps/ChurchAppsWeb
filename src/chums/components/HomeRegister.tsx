import React from "react";
import { ErrorMessages } from "../../components";
import { Register } from "@churchapps/apphelper";
import { Container, Grid, Button, Box } from "@mui/material";

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
            <h2>Try Before You Register</h2>
            <p>Want to see CHUMS in action first? Check out our demo with sample church data.</p>

            <Box sx={{ mb: 3 }}>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                href="https://chumsdemo.churchapps.org/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mr: 2, mb: 1 }}
              >
                Try Demo
              </Button>
              <span style={{ color: "#666", fontSize: "14px" }}>
                Log in with sample church credentials to explore all features
              </span>
            </Box>

            <h3>Ready to Get Started?</h3>
            <p>Register for your free account - you'll be up and running in less than a minute.</p>

            <ErrorMessages errors={customErrors} />
            <Register updateErrors={setCustomErrors} appName="CHUMS" appUrl={window.location.href.replace("https://", "https://app.")} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
