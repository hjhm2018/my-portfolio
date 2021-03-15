import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Earthquake from "./Earthquake";
import Weather from "./Weather";
import ReactFilter from "./ReactFilter";
import Imc from "./Imc";
import Fakenews from "./Fakenews";
import BirthdayApp from "./BirthdayApp";
import CryptocurrencyApp from "./CryptocurrencyApp";
import RandomBibleVersesApp from "./RandomBibleVersesApp";
import Palindrome from "./Palindrome";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const nav = () => {
  return (
    <Router>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="sticky-top"
      >
        <Navbar.Brand className="name font-weight-bold" as={Link} to="/">
          Henry Herrera{" "}
          <span role="img" aria-label="computer emoji">
            &#128187;
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" eventKey={2}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" eventKey={2}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/education" eventKey={2}>
              Education
            </Nav.Link>
            <Nav.Link as={Link} to="/experience" eventKey={2}>
              Experience
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" eventKey={2}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" eventKey={2}>
              Contact
            </Nav.Link>
            <Nav.Link
              className="d-none"
              as={Link}
              to="/earthquakeapp"
              eventKey={2}
            >
              Earthquake
            </Nav.Link>
            <Nav.Link
              className="d-none"
              as={Link}
              to="/weatherapp"
              eventKey={2}
            >
              Weather
            </Nav.Link>
            <Nav.Link
              className="d-none"
              as={Link}
              to="/reactfilter"
              eventKey={2}
            >
              React Filter
            </Nav.Link>
            <Nav.Link
              className="d-none"
              as={Link}
              to="/bmicalculator"
              eventKey={2}
            >
              {" "}
              BMI Calculator
            </Nav.Link>
            <Nav.Link className="d-none" as={Link} to="/fakenews" eventKey={2}>
              Fakenews
            </Nav.Link>
            <Nav.Link className="d-none" as={Link} to="/birthday" eventKey={2}>
              BirthdayApp
            </Nav.Link>
            <Nav.Link
              className="d-none"
              as={Link}
              to="/cryptocurrencyapp"
              eventKey={2}
            >
              Cryptocurrency App
            </Nav.Link>
            <Nav.Link
              className="d-none"
              as={Link}
              to="/randombibleversesapp"
              eventKey={2}
            >
              Random Bible Verses App
            </Nav.Link>
            <Nav.Link
              className="d-none"
              as={Link}
              to="/palindromechecker"
              eventKey={2}
            >
              Palindrome Checker App
            </Nav.Link>

            {/* <Nav.Link as={Link} to="/projects" eventKey={2}><FontAwesomeIcon icon={['fab', 'linkedin']} /></Nav.Link>
                        <Nav.Link as={Link} to="/projects" eventKey={2}><FontAwesomeIcon icon={['fab', 'github']} /></Nav.Link> */}
            <a
              className="text-light p-2"
              href="http://linkedin.com/in/herrerahenry"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
            <a
              className="text-light p-2"
              href="http://github.com/hjhm2018"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
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
        <Route path="/earthquakeapp">
          <Earthquake />
        </Route>
        <Route path="/weatherapp">
          <Weather />
        </Route>
        <Route path="/reactfilter">
          <ReactFilter />
        </Route>
        <Route path="/bmicalculator">
          <Imc />
        </Route>
        <Route path="/fakenews">
          <Fakenews />
        </Route>
        <Route path="/birthday">
          <BirthdayApp />
        </Route>
        <Route path="/cryptocurrencyapp">
          <CryptocurrencyApp />
        </Route>
        <Route path="/randombibleversesapp">
          <RandomBibleVersesApp />
        </Route>
        <Route path="/palindromechecker">
          <Palindrome />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default nav;
