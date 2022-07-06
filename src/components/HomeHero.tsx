import React from "react";
import { Container, Grid, Button } from "@mui/material";

export const HomeHero: React.FC = () => (
  <div id="hero">
    <Container fixed>
      <Grid container sx={{textAlign: "center"}}>
        <Grid item md={8} sx={{margin: "0 auto"}}>
          <h1 style={{fontSize: "40px", lineHeight: 1.2, marginTop: 0}}>Completely <span>Free, Open-Source</span><br />Apps for Churches.</h1>
          <br />
          <iframe style={{ border: 0, marginBottom: 20, maxWidth: "100%" }} width="560" height="315" src="https://www.youtube.com/embed/GjfACqs0xA8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          <Button href="/contribute" variant="contained" size="medium" disableElevation sx={{"&:focus": { outline: "none", color: "white"}, textTransform: "capitalize", fontSize: "20px"}}>Lean How You Can Get Involved</Button>
        </Grid>
      </Grid>
    </Container>
  </div>
)
