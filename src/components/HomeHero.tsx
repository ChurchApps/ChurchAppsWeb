import React from "react";
import { Container, Grid } from "@mui/material";

export const HomeHero: React.FC = () => (
  <div id="hero">
    <Container fixed>
      <Grid container spacing={3}>
        <Grid md={2} sm={0} />
        <Grid item md={8} className="text-center">
          <h1>Completely <span>Free, Open-Source</span><br />Apps for Churches.</h1>
          <br />
          <iframe style={{ border: 0, marginBottom: 20 }} width="560" height="315" src="https://www.youtube.com/embed/GjfACqs0xA8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          <a href="/contribute" className="btn btn-info btn-lg">Lean How You Can Get Involved</a>
        </Grid>
      </Grid>
    </Container>
  </div>
)
