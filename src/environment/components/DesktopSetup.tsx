import React from "react";
import { Container, Typography } from "@mui/material";
import { GitHubIssues } from "../../contribute/components/GitHubIssues";

export const DesktopSetup: React.FC = () => (
  <div id="desktop" className="homeSection alt">
    <Container fixed>
      <Typography sx={{ lineHeight: 1.2, marginTop: 0 }} component="h2">Desktop Project Setup</Typography>
      <p>We currently have one desktop application of <a href="https://github.com/ChurchApps/FreeShow">FreeShow</a>.
          It is also written in a Typescript using Electron, which provides the cross-platform capabilities.  It utilizes
          Svelte for the UI. Unlike the mobile and web projects, this one is stand-alone and does not depend on any of the APIs above.
          Setup is very easy:</p>
      <ul>
        <li>Clone the the repo from GitHub.</li>
        <li>Install the dependencies with: <code>npm install</code></li>
        <li>Run <code>npm start</code> to start Electron server</li>
      </ul>
      <GitHubIssues labels={[]} repo="FreeShow" />
    </Container>
  </div>
);
