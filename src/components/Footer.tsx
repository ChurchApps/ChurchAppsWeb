import React from "react";
import { Container } from "@mui/material";

export const Footer: React.FC = () => (
  <div id="footer">
    <Container sx={{textAlign: "center"}}>
      <img src="/images/logo-white.png" alt="logo" />
      <p>Phone: 918-994-2638 &nbsp; | &nbsp; support@livecs.org</p>
      <p>
        {new Date().getFullYear()} © <a href="https://livecs.org/">Live Church Solutions</a>
        <br />
                    A 501(c)(3) organization with EIN 45-5349618</p>
    </Container>
  </div>
)
