import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet";

import Modal from "react-bootstrap/Modal";

import styles from "../Birthday.module.css";

import {
  MdAddCircleOutline,
  MdCake,
  MdDelete,
  MdReportProblem,
  MdCheckCircle,
} from "react-icons/md";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getSessionStorage = () => {
  let list = sessionStorage.getItem("list");

  if (list) {
    return JSON.parse(sessionStorage.getItem("list"));
  } else {
    return [];
  }
};

function BirthdayApp() {
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [birthdayList, setBirthdayList] = useState(getSessionStorage());
  const [birthdayObject, setBirthdayObject] = useState({});

  //Birthday added
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    window.location.reload();
  };
  const handleShow = () => setShow(true);

  // Clear Storage Warning
  const [clearStorageWarning, setClearStorageWarning] = useState(false);
  const closeWarning = () => setClearStorageWarning(false);

  // Clear Storage Success
  const [clearStorageSuccess, setClearStorageSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addDate = (e) => {
    let newDate = e.target.value.toString();

    let [year, month, day] = newDate.split("-");

    setDay(day);
    setYear(year);

    switch (month) {
      case "01":
        setMonth("January");
        break;
      case "02":
        setMonth("February");
        break;
      case "03":
        setMonth("March");
        break;
      case "04":
        setMonth("April");
        break;
      case "05":
        setMonth("May");
        break;
      case "06":
        setMonth("June");
        break;
      case "07":
        setMonth("July");
        break;
      case "08":
        setMonth("August");
        break;
      case "09":
        setMonth("September");
        break;
      case "10":
        setMonth("October");
        break;
      case "11":
        setMonth("November");
        break;
      case "12":
        setMonth("December");
        break;
      default:
        setMonth("January");
    }
  };

  const addBirthday = () => {
    setBirthdayList((birthdayList) => [...birthdayList, birthdayObject]);
    handleShow();
  };

  const deleteDate = (id) => {
    let newBirthdayList = birthdayList.filter((birthday) => birthday.id !== id);
    setBirthdayList(newBirthdayList);
  };

  const deleteStorage = () => {
    closeWarning();
    setClearStorageSuccess(true);

    setTimeout(() => {
      sessionStorage.clear();
      setClearStorageSuccess(false);
      window.location.reload();
    }, 3000);
  };

  useEffect(() => {
    setBirthdayObject({
      id: Date.now(),
      name: name.trim(),
      month,
      day,
      year,
    });
  }, [name, day, month, year]);

  useEffect(() => {
    sessionStorage.setItem("list", JSON.stringify(birthdayList));
  }, [birthdayList]);

  if (show) {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Birthday App</title>
          <meta name="description" content="Birthday App Page" />
        </Helmet>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="bg-success" closeButton>
            <Modal.Title className="text-white">
              Success! <MdCheckCircle />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>The birthday date was added successfully.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  if (clearStorageWarning) {
    return (
      <div>
        <Modal show={clearStorageWarning} onHide={closeWarning}>
          <Modal.Header className="bg-danger" closeButton>
            <Modal.Title className="text-white">
              <MdReportProblem />
              Warning!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to delete all the saved data?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={closeWarning}>
              No
            </Button>
            <Button variant="danger" onClick={deleteStorage}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  if (clearStorageSuccess) {
    return (
      <div>
        <Modal show={clearStorageSuccess} onHide={deleteStorage}>
          <Modal.Header className="bg-success" closeButton>
            <Modal.Title className="text-white">
              Success! <MdCheckCircle />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>All data has been deleted!</p>
          </Modal.Body>
        </Modal>
      </div>
    );
  }

  return (
    <div className={`container mb-5 ${styles.bodyBackground} pb-5`}>
      <div className="row">
        <div
          className={`col-12 mx-auto text-center my-2 py-3 rounded ${styles.birthdayBackground}`}
        >
          <h1 className={`${styles.title}`}>
            <MdCake /> Birthday Reminder App
          </h1>
        </div>
        <div className="col-8 bg-dark rounded py-2 mx-auto mt-2">
          <Form onSubmit={handleSubmit}>
            <Form.Row className="align-items-center mx-auto">
              <Col sm={5} className="my-1">
                <Form.Label htmlFor="inlineFormInputName" srOnly>
                  Name
                </Form.Label>
                <Form.Control
                  id="inlineFormInputName"
                  autoComplete="off"
                  maxLength="20"
                  placeholder="Name"
                  value={name}
                  className="text-center"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Col>
              <Col sm={5} className="my-1">
                <Form.Label htmlFor="inlineFormInputGroupUsername" srOnly>
                  Username
                </Form.Label>

                <Form.Control
                  type="date"
                  className="text-center"
                  id="inlineFormInputGroupUsername"
                  onChange={(e) => {
                    addDate(e);
                  }}
                />
              </Col>
              <Col sm={2} className="my-1 text-center">
                <Button
                  type="submit"
                  onClick={() => addBirthday()}
                  disabled={
                    name.trim().length > 20 ||
                    name.trim().length === 0 ||
                    day === ""
                  }
                >
                  <MdAddCircleOutline /> Add
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </div>
        <div className="col-md-6 col-sm-12 mt-4 mx-auto">
          <Accordion>
            {months.map((month, index) => {
              return (
                <Card key={month}>
                  <Card.Header className="bg-dark text-center">
                    <Accordion.Toggle
                      className="text-light"
                      as={Button}
                      variant="link"
                      eventKey={index + 1}
                    >
                      {month}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={index + 1}>
                    <Card.Body>
                      {birthdayList.filter(
                        (birthday) => birthday.month === month
                      ).length > 0 ? (
                        birthdayList
                          .filter((birthday) => birthday.month === month)
                          .sort((a, b) =>
                            a.day > b.day
                              ? 1
                              : a.day === b.day
                              ? a.name > b.name
                                ? 1
                                : -1
                              : -1
                          )
                          .map((birthday, index) => {
                            return (
                              <div key={index} className="text-center">
                                <input
                                  className="text-center text-light bg-dark rounded"
                                  type="text"
                                  value={`${birthday.name
                                    .charAt(0)
                                    .toUpperCase()}${birthday.name.slice(1)}`}
                                  disabled
                                />
                                <input
                                  className="text-center text-light bg-dark rounded"
                                  type="text"
                                  value={birthday.day}
                                  disabled
                                />
                                &nbsp;
                                <span
                                  className={`d-inline-block border py-1 px-2 rounded ${styles.cursor} border-dark`}
                                >
                                  <MdDelete
                                    onClick={() => {
                                      deleteDate(birthday.id);
                                    }}
                                  />
                                </span>
                              </div>
                            );
                          })
                      ) : (
                        <p className="text-center">No Birthday's this month</p>
                      )}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              );
            })}
          </Accordion>
        </div>
      </div>

      <p className="text-light text-uppercase text-center col-8 mx-auto mt-5 font-weight-bold">
        important note: this app stores the values you add because it is using
        session storage. Whenever you close your browser, the saved data will be
        deleted. In case you want to delete everything, click the following
        button:
      </p>
      <button
        className="btn btn-danger mx-auto d-block"
        onClick={() => setClearStorageWarning(true)}
      >
        Clear storage
      </button>
    </div>
  );
}

export default BirthdayApp;
