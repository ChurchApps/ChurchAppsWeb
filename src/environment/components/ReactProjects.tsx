import React from "react";
import { Container, Row, Col } from "react-bootstrap"

export const ReactProjects: React.FC = () => (
  <div id="web" className="homeSection alt">
    <Container>
      <h2>Web Project Setup</h2>
      <Row>
        <Col lg={9}>
          <p>See <a href="https://youtu.be/5zsEJEp6yMw" target="_blank" rel="noreferrer">setup video</a>.</p>
          <p>
            All of the web projects are coded in React with Typescript and also have a similar setup process.  Each of the React
            projects depend on the Core Apis above and possibly an app specific API.  You can follow the setup instructions above
            to set those up, or simply point to the staging servers which are listed in the <code>dotenv.sample.txt</code> files.
          </p>
          <p>
            There are two projects for each product a "Web" project that is a simple brochure website explaining what it is and an "App" product which is the actual application.
            In general you won't need to set up the web projects on your local machine unless you plan on editing them.  To setup either:
          </p>
          <ol dir="auto">
            <li>Copy <code>dotenv.sample.txt</code> to <code>.env</code> and updated it to point to the appropriate API urls.</li>
            <li>Pull the <a href="https://github.com/LiveChurchSolutions/AppBase" target="_blank" rel="noreferrer">appBase</a> submodule with: <code>git submodule init &amp;&amp; git submodule update</code>.<br />
              <i>* The appBase repo contains shared code that is used between all of the React projects.</i>
            </li>
            <li>Install the dependencies with: <code>npm install</code></li>
            <li>run <code>npm start</code> to launch the project.</li>
          </ol>
        </Col>
        <Col lg={3}>
          <table className="table table-sm">
            <thead>
              <tr>
                <th>Website</th>
                <th>Port</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/ChumsWeb/" target="_blank" rel="noreferrer">ChumsWeb</a></td>
                <td>3100</td>
              </tr>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/ChumsApp/" target="_blank" rel="noreferrer">ChumsApp</a></td>
                <td>3101</td>
              </tr>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/ChumsTransfer/" target="_blank" rel="noreferrer">ChumsTransfer</a></td>
                <td>3102</td>
              </tr>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/StreamingLiveWeb/" target="_blank" rel="noreferrer">StreamingLiveWeb</a></td>
                <td>3200</td>
              </tr>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/StreamingLiveApp/" target="_blank" rel="noreferrer">StreamingLiveApp</a></td>
                <td>3201</td>
              </tr>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/B1Web/" target="_blank" rel="noreferrer">B1Web</a></td>
                <td>3300</td>
              </tr>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/B1App/" target="_blank" rel="noreferrer">B1App</a></td>
                <td>3301</td>
              </tr>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/ChurchAppsWeb/" target="_blank" rel="noreferrer">ChurchAppsWeb</a></td>
                <td>3400</td>
              </tr>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/AccountsApp/" target="_blank" rel="noreferrer">AccountsApp</a></td>
                <td>3401</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <h3>Node.js Project Setup</h3>
      <Row>
        <Col lg={9}>
          <p>
            There is a single project that uses Node.js instead of React.  It is <a href="https://lessons.church/">Lessons.church</a>.  The reason
            for the different framework is Lessons.church is more of a database-driven content-based site instead of a web application like the others.
            Very fast page load times and SEO optimization is very important and Node.js enables us to pre-render all the pages and serve largely static
            HTML, where React does not.  The two languages are nearly identical similar though and it's easy to switch between them.  To set up the Lessons.church app:
          </p>
          <ol dir="auto">
            <li>Copy <code>dotenv.sample.txt</code> to <code>.env</code> and updated it to point to the appropriate API urls.</li>
            <li>Pull the <a href="https://github.com/LiveChurchSolutions/AppBase">appBase</a> submodule with: <code>git submodule init &amp;&amp; git submodule update</code>.<br />
              <i>* The appBase repo contains shared code that is used between all of the React projects.</i>
            </li>
            <li>Install the dependencies with: <code>npm install</code></li>
            <li>run <code>npm run dev</code> to launch the project.</li>
          </ol>
        </Col>
        <Col lg={3}>
          <table className="table table-sm">
            <thead>
              <tr>
                <th>Website</th>
                <th>Port</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/LessonsApp/" target="_blank" rel="noreferrer">LessonsApp</a></td>
                <td>3000</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  </div>
);
