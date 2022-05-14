import React from "react";
import { Container, Row, Col } from "react-bootstrap"

export const HomeHero: React.FC = () => (
  <div id="hero">
    <Container>
      <Row>
        <Col lg={{ span: 8, offset: 2 }} className="text-center">
          <h1>Completely <span>Free, Open-Source</span><br />Apps for Churches.</h1>
          <br />
          <a href="/contribute" className="btn btn-info">Lean How You Can Get Involved</a>
        </Col>
      </Row>
    </Container>
  </div>
)
