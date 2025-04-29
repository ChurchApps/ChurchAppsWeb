import React, { useEffect } from "react";
import { Footer, Header } from "./components"
import { HomeRegister } from "./components/HomeRegister"
import { HomeHero } from "./components/HomeHero"
import { HomeAbout } from "./components/HomeAbout"
import { HomeFeatures } from "./components/HomeFeatures"
import { HomeMembers } from "./components/HomeMembers";
import { HomeGiving } from "./components/HomeGiving";
import { HomeAttendance } from "./components/HomeAttendance";
import { HomeExport } from "./components/HomeExport";
import { HomeTestimony } from "./components/HomeTestimony";
import { FloatingSupport } from "@churchapps/apphelper";
import "./ChumsVariables.css";
import "./ChumsStyles.css";

export const ChumsHome = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      <Header />
      <HomeHero />
      <HomeAbout />
      <HomeFeatures />
      <HomeMembers />
      <HomeGiving />
      <HomeAttendance />
      <HomeExport />
      <HomeTestimony />
      <HomeRegister />
      <Footer />
      <FloatingSupport appName="Chums" />
    </>
  )
}
