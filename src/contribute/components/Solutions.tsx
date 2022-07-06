import React from "react";
import { Container, Grid } from "@mui/material";

export const Solutions: React.FC = () => (
  <div id="membersSection" className="homeSection alt">
    <Container fixed>
      <h2 style={{marginTop: 0}}>Our Solutions</h2>
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <ul className="checkList">
            <li><b>CHUMS</b> (<u>Chu</u>rch <u>M</u>anagement <u>S</u>oftware) – This is the backend office component to enable churches to track key data such as members, groups, attendance, giving, and shepherding progress.</li>
            <li><b>Lessons.church</b> – High quaity church curriculum for children, youth and adults.  Includes an Android TV app for making presentation in classrooms a breeze.</li>
            <li><b>StreamingLive</b> – Wraps a church's live stream from YouTube, Facebook, Vimeo, etc with resources to help keep the members connected.  Includes a live chat feature with private prayer requests, embedable sermon notes and links to giving, next steps and other common needs.</li>
            <li><b>B1 Church App</b> – A mobile application for iOS and Android to help congregations connect.  It allows members to view the live stream and past services, give online, mark attendance, and view announcements.</li>
          </ul>
        </Grid>
        <Grid item md={6} xs={12}>
          <img src="/images/apps.png" alt="apps" />
        </Grid>
      </Grid>
    </Container>
  </div>
)
