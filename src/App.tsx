import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routing } from "./Routing";
import { Themes } from "./appBase/helpers";
import { UserProvider } from "./UserContext"
import { CookiesProvider } from "react-cookie";
import { CssBaseline, ThemeProvider } from "@mui/material";

const App: React.FC = () => (
  <UserProvider>
    <CookiesProvider>
      <ThemeProvider theme={Themes.BaseTheme}>
        <CssBaseline />
        <Router>
          <Routing />
        </Router>
      </ThemeProvider>
    </CookiesProvider>
  </UserProvider>
)
export default App;

