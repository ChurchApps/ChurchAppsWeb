import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { GitHubIssues } from "../../contribute/components/GitHubIssues";

export const ReactNativeProjects: React.FC = () => (
  <div id="mobile" className="homeSection">
    <Container fixed>

      <Grid container spacing={3}>
        <Grid item md={8} xs={12}>
          <Typography sx={{lineHeight: 1.2, marginTop: 0}} component="h2">Mobile Project Setup</Typography>
          <p>
            All of the mobile device projects are built in React Native.  This allows us to have a single codebase for iOS and Android.
            At this time B1 is available on both platforms while LessonsScreen and ChumsCheckin are available for Android only, but offered in both the Google Play and Amazon Fire stores.
          </p>
          <ol dir="auto">
            <li>Set up the corresponding website and APIs first.</li>
            <li>Clone the appropriate repo from GitHub.</li>
            <li>Install the dependencies with: <code>npm install</code></li>
            <li>Run <code>npm start</code> to start the React Native server</li>
            <li>Open the /android folder in Android Studio and run on an emulator or device.</li>
            <li>
              Run <code>adb shell input keyevent 82</code> to open the developer menu.
              Go to settings, Debug server host and enter YourIP:8081. Restart the app and it should connect to the react server and work properly.
            </li>
          </ol>
        </Grid>
        <Grid item md={4} xs={12}>
          <GitHubIssues labels={["react-native"]} />
        </Grid>
      </Grid>
    </Container>
  </div>
);
