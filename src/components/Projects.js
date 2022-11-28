import React, { useState } from "react";
import { Card, CardGroup, Modal, Button, Nav } from "react-bootstrap";
import blog1 from "../images/blog1.png";
import blog2 from "../images/blog2.png";
import appImage from "../images/app.jpeg";
import impactraction from "../images/impactraction.JPG";
import petrophysics from "../images/petrophysics.png";
import petrofisica from "../images/petrofisica.png";
import lists from "../images/lists.png";
import comparador from "../images/comparador.png";
import listadetareas from "../images/listadetareas.png";
import supermarketCalc from "../images/supermarketCalc.png";
import supermarketList from "../images/supermarketList.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AiOutlineFolderOpen } from "react-icons/ai";

const Projects = () => {
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (a, b) => {
    setShow(true);
    setModalContent({ title: a, description: b });
  };

  const cards = [
    {
      title: "Petrophysics Equations Website",
      image: blog1,
      content:
        "A website with the most common petrophysics equations used in the oil and gas industry.",
      modalContent: `
      <p>A website built on blogger using HTML, CSS, JavaScript, Bootstrap and
      jQuery.</p>
      <p>Ideal for petrophysicists, petroleum geologists, petroleum engineer, geoscientists and geology or earth sciences students. You can visit it &nbsp; <a href="https://petrophysicsequations.blogspot.com/"
      target="_blank" rel="noopener noreferrer">here</a>.</p>`,
    },
    {
      title: "Petrophysics Equations Website - Spanish",
      image: blog2,
      content:
        "A website with the most common petrophysics equations used in the oil and gas industry for Spanish speakers.",
      modalContent: `
      <p>A website built on blogger using HTML, CSS, JavaScript, Bootstrap and jQuery in Spanish language.</p>
      <p>Ideal for petrophysicists, petroleum geologists, petroleum engineer, geoscientists and geology or earth sciences
      students. You can visit it <a href="https://ecuacionespetrofisica.blogspot.com/"
      target="_blank" rel="noopener noreferrer">here</a>.</p>`,
    },
    {
      title: "Petrophysics Equations App",
      image: appImage,
      content:
        "An app published at Google Play with the most common petrophysics equations used in the oil and gas industry.",
      modalContent: `
      <p>An app built using Unity and C#.</p>
      <p>Ideal for petrophysicists, petroleum geologists, petroleum engineer, geoscientists and geology or earth sciences students. NO LONGER AVAILABLE FOR THE MOMENT AT THE GOOGLE PLAYSTORE`,
    },
    {
      title: "Impactraction Landing Page",
      image: impactraction,
      content:
        "A landing page for a real client through the Riipen platform using a headless CMS.",
      modalContent: `
      <p>A landing page for a real client working as a group for our final project at Cornerstone International Community College of Canada in Vancouver.</p>
      <p>The website was made using GatsbyJS and Contentful to create a headless CMS with the purpose of facilitating the management of the site content to the client.</p>`,
    },
    {
      title: "Petrophysics Equations Website - Mobile Version",
      image: petrophysics,
      content:
        "A website with the most common petrophysics equations used in the oil and gas industry, now optimized for mobile devices.",
      modalContent: `
      <p>A website built on Blogger using HTML, CSS, JavaScript, and Bootstrap. This new version works correctly on mobile phones, and it is totally responsive.</p>
      <p>Ideal for petrophysicists, petroleum geologists, petroleum engineer, geoscientists and geology or earth sciences students. You can visit it &nbsp; <a href="https://petrophysicsequations-ov.blogspot.com/"
      target="_blank" rel="noopener noreferrer">here</a>.</p>`,
    },
    {
      title: "Petrophysics Equations Website - Spanish - Mobile Version",
      image: petrofisica,
      content:
        "A website with the most common petrophysics equations used in the oil and gas industry for Spanish speakers, now optimized for mobile devices.",
      modalContent: `
      <p>A website built on Blogger using HTML, CSS, JavaScript, and Bootstrap in Spanish language. This new version works properly on mobile phones, and it is totally responsive.</p>
      <p>Ideal for petrophysicists, petroleum geologists, petroleum engineer, geoscientists, and geology or earth sciences
      students. You can visit it &nbsp; <a href="https://ecuacionespetrofisica-vm.blogspot.com/"
      target="_blank" rel="noopener noreferrer">here</a>.</p>`,
    },
    {
      title: "Helpful Lists Apps Website",
      image: lists,
      content:
        "A website with very helpful lists that can help organize people's life without downloading an app.",
      modalContent: `
      <p>A website built on Blogger using HTML, CSS, JavaScript, and Bootstrap, and it is totally responsive!. The website uses localStorage, which means that the data the users save, will be stored in their devices.</p>
      <p>It includes the following applications: Birthday Reminder App, Body Mass Index Calculator App, Recipes Creator App, Supermarket List App, and To Do List App (CRUD app). You can visit it &nbsp; <a href="https://helpful-lists.blogspot.com/"
      target="_blank" rel="noopener noreferrer">here</a>.</p>`,
    },
    {
      title: "Price Comparison App Website - Spanish",
      image: comparador,
      content:
        "A website that can help people comparing prices of different products without downloading an app.",
      modalContent: `
      <p>A website built on Blogger using HTML, CSS, and JavaScript and it is totally responsive!. The website uses localStorage, which means that the data the users save, will be stored in their devices.</p>
      <p>It was developed specially for Venezuela, but any person from any country can use it. It only needs a product name, the store name, and the payment currency. You can visit it &nbsp; <a href="https://comparador-precios-venezuela.blogspot.com/"
      target="_blank" rel="noopener noreferrer">here</a>.</p>`,
    },
    {
      title: "Todo List App Website - Spanish",
      image: listadetareas,
      content:
        "A website that can help people organizing their tasks without downloading an app.",
      modalContent: `
      <p>A website built on Blogger using HTML, CSS, and JavaScript and it is totally responsive!. The website uses localStorage, which means that the data the users save, will be stored in their devices.</p>
      <p>It helps people to organize their daily tasks and track their progress. You can visit it &nbsp; <a href="https://lista-de-tareas.blogspot.com/"
      target="_blank" rel="noopener noreferrer">here</a>.</p>`,
    },
    {
      title: "Supermarket Shopping Calculator App Website - Spanish",
      image: supermarketCalc,
      content:
        "A website that can help people calculating the accumulated cost of what they shop at the Supermarket without downloading an app.",
      modalContent: `
      <p>A website built on Blogger using HTML, CSS, and JavaScript and it is totally responsive!. The website uses localStorage, which means that the data the users save, will be stored in their devices.</p>
      <p>It helps people to calculate the total approximate cost of their shopping at the supermarket before paying. You can visit it &nbsp; <a href="https://cuenta-del-super.blogspot.com/"
      target="_blank" rel="noopener noreferrer">here</a>.</p>`,
    },
    {
      title: "Supermarket Shopping List App Website - Spanish",
      image: supermarketList,
      content:
        "A website that can help people to write down what they want to shop at the Supermarket without downloading an app.",
      modalContent: `
      <p>A website built on Blogger using HTML, CSS, and JavaScript and it is totally responsive!. The website uses localStorage, which means that the data the users save, will be stored in their devices.</p>
      <p>It helps people to make a list of the products they want to shop at the supermarket and track their progress. You can visit it &nbsp; <a href="https://lista-compras.blogspot.com/"
      target="_blank" rel="noopener noreferrer">here</a>.</p>`,
    },
  ];

  const links = [
    {
      url: "earthquakeapp",
      name: "Earthquake Counter App",
      icon: "&#x1F30E",
    },
    {
      url: "weatherapp",
      name: "Weather App",
      icon: "&#x2614;",
    },
    {
      url: "reactfilter",
      name: "React Filter by Name",
      icon: "&#x1F50E;",
    },
    {
      url: "fakenews",
      name: "FakeNews",
      icon: "&#x1F3A4;",
    },
    {
      url: "birthday",
      name: "Birthday Reminder App",
      icon: "&#x1F382;",
    },
    {
      url: "cryptocurrencyapp",
      name: "Cryptocurrencies Price App",
      icon: "&#x1F4B9;",
    },
    {
      url: "randombibleversesapp",
      name: "Random Bible Verses App",
      icon: "&#x26EA;",
    },
    {
      url: "palindromechecker",
      name: "Palindrome Checker App",
      icon: "&#x1F524;",
    },
    {
      url: "primenumberchecker",
      name: "Prime Number Checker App",
      icon: "&#x1F522;",
    },
    {
      url: "remindmeapp",
      name: "Remind Me App",
      icon: "&#x1F4C5;",
    },
    {
      url: "bmicalculator",
      name: "Calculate Body Mass Index",
      icon: "&#x1F4AA;",
    },
  ];
  return (
    <div className="mx-auto col-sm-12 col-lg-12 pt-2 mb-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects</title>
        <meta name="description" content="Projects Page" />
      </Helmet>

      <div className="col-12 col-md-9 mx-auto px-md-5">
        <h1 className="text-center bg-dark py-2 rounded text-white">
          Projects <AiOutlineFolderOpen />{" "}
        </h1>
      </div>
      <CardGroup className="mb-5 d-flex justify-content-around">
        <div className="row justify-content-center">
          {cards &&
            cards.map((card, index) => (
              <Card
                key={index}
                className="col-10 col-lg-3 mr-2 mb-2"
                style={{ width: "16rem" }}
              >
                <Card.Img
                  className="pt-2"
                  variant="top"
                  src={card.image}
                  height={250}
                  width={250}
                />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text className="text-justify">{card.content}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() =>
                      handleShow(`${card.title}`, `${card.modalContent}`)
                    }
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            ))}
        </div>
      </CardGroup>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body
          dangerouslySetInnerHTML={{ __html: modalContent.description }}
        ></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="col-lg-12 mt-5 text-center px-0">
        <p>
          You can also take a look at my GitHub repositories:{" "}
          <a
            className="text-dark p-2"
            href="http://github.com/hjhm2018"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </p>
        <p>Here are some of my project examples: </p>

        {links &&
          links
            .sort((a, b) => {
              let nameA = a.name.toUpperCase();
              let nameB = b.name.toUpperCase();

              if (nameA < nameB) {
                return -1;
              }

              if (nameA > nameB) {
                return 1;
              }

              return 0;
            })
            .map((link, index) => (
              <Nav.Link
                key={index}
                className="btn btn-primary mb-2 col-12 col-md-4 mx-auto"
                as={Link}
                to={`/projects/${link.url}`}
                eventKey={2}
              >
                {link.name}{" "}
                <span dangerouslySetInnerHTML={{ __html: link.icon }}></span>
              </Nav.Link>
            ))}
      </div>
      <div className="pb-5 mt-5 mb-5 invisible">
        This is an invisible container
      </div>
    </div>
  );
};

export default Projects;
