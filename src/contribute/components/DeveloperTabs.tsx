import React from "react";
import { TabNode } from "./TabNode";
import { TabReact } from "./TabReact";
import { TabBrochure } from "./TabBrochure";
import { TabMobile } from "./TabMobile";
import { TabDevOps } from "./TabDevOps";
import { TabNonTech } from "./TabNonTech";
import { Icon } from "@mui/material";

export const DeveloperTabs: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState("");

  const getTab = (keyName: string, icon: string, text: string) => {
    let className = (keyName === selectedTab) ? "nav-link active" : "nav-link";
    return <li className="nav-item" key={keyName}><a href="about:blank" onClick={e => { e.preventDefault(); setSelectedTab(keyName) }} className={className}><Icon sx={{marginRight: "4px"}}>{icon}</Icon> {text}</a></li>
  }
  let tabs = [];
  let defaultTab = "node"
  let currentTab = null;
  tabs.push(getTab("node", "javascript", "Node"));
  tabs.push(getTab("react", "apps", "React Apps"));
  tabs.push(getTab("brochure", "html", "Brochure Sites"));
  tabs.push(getTab("mobile", "mobile_friendly", "Mobile"));
  tabs.push(getTab("devops", "integration_instructions", "DevOps"));
  tabs.push(getTab("nontech", "integration_instructions", "Non-Technical"));

  if (selectedTab === "" && defaultTab !== "") setSelectedTab(defaultTab);

  switch (selectedTab) {
    case "node": currentTab = <TabNode />; break;
    case "react": currentTab = <TabReact />; break;
    case "brochure": currentTab = <TabBrochure />; break;
    case "mobile": currentTab = <TabMobile />; break;
    case "devops": currentTab = <TabDevOps />; break;
    case "nontech": currentTab = <TabNonTech />; break;
    default: currentTab = <div>Not implemented</div>; break;
  }

  return (<><ul className="nav nav-tabs">{tabs}</ul>{currentTab}</>);
}
