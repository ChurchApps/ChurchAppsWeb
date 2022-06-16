import { Button, Container, Grid } from "@mui/material";
import React from "react";

export const AboutLessons: React.FC = () => (
  <div className="homeSection alt">
    <Container fixed>
      <h2>Lessons.church - <span>Free Curriculum  for Children and Adults</span></h2>
      <Grid container spacing={3}>
        <Grid item md={8} xs={12}>
          <p>We believe that limited church budgets should never stand in the way of teaching both children and adults the word of God in the most effective way possible. By partnering with generous creators willing to donate their work for other churches to use we are able to provide this content for your church completely free of charge.</p>
          <p>Every year the Church as a whole spends <strong>millions of dollars</strong> purchasing curriculum for classrooms. We believe by the body working together to create and distribute freely available curriculum, that money can be freed up for use in other areas. Likewise, we do not believe that budget restrictions should prevent teachers from doing the best job they possibly can. That is why we developed Lessons.church; a completely free, open-source platform for finding and managing curriculum.</p>
        </Grid>
        <Grid item md={4} xs={12}><img src="/images/home/solutions/lessons.png" alt="Lessons.church" className="img-fluid" /></Grid>
      </Grid>
      <div className="text-center"><Button variant="contained" color="success" style={{ paddingTop: 15, paddingBottom: 15, paddingLeft: 25, paddingRight: 25 }} href="https://lessons.church/">Get Your Free Content</Button></div>
    </Container>
  </div>
)
