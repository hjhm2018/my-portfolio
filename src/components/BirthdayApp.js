import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import styles from "../Birthday.module.css";

import { MdAddCircleOutline, MdCake, MdDelete } from "react-icons/md";

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
  };

  const deleteDate = (id) => {
    let newBirthdayList = birthdayList.filter((birthday) => birthday.id !== id);
    setBirthdayList(newBirthdayList);
  };

  const deleteStorage = () => {
    sessionStorage.clear();
  };

  useEffect(() => {
    setBirthdayObject({
      id: Date.now(),
      name,
      month,
      day,
      year,
    });
  }, [name, day, month, year]);

  useEffect(() => {
    sessionStorage.setItem("list", JSON.stringify(birthdayList));
  }, [birthdayList]);

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
                  disabled={name.length > 20 || (name.length === 0 && true)}
                >
                  <MdAddCircleOutline /> Add
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </div>
        <div className="col-md-6 col-sm-12 mt-4 mx-auto">
          <Accordion>
            <Card>
              <Card.Header className="bg-dark text-center">
                <Accordion.Toggle
                  className="text-light"
                  as={Button}
                  variant="link"
                  eventKey="0"
                >
                  January
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  {birthdayList.length > 0 ? (
                    birthdayList
                      .filter((birthday) => birthday.month === "January")
                      .map((birthday, index) => {
                        return (
                          <div key={index} className="text-center">
                            <input
                              className="text-center text-light bg-dark rounded"
                              type="text"
                              value={birthday.name}
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
            <Card>
              <Card.Header className="bg-dark text-center">
                <Accordion.Toggle
                  className="text-light"
                  as={Button}
                  variant="link"
                  eventKey="1"
                >
                  February
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  {birthdayList.length > 0 ? (
                    birthdayList
                      .filter((birthday) => birthday.month === "February")
                      .map((birthday, index) => {
                        return (
                          <div key={index} className="text-center">
                            <input
                              className="text-center text-light bg-dark rounded"
                              type="text"
                              value={birthday.name}
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
            <Card>
              <Card.Header className="bg-dark text-center">
                <Accordion.Toggle
                  className="text-light"
                  as={Button}
                  variant="link"
                  eventKey="2"
                >
                  March
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  {birthdayList.length > 0 ? (
                    birthdayList
                      .filter((birthday) => birthday.month === "March")
                      .map((birthday, index) => {
                        return (
                          <div key={index} className="text-center">
                            <input
                              className="text-center text-light bg-dark rounded"
                              type="text"
                              value={birthday.name}
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
            <Card>
              <Card.Header className="bg-dark text-center">
                <Accordion.Toggle
                  className="text-light"
                  as={Button}
                  variant="link"
                  eventKey="3"
                >
                  April
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  {birthdayList.length > 0 ? (
                    birthdayList
                      .filter((birthday) => birthday.month === "April")
                      .map((birthday, index) => {
                        return (
                          <div key={index} className="text-center">
                            <input
                              className={`text-center text-light bg-dark rounded ${styles.name} mr-1`}
                              type="text"
                              value={birthday.name}
                              disabled
                            />
                            <input
                              className={`text-center text-light bg-dark rounded ${styles.day} mr-1`}
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
            <Card>
              <Card.Header className="bg-dark text-center">
                <Accordion.Toggle
                  className="text-light"
                  as={Button}
                  variant="link"
                  eventKey="4"
                >
                  May
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  {birthdayList.length > 0 ? (
                    birthdayList
                      .filter((birthday) => birthday.month === "May")
                      .map((birthday, index) => {
                        return (
                          <div key={index} className="text-center">
                            <input
                              className="text-center text-light bg-dark rounded"
                              type="text"
                              value={birthday.name}
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
            <Card>
              <Card.Header className="bg-dark text-center">
                <Accordion.Toggle
                  className="text-light"
                  as={Button}
                  variant="link"
                  eventKey="5"
                >
                  June
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
                  {birthdayList.length > 0 ? (
                    birthdayList
                      .filter((birthday) => birthday.month === "June")
                      .map((birthday, index) => {
                        return (
                          <div key={index} className="text-center">
                            <input
                              className="text-center text-light bg-dark rounded"
                              type="text"
                              value={birthday.name}
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
            <Card>
              <Card.Header className="bg-dark text-center">
                <Accordion.Toggle
                  className="text-light"
                  as={Button}
                  variant="link"
                  eventKey="6"
                >
                  July
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="6">
                <Card.Body>
                  {birthdayList.length > 0 ? (
                    birthdayList
                      .filter((birthday) => birthday.month === "July")
                      .map((birthday, index) => {
                        return (
                          <div key={index} className="text-center">
                            <input
                              className="text-center text-light bg-dark rounded"
                              type="text"
                              value={birthday.name}
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
            <Card>
              <Card.Header className="bg-dark text-center">
                <Accordion.Toggle
                  className="text-light"
                  as={Button}
                  variant="link"
                  eventKey="7"
                >
                  August
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="7">
                <Card.Body>
                  {birthdayList.length > 0 ? (
                    birthdayList
                      .filter((birthday) => birthday.month === "August")
                      .map((birthday, index) => {
                        return (
                          <div key={index} className="text-center">
                            <input
                              className="text-center text-light bg-dark rounded"
                              type="text"
                              value={birthday.name}
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
            <Card>
              <Card.Header className="bg-dark text-center">
                <Accordion.Toggle
                  className="text-light"
                  as={Button}
                  variant="link"
                  eventKey="8"
                >
                  September
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="8">
                <Card.Body>
                  {birthdayList.length > 0 ? (
                    birthdayList
                      .filter((birthday) => birthday.month === "September")
                      .map((birthday, index) => {
                        return (
                          <div key={index} className="text-center">
                            <input
                              className="text-center text-light bg-dark rounded"
                              type="text"
                              value={birthday.name}
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
            <Card>
              <Card.Header className="bg-dark text-center">
                <Accordion.Toggle
                  className="text-light"
                  as={Button}
                  variant="link"
                  eventKey="9"
                >
                  October
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="9">
                <Card.Body>
                  {birthdayList.length > 0 ? (
                    birthdayList
                      .filter((birthday) => birthday.month === "October")
                      .map((birthday, index) => {
                        return (
                          <div key={index} className="text-center">
                            <input
                              className="text-center text-light bg-dark rounded"
                              type="text"
                              value={birthday.name}
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
            <Card>
              <Card.Header className="bg-dark text-center">
                <Accordion.Toggle
                  className="text-light"
                  as={Button}
                  variant="link"
                  eventKey="10"
                >
                  November
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="10">
                <Card.Body>
                  {birthdayList.length > 0 ? (
                    birthdayList
                      .filter((birthday) => birthday.month === "November")
                      .map((birthday, index) => {
                        return (
                          <div key={index} className="text-center">
                            <input
                              className="text-center text-light bg-dark rounded"
                              type="text"
                              value={birthday.name}
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
            <Card>
              <Card.Header className="bg-dark text-center">
                <Accordion.Toggle
                  className="text-light"
                  as={Button}
                  variant="link"
                  eventKey="11"
                >
                  December
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="11">
                <Card.Body>
                  {birthdayList.length > 0 ? (
                    birthdayList
                      .filter((birthday) => birthday.month === "December")
                      .map((birthday, index) => {
                        return (
                          <div key={index} className="text-center">
                            <input
                              className="text-center text-light bg-dark rounded"
                              type="text"
                              value={birthday.name}
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
        onClick={deleteStorage}
      >
        Clear storage
      </button>
    </div>
  );
}

export default BirthdayApp;
