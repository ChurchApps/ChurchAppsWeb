import React from "react";
import { Typography } from "@mui/material";

export const TabDevOps: React.FC = () => (
  <div className="contributeTab">
    <Typography sx={{fontSize: "28px", lineHeight: 1.2, fontWeight: 500, margin: "0 0 8px 0"}} component="h3">DevOps</Typography>
    <p style={{margin: "0 0 16px 0"}}>In addition to the developer tasks, we can always use help from those with DevOps experience.  Some common needs include:</p>
    <ul className="checkList">
      <li>Writing automated Cypress test scripts.</li>
      <li>Continuous Integration Deployment with GitHub actions.</li>
      <li>Using Docker to make developer setup and self-hosting as easy as possible</li>
    </ul>
  </div>
)
