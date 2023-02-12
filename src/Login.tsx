import React from "react";
import { useCookies } from "react-cookie";
import UserContext from "./UserContext";
import { LoginPage } from "./appBase/pageComponents/LoginPage";
import { EnvironmentHelper } from "./helpers"
import { UserHelper } from "./appBase/helpers"
import { Box } from "@mui/material";

export const Login: React.FC = (props: any) => {
  const [cookies] = useCookies(["jwt"]);
  const context = React.useContext(UserContext);

  let search = new URLSearchParams(window.location?.search);
  let jwt = search.get("jwt") || cookies.jwt;
  let auth = search.get("auth");
  if (!jwt) jwt = "";
  if (!auth) auth = "";

  const getAppName = () => {
    let result = "B1";
    if (window.location.host.indexOf("streaminglive.church") > -1) result = "streamingLive";
    return result;
  }

  const getUrl = () => {
    let url = EnvironmentHelper.B1SubUrl.replace("{key}", UserHelper.currentUserChurch.church.subDomain) + "/login?jwt=" + UserHelper.currentUserChurch.jwt;
    const appName = getAppName();
    if (appName === "streamingLive") url = EnvironmentHelper.SLSubUrl.replace("{key}", UserHelper.currentUserChurch.church.subDomain) + "/login?jwt=" + UserHelper.currentUserChurch.jwt;
    return url;
  }

  const handleLogin = () => {
    window.location.href = getUrl();
  }

  return (
    <Box sx={{ backgroundColor: "#EEEEEE", minHeight: "100vh", padding: "0 15px" }}>
      <LoginPage auth={auth} context={context} jwt={jwt} appName={getAppName()} loginSuccessOverride={handleLogin} />
    </Box>
  );

};
