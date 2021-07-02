import React from "react";
import { ApiHelper, RegisterInterface, ErrorMessages, EnvironmentHelper, LoginResponseInterface, PersonInterface } from ".";
import { Row, Col, Container, Button } from "react-bootstrap"

export const HomeRegister: React.FC = () => {

  const [register, setRegister] = React.useState<RegisterInterface>({ churchName: "", displayName: "", password: "", email: "", subDomain: "" });
  const [processing, setProcessing] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [errors, setErrors] = React.useState<string[]>([]);
  const [redirectUrl, setRedirectUrl] = React.useState("");
  const [infoMessage, setInfoMessage] = React.useState([]);

  const validateEmail = (email: string) => (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email))

  const validate = () => {
    let errors: string[] = [];
    if (register.churchName === "") errors.push("Please enter your church name.")
    if (firstName === "") errors.push("Please enter your first name.")
    if (lastName === "") errors.push("Please enter your last name.")
    if (register.subDomain === "") errors.push("Please select a subdomain for your church.")
    if (register.password === "") errors.push("Please enter a password.");
    else if (register.password.length < 6) errors.push("Passwords must be at least 6 characters.");
    if (register.email === "") errors.push("Please enter your email address.");
    else if (!validateEmail(register.email)) errors.push("Please enter a valid email address");
    setErrors(errors);
    return errors.length === 0;
  }

  const handleRegister = async (e: React.MouseEvent) => {
    e.preventDefault();
    const btn = e.currentTarget;
    btn.innerHTML = "Validating..."
    btn.setAttribute("disabled", "disabled");
    if (validate()) {
      setProcessing(true);
      btn.innerHTML = "Registering. Please wait...";
      // check if user already exist and if so, return user's associated churches
      const verifyResponse = await ApiHelper.postAnonymous("/users/verifyCredentials", {email: register.email, password: register.password}, "AccessApi");
      if (verifyResponse.errors !== undefined) {
        setErrors(verifyResponse.errors);

        btn.innerHTML = "Register"
        btn.removeAttribute("disabled");
        setProcessing(false);
        return;
      }
      if (verifyResponse.churches !== undefined) {
        const churchNames = verifyResponse.churches.map((e: any) => <b>{e}</b>);
        const newChurchMessage = <>Would you like to register a new church of '<b>{register.churchName}</b>'?</>;
        setInfoMessage(["You are already associated with the following churches:", ...churchNames, newChurchMessage]);
        return;
      }

      await registerChurch();
    }

    btn.innerHTML = "Register"
    btn.removeAttribute("disabled");
    setProcessing(false);

  }

  const registerChurch = async () => {
    register.displayName = firstName + " " + lastName;

    const loginResp: LoginResponseInterface = await ApiHelper.postAnonymous("/churches/register", register, "AccessApi");
    const church = loginResp.churches[0];
    church.apis.forEach(api => { ApiHelper.setPermissions(api.keyName, api.jwt, api.permissions) });
    const { person }: { person: PersonInterface} = await ApiHelper.post("/churches/init", { user: loginResp.user }, "MembershipApi");
    await ApiHelper.post("/userchurch", { personId: person.id }, "AccessApi");

    if (loginResp.errors !== undefined) { setErrors(loginResp.errors); setInfoMessage([]) }
    else setRedirectUrl(EnvironmentHelper.AppUrl);
  }

  const getProcessing = () => {
    if (!processing) return null;
    else return <div className="alert alert-info" role="alert"><b>Registering...</b> Please wait.  This will take a few seconds.</div>
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfoMessage([])
    const val = e.currentTarget.value;
    let r = { ...register };
    switch (e.currentTarget.name) {
      case "churchName": r.churchName = val; break;
      case "firstName": setFirstName(val); break;
      case "lastName": setLastName(val); break;
      case "subDomain": r.subDomain = val.toLowerCase().replaceAll(/[^a-z0-9]/ig, ""); break;
      case "email": r.email = val; break;
      case "password": r.password = val; break;
    }
    setRegister(r);
  }

  const handleNo = () => {
    setInfoMessage([])
    setProcessing(false)
  }

  if (redirectUrl === "") {
    return (
      <div className="homeSection" id="registerSection">
        <Container>
          <div id="register"></div>

          <Row>
            <Col lg={6} className="d-none d-lg-block"><img src="/images/home/register.png" alt="register" className="img-fluid" /></Col>
            <Col lg={6}>
              <div className="title"><span>Sign up for ChurchApps</span></div>
              <h2>Register Your Church</h2>

              {getProcessing()}
              <ErrorMessages errors={errors} />
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Church Name" name="churchName" value={register.churchName} onChange={handleChange} />
              </div>
              <div className="form-group">
                <div className="input-group">
                  <input type="text" name="subDomain" className="form-control" placeholder="yourchurch" value={register.subDomain} onChange={handleChange} />
                  <div className="input-group-append"><span className="input-group-text">.churchapps.org</span></div>
                </div>
              </div>
              <Row>
                <Col>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="First Name" name="firstName" value={firstName} onChange={handleChange} />
                  </div>
                </Col>
                <Col>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Last Name" name="lastName" value={lastName} onChange={handleChange} />
                  </div>
                </Col>
              </Row>

              <div className="form-group">
                <input type="text" className="form-control" placeholder="Email" name="email" value={register.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" name="password" value={register.password} onChange={handleChange} />
              </div>
              <ErrorMessages errors={infoMessage} />
              {
                infoMessage.length > 0 && (
                  <Row className="mb-3">
                    <Col><Button variant="danger" block onClick={handleNo}>No</Button></Col>
                    <Col><Button variant="success" block onClick={registerChurch}>Yes</Button></Col>
                  </Row>
                )
              }

              { infoMessage.length === 0 && <Button variant="success" block onClick={handleRegister}>Register for Free</Button>}

            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    window.location.href = redirectUrl;
    return (<></>);
  }
}
