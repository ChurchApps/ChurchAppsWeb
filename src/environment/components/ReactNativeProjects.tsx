import React from "react";
import { Container, Row, Col } from "react-bootstrap"

export const ReactNativeProjects: React.FC = () => (
  <div id="mobile" className="homeSection alt">
    <Container>
      <h2>Mobile Project Setup</h2>
      <Row>
        <Col lg={9}>
          <p>
            All of the mobile device projects are built in React Native.  This allows us to have a single codebase for iOS and Android.
            At this time B1 is available on both platforms while LessonsScreen and ChumsCheckin are available for Android only, but offered in both the Google Play and Amazon Fire stores.
          </p>
          <ol dir="auto">
            <li>Set up the corresponding website and apis first.</li>
            <li>Clone the appropriate repo from GitHub.</li>
            <li>Install the dependencies with: <code>npm install</code></li>
            <li>Run <code>npm start</code> to start the React Native server</li>
            <li>Open the /android folder in Android Studio and run on an emulator or device.</li>
            <li>
              Run <code>adb shell input keyevent 82</code> to open the developer menu.
              Go to settings, Debug server host and enter YourIP:8081. Restart the app and it should connect to the react server and work properly.
            </li>
          </ol>
        </Col>
        <Col lg={3}>
          <table className="table table-sm">
            <thead>
              <tr>
                <th>Project</th>
                <th>Port</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/B1Mobile/" target="_blank" rel="noreferrer">B1Mobile</a></td>
                <td>8081</td>
              </tr>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/ChumsCheckin/" target="_blank" rel="noreferrer">ChumsCheckin</a></td>
                <td>8081</td>
              </tr>
              <tr>
                <td><a href="https://github.com/LiveChurchSolutions/LessonsScreen/" target="_blank" rel="noreferrer">LessonsScreen</a></td>
                <td>8081</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  </div>
);
