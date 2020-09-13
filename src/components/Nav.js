import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Education from "./Education"
import Experience from "./Experience"
import Projects from "./Projects"


import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const nav = () => {
    return (
        <Router>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
                <Navbar.Brand className="name font-weight-bold" as={Link} to="/">Henry Herrera <span role="img" aria-label="computer emoji">&#128187;</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" eventKey={2}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" eventKey={2}>About</Nav.Link>
                        
                        <Nav.Link as={Link} to="/education" eventKey={2}>Education</Nav.Link>
                        <Nav.Link as={Link} to="/experience" eventKey={2}>Experience</Nav.Link>
                        <Nav.Link as={Link} to="/projects" eventKey={2}>Projects</Nav.Link>
                        <Nav.Link as={Link} to="/contact" eventKey={2}>Contact</Nav.Link>
                        {/* <Nav.Link as={Link} to="/projects" eventKey={2}><FontAwesomeIcon icon={['fab', 'linkedin']} /></Nav.Link>
                        <Nav.Link as={Link} to="/projects" eventKey={2}><FontAwesomeIcon icon={['fab', 'github']} /></Nav.Link> */}
                        <a className="text-light p-2" href="http://linkedin.com/in/herrerahenry" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                        <a className="text-light p-2" href="http://github.com/hjhm2018" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a>

                    </Nav>
                    


                </Navbar.Collapse>
            </Navbar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      
    </Router>
    )
}

export default nav
