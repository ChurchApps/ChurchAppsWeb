import React from "react";
import { Container, Grid, Typography } from "@mui/material";

export const DockerSetup: React.FC = () => (
  <div id="docker" className="homeSection alt">
    <Container fixed>
      <Typography sx={{lineHeight: 1.2, marginTop: 0}} component="h2">Docker Setup</Typography>
      <p>See <a href="https://youtu.be/M81I6gmKqdI" target="_blank" rel="noreferrer">setup video</a>.</p>
      <p>
        Docker isn't required for any of the projects, but it does make setting up the Core APIs (Access, Attendance, Giving, Membership, and Reporting)
        that are needed by most projects much easier.  Without Docker, you need to setup each of these projects manually then every time you wish
        to run them you must launch for command prompts running each of these APIs in addition to any other projects you need to run.  Docker will
        do all this automatically in the background.  It is possible to run all of the projects, including web, fully within Docker.  However, it consumes a lot
        of RAM.  It's recommended to just launch the Core Apis with it.  To do so:
      </p>
      <Grid container spacing={3}>
        <Grid item md={9} xs={12}>
          <ol dir="auto">
            <li>Download and install <a href="https://www.docker.com/products/docker-desktop/" target="_blank" rel="noreferrer">Docker Desktop</a></li>
            <li>Clone the <a href="https://github.com/LiveChurchSolutions/Docker" target="_blank" rel="noreferrer">Docker</a> Repo.</li>
            <li>From a command prompt browse to the <code>/Containers/Dev/CoreApis</code> folder.</li>
            <li>Run <code>docker-compose up -d</code> to create the environment. This will take about 5-10 minutes the first time..</li>
          </ol>
          <Typography sx={{fontSize: "28px", fontWeight: 500, lineHeight: 1.2, margin: "0 0 8px 0"}} component="h3">Connecting VSCode</Typography>
          <ol dir="auto">
            <li>Install the "Docker" and "Remote Containers" extensions for VSCode.</li>
            <li>You will have a new Docker tab on the left of VSCode, expand it.</li>
            <li>Expand the container you are using to see a list of apps.  Right click the desired app and select "Attach Visual Studio Code".  This will launch a new instance of VSCode tied to that app.</li>
            <li>In the files section of the new VSCode instance, select "Open Folder" and enter "/app/"</li>
            <li>To view console output, in the original VSCode instance, right click on the app and select "View Logs"</li>
            <li>To connect the debugger, click on the Run and Debug icond on the left of VSCode running the image, and choose the "Docker: Attach to Node" option.</li>
          </ol>
        </Grid>
        <Grid item md={3} xs={12}>
          <img src="../images/docker.png" className="img-fluid" alt="Docker"></img>
        </Grid>
      </Grid>
      <Typography sx={{fontSize: "28px", fontWeight: 500, lineHeight: 1.2, margin: "15px 0 8px 0"}} component="h3">Additional Commands</Typography>
      <ul dir="auto">
        <li>Build and start the Docker container for the first time: <code>docker-compose up -d</code></li>
        <li>Stop the Docker container: <code>docker-compose stop</code></li>
        <li>Restart the docker container: <code>docker-compose start</code></li>
        <li>Reset everything except MySql: <code>docker-compose down</code> followed by <code>docker-compose build --no-cache</code> and <code>docker-compose up -d</code></li>
        <li>Reset everything including MySql: <code>docker-compose down -v</code> followed by <code>docker-compose build --no-cache</code> and <code>docker-compose up -d</code></li>
        <li>Completely reinstall everything: <code>docker-compose down --rmi local</code> followed by <code>docker-compose build --no-cache</code> and  <code>docker-compose up -d</code></li>
      </ul>

    </Container>
  </div>
);
