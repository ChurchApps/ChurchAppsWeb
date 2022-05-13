import React from "react";
import { Home } from "./Home";
import { ContributePage } from "./contribute/ContributePage";
import { Privacy } from "./Privacy";
import { Terms } from "./Terms";
import { Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga";
import { EnvironmentHelper } from "./helpers";
import { EnvironmentPage } from "./environment/EnvironmentPage";

export const Routing: React.FC = () => {
  const location = useLocation();
  if (EnvironmentHelper.GoogleAnalyticsTag !== "") {
    ReactGA.initialize(EnvironmentHelper.GoogleAnalyticsTag);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  React.useEffect(() => { if (EnvironmentHelper.GoogleAnalyticsTag !== "") ReactGA.pageview(location.pathname + location.search); }, [location]);

  return (
    <Routes>
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/contribute/environment" element={<EnvironmentPage />} />
      <Route path="/contribute" element={<ContributePage />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
