import { Button, Container, Grid } from "@mui/material";
import React from "react";

export const AboutChums: React.FC = () => (
  <div className="homeSection">
    <Container fixed>
      <h2>CHUMS - <span>Church Management Software</span></h2>
      <Grid container spacing={3}>
        <Grid item md={8} xs={12}>
          <p>To grow efficiently, it is important that churches track key information like attendance, giving and group membership. It is also important to ensure policies such as child drop-off and pickup are being followed consistently for safety reasons, and to ensure and people you should be following up with are not falling through the cracks.</p>
          <p>Solid church management software makes this process infinitely easier by replacing printed reports, hand-written notes, and spreadsheets with a single repository for tracking everything that happens in your church.</p>
          <p>These platforms have traditionally been a significant monthly expense which is why we built CHUMS, to allow smaller churches to have the same level of professionalism as larger churches, without the expense.</p>
        </Grid>
        <Grid item md={4} xs={12}><img src="/images/home/solutions/chums.png" alt="CHUMS" className="img-fluid" /></Grid>
      </Grid>
      <div className="text-center"><Button variant="contained" color="success" style={{ paddingTop: 15, paddingBottom: 15, paddingLeft: 25, paddingRight: 25 }} href="https://chums.org/">Improve Your Workflows</Button></div>
    </Container>
  </div>
)
