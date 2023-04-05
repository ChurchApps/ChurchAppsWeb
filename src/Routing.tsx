import React from "react";
import { Home } from "./Home";
import { ContributePage } from "./contribute/ContributePage";
import { Privacy } from "./Privacy";
import { Terms } from "./Terms";
import { Routes, Route } from "react-router-dom";
import { EnvironmentPage } from "./environment/EnvironmentPage";
import { ChumsHome } from "./chums/ChumsHome";
import { B1Home } from "./b1/B1Home";
import { Login } from "./Login";
import { StreamingLiveHome } from "./streamingLive/StreamingLiveHome";
import { AnalyticsHelper } from "./appBase/helpers";

export const Routing: React.FC = () => {
  const location = (typeof(window) === "undefined") ? null : window.location;
  AnalyticsHelper.init();
  React.useEffect(() => { AnalyticsHelper.logPageView() }, [location]);

  const determineHome = () => {
    let result = <Home />;
    const host = window.location.hostname.toLocaleLowerCase();
    if (host.indexOf("chums.org") > -1) result = <ChumsHome />
    else if (host.indexOf("b1.church") > -1) result = <B1Home />
    else if (host.indexOf("streaminglive.church") > -1) result = <StreamingLiveHome />
    return result;
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/contribute/environment" element={<EnvironmentPage />} />
      <Route path="/contribute" element={<ContributePage />} />
      <Route path="/chums" element={<ChumsHome />} />
      <Route path="/b1" element={<B1Home />} />
      <Route path="/streamingLive" element={<StreamingLiveHome />} />
      <Route path="/" element={determineHome()} />
    </Routes>
  );
}
