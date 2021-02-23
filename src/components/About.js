import React, { useState } from "react";
// import Carousel from 'react-bootstrap/Carousel'
// import blog1 from '../images/blog1.png'
// import blog2 from '../images/blog2.png'
// import appImage from '../images/app.jpeg'

function About() {
  let [show, setShow] = useState(true);

  let showResume = () => {
    setShow(false);
  };

  let hideResume = () => {
    setShow(true);
  };

  return (
    //         <div className="d-flex justify-content-center">
    //             <Carousel className="col-md-6">
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100 carrouselImage"
    //       src={blog1}
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100 carrouselImage"
    //       src={blog2}
    //       alt="Third slide"
    //     />

    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100 carrouselImage"
    //       src={appImage}
    //       alt="Third slide"
    //     />

    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
    //         </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="text-center">About</h1>
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-8 text-center font-italic mt-3 mb-3">
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
            CMS and databases that I have used include: HTML5, CSS, SASS,
            JavaScript, jQuery, Bootstrap, ReactJS, AngularJS, NodeJS, MongoDB,
            Unity, PHP & MySQL, WordPress, GatsbyJS, and Contentful.
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
      </div>
      <div className="pb-5 mt-5 mb-5 invisible">
        This is an invisible container
      </div>
    </div>
  );
}

export default About;
