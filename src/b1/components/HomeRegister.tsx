import * as React from "react";
import { ErrorMessages } from "../../components";
import { Register } from "@churchapps/apphelper";
import { Container, Box, Typography, Grid } from "@mui/material";

export function HomeRegister() {
  const [customErrors, setCustomErrors] = React.useState<string[]>([]);

  return (
    <div id="register">
      <Container fixed>
        <Box sx={{ textAlign: "center" }}>
          <Typography component="h2" sx={{ fontSize: "32px", fontWeight: 700, lineHeight: 1.2, marginBottom: "20px" }}>Register <span>for Free</span></Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <p>These are just some examples of what your church can do with the B1 Church mobile app.  You can also embed any web page you wish such as your church's website, or registration forms.  You can also easily embed the Bible and small group lessons from <a href="https://lessons.church/">lessons.church</a>.</p>
            <p>This is a <b><u>completely free</u></b> service offered to churches by <a href="https://livecs.org/">Live Church Solutions</a>, a 501(c)(3) organization with EIN 45-5349618, that was founded in 2012 with the goal of helping small churches with their technical needs.</p>
            <p>If you would like to help support our mission of enabling churches to thrive with technology solutions, please consider <a href="https://livecs.org/partner/">partnering with us</a>.</p>
          </Grid>
          <Grid item md={6}>
            <ErrorMessages errors={customErrors} />
            <div id="registerBox" className="animated pulse fast">
              <Register updateErrors={setCustomErrors} appName="B1" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
