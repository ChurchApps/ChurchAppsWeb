import React from "react";
import { Container, Row, Col } from "react-bootstrap"

export const Solutions: React.FC = () => {
    return (
        <div id="membersSection" className="homeSection alt">
            <Container>
                <Row>
                    <Col lg={8}>
                        <h2>Our Solutions</h2>
                        <ul className="checkList">
                            <li><b>CHUMS</b> (<u>Chu</u>rch <u>M</u>anagement <u>S</u>oftware) – This is the backend office component to enable churches to track key data such as members, groups, attendance, giving, and shepherding progress.</li>
                            <li><b>CHUMS Checkin</b> – A self-checkin and child pickup solution that utilizes low-cost tablets to allow members to indicate which services and groups they are attending.  The software prints name tags for children and pick-up slips for parents with matching unique codes to help ensure children are only picked up by the parents.</li>
                            <li><b>StreamingLive</b> – An online platform that wraps a live stream from popular platforms such as YouTube, Facebook and Vimeo with content and resources to help keep the church connected to one another.  This includes a live chat feature with private prayer requests, the ability to embed sermon notes and provide links to giving, next steps and other common needs.</li>
                            <li><b>B1 Church App</b> – A mobile application for iOS and Android to help keep congregations connected.  It allows members to view the live stream and past services, give online, mark themselves in attendance, and view announcements.</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
