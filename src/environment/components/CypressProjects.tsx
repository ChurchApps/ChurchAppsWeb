import React from "react";
import { Container, Grid, Typography } from "@mui/material";

export const CypressProjects: React.FC = () => (
  <div id="test" className="homeSection">
    <Container fixed>
      <Typography sx={{lineHeight: 1.2, marginTop: 0}} component="h2">Cypress Test Setup</Typography>
      <Grid container spacing={3}>
        <Grid item md={9} xs={12}>
          <p>See <a href="https://youtu.be/yp53i_27mYA" target="_blank" rel="noreferrer">setup video</a>.</p>
          <p>
            We have automated test scripts for some of the projects to validate all code changes.  These run automatically on any commits to master.
            To set up your dev environment:
          </p>
          <ol dir="auto">
            <li>Follow the guide to get the app you wish to test running on your machine.</li>
            <li>Install the dependencies with: <code>npm install</code></li>
            <li>Copy <code>cypress.env.json.template</code> environment file to <code>cypress.env.json</code> and adjust as needed.</li>
          </ol>
          <Typography sx={{fontSize: "28px", fontWeight: 500, lineHeight: 1.2, margin: "0 0 8px 0"}} component="h3">Running the Tests Locally</Typography>
          <ol dir="auto">
            <li>Launch GUI with <code>npm run cy:open</code></li>
            <li>Click on a script to run a block of tests</li>
            <li>While trying to debug one particular test, it's helpful to comment out the calls to the other tests in the block so just the one script being debugged runs.</li>
          </ol>
        </Grid>
        <Grid item md={3} xs={12}>
          <table className="table">
            <thead>
              <tr>
                <th>Project</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/ChumsTests/" target="_blank" rel="noreferrer">ChumsTests</a></td>
              </tr>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/StreamingLiveTests/" target="_blank" rel="noreferrer">StreamingLiveTests</a></td>
              </tr>
            </tbody>
          </table>
        </Grid>
      </Grid>
    </Container>
  </div>
);
