import React from "react";
import { Container, Row, Col } from "react-bootstrap"

export const TabNode: React.FC = () => {
    return (
        <div className="contributeTab">
            <h3>Node.js APIs</h3>
            <p>All of our APIs are written in Node.js utilizing TypeScript.  For the most part, they revolve around key sets of functionality and data which are consumed in multiple front-end applications, although a couple are application specific.</p>

            <h4>Shared Apis</h4>
            <ul className="checkList">
                <li><a href="https://github.com/LiveChurchSolutions/AccessApi" target="_blank" rel="external">AccessApi</a> - Our core user and permission management API.  All applications utilize this for user login and granting access to individual functions within each application.</li>
                <li><a href="https://github.com/LiveChurchSolutions/MembershipApi" target="_blank" rel="external">MembershipApi</a> - Maintaining data on members and guests is key component to many of our apps.  This api is for storing information about people and groups and the relationships between them.</li>
                <li><a href="https://github.com/LiveChurchSolutions/AttendanceApi" target="_blank" rel="external">AttendanceApi</a> - Stores data on church structure (campuses, services, service times) and a history of who attended each.</li>
                <li><a href="https://github.com/LiveChurchSolutions/GivingApi" target="_blank" rel="external">GivingApi</a> - Tracks all giving and provides access to aggregate and individual reports.  This is currently being expanded to connect to payment gateways to enable online giving.</li>
            </ul>
            <h4>App Specific Apis</h4>
            <ul className="checkList">
                <li><a href="https://github.com/LiveChurchSolutions/StreamingLiveApi" target="_blank" rel="external">StreamingLiveApi</a> - An app specific API to enable churches to customize the landing page for online services.</li>
                <li><a href="https://github.com/LiveChurchSolutions/StreamingLiveChat" target="_blank" rel="external">StreamingLiveChat</a> - A WebSocket api for real-time chat currently used by StreamingLive and B1.church.</li>
                <li><a href="https://github.com/LiveChurchSolutions/B1Api" target="_blank" rel="external">B1Api</a> - Stores the configuration information for the B1 Church mobile app.</li>
            </ul>

            <h4>Open Node.js Issues</h4>
        </div>
    );
}
