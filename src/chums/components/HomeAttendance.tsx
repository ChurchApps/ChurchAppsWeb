import { Container, Grid } from "@mui/material";
import React from "react";

export const HomeAttendance: React.FC = () => (
  <div className="homeSection alt" id="attendanceSection">
    <Container fixed>
      <div className="title"><span>Self-Serve Interface</span></div>
      <h2>Check-in and Attendance</h2>
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <ul>
            <li>Ensuring the safety of the kids entrusted to your youth and childhood ministries is paramount for any church.</li>
            <li>Having a check-in system helps ensure that kids get returned to the adults who originally checked them in by matching a unique generated code on the child's name tag with a matching code on the adult's check-in receipt.</li>
            <li>Our app is designed to be a self-serve check-in interface, freeing up time for your volunteers to engage with the children, instead of managing attendance.</li>
            <li>Members simply search for their family by phone number and select which services will be attended. The app then prints labels and check-in receipts automatically.</li>
            <li>Church budgets are tight.  That's why our app runs on Android tablets which are readily available for under $80 and can print wirelessly to label printers so that multiple check-in stations can share a single printer.</li>
            <li>All check-in information is automatically entered into the attendance system, freeing up time that your office staff would otherwise spend having to manually track attendance.</li>
          </ul>
        </Grid>
        <Grid item md={6} xs={12}><img src="/images/chums/home/checkin.png" alt="check-in" /></Grid>
      </Grid>
    </Container>
  </div>
)
