import React from "react";
import { Footer, Header } from "./components"
import { HomeRegister } from "./components/HomeRegister"
import { HomeHero } from "./components/HomeHero"
import { AboutLessons } from "./components/AboutLessons"
import { AboutChums } from "./components/AboutChums"
import { AboutStreamingLive } from "./components/AboutStreamingLive"
import { AboutB1 } from "./components/AboutB1";
import { FloatingSupport } from "@churchapps/apphelper";

export const Home = () => (
  <>
    <Header />
    <HomeHero />
    <AboutChums />
    <AboutLessons />
    <AboutB1 />
    <AboutStreamingLive />
    <HomeRegister />
    <Footer />
    <FloatingSupport appName="ChurchApps" />
  </>
)
