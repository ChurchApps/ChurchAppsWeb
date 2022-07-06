import React from "react";
import { Container, Grid, Button, Typography } from "@mui/material";
import { Footer, Header } from "../contribute/components"
import { ApiProjects } from "./components/ApiProjects";
import { CreateAccount } from "./components/CreateAccount";
import { CypressProjects } from "./components/CypressProjects";
import { DockerSetup } from "./components/DockerSetup";
import { ReactNativeProjects } from "./components/ReactNativeProjects";
import { ReactProjects } from "./components/ReactProjects";

export const EnvironmentPage = () => (
  <>
    <Header />
    <div id="hero">
      <Container>
        <Typography sx={{fontSize: "40px", fontWeight: 700, lineHeight: 1.2, margin: "0 0 8px 0", textAlign: "center"}} component="h1">Development Environment Setup</Typography>
        <p>The following is a guide for how to set up your development environment for each of the projects.</p>
        <p>Jump to section:</p>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <ul style={{margin: 0}}>
              <li><a href="#api">API Projects</a></li>
              <li><a href="#docker">Docker</a></li>
              <li><a href="#web">Web Projects</a></li>
              <li><a href="#account">Create an Account</a></li>
              <li><a href="#mobile">Mobile Projects</a></li>
              <li><a href="#test">Test Scripts</a></li>
            </ul>
          </Grid>
          <Grid item xs={6}>
            <Button href="/contribute" variant="contained" size="medium" fullWidth disableElevation sx={{"&:focus": { outline: "none", color: "white"}, textTransform: "capitalize", fontSize: "20px", marginBottom: "20px"}}>View Tasks</Button>
            <Button href="https://join.slack.com/t/livechurchsolutions/shared_invite/zt-i88etpo5-ZZhYsQwQLVclW12DKtVflg" variant="contained" size="medium" color="success" fullWidth disableElevation sx={{"&:focus": { outline: "none", color: "white"}, textTransform: "capitalize", fontSize: "20px"}}>Join Slack</Button>
          </Grid>
        </Grid>

      </Container>
    </div>
    <ApiProjects />
    <DockerSetup />
    <ReactProjects />
    <CreateAccount />
    <ReactNativeProjects />
    <CypressProjects />
    <Footer />
  </>
)
