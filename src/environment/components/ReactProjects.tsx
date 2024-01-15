import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { GitHubIssues } from "../../contribute/components/GitHubIssues";

export const ReactProjects: React.FC = () => (
  <div id="web" className="homeSection alt">
    <Container fixed>

      <Grid container spacing={3}>
        <Grid item md={8} xs={12}>
          <Typography sx={{lineHeight: 1.2, marginTop: 0}} component="h2">Web Project Setup</Typography>
          <p>
            All of the web projects are coded in either React or Next.js with Typescript and also have a similar setup process.  Each of the Web
            projects depend on some combination of the APIs above.  You can follow the setup instructions above
            to set those up, or simply point to the staging servers which are listed in the <code>dotenv.sample.txt</code> files.
          </p>
          <p>To setup a web project:</p>
          <ol dir="auto">
            <li>Copy <code>dotenv.sample.txt</code> to <code>.env</code> and updated it to point to the appropriate API urls.</li>
            <li>Install the dependencies with: <code>npm install</code></li>
            <li>run <code>npm start</code> for React or <code>npm run dev</code> for Next.js to launch the project.</li>
          </ol>
        </Grid>
        <Grid item md={4} xs={12}>

          <GitHubIssues labels={["react","nextjs"]} />
        </Grid>
      </Grid>

    </Container>
  </div>
);
