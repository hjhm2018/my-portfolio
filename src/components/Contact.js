import React, { useState } from "react";
import ContactForm from "./ContactForm";

function Contact() {
  const [showForm, setshowForm] = useState(false);

  const reloadPage = () => {
    window.location.reload();
  };

  const buttonShow = () => {
    setshowForm(true);
  };

  const buttonHide = () => {
    setshowForm(false);
  };

  return (
    <>
      {showForm ? (
        <ContactForm hide={buttonHide} className="m-5" />
      ) : (
        <div>
          <h1 className="text-center">Contact</h1>
          <div className="d-flex justify-content-center">
            <div
              className="LI-profile-badge"
              data-version="v1"
              data-size="medium"
              data-locale="en_US"
              data-type="horizontal"
              data-theme="dark"
              data-vanity="herrerahenry"
            >
              <a
                class="LI-simple-link"
                href="https://ca.linkedin.com/in/herrerahenry?trk=profile-badge"
              >
                Henry Herrera
              </a>
            </div>
          </div>
          <p className="col-lg-12 text-center">
            <button className=" btn btn-info" onClick={reloadPage}>
              Click me if you don't see the badge
            </button>
          </p>

          <div className="col-lg-12 mt-1 mb-5 text-center">
            <button onClick={buttonShow} class="btn btn-success">
              Send a message
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
