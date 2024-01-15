import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { GitHubIssues } from "../../contribute/components/GitHubIssues";

export const ApiProjects: React.FC = () => (
  <div id="api" className="homeSection alt">
    <Container fixed>
      <Grid container spacing={3}>
        <Grid item md={8} xs={12}>
          <Typography sx={{ lineHeight: 1.2, marginTop: 0 }} component="h2">API Project Setup</Typography>
          <p>There are a number of Core APIs that each project uses some combination of.  Each of these APIs is tied to a fully independent MySQL database with the same name.  These are:</p>
          <ul>
            <li><a href="https://github.com/LiveChurchSolutions/MembershipApi/">MembershipApi</a> - Contains information about people and groups.</li>
            <li><a href="https://github.com/LiveChurchSolutions/AttendanceApi/">AttendanceApi</a> - Contains information about campuses, services, service times, and attendance.</li>
            <li><a href="https://github.com/LiveChurchSolutions/DoingApi/">DoingApi</a> - Enables assigning tasks and defining automated processes.</li>
            <li><a href="https://github.com/LiveChurchSolutions/ContentApi/">ContentApi</a> - Contains mostly markdown information for websites and mobile content, and events.</li>
            <li><a href="https://github.com/LiveChurchSolutions/GivingApi/">GivingApi</a> - Contains donation settings and history.</li>
            <li><a href="https://github.com/LiveChurchSolutions/MessagingApi/">MessaingApi</a> - Enables notes, private messages, and real-time chat.</li>
            <li><a href="https://github.com/LiveChurchSolutions/ReportingApi/">ReportingApi</a> - Contains reports that span across multiple databases.</li>
          </ul>
          <p>In addition to these shared APIs, the lessons.church app has it's own <a href="https://github.com/LiveChurchSolutions/LessonsApi/">LessonsApi</a> that contains the content of the lessons.</p>
          <p>The setup process is the same for all the APIs.</p>
          <ol dir="auto">
            <li>Clone the appropriate repo from GitHub.</li>
            <li>Create a new MySQL database with a name matching the project (<code>access</code>, <code>membership</code>, etc).</li>
            <li>Copy <code>dotenv.sample.txt</code> to <code>.env</code> and edit it to point to your MySQL database.</li>
            <li>Install the dependencies with: <code>npm install</code></li>
            <li>Create the database tables with <code>npm run initdb</code></li>
            <li>Start the api with <code>npm run dev</code></li>
          </ol>
        </Grid>
        <Grid item md={4} xs={12}>
          <table className="table">
            <thead>
              <tr>
                <th>API</th>
                <th>Port</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/ContentApi/" target="_blank" rel="noreferrer">ContentApi</a></td>
                <td>8082</td>
              </tr>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/MembershpApi/" target="_blank" rel="noreferrer">MembershipApi</a></td>
                <td>8083</td>
              </tr>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/GivingApi/" target="_blank" rel="noreferrer">GivingApi</a></td>
                <td>8084</td>
              </tr>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/AttendanceApi/" target="_blank" rel="noreferrer">AttendanceApi</a></td>
                <td>8085</td>
              </tr>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/MessagingApi/" target="_blank" rel="noreferrer">MessagingApi</a> (REST)</td>
                <td>8086</td>
              </tr>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/MessagingApi/" target="_blank" rel="noreferrer">MessagingApi</a> (Socket)</td>
                <td>8087</td>
              </tr>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/DoingApi/" target="_blank" rel="noreferrer">DoingApi</a></td>
                <td>8088</td>
              </tr>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/ReportingApi/" target="_blank" rel="noreferrer">ReportingApi</a></td>
                <td>8089</td>
              </tr>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/LessonsApi/" target="_blank" rel="noreferrer">LessonsApi</a></td>
                <td>8090</td>
              </tr>
            </tbody>
          </table>
          <GitHubIssues labels={["node"]} />
        </Grid>
      </Grid>
    </Container>
  </div>
);
