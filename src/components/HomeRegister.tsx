import React, { useRef } from "react";
import { ApiHelper, RegisterInterface, ErrorMessages, EnvironmentHelper, LoginResponseInterface, PersonInterface } from ".";
import { Row, Col, Container, Button, Form, InputGroup } from "react-bootstrap"
import * as yup from "yup";
import { Formik, FormikHelpers, FormikErrors } from "formik";
import { ChurchInterface } from "../helpers";

const schema = yup.object().shape({
  churchName: yup.string().required("Please enter your church name."),
  firstName: yup.string().required("Please enter your first name."),
  lastName: yup.string().required("Please enter your last name."),
  //password: yup.string().required("Please enter a password.").min(6, "Passwords must be at least 6 characters."),
  email: yup.string().required("Please enter your email address.").email("Please enter a valid email address."),
  subDomain: yup.string().required("Please select a subdomain for your church.")
})

export function HomeRegister() {
  const [customErrors, setCustomErrors] = React.useState<string[]>([]);
  const [redirectUrl, setRedirectUrl] = React.useState("");
  const [infoMessage, setInfoMessage] = React.useState([]);
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const formikRef = useRef(null);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.currentTarget.value);
  }

  const getPasswordField = () => {
    if (showPassword) return (<Form.Group>
      <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={handlePasswordChange} />
    </Form.Group>);
  }

  async function registerChurch(values: RegisterInterface, setErrors?: (errors: FormikErrors<RegisterInterface>) => void) {
    const loginResp: LoginResponseInterface = (showPassword)
      ? await ApiHelper.post("/churches/register", values, "AccessApi")
      : await ApiHelper.postAnonymous("/churches/register", values, "AccessApi");

    if (loginResp.errors) {
      let handleError = setErrors;
      if (!setErrors) handleError = formikRef.current.setErrors;
      if (loginResp.errors[0].indexOf("There is already a user") > -1 && !showPassword) {
        setShowPassword(true);
        setCustomErrors(["There is already an account for this email address.  Please enter your password."]);
      } else {
        handleError({ subDomain: loginResp.errors[0] })
        setInfoMessage([])
      }
      return
    }
    const church = loginResp.churches.filter(c => c.subDomain === values.subDomain)[0];
    church.apis.forEach(api => { ApiHelper.setPermissions(api.keyName, api.jwt, api.permissions) });
    const { person }: { person: PersonInterface } = await ApiHelper.post("/churches/init", { user: loginResp.user }, "MembershipApi");
    await ApiHelper.post("/userchurch", { personId: person.id }, "AccessApi");

    if (showPassword) setRedirectUrl(EnvironmentHelper.AppUrl + "/login");
    else setRedirectUrl(EnvironmentHelper.AppUrl + "/login?checkEmail=1");
  }

  async function handleSubmit(values: RegisterInterface, { setSubmitting, setErrors }: FormikHelpers<RegisterInterface>) {
    setCustomErrors([]);
    //check if user already exist with this email

    if (showPassword) {
      const verifyResponse: LoginResponseInterface = await ApiHelper.postAnonymous("/users/login", { email: values.email, password: password }, "AccessApi");
      if (verifyResponse.errors !== undefined) {
        setCustomErrors(verifyResponse.errors);
        return;
      }
      if (verifyResponse.churches !== undefined) {

        const church = verifyResponse.churches[0];
        console.log(church)
        console.log(ApiHelper.apiConfigs)
        ApiHelper.apiConfigs.forEach(config => {
          church.apis.forEach(api => {

            if (api.keyName === config.keyName) {
              config.jwt = api.jwt;
              console.log(config);
            }
          })
        });

        const churchNames = verifyResponse.churches.map((e: ChurchInterface) => <b>{e.name}</b>);
        const newChurchMessage = <>Would you like to register a new church of '<b>{values.churchName}</b>'?</>;
        setInfoMessage(["You are already associated with the following churches:", ...churchNames, newChurchMessage]);
        return;
      }
    }

    await registerChurch(values, setErrors);
    setSubmitting(false)
  }

  const initialValues: RegisterInterface = { churchName: "", firstName: "", lastName: "", email: "", subDomain: "", appName: "ChurchApps", appUrl: EnvironmentHelper.AppUrl };

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

              <ErrorMessages errors={customErrors} />
              <Formik validationSchema={schema} onSubmit={handleSubmit} initialValues={initialValues} innerRef={formikRef}>
                {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group>
                      <Form.Control type="text" placeholder="Church Name" name="churchName" value={values.churchName} onChange={handleChange} isInvalid={touched.churchName && !!errors.churchName} />
                      <Form.Control.Feedback type="invalid">{errors.churchName}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                      <InputGroup>
                        <Form.Control type="text" placeholder="yourchurch" name="subDomain" value={values.subDomain} onChange={handleChange} isInvalid={touched.subDomain && !!errors.subDomain} />
                        <InputGroup.Text>.churchapps.org</InputGroup.Text>
                        <Form.Control.Feedback type="invalid">{errors.subDomain}</Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    <Row>
                      <Col>
                        <Form.Group>
                          <Form.Control type="text" placeholder="First Name" name="firstName" value={values.firstName} onChange={handleChange} isInvalid={touched.firstName && !!errors.firstName} />
                          <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group>
                          <Form.Control type="text" placeholder="Last Name" name="lastName" value={values.lastName} onChange={handleChange} isInvalid={touched.lastName && !!errors.lastName} />
                          <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group>
                      <Form.Control type="email" placeholder="Email" name="email" value={values.email} onChange={handleChange} isInvalid={touched.email && !!errors.email} />
                      <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </Form.Group>
                    {getPasswordField()}
                    {
                      infoMessage.length === 0 && (
                        <Button type="submit" variant="success" block disabled={isSubmitting}>
                          {isSubmitting ? "Registering. Please wait..." : "Register for Free"}
                        </Button>
                      )
                    }

                    <ErrorMessages errors={infoMessage} />
                    {
                      infoMessage.length > 0 && (
                        <Row className="mb-3">
                          <Col><Button variant="danger" block onClick={() => setInfoMessage([])}>No</Button></Col>
                          <Col><Button variant="success" block onClick={() => registerChurch(values)}>Yes</Button></Col>
                        </Row>
                      )
                    }
                  </Form>
                )}
              </Formik>
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
