import React from "react";
import { FloatingSupport } from "@churchapps/apphelper";
import { HomeHero, About, HomeRegister, Header, Donate, Attendance, Directory, LiveStream } from "./components"
import "./B1Variables.css";
import "./B1Styles.css";

export const B1Home = () => {
  document.title = "B1.Church - A Completely Free Mobile App for Churches";
  return (<div id="b1">
    <Header />
    <HomeHero />
    <About />
    <Donate />
    <Attendance />
    <Directory />
    <LiveStream />
    <HomeRegister />
    <FloatingSupport appName="B1" />
  </div>);
}
