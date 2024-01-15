import React from "react";
import { Container, Grid, Typography } from "@mui/material";

export const NpmProjects: React.FC = () => (
  <div id="npm" className="homeSection">
    <Container fixed>
      <Typography sx={{lineHeight: 1.2, marginTop: 0}} component="h2">NPM Project Setup</Typography>
      <p>
        We have four projects that contain reusable code that is shared across the other projects.  These are:
        <li><a href="https://github.com/LiveChurchSolutions/Helpers/">@churchapps/helpers</a> - Code that is useful across platform.  Examples include working with arrays, currency, dates, error handling, users, and donations.</li>
        <li><a href="https://github.com/LiveChurchSolutions/ApiHelper/">@churchapps/apihelper</a> - Node.js helper functions.  Includes error logging, authentication, a base class for controllers, MySql, email, and encryption.</li>
        <li><a href="https://github.com/LiveChurchSolutions/AppHelper/">@churchapps/apphelper</a> - React and Next.js helper functions.  Includes code for calling APIs, analytics, file upload, url slugs, and web sockets.</li>
        <li><a href="https://github.com/LiveChurchSolutions/MobileHelper/">@churchapps/mobilehelper</a> - ReactNative helper functions.  Includes code for calling APIs, App Center, mobile styling and dimensions and validation.</li>
      </p>
      <p>Building these projects is as simple as running. <code>npm i</code> and <code>npm build</code></p>
      <h3>Testing</h3>
      <p>The easiest way to test is with npm link:</p>
      <ol>
        <li>After making changes run `npm run build` followed by `npm link` to expose the package locally.</li>
        <li>In your test project run `@npm link @churchapps/mobilehelper` or the name of the package you wish to test.</li>
        <li>Rerun both after changes.</li>
      </ol>
      <p><i><b>Note:</b>  On occassion NPM link just fails to work.  The workaround for now is a batch file to manually compile the changes and place them in the node_modules folder</i></p>
      <code>cd AppHelper</code><br />
      <code>call npm run build</code><br />
      <code>cd dist</code><br />
      <code>xcopy * d:\sourcecode\lcs\b1\b1app\node_modules\@churchapps\apphelper\dist\ /s /e /y</code><br />
      <code>cd ..</code><br />
      <code>cd src</code><br />
      <code>xcopy * d:\sourcecode\lcs\b1\b1app\node_modules\@churchapps\apphelper\src\ /s /e /y</code><br />
      <code>cd ..</code><br />
      <code>cd ..</code><br />
      <code>rmdir d:\sourcecode\lcs\b1\b1app\.next\cache /s /q</code><br />
      <code>echo "Done"</code><br />

      <h3>Deployment</h3>
      <p>You must have permission on npmjs to deploy.  If you do, the steps are:</p>
      <ol>
        <li>Update the version number in package.json</li>
        <li>Run <code>npm run build</code></li>
        <li>Run <code>`npm publish --access=public`</code></li>
      </ol>

    </Container>
  </div>
);
