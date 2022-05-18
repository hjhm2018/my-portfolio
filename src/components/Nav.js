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
import PrimeNumberApp from "./PrimeNumberApp";
import RemindMeApp from "./RemindMeApp";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import ScrollToTop from "../utilities/ScrollToTop";

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
            <Nav.Link
              className="d-none"
              as={Link}
              to="/projects/earthquakeapp"
              eventKey={2}
            >
              Earthquake
            </Nav.Link>
            <Nav.Link
              className="d-none"
              as={Link}
              to="/projects/weatherapp"
              eventKey={2}
            >
              Weather
            </Nav.Link>
            <Nav.Link
              className="d-none"
              as={Link}
              to="/projects/reactfilter"
              eventKey={2}
            >
              React Filter
            </Nav.Link>
            <Nav.Link
              className="d-none"
              as={Link}
              to="/projects/bmicalculator"
              eventKey={2}
            >
              {" "}
              BMI Calculator
            </Nav.Link>
            <Nav.Link
              className="d-none"
              as={Link}
              to="/projects/fakenews"
              eventKey={2}
            >
              Fakenews
            </Nav.Link>
            <Nav.Link
              className="d-none"
              as={Link}
              to="/projects/birthday"
              eventKey={2}
            >
              BirthdayApp
            </Nav.Link>
            <Nav.Link
              className="d-none"
              as={Link}
              to="/projects/cryptocurrencyapp"
              eventKey={2}
            >
              Cryptocurrency App
            </Nav.Link>
            <Nav.Link
              className="d-none"
              as={Link}
              to="/projects/randombibleversesapp"
              eventKey={2}
            >
              Random Bible Verses App
            </Nav.Link>
            <Nav.Link
              className="d-none"
              as={Link}
              to="/projects/palindromechecker"
              eventKey={2}
            >
              Palindrome Checker App
            </Nav.Link>

            <Nav.Link
              className="d-none"
              as={Link}
              to="/projects/primenumberchecker"
              eventKey={2}
            >
              Prime Number Checker App
            </Nav.Link>
            <Nav.Link
              className="d-none"
              as={Link}
              to="/projects/remindmeapp"
              eventKey={2}
            >
              Remind Me App
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" eventKey={2}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" eventKey={2}>
              Contact
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
      <ScrollToTop />
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
        <Route path="/projects/earthquakeapp">
          <Earthquake />
        </Route>
        <Route path="/projects/weatherapp">
          <Weather />
        </Route>
        <Route path="/projects/reactfilter">
          <ReactFilter />
        </Route>
        <Route path="/projects/bmicalculator">
          <Imc />
        </Route>
        <Route path="/projects/fakenews">
          <Fakenews />
        </Route>
        <Route path="/projects/birthday">
          <BirthdayApp />
        </Route>
        <Route path="/projects/cryptocurrencyapp">
          <CryptocurrencyApp />
        </Route>
        <Route path="/projects/randombibleversesapp">
          <RandomBibleVersesApp />
        </Route>
        <Route path="/projects/palindromechecker">
          <Palindrome />
        </Route>
        <Route path="/projects/primenumberchecker">
          <PrimeNumberApp />
        </Route>
        <Route path="/projects/remindmeapp">
          <RemindMeApp />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default nav;
