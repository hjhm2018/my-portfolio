import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

const ModalThree = () => {
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
                <Modal.Title>Petrophysics Equations App</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <p>An app built using Unity and C#.</p>
                <p>Ideal for petrophysicists, petroleum
                    geologists, petroleum engineer, geoscientists and geology or earth
                    sciences
                    students. You can download from the Google Play store <a
                        href="https://play.google.com/store/apps/details?id=com.Henry.PetrophysicsCalculator"
                        target="_blank" rel="noopener noreferrer">here</a>.</p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalThree
