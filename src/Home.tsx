import React from "react";
import { Footer, Header } from "./components"
import { HomeRegister } from "./components/HomeRegister"
import { HomeHero } from "./components/HomeHero"
import { AboutLessons } from "./components/AboutLessons"
import { AboutChums } from "./components/AboutChums"
import { AboutStreamingLive } from "./components/AboutStreamingLive"

export const Home = () => (
  <>
    <Header />
    <HomeHero />

    <AboutLessons />
    <AboutStreamingLive />
    <AboutChums />

    <HomeRegister />
    <Footer />
  </>
)
