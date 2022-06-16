import { Button, Container, Grid } from "@mui/material";
import React from "react";

export const AboutB1: React.FC = () => (
  <div className="homeSection">
    <Container fixed>
      <Grid container spacing={3}>
        <Grid item md={9} xs={12}>
          <h2>B1.church - <span>Mobile App for Congregations.</span></h2>
          <p>A connected congregation is a growing congregation.  A mobile application for your church is one of many ways to help your congregation stay connected.</p>
          <p>B1.church (Be One Church) is a free mobile app for iOS and Android that allows provides users with easy access to tools and information for your church.  You configure which features to enable, and your congregation simply downloads the app and searches for your church.</p>
          <p>Features include easy access to your online stream with chat, a Bible for quick reference, access to a member directory, online giving, attendance reporting, access to lessons and the verse of the day.</p>
        </Grid>
        <Grid item md={3} xs={12}><img src="/images/home/solutions/b1.png" alt="StreamingLive" className="img-fluid" /></Grid>
      </Grid>
      <div className="text-center"><Button variant="contained" color="success" style={{ paddingTop: 15, paddingBottom: 15, paddingLeft: 25, paddingRight: 25 }} href="https://b1.church/">Set up Your Church</Button></div>
    </Container>
  </div>
)
