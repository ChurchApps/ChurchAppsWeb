import React from "react";
import { FloatingSupport } from "../appBase/components";
import { HomeHero, HomeBenefits, HomeFeatures, HomeRegister } from "./components"
import "./StreamingLive.css"

export const StreamingLiveHome = () => {
  document.title = "Streaming Live - A free platform for church service streaming."
  return (
    <>
      <HomeHero />
      <HomeBenefits />
      <HomeFeatures />
      <HomeRegister />
      <FloatingSupport appName="StreamingLive" />
    </>)
}
