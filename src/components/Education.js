import React from "react";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import udoImage from "../images/udo.png";
import uhImage from "../images/uh.png";
import ubaImage from "../images/uba.png";
import cornerstoneImage from "../images/cornerstone.png";
import { Helmet } from "react-helmet";
import { FaUserGraduate } from "react-icons/fa";

function Education() {
  return (
    <div className="mx-auto col-lg-8 pt-2 mb-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Education</title>
        <meta name="description" content="Education Page" />
      </Helmet>
      <h1 className="text-center bg-dark p-2 rounded text-white">
        Education <FaUserGraduate />
      </h1>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header className="bg-dark">
            <Accordion.Toggle
              className="text-light"
              as={Button}
              variant="link"
              eventKey="0"
            >
              Co-Op Diploma
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div className="row">
                <div className="col-4 col-md-2">
                  <img
                    className="pt-3"
                    width="100%"
                    src={cornerstoneImage}
                    alt={cornerstoneImage}
                  />
                </div>
                <div className="col-8 col-md-10">
                  <p>
                    <span className="font-weight-bold">
                      Web and Mobile Applications Development Co-Op Diploma{" "}
                    </span>{" "}
                    - Cornerstone International Community College of Canada,
                    Vancouver, British Columbia. September 2019 - September 2020
                  </p>
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="bg-dark">
            <Accordion.Toggle
              className="text-light"
              as={Button}
              variant="link"
              eventKey="1"
            >
              Undergraduate
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <div className="row">
                <div className="col-4 col-md-2">
                  <img width="100%" src={udoImage} alt={udoImage} />
                </div>
                <div className="col-8 col-md-10 pt-1 pt-md-4">
                  <p>
                    <span className="font-weight-bold">
                      Bachelor of Science in Geological Engineering
                    </span>{" "}
                    - Universidad de Oriente (Eastern University), Venezuela.
                    2003 - 2009
                  </p>
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="bg-dark">
            <Accordion.Toggle
              className="text-light"
              as={Button}
              variant="link"
              eventKey="2"
            >
              Postgraduate
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <div className="row pb-4">
                <div className="col-4 col-md-2">
                  <img width="100%" src={ubaImage} alt={ubaImage} />
                </div>
                <div className="col-8 col-md-10 pt-1 pt-md-3">
                  <p>
                    <span className="font-weight-bold">
                      Postgraduate Diploma in Reservoir Engineering
                    </span>{" "}
                    - Universidad de Buenos Aires, Argentina. 2016 - 2017{" "}
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-4 col-md-2">
                  <img width="100%" src={uhImage} alt={uhImage} />
                </div>
                <div className="col-8 col-md-10 pt-1 pt-md-5">
                  <p>
                    <span className="font-weight-bold">
                      Master of Science in Geology
                    </span>{" "}
                    - University of Houston, Houston, Texas. 2011 - 2013{" "}
                  </p>
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="bg-dark">
            <Accordion.Toggle
              className="text-light"
              as={Button}
              variant="link"
              eventKey="3"
            >
              Web Development
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <ul>
                <li>
                  <span className="font-weight-bold">
                    Advanced Web Developer- Full Stack Course
                  </span>
                  . Universidad Tecnológica Nacional, Argentina, 2018
                </li>
                <li>
                  <span className="font-weight-bold">PHP & MySQL Diploma</span>.
                  Universidad Tecnológica Nacional, Argentina, 2018{" "}
                </li>
                <li>
                  <span className="font-weight-bold">
                    Mobile Development Diploma
                  </span>
                  . Universidad Tecnológica Nacional, Argentina, 2018{" "}
                </li>
                <li>
                  <span className="font-weight-bold">
                    Web Development Short Career
                  </span>
                  . IT Master, Argentina, 2018{" "}
                </li>
                <li>
                  <span className="font-weight-bold">
                    Front-End Web Development Course
                  </span>
                  . Educación IT, Argentina, 2018
                </li>
                <li>
                  <span className="font-weight-bold">
                    Web Development Course
                  </span>
                  . Google Activate, 2017
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header className="bg-dark">
            <Accordion.Toggle
              className="text-light"
              as={Button}
              variant="link"
              eventKey="4"
            >
              Skills
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <ul>
                <li>
                  <span className="font-weight-bold">Web Development:</span>{" "}
                  HTML5, CSS, JavaScript, Sass, jQuery, Bootstrap, React,
                  AngularJS, Node.js, MongoDB, Unity, PHP & MySQL, WordPress,
                  GatsbyJS, Contentful, GraphQL, Vue.js
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <div className="pb-5 mt-5 mb-5 invisible">
        This is an invisible container
      </div>
    </div>
  );
}

export default Education;
