import React from "react";
import Card from "react-bootstrap/Card";
import image2 from "../images/henry2.jpeg";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaUserGraduate } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { RiContactsBookLine } from "react-icons/ri";
import { GoDeviceDesktop } from "react-icons/go";
import "../App.css";

function Home() {
  return (
    <div className="col-md-8 mx-auto mt-2 mb-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <meta name="description" content="Home Page" />
      </Helmet>
      <h1 className="text-center bg-dark text-light rounded mt-1 homeTitle py-2">
        Henry Herrera - Web Developer &nbsp; <GoDeviceDesktop />
      </h1>
      <Card>
        <div className="row">
          <div className="col-md-4">
            <Card.Img src={image2} />
          </div>
          <div className="col-md-8">
            <Card.Body>
              <Card.Title>Hello!</Card.Title>
              <Card.Text className="pt-3 text-justify">
                My name is Henry Herrera, I'm a web developer and this is my
                portfolio!
              </Card.Text>
              <Card.Text className="text-justify">
                I just graduated from a Web and Mobile Development Co-Op program
                at Cornerstone International Community College of Canada in
                Vancouver.
              </Card.Text>
              <Card.Text className="text-justify">
                I am currently looking for a full-time position as a Web
                Developer!
              </Card.Text>
              <Card.Text className="mb-5 text-justify">
                If you know about an opportunity, please reach out to me!
              </Card.Text>
              <Nav.Link
                className="btn btn-dark col-lg-4 col-md-8 col-8 ml-auto mt-5"
                as={Link}
                to="/about"
                eventKey={2}
              >
                More about me...
              </Nav.Link>
            </Card.Body>
          </div>
        </div>
      </Card>
      <div className="row mt-3 mb-5">
        <div className="col-sm-12 col-md-3 mb-1">
          <Nav.Link
            className="btn btn-dark"
            as={Link}
            to="/education"
            eventKey={2}
          >
            Education &nbsp;
            <FaUserGraduate />
          </Nav.Link>
        </div>
        <div className="col-sm-12 col-md-3 mb-1">
          <Nav.Link
            className="btn btn-dark"
            as={Link}
            to="/experience"
            eventKey={2}
          >
            Experience &nbsp;
            <MdWork />
          </Nav.Link>
        </div>
        <div className="col-sm-12 col-md-3 mb-1">
          <Nav.Link
            className="btn btn-dark"
            as={Link}
            to="/projects"
            eventKey={2}
          >
            Projects &nbsp;
            <AiOutlineFolderOpen />
          </Nav.Link>
        </div>
        <div className="col-sm-12 col-md-3 mb-5">
          <Nav.Link
            className="btn btn-dark"
            as={Link}
            to="/contact"
            eventKey={2}
          >
            Contact &nbsp;
            <RiContactsBookLine />
          </Nav.Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
