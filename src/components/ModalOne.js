import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

const ModalOne = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="mt-5">
            <Button variant="primary" onClick={handleShow}>
        Learn More
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Petrophysics Equations Website</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>A website built on blogger using HTML, CSS, JavaScript, Bootstrap and
                                                    jQuery.</p>
                    <p>Ideal for petrophysicists, petroleum geologists, petroleum engineer,
                        geoscientists and geology or earth sciences students. You can visit it &nbsp; 
                         <a href="https://petrophysicsequations.blogspot.com/"
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

export default ModalOne
