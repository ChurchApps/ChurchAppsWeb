import React, { useRef } from "react";
import { ApiHelper, RegisterInterface, ErrorMessages, EnvironmentHelper, LoginResponseInterface, PersonInterface } from ".";
import { Row, Col, Container, Button, Form, InputGroup } from "react-bootstrap"
import * as yup from "yup";
import { Formik, FormikHelpers, FormikErrors } from "formik";
import { ChurchInterface } from "../helpers";

const schema = yup.object().shape({
  firstName: yup.string().required("Please enter your first name."),
  lastName: yup.string().required("Please enter your last name."),
  email: yup.string().required("Please enter your email address.").email("Please enter a valid email address.")
})

export function HomeRegister() {
  const [customErrors, setCustomErrors] = React.useState<string[]>([]);
  const [redirectUrl, setRedirectUrl] = React.useState("");
  const [infoMessage, setInfoMessage] = React.useState([]);
  const formikRef = useRef(null);

  async function registerChurch(values: RegisterInterface, setErrors?: (errors: FormikErrors<RegisterInterface>) => void) {
    const loginResp: LoginResponseInterface = await ApiHelper.postAnonymous("/churches/register", values, "AccessApi");

    if (loginResp.errors) {
      let handleError = setErrors;
      if (!setErrors) handleError = formikRef.current.setErrors;
      if (loginResp.errors[0].indexOf("There is already a user") > -1) {
        setCustomErrors(["There is already an account for this email address.  Please login."]);
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

    setRedirectUrl(EnvironmentHelper.AppUrl + "/login?checkEmail=1");
  }

  async function handleSubmit(values: RegisterInterface, { setSubmitting, setErrors }: FormikHelpers<RegisterInterface>) {
    setCustomErrors([]);
    await registerChurch(values, setErrors);
    setSubmitting(false)
  }

  const initialValues: RegisterInterface = { churchName: "", firstName: "", lastName: "", email: "", subDomain: "", appName: "ChurchApps", appUrl: EnvironmentHelper.AppUrl };

  if (redirectUrl === "") {
    return (
      <div className="homeSection alt" id="registerSection">
        <Container>
          <div id="register"></div>

          <Row>
            <Col lg={4} className="d-none d-lg-block"><img src="/images/home/register.png" alt="register" className="img-fluid" /></Col>
            <Col lg={6}>
              <div className="title"><span>Sign up for ChurchApps</span></div>
              <h2>Create an Account</h2>

              <ErrorMessages errors={customErrors} />
              <Formik validationSchema={schema} onSubmit={handleSubmit} initialValues={initialValues} innerRef={formikRef}>
                {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
                  <Form noValidate onSubmit={handleSubmit}>
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
