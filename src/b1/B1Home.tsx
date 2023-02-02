import React from "react";
import { FloatingSupport } from "../appBase/components";
import { HomeHero, About, HomeRegister, Header, Donate, Attendance, Directory, LiveStream } from "./components"
import "./B1Styles.css";

export const B1Home = () => {
  document.title = "B1.Church - A Completely Free Mobile App for Churches";
  return (<>
    <Header />
    <HomeHero />
    <About />
    <Donate />
    <Attendance />
    <Directory />
    <LiveStream />
    <HomeRegister />
    <FloatingSupport appName="B1" />
  </>);
}
