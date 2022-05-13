import React from "react";
import { Container, Row, Col } from "react-bootstrap"

export const CypressProjects: React.FC = () => (
  <>
    <a id="test"></a>
    <div id="membersSection" className="homeSection alt">
      <Container>
        <h2>Cypress Test Setup</h2>
        <Row>
          <Col lg={9}>
            <p>See <a href="https://youtu.be/yp53i_27mYA" target="_blank" rel="noreferrer">setup video</a>.</p>
            <p>
              We have automated test scripts for some of the projects to validate all code changes.  These run automatically on any commits to master.
              To set up your dev environment:
            </p>
            <ol dir="auto">
              <li>Follow the guide to get the app you wish to test running on your machine.</li>
              <li>Pull the <a href="https://github.com/LiveChurchSolutions/AppBase" target="_blank" rel="noreferrer">appBase</a> submodule with: <code>git submodule init &amp;&amp; git submodule update</code>.<br />
                <i>* The appBase repo contains shared code that is used between all of the React projects.</i>
              </li>
              <li>Install the dependencies with: <code>npm install</code></li>
              <li>Copy <code>cypress.env.json.template</code> environment file to <code>cypress.env.json</code> and adjust as needed.</li>
            </ol>
            <h3>Running the Tests Locally</h3>
            <ol dir="auto">
              <li>Launch GUI with <code>npm run cy:open</code></li>
              <li>Click on a script to run a block of tests</li>
              <li>While trying to debug one particular test, it's helpful to comment out the calls to the other tests in the block so just the one script being debugged runs.</li>
            </ol>
          </Col>
          <Col lg={3}>
            <table className="table table-sm">
              <thead>
                <tr>
                  <th>Project</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="https://github.com/LiveChurchSolutions/ChumsTests/" target="_blank" rel="noreferrer">ChumsTests</a></td>
                </tr>
                <tr>
                  <td><a href="https://github.com/LiveChurchSolutions/StreamingLiveTests/" target="_blank" rel="noreferrer">StreamingLiveTests</a></td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  </>
)
