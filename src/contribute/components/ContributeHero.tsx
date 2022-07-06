import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";

export const ContributeHero: React.FC = () => (
  <div id="hero">
    <Container>
      <Grid container>
        <Grid item md={8} sx={{textAlign: "center", margin: "0 auto"}}>
          <Typography component="h1" style={{fontSize: "40px", marginTop: 0, fontWeight: "bold", lineHeight: 1.2, marginBottom: "8px"}}>Contribute to<br /><span>Completely Free, Open-Source</span><br />Apps for Churches.</Typography>
        </Grid>
      </Grid>
      <Box sx={{marginTop: "20px"}}>
        <p>At Live Church Solutions we are actively working to build a suite of free, open-source applications to meet the most common needs churches have.  Our ultimate goal is to offer a set of turn-key “church-in-a-box” solutions that meet all the technical needs of the average church.</p>
        <h4>Why Open -Source?</h4>
        <p>Collectively, the Church spends over $800 million per year on software to help manage operations.  We believe that it is possible to free up these funds to be put to much better use in directly fulfilling the mission of Christ.  This depends on Christians that God has blessed with technical ability coming together to freely offer the gifts they have been blessed with.</p>
      </Box>
    </Container>
  </div>
)
