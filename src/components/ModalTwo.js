import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

const ModalTwo = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="mt-4">
            <Button variant="primary" onClick={handleShow}>
            Learn More
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Petrophysics Equations Website - Spanish</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <p>A website built on blogger using HTML, CSS, JavaScript, Bootstrap and jQuery in Spanish language.</p>
                <p>Ideal for petrophysicists, petroleum geologists,
                    petroleum engineer, geoscientists and geology or earth sciences
                    students. You can visit it <a
                        href="https://ecuacionespetrofisica.blogspot.com/"
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

export default ModalTwo
