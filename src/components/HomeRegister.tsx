import React from "react";
import { Row, Col, Container } from "react-bootstrap"
import { ErrorMessages, EnvironmentHelper } from "./";
import { Register } from "../appBase/pageComponents/components/Register";
export function HomeRegister() {
  const [customErrors, setCustomErrors] = React.useState<string[]>([]);

  return (
    <div className="homeSection alt" id="registerSection">
      <Container>
        <div id="register"></div>

        <Row>
          <Col lg={4} className="d-none d-lg-block"><img src="/images/home/register.png" alt="register" className="img-fluid" /></Col>
          <Col lg={6}>
            <div className="title"><span>Sign up for ChurchApps</span></div>
            <h2>Create an Account</h2>
            <ErrorMessages errors={customErrors} />
            <Register updateErrors={setCustomErrors} appName="ChurchApps" appUrl={EnvironmentHelper.AppUrl} />
          </Col>
        </Row>
      </Container>
    </div>
  );

}
