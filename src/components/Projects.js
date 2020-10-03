import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
// import Button from 'react-bootstrap/Button'
import ModalOne from './ModalOne'
import ModalTwo from './ModalTwo'
import ModalThree from './ModalThree'
import ModalFour from './ModalFour'
import blog1 from '../images/blog1.png'
import blog2 from '../images/blog2.png'
import appImage from '../images/app.jpeg'
import impactraction from '../images/impactraction.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Link
  } from "react-router-dom";

// import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



const Projects = () => {
    
    return (
        <div>
            <h1 className="text-center">Projects</h1>
            <CardGroup className="mb-5 d-flex justify-content-around">
                <div className="row justify-content-center">
                <Card className="col-lg-4" style={{width: "18rem"}}>
                    <Card.Img className="pt-2" variant="top" src={blog1} />
                    <Card.Body>
                        <Card.Title>Petrophysics Equations Website</Card.Title>
                        <Card.Text>
                        A website with the most common petrophysics equations used in the oil
                                and gas
                                industry.
                        
                        </Card.Text>
                        <ModalOne/>
                    </Card.Body>
                </Card>
                <Card className="col-lg-4" style={{width: "18rem"}}>
                    <Card.Img className="pt-2" variant="top" src={blog2} />
                    <Card.Body>
                        <Card.Title>Petrophysics Equations Website - Spanish</Card.Title>
                        <Card.Text>
                        A website with the most common petrophysics equations used in the oil
                                and gas
                                industry for Spanish speakers.
                        </Card.Text>
                        <ModalTwo/>
                    </Card.Body>
                </Card>
                <Card className="col-lg-4" style={{width: "18rem"}}>
                    <Card.Img variant="top" src={appImage} />
                    <Card.Body>
                        <Card.Title>Petrophysics Equations App</Card.Title>
                        <Card.Text>
                        An app published at Google Play with the most common petrophysics
                                equations used in
                                the oil and gas
                                industry.
                        </Card.Text>
                        <ModalThree/>
                    </Card.Body>
                </Card>
                <Card className="col-lg-4" style={{width: "18rem"}}>
                    <Card.Img variant="top" src={impactraction} />
                    <Card.Body>
                        <Card.Title>Impactraction Landing Page</Card.Title>
                        <Card.Text>
                        A landing page for a real client through the Riipen platform using a headless CMS.
                        </Card.Text>
                        <ModalFour/>
                    </Card.Body>
                </Card>
                </div>
            </CardGroup>

            <div className="col-lg-12 mt-5 text-center">
                <p>You can also take a look at my GitHub repositories: <a className="text-dark p-2" href="http://github.com/hjhm2018" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a></p>
                <p>Here are some of my project examples: </p>
                <Nav.Link className="btn btn-primary mb-2 col-4 mx-auto" as={Link} to="/earthquakeapp" eventKey={2}>Earthquake Counter App</Nav.Link>
                <Nav.Link className="btn btn-primary mb-2 col-4 mx-auto" as={Link} to="/weatherapp" eventKey={2}>Weather App</Nav.Link>
                <Nav.Link className="btn btn-primary mb-5 col-4 mx-auto" as={Link} to="/reactfilter" eventKey={2}>React Filter by Name</Nav.Link>

                
            </div>   
        </div>
    )
}

export default Projects
