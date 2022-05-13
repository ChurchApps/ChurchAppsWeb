import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Footer, Header } from "../contribute/components"
import { ApiProjects } from "./components/ApiProjects";
import { CreateAccount } from "./components/CreateAccount";
import { CypressProjects } from "./components/CypressProjects";
import { DockerSetup } from "./components/DockerSetup";
import { ReactNativeProjects } from "./components/ReactNativeProjects";
import { ReactProjects } from "./components/ReactProjects";

export const EnvironmentPage = () => (
  <>
    <Header />
    <div id="hero">
      <Container>
        <h1 className="text-center">Development Environment Setup</h1>
        <p>The following is a guide for how to set up your development environment for each of the projects.</p>
        <p>Jump to section:</p>
        <ul>
          <li><a href="#api">API Projects</a></li>
          <li><a href="#web">Web Projects</a></li>
          <li><a href="#mobile">Mobile Projects</a></li>
          <li><a href="#docker">Docker</a></li>
          <li><a href="#test">Test Scripts</a></li>
          <li><a href="#account">Create an Account</a></li>
        </ul>

      </Container>
    </div>
    <ApiProjects />
    <ReactProjects />
    <ReactNativeProjects />
    <DockerSetup />
    <CypressProjects />
    <CreateAccount />

    <Footer />
  </>
)
