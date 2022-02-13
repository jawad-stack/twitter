import React, { useEffect } from "react";
import Slider from "react-rangeslider";
// To include the default styles
import "react-rangeslider/lib/index.css";
import { IMAGES } from "../../assets/images/index.js";
import "../../assets/styles/index.css";
import {
  Button,
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Image,
  Form,
  ListGroup,
} from "react-bootstrap";
function LandingPage() {
  useEffect(() => {
    document.title = "INNOVA";
  }, []);
  
  constructor(props, context) {
    super(props, context);
    this.state = {
      horizontal: 10,
    };
  }

  handleChangeHorizontal = (value) => {
    this.setState({
      horizontal: value,
    });
  };
  const { horizontal } = this.state;
  const horizontalLabels = {
    0: "1 month",
    25: "6 Months",
    50: "1 Year",
    75: "1.5",
    100: "2+ Years",
  };
  const formatkg = (value) => value + " kg";
  function onSubmit(data) {}
  return (
    <div>
      <div className="section-1">
        <Container fluid className="py-4">
          <Navbar className="justify-content-between">
            <Navbar.Brand href="#home">
              <Image
                src={IMAGES.LOGO}
                className="d-inline-block align-top w-75"
                alt="Innova logo"
              />
            </Navbar.Brand>
            <Form inline className="d-flex">
              <Button
                className="btn-bg-login mx-2 px-4"
                // style={{
                //   "background-color": "black",
                //   color: "white",
                //   left: "30px",
                // }}
              >
                Login
              </Button>
              <Button
                className="primary-bg-btn px-4"
                // style={{
                //   "background-color": "#fcc2c2",
                //   color: "black",
                // }}
              >
                Pricing
              </Button>
            </Form>
          </Navbar>
          <Row>
            <Col
              className="d-flex flex-column align-items-start justify-content-center mx-auto"
              md={5}
            >
              <p className="top-section-text">
                Welcome to <span style={{ color: "#fcc2c2" }}>INNOVA</span>,
                Telemedicine at its best.
                <br />
                Safe, Simple, Efficient.
              </p>
              <p>
                Innova prioritizes value-based integrated remote patient care by
                bridging the patient-provider through through tele-consultations
                in these challenging times.
              </p>
              <Button
                variant="primary"
                className="mx-auto px-5 py-2 rounded"
                style={{
                  "background-color": "#fcc2c2",
                  color: "white",
                  // width: "370px",
                  // height: "80px",
                }}
              >
                Request a Demo
              </Button>
            </Col>
            <Col
              className="d-flex align-items-top justify-content-center"
              md={5}
              m-0
            >
              <div>
                <div>
                  <Image
                    src={IMAGES.TABLETSCREEN}
                    className="w-100 align-items-start"
                  ></Image>
                </div>

                {/* <div className="d-flex align-items-end justify-content-center">
                <p
                  style={{
                    top: "370px",
                    left: "110px",
                  }}
                >
                  Scroll down to explore
                </p>
                <Image
                  src={IMAGES.SCROLLDOWNBUTTON}
                  style={{ top: "420px" }}
                ></Image>
              </div> */}
              </div>
            </Col>
            <Col
              className="d-flex align-items-center justify-content-end"
              md={2}
            >
              <p>
                <Image className="my-1" src={IMAGES.FBLOGO} /> Facebook
                <br />
                <Image className="my-1" src={IMAGES.INSTAGRAMLOGO} /> Instagram
                <br />
                <Image className="my-1" src={IMAGES.LINKEDINLOGO} /> LinkedIn
                <br />
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ==================================Sections 2 ===================================*/}
      {/* ==================================Sections 2 ===================================*/}
      {/* ==================================Sections 2 ===================================*/}
      {/* ==================================Sections 2 ===================================*/}

      <div className="py-4 section-2">
        <Container>
          <div>
            <Row
              style={{
                color: "white",
                "line-height": "50px",
              }}
              className="d-flex flex-column justify-content-center align-items-center text-center"
            >
              <Row>
                <h1 className="font-weight-bolder">
                  Reach more patients with an effortless
                  <br />
                  Telemedicine Solutions
                </h1>
              </Row>
              <Row>
                <p className="mx-auto">Customizable across all Specialties</p>
              </Row>
            </Row>
            <Row>
              <Col className="align-items-center">
                <ul>
                  <li>
                    <Image className="my-1 mr-3" src={IMAGES.LISTSTYLEICON} />
                    Ready to Use Platform
                  </li>
                  <li>
                    <Image className="my-1 mr-3" src={IMAGES.LISTSTYLEICON} />
                    Add on features available on request
                  </li>
                  <li>
                    <Image className="my-1 mr-3" src={IMAGES.LISTSTYLEICON} />
                    Low monthly subscription fee
                  </li>
                  <li>
                    <Image className="my-1 mr-3" src={IMAGES.LISTSTYLEICON} />
                    No coding required
                  </li>
                  <li>
                    <Image className="my-1 mr-3" src={IMAGES.LISTSTYLEICON} />
                    User friendly interface
                  </li>
                  <li>
                    <Image className="my-1 mr-3" src={IMAGES.LISTSTYLEICON} />
                    Time-saver
                  </li>
                </ul>
              </Col>
              <Col className="d-flex justify-content-center">
                <Image
                  className="my-1 rounded"
                  src={IMAGES.DOCTOR}
                  style={{ width: "100%" }}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      {/* ==================================Sections 3 ===================================*/}
      {/* ==================================Sections 3 ===================================*/}
      {/* ==================================Sections 3 ===================================*/}
      {/* ==================================Sections 3 ===================================*/}

      <div className="section-3">
        <Row className="justify-content-center align-items-center text-center py-4 mx-0">
          <Row>
            <h1 className="font-weight-bolder">HIGH LEVEL FEATURES</h1>
          </Row>
        </Row>
        <Row className="mx-0">
          <Col
            className="d-flex justify-content-center align-items-center w-100"
            style={{ width: "100%", backgroundColor: "#feefef" }}
          >
            <Image
              fluid
              className="my-1 rounded"
              src={IMAGES.SECTION3LEFT}
              style={{
                width: "85%",
              }}
            />
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "#e5e5e5" }}
          >
            <Image
              fluid
              className="my-1 rounded align-items-center justify-content-center"
              src={IMAGES.SECTION3RIGHT}
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
      </div>
      {/* ==================================Sections 4 ===================================*/}
      {/* ==================================Sections 4 ===================================*/}
      {/* ==================================Sections 4 ===================================*/}
      {/* ==================================Sections 4 ===================================*/}

      <div className="section-4">
        <Row className="mx-0">
          <Row className="font-weight-bolder d-flex flex-column justify-content-center align-items-center text-center mx-auto py-4">
            <h1 className="font-weight-bolder">Robust Integration</h1>
          </Row>
          <Row className="mx-0">
            <Col
              className="d-flex justify-content-center"
              style={{ width: "100%", backgroundColor: "#e5e5e5" }}
            >
              <Image
                className="my-1 rounded"
                src={IMAGES.SECTION4LEFT}
                style={{ width: "100%" }}
              />
            </Col>
            <Col
              className="d-flex justify-content-center align-items-center"
              style={{ width: "100%", backgroundColor: "#feefef" }}
            >
              <Image
                className="my-1 rounded"
                src={IMAGES.SECTION4RIGHT}
                style={{
                  width: "80%",
                }}
              />
            </Col>
          </Row>
        </Row>
      </div>

      {/* ==================================Sections 5 ===================================*/}
      {/* ==================================Sections 5 ===================================*/}
      {/* ==================================Sections 5 ===================================*/}
      {/* ==================================Sections 5 ===================================*/}
      <div className="section-5">
        <Container fluid>
          <Row className="mx-0 py-5 align-items-center">
            <Col md={7} className="">
              <Row className="align-items-center justify-content-end text-right text-justify">
                <Col md={6} className="my-2 p-2 chat-bg-patient">
                  <h6 className="font-weight-bolder">Patient</h6>
                  <div className="">
                    Innova prioritizes value-based integrated remote patient
                    careby bridging the patient-provider through through
                    tele-consultations in these challenging times.
                  </div>
                </Col>
                <Col md={1}>
                  <Image
                    fluid
                    className="my-1 rounded"
                    src={IMAGES.SECTION5CHATWOMANPIC}
                  />
                </Col>
              </Row>
              <Row className="align-items-center justify-content-start">
                <Col md={1}>
                  <Image
                    fluid
                    className="my-1 rounded"
                    src={IMAGES.SECTION5CHATDOCTORPIC}
                  />
                </Col>
                <Col md={6} className="my-2 px-0 chat-bg-doctor">
                  <div className="p-2">
                    <span className="font-weight-bolder">Doctor</span>
                    <br></br>
                    Innova prioritizes value-based integrated remote patient
                    careby bridging the patient-provider through through
                    tele-consultations in these challenging times.
                  </div>
                </Col>
              </Row>
              <Row className="align-items-center justify-content-end text-right text-justify">
                <Col md={6} className="my-2 px-0 chat-bg-patient">
                  <div className="p-2">
                    <span className="font-weight-bolder">Patient</span>
                    <br></br>
                    Innova prioritizes value-based integrated remote patient
                    careby bridging the patient-provider through through
                    tele-consultations in these challenging times.
                  </div>
                </Col>
                <Col md={1}>
                  <Image
                    fluid
                    className="my-1 rounded"
                    src={IMAGES.SECTION5CHATWOMANPIC}
                  />
                </Col>
              </Row>
              <Row className="align-items-center justify-content-start">
                <Col md={1}>
                  <Image
                    fluid
                    className="my-1 rounded"
                    src={IMAGES.SECTION5CHATDOCTORPIC}
                  />
                </Col>
                <Col md={6} className="my-2 px-0 chat-bg-doctor  text-justify">
                  <div className="p-2">
                    <span className="font-weight-bolder">Doctor</span>
                    <br></br>
                    Innova prioritizes value-based integrated remote patient
                    careby bridging the patient-provider through through
                    tele-consultations in these challenging times.
                  </div>
                </Col>
              </Row>
              <Row className="align-items-center justify-content-end text-right text-justify">
                <Col md={6} className="my-2 px-0 chat-bg-patient">
                  <div className="p-2">
                    <span className="font-weight-bolder">Patient</span>
                    <br></br>Innova prioritizes value-based integrated remote
                    patient careby bridging the patient-provider through through
                    tele-consultations in these challenging times.
                  </div>
                </Col>
                <Col md={1}>
                  <Image
                    fluid
                    className="my-1 rounded"
                    src={IMAGES.SECTION5CHATWOMANPIC}
                  />
                </Col>
              </Row>
              <Row className="align-items-center justify-content-start">
                <Col md={1}>
                  <Image
                    fluid
                    className="my-1 rounded"
                    src={IMAGES.SECTION5CHATDOCTORPIC}
                  />
                </Col>
                <Col md={6} className="my-2 px-0 chat-bg-doctor text-justify">
                  <div className="p-2">
                    <span className="font-weight-bolder">Doctor</span> <br></br>
                    Innova prioritizes value-based integrated remote patient
                    careby bridging the patient-provider through through
                    tele-consultations in these challenging times.
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={5} className="p-0">
              <Image
                fluid
                className="my-1 rounded"
                src={IMAGES.SECTION5RIGHT}
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* ==================================Sections 6 ===================================*/}
      {/* ==================================Sections 6 ===================================*/}
      {/* ==================================Sections 6 ===================================*/}
      {/* ==================================Sections 6 ===================================*/}
      <div className="section6">
        <h2
          className="d-flex justify-content-center align-items-center py-4"
          // style={{ backgroundColor: "#09857C", color: "#fff" }}
        >
          Request a cost estimate
        </h2>
        <Container fluid>
          <Form className="" oninput="range-value.value=(parseInt.value)">
            <Row className="justify-content-between">
              <Col md={12} className="my-3 font-weight-bolder">
                1. What type of software solution would you like to develop with
                us?
                {/* <br /> */}
              </Col>
              <Col md={3}>
                <Form.Check
                  inline
                  label="Desktop"
                  name="group1"
                  type="checkbox"
                />
              </Col>
              <Col md={3}>
                <Form.Check
                  inline
                  label="Mobile"
                  name="group1"
                  type="checkbox"
                />
              </Col>
              <Col md={3}>
                <Form.Check inline label="Web" name="group1" type="checkbox" />
              </Col>
              <Col md={3}>
                <Form.Check
                  inline
                  label="Consultancy Needed"
                  name="group1"
                  type="checkbox"
                />
              </Col>
            </Row>
            <Row className="justify-content-between my-2">
              <Col md={12} className="my-3 font-weight-bolder">
                2. What is the current stage of your software development
                process?
                {/* <br /> */}
              </Col>
              <Col md={3}>
                <Form.Check inline label="Idea" name="group1" type="checkbox" />
              </Col>
              <Col md={3}>
                <Form.Check
                  inline
                  label="Prototype/Specification"
                  name="group1"
                  type="checkbox"
                />
              </Col>
              <Col md={3}>
                <Form.Check
                  inline
                  label="Designed solution"
                  name="group1"
                  type="checkbox"
                />
              </Col>
              <Col md={3}>
                <Form.Check inline label="MVP" name="group1" type="checkbox" />
              </Col>
            </Row>
            <Row className="justify-content-between my-2">
              <Col md={12} className="my-3 font-weight-bolder">
                3. Do you need a professional consultation from any of the
                specialists below?
                {/* <br /> */}
              </Col>
              <Col md={3}>
                <Form.Check
                  inline
                  label="Project Manager"
                  name="group1"
                  type="checkbox"
                />
              </Col>
              <Col md={3}>
                <Form.Check
                  inline
                  label="Business Analyst"
                  name="group1"
                  type="checkbox"
                />
              </Col>
              <Col md={3}>
                <Form.Check
                  inline
                  label="UI/UX Designer"
                  name="group1"
                  type="checkbox"
                />
              </Col>
              <Col md={3}>
                <Form.Check
                  inline
                  label="Architect"
                  name="group1"
                  type="checkbox"
                />
              </Col>
            </Row>
            <Row className="justify-content-between my-2 mx-0">
              <Col md={12} className="my-3 font-weight-bolder">
                4. What is the expected duration of your project?
                {/* <br /> */}
              </Col>
              <Col md={12}>
                <div className="slider custom-labels">
                  <Slider
                    min={0}
                    max={100}
                    value={horizontal}
                    labels={horizontalLabels}
                    format={formatkg}
                    handleLabel={horizontal}
                    onChange={this.handleChangeHorizontal}
                  />
                  <div className="value">{formatkg(horizontal)}</div>
                  <hr />
                </div>
              </Col>
            </Row>
            <Col md={12} className="justify-content-between my-2">
              <Button className="px-4">Get Price</Button>
            </Col>
          </Form>
        </Container>
      </div>

      {/* ==================================Sections 7 ===================================*/}
      {/* ==================================Sections 7 ===================================*/}
      {/* ==================================Sections 7 ===================================*/}
      {/* ==================================Sections 7 ===================================*/}
      <Container fluid>
        <Form className="my-5 section7 p-3 rounded">
          <h1>Contact form</h1>
          <Row>
            <Col md={3}>
              <Form.Control type="text" placeholder="YOUR NAME" />
            </Col>
            <Col md={3}>
              <Form.Control type="text" placeholder="EMAIL ADDRESS" />
            </Col>
            <Col md={3}>
              <Form.Control type="text" placeholder="COMAPANY SIZE" />
            </Col>
          </Row>
          <Row>
            <Col md={9}>
              <textarea
                className="mt-2 w-100 rounded"
                type="text-area"
                placeholder="Any other details?"
                rows="5"
              />
            </Col>
          </Row>
          <Button className="px-5 mt-3 font-weight-bolder">Submit</Button>
        </Form>
      </Container>

      {/* ==================================Sections 7 ===================================*/}
      {/* ==================================Sections 7 ===================================*/}
      {/* ==================================Sections 7 ===================================*/}
      {/* ==================================Sections 7 ===================================*/}
      <div className="section8 pt-5">
        <Container fluid>
          <Row>
            <Col md={6}>
              <Image
                src={IMAGES.FOOTERLOGO}
                className="d-inline-block align-top w-25"
                alt="Innova logo"
              />
            </Col>
            <Col md={2} className="my-3 font-weight-bolder">
              <Image src={IMAGES.NORTHAMERICALOGO} alt="Innova logo" />
              NORTH AMERICA
            </Col>
            <Col md={2} className="my-3 font-weight-bolder">
              <Image src={IMAGES.MENALOGO} className="" alt="Innova logo" />
              MENA
            </Col>
            <Col md={2} className="my-3 font-weight-bolder">
              <Image src={IMAGES.EUROPELOGO} className="" alt="Innova logo" />
              EUROPE
            </Col>
            <Row className="mx-0">
              <Col md={4}>
                Innova prioritizes value-based integrated remote patient care by
                bridging the patient-provider through through tele-consultations
                in these challenging times.
              </Col>
            </Row>
            <Col
              md={6}
              className="d-flex justify-content-start align-items-end"
            >
              <Image className="m-1" src={IMAGES.FOOTERFBLOGO} />
              <Image className="m-1" src={IMAGES.FOOTERINSTAGRAMLOGO} />
              <Image className="m-1" src={IMAGES.FOOTERLINKEDINLOGO} />
            </Col>
            <Col
              md={6}
              className="d-flex flex-column justify-content-right align-items-end w-100"
            >
              <p>
                <Image className="mr-1" src={IMAGES.WEBSITELOGO} />
                www.theinnovacare.com
                <br />
                <Image className="mr-1" src={IMAGES.EMAILLOGO} />
                business@xevensolutions.com
                <br />
                <Image className="mr-1" src={IMAGES.ADDRESSLOGO} /> Dr East
                Stroudsburg,Pennsylvania USA
                <br />
              </p>
            </Col>
          </Row>
        </Container>
        <hr></hr>
        <Container fluid>
          <Row className="mx-0 my-2">
            <Col md={6}>
              Copyright ©2021 INNOVA. All Rights Reserved (Privacy and Terms)
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              A Product by <a href=""> Xeven Solutions</a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default LandingPage;
