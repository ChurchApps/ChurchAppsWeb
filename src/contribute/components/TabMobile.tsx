import React from "react";
import { GitHubIssues } from "./GitHubIssues";
import { Typography } from "@mui/material";

export const TabMobile: React.FC = () => (
  <div className="contributeTab">
    <Typography sx={{fontSize: "28px", lineHeight: 1.2, fontWeight: 500, margin: "0 0 8px 0"}} component="h3">React Native Mobile Applications</Typography>
    <p style={{margin: "0 0 16px 0"}}>Both mobile applications are written in React native in order to have a single codebase for both the iOS and Android implementations.</p>
    <ul className="checkList">
      <li><a href="https://github.com/LiveChurchSolutions/ChumsCheckin" target="_blank" rel="noopener noreferrer">ChumsCheckin</a> - A self-checkin and child pickup solution that utilizes low-cost tablets to allow members to indicate which services and groups they are attending.  The software prints name tags for children and pick-up slips for parents with matching unique codes to help ensure children are only picked up by the parents.</li>
      <li><a href="https://github.com/LiveChurchSolutions/B1Mobile" target="_blank" rel="noopener noreferrer">B1Mobile</a> - A mobile application for iOS and Android to help keep congregations connected.  It allows members to view the live stream and past services, give online, mark themselves in attendance, and view announcements.</li>
      <li><a href="https://github.com/LiveChurchSolutions/LessonsScreen" target="_blank" rel="noopener noreferrer">LessonsScreen</a> - An Android TV app to make it easy to display lessons in classrooms.</li>
    </ul>
    <GitHubIssues labels={["react-native"]} />
  </div>
)
