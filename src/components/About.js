import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { BiUserCircle } from "react-icons/bi";

function About() {
  let [show, setShow] = useState(true);

  let showResume = () => {
    setShow(false);
  };

  let hideResume = () => {
    setShow(true);
  };

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
        <meta name="description" content="About Page" />
      </Helmet>
      <div className="row">
        <div className="col-12 col-md-10 mx-auto">
          <h1 className="text-center mt-2 bg-dark p-2 rounded text-white ">
            About &nbsp;
            <BiUserCircle />
          </h1>
        </div>
      </div>
      <div class="row">
        <div className="col-12 col-md-10 text-center font-italic mt-3 mb-3 mx-auto">
          <p>
            My name is Henry Herrera, and I am a geological engineer turned web
            developer. I have a masters in geology and a postgraduate diploma in
            reservoir engineering.
          </p>
          <p>
            I got interested in web development due to my last engineering job
            as a software specialist. I was involved with giving tech support to
            the company’s software users, but also in the testing of new
            software updates and versions.
          </p>
          <p>
            That inspiration led me to create my own websites learning by
            watching tutorials, and then I decided to make it more formal and
            took many web development courses starting in 2017 and continuing to
            this day. By now, I have developed 2 websites and published an app
            on Google Play..
          </p>
          <p>
            I just finished a diploma program in Web and Mobile Applications
            Development at Cornerstone International Community College of
            Canada, and am currently looking for full-time job as a web
            developer.
          </p>
          <p>
            The web technologies, programming languages, libraries, frameworks,
            CMS and databases that I have used include: HTML5, CSS, Sass,
            JavaScript, jQuery, Bootstrap, React, AngularJS, Node.js, MongoDB,
            Unity, PHP & MySQL, WordPress, GatsbyJS, Contentful and Vue.js.
          </p>
          <p>
            This portfolio was built using exclusively ReactJS, but there is a
            version of this portfolio deployed at GitHub that was created using
            HTML, CSS, JavaScript and Bootstrap. You can visit that version of
            this portolio{" "}
            <a
              href="https://hjhm2018.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
      <div className="col-lg-2"></div>
      <div className="col-lg-12 text-center mb-2">
        <p>You can take a look at my resume:</p>

        {show ? (
          <button onClick={showResume} className="btn btn-info">
            Show Resume
          </button>
        ) : (
          <button onClick={hideResume} className="btn btn-danger">
            Hide Resume
          </button>
        )}
      </div>

      {show ? (
        ""
      ) : (
        <div className="col-12 col-sm-12 col-lg-10 text-center mx-auto mb-5">
          <iframe
            title="Resume"
            width="100%"
            height="480"
            src="https://drive.google.com/file/d/10g4qSpBU_2YSiSpF5Z0ismYxWjrpaaBI/preview"
          ></iframe>
        </div>
      )}

      <div className="pb-5 mt-5 mb-5 invisible">
        This is an invisible container
      </div>
    </div>
  );
}

export default About;
