import React from "react";
import { Container, Grid, Button } from "@mui/material";

export const GetStarted: React.FC = () => (
  <div id="membersSection" className="homeSection alt">
    <Container fixed>
      <h2 style={{marginTop: 0, lineHeight: 1.2}}>Ready to Get Started?</h2>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <p>We've tried to make getting started as easy as possible by providing a detailed guide and videos showing exactly how to set up each product.</p>
        </Grid>
        <Grid item xs={6}>
          <p><b>Get in touch!</b> We would love to hear from you.  Join our <a href="https://join.slack.com/t/livechurchsolutions/shared_invite/zt-i88etpo5-ZZhYsQwQLVclW12DKtVflg" target="_blank" rel="noopener noreferrer">Slack channel</a> and introduce yourself or ask any questions you like.  There is almost always someone around, regardless of the time of day.</p>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Button href="/contribute/environment" variant="contained" size="medium" fullWidth disableElevation sx={{"&:focus": { outline: "none", color: "white"}, textTransform: "capitalize", fontSize: "20px"}}>Start Coding</Button>
        </Grid>
        <Grid item xs={6}>
          <Button href="https://join.slack.com/t/livechurchsolutions/shared_invite/zt-i88etpo5-ZZhYsQwQLVclW12DKtVflg" variant="contained" size="medium" color="success" fullWidth disableElevation sx={{"&:focus": { outline: "none", color: "white"}, textTransform: "capitalize", fontSize: "20px"}}>Let's Talk</Button>
        </Grid>
      </Grid>
    </Container>
  </div>
)
