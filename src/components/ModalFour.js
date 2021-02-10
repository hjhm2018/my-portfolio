import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalFour = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Learn More
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Impactraction Landing Page</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            A landing page for a real client working as a group for our final
            project at Cornerstone International Community College of Canada in
            Vancouver.
          </p>
          <p>
            The website was made using GatsbyJS and Contentful to create a
            headless CMS with the purpose of facilitating the management of the
            site content to the client.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalFour;
