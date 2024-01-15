import React from "react";
import { Container, Grid, Button, Typography } from "@mui/material";
import { Footer, Header } from "../contribute/components"
import { ApiProjects } from "./components/ApiProjects";
import { CreateAccount } from "./components/CreateAccount";
import { DockerSetup } from "./components/DockerSetup";
import { ReactNativeProjects } from "./components/ReactNativeProjects";
import { ReactProjects } from "./components/ReactProjects";
import { NpmProjects } from "./components/NpmProjects";
import { DesktopSetup } from "./components/DesktopSetup";

export const EnvironmentPage = () => (
  <>
    <Header />
    <div id="hero">
      <Container>
        <Typography sx={{fontSize: "40px", fontWeight: 700, lineHeight: 1.2, margin: "0 0 8px 0", textAlign: "center"}} component="h1">Development Environment Setup</Typography>

        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <p>All of the projects fall into 5 categories:</p>
            <ol>
              <li><a href="#npm">Helper NPM Packages</a></li>
              <li><a href="#api">APIs</a></li>
              <li><a href="#web">Web Apps</a></li>
              <li><a href="#mobile">Mobile Apps</a></li>
              <li><a href="#desktop">Desktop Apps</a></li>
            </ol>
            <p>Each of which use a Javscript (Typescript) based language.  The NPM packages are Javascript, APIs are Node, web projects are React or Next.js, and mobile projects are React Native.</p>
            <p>You can either set these projects up individually using the instructions below or jump to the <a href="#docker">Docker</a> instructions to create a local environment.</p>

          </Grid>
          <Grid item md={6} xs={12}>
            <img src="/images/components.png" alt="Overview" className="img-fluid" />
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Button href="/contribute" variant="contained" size="medium" fullWidth disableElevation sx={{"&:focus": { outline: "none", color: "white"}, textTransform: "capitalize", fontSize: "20px", marginBottom: "20px"}}>View Tasks</Button>
          </Grid>
          <Grid item xs={6}>

            <Button href="https://join.slack.com/t/livechurchsolutions/shared_invite/zt-i88etpo5-ZZhYsQwQLVclW12DKtVflg" variant="contained" size="medium" color="success" fullWidth disableElevation sx={{"&:focus": { outline: "none", color: "white"}, textTransform: "capitalize", fontSize: "20px"}}>Join Slack</Button>
          </Grid>
        </Grid>

      </Container>
    </div>
    <ApiProjects />
    <NpmProjects />
    <ReactProjects />
    <ReactNativeProjects />
    <DockerSetup />
    <CreateAccount />
    <DesktopSetup />
    <Footer />
  </>
)
