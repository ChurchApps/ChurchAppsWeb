import React from "react";
import { GitHubIssues } from "./GitHubIssues";
import { Typography } from "@mui/material";

export const TabNode: React.FC = () => (
  <div className="contributeTab">
    <Typography sx={{ fontSize: "28px", lineHeight: 1.2, fontWeight: 500, margin: "0 0 8px 0" }} component="h3">Node.js APIs</Typography>
    <p>All of our APIs are written in Node.js utilizing TypeScript.  For the most part, they revolve around key sets of functionality and data which are consumed in multiple front-end applications, although a couple are application specific.</p>

    <Typography sx={{ fontSize: "24px", lineHeight: 1.2, fontWeight: 500, margin: "0 0 8px 0" }} component="h4">Shared Apis</Typography>
    <ul className="checkList">
      <li><a href="https://github.com/LiveChurchSolutions/MembershipApi" target="_blank" rel="noopener noreferrer">MembershipApi</a> - Maintaining data on members and guests is key component to many of our apps.  This api is for storing information about people and groups and the relationships between them.</li>
      <li><a href="https://github.com/LiveChurchSolutions/MessagingApi" target="_blank" rel="noopener noreferrer">MessagingApi</a> - Used for comments, private messages and real-time chat</li>
      <li><a href="https://github.com/LiveChurchSolutions/ContentApi" target="_blank" rel="noopener noreferrer">ContentApi</a> - All user facing content such as pages, sermons, links, and tabs.</li>
      <li><a href="https://github.com/LiveChurchSolutions/AttendanceApi" target="_blank" rel="noopener noreferrer">AttendanceApi</a> - Stores data on church structure (campuses, services, service times) and a history of who attended each.</li>
      <li><a href="https://github.com/LiveChurchSolutions/GivingApi" target="_blank" rel="noopener noreferrer">GivingApi</a> - Tracks all giving and provides access to aggregate and individual reports.  This is currently being expanded to connect to payment gateways to enable online giving.</li>
    </ul>

    <GitHubIssues labels={["node"]} />

  </div>
)
