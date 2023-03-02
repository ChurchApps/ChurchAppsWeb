import React from "react";
import { Container, Grid, Typography } from "@mui/material";

export const ApiProjects: React.FC = () => (
  <div id="api" className="homeSection alt">
    <Container fixed>
      <Grid container spacing={3}>
        <Grid item md={9} xs={12}>
          <Typography sx={{ lineHeight: 1.2, marginTop: 0 }} component="h2">API Project Setup</Typography>
          <p>Most projects depend on the CoreApis (Access, Attendance, Giving, Membership, and Reporting).  You can set each of these up manually but it's far more simple to follow the <a href="docker">Docker Setup Instructions</a> to get these running instead.</p>
          <p>If you choose to manaully set these up, the process is the same for all the APIs.</p>
          <ol dir="auto">
            <li>Clone the appropriate repo from GitHub.</li>
            <li>Create a new MySQL database with a name matching the project (<code>access</code>, <code>membership</code>, etc).</li>
            <li>Copy <code>dotenv.sample.txt</code> to <code>.env</code> and edit it to point to your MySQL database.</li>
            <li>
              Pull the <a href="https://github.com/LiveChurchSolutions/ApiBase" target="_blank" rel="noreferrer">apiBase</a> submodule with: <code>git submodule init &amp;&amp; git submodule update</code><br />
              <i>* The apiBase repo contains shared code that is used between all of the API projects.</i>
            </li>
            <li>Install the dependencies with: <code>npm install</code></li>
            <li>Create the database tables with <code>npm run initdb</code></li>
            <li>Start the api with <code>npm run dev</code></li>
          </ol>
        </Grid>
        <Grid item md={3} xs={12}>
          <table className="table">
            <thead>
              <tr>
                <th>API</th>
                <th>Port</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/MembershpApi/" target="_blank" rel="noreferrer">MembershipApi</a></td>
                <td>8083</td>
              </tr>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/GivingApi/" target="_blank" rel="noreferrer">GivingApi</a></td>
                <td>8084</td>
              </tr>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/AttendanceApi/" target="_blank" rel="noreferrer">AttendanceApi</a></td>
                <td>8085</td>
              </tr>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/MessagingApi/" target="_blank" rel="noreferrer">MessagingApi</a> (REST)</td>
                <td>8086</td>
              </tr>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/MessagingApi/" target="_blank" rel="noreferrer">MessagingApi</a> (Socket)</td>
                <td>8087</td>
              </tr>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/LessonsApi/" target="_blank" rel="noreferrer">LessonsApi</a></td>
                <td>8090</td>
              </tr>
            </tbody>
          </table>
        </Grid>
      </Grid>
    </Container>
  </div>
);
