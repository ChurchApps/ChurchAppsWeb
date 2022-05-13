import React from "react";
import { Container, Row, Col } from "react-bootstrap"

export const CreateAccount: React.FC = () => (
  <>
    <a id="account"></a>
    <div className="homeSection">
      <Container>
        <h2>Creating an Account</h2>

        <p>See <a href="https://youtu.be/LjeSzT7OXw4" target="_blank" rel="noreferrer">setup video</a>.</p>
        <p>
          On production when you create a user account it generates a temporary password and emails it to you.  Since you will not have
          a mail server set up on your dev machine, you have to do a little more work to get this temporary password:
        </p>
        <ol dir="auto">
          <li>Get the api and web project(s) running.</li>
          <li>Open the Docker drawer in VS Code and right click on AccessApi.</li>
          <li>Choose 'View Logs'.</li>
          <li>Register an account in the web app you're working with.</li>
          <li>The welcome email with your temporary password will be displayed in the log.</li>
          <li>Login with the temp password and it'll prompt you to search for a church.</li>
          <li>There are no churches in your local database yet so create a new one.</li>
        </ol>
        <p>If you wish to change your temporary password, launch the AccountsApp project, log in and manage your account.</p>

      </Container>
    </div>
  </>
)
