import React from "react";
import { Container, Row, Col } from "react-bootstrap"

export const WaysToHelp: React.FC = () => {
    return (
        <div className="homeSection">
            <Container>
                <Row>
                    <Col lg={8}>
                        <h2>Ways You Can Help</h2>
                        <h3>Developers</h3>
                        <p>With a primary goal of producing open-source software for churches, we always need developers.  Most of our projects utilize a MERN stack (MySQL, Express, React, Node), with the mobile apps using React Native.  Even if you lack experience in these solutions, there are other development opportunities that are vanilla HTML/CSS/JavaScript, testing and DevOps.</p>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}
