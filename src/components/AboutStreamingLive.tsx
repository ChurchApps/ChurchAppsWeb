import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap"

export const AboutStreamingLive: React.FC = () => (
  <div className="homeSection alt">
    <Container>
      <h2>Streaming Live - <span>A Live Streaming Platform for Churches</span></h2>
      <Row>
        <Col lg={8}>
          <p>The rise of COVID has created a new need that many churches did not anticipate; the need to live stream their services. Many smaller churches previously considered this to be a luxury reserved for larger churches. This is no longer the case and many churches are facing new challenges of how to do online church well.</p>
          <p>Your online church service should be more than just a video people watch, it should be an opportunity for your members and visitors to connect to each other, pray for one another and have the full rich church experience at home that they would have in person.</p>
          <p>We built Streaming Live with this goal in mind. To ensure churches can continue to meet virtually without having to sacrifice the connection that comes with in person services. And that they can do so without having to stretch already tight budgets.</p>
        </Col>
        <Col lg={4}><img src="/images/home/solutions/streaminglive.png" alt="StreamingLive" className="img-fluid" /></Col>
      </Row>
      <div className="text-center"><Button variant="success" style={{ paddingTop: 15, paddingBottom: 15, paddingLeft: 25, paddingRight: 25 }} href="https://streaminglive.church/">Start Streaming Today</Button></div>
    </Container>
  </div>
)
