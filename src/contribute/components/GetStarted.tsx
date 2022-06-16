import React from "react";
import { Container, Grid } from "@mui/material";

export const GetStarted: React.FC = () => (
  <div id="membersSection" className="homeSection alt">
    <Container fixed>
      <h2>Ready to Get Started?</h2>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <p>We've tried to make getting started as easy as possible by providing a detailed guide and videos showing exactly how to set up each product.</p>
        </Grid>
        <Grid item xs={6}>
          <p><b>Get in touch!</b> We would love to hear from you.  Join our <a href="https://join.slack.com/t/livechurchsolutions/shared_invite/zt-i88etpo5-ZZhYsQwQLVclW12DKtVflg" target="_blank" rel="noopener noreferrer">Slack channel</a> and introduce yourself or ask any questions you like.  There is almost always someone around, regardless of the time of day.</p>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}><a href="/contribute/environment" className="btn btn-primary btn-block btn-lg">Start Coding</a></Grid>
        <Grid item xs={6}><a href="https://join.slack.com/t/livechurchsolutions/shared_invite/zt-i88etpo5-ZZhYsQwQLVclW12DKtVflg" className="btn btn-success btn-block btn-lg">Let's Talk</a></Grid>
      </Grid>
    </Container>
  </div>
)
