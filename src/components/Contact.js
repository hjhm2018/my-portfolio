import React, { useState } from "react";
import ContactForm from "./ContactForm";
import { Card, Button } from "react-bootstrap";
import image from "../images/linkedin.jpeg";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { Helmet } from "react-helmet";
import { RiContactsBookLine } from "react-icons/ri";

function Contact() {
  const [showForm, setshowForm] = useState(false);

  const buttonShow = () => {
    setshowForm(true);
  };

  const buttonHide = () => {
    setshowForm(false);
  };

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
        <meta name="description" content="Contact Page" />
      </Helmet>
      {showForm ? (
        <ContactForm hide={buttonHide} className="m-5" />
      ) : (
        <div>
          <div className="col-12 col-md-11 mx-auto px-md-4">
            <h1 className="text-center mt-2 bg-dark py-2 rounded text-white">
              Contact <RiContactsBookLine />
            </h1>
          </div>
          <div className="d-flex justify-content-center mt-2 mb-4">
            <Card className="text-center" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title className="font-weight-bold">
                  Henry Herrera
                </Card.Title>
                <Card.Text>
                  Geological Engineer - MSc.Geology - Reservoir Engineering
                  Postgraduate Diploma - Web Developer
                </Card.Text>
                <Button
                  variant="primary"
                  as="a"
                  href="http://linkedin.com/in/herrerahenry"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn <AiFillLinkedin />
                </Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-12 mt-1 mb-5 text-center">
            <button
              onClick={buttonShow}
              className="btn btn-success font-weight-bold"
            >
              Send a message <AiOutlineMail />
            </button>
          </div>
        </div>
      )}

      <div className="pb-5 mt-5 mb-5 invisible">
        This is an invisible container
      </div>
    </div>
  );
}

export default Contact;
