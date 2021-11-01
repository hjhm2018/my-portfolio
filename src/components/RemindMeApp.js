import React, { useEffect, useState } from "react";
import { Form, Col, Row, Button, Card, CardDeck } from "react-bootstrap";
import {
  BsPlusCircle,
  BsTrash,
  BsCalendar,
  BsPencilSquare,
  BsGift,
  BsPeople,
  BsPersonCheck,
} from "react-icons/bs";
import { Helmet } from "react-helmet";

const getSessionStorage = () => {
  let list = sessionStorage.getItem("list");

  if (list) {
    return JSON.parse(sessionStorage.getItem("list"));
  } else {
    return [];
  }
};

function RemindMeApp() {
  const [reminderFilter, setReminderFilter] = useState("");

  const [reminders, setReminders] = useState(getSessionStorage());

  const [reminderType, setReminderType] = useState("");
  const [reminderDescription, setReminderDescription] = useState("");
  const [reminderDate, setReminderDate] = useState("");

  const addReminder = (e) => {
    e.preventDefault();
    setReminders((reminders) => [
      ...reminders,
      {
        id: Date.now(),
        reminderType,
        reminderDescription: reminderDescription.trim(),
        reminderDate,
      },
    ]);

    setReminderType("");
    setReminderDescription("");
    setReminderDate("");
  };

  const deleteReminder = (id) => {
    let newReminderList = reminders.filter((reminder) => reminder.id !== id);
    setReminders(newReminderList);
  };

  const deleteStorage = () => {
    sessionStorage.clear();

    window.location = "/remindmeapp";
  };

  useEffect(() => {
    sessionStorage.setItem("list", JSON.stringify(reminders));
  }, [reminders]);

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Remind Me App</title>
        <meta name="description" content="Remind Me App Page" />
      </Helmet>
      <div className="row">
        <div className="col-12 text-center bg-dark text-white rounded mt-2">
          <h1 className="font-italic">
            <BsPencilSquare /> &nbsp;Remind Me App&nbsp;
            <BsCalendar />
          </h1>
        </div>
        <div className="col-12 m-2 text-center">
          <Form className="justify-content-center">
            <Row>
              <Col sm={12} md={3}>
                <Form.Label
                  className="sr-only"
                  htmlFor="inlineFormCustomSelect"
                >
                  Preference
                </Form.Label>
                <Form.Control
                  as="select"
                  id="inlineFormCustomSelect"
                  className="mt-2"
                  onChange={(e) => setReminderType(e.target.value)}
                  value={reminderType}
                >
                  <option value="">Choose...</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Appointment">Appointment</option>
                  <option value="Meeting">Meeting</option>
                </Form.Control>
              </Col>

              <Col sm={12} md={3}>
                <Form.Label htmlFor="inputDescription" className="sr-only">
                  Description
                </Form.Label>
                <input
                  type="text"
                  className="form-control mt-2"
                  id="inputDescription"
                  placeholder="Description"
                  autoComplete="off"
                  onChange={(e) => setReminderDescription(e.target.value)}
                  value={reminderDescription}
                  maxLength="50"
                />
              </Col>
              <Col sm={12} md={3}>
                <Form.Label htmlFor="inputDate" className="sr-only">
                  Date
                </Form.Label>
                <input
                  type="date"
                  className="form-control mt-2"
                  id="inputDate"
                  onChange={(e) => setReminderDate(e.target.value)}
                  value={reminderDate}
                />
              </Col>

              <Col sm={12} md={3}>
                <Button
                  className="mt-2"
                  variant="primary"
                  disabled={
                    reminderType === "" ||
                    reminderDescription.trim() === "" ||
                    reminderDate === ""
                  }
                  onClick={(e) => addReminder(e)}
                >
                  Add Reminder <BsPlusCircle />
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="col-12 text-center">
          <div className="btn-group" role="group" aria-label="Reminder Types">
            <Button
              variant="dark"
              className="m-2 font-weight-bold"
              onClick={() => setReminderFilter("")}
            >
              All
            </Button>
            <Button
              variant="dark"
              className="m-2 font-weight-bold"
              onClick={() => setReminderFilter("Birthday")}
            >
              Birthday
            </Button>
            <Button
              variant="dark"
              className="m-2 font-weight-bold"
              onClick={() => setReminderFilter("Appointment")}
            >
              Appointment
            </Button>
            <Button
              variant="dark"
              className="m-2 font-weight-bold"
              onClick={() => setReminderFilter("Meeting")}
            >
              Meeting
            </Button>
          </div>
        </div>
        <CardDeck className="col-12 d-flex flex-wrap justify-content-around mt-3">
          {reminders.filter((reminder) =>
            reminder.reminderType?.includes(reminderFilter)
          ).length > 0 ? (
            reminders
              .filter((reminder) =>
                reminder.reminderType?.includes(reminderFilter)
              )
              .map((reminder, index) => (
                <Card
                  key={index}
                  className="col-6 col-md-6 mb-md-2"
                  style={{
                    minWidth: "200px",
                    maxWidth: "300px",
                  }}
                >
                  <Card.Body>
                    {reminderFilter === "" && (
                      <Card.Title
                        className={` ${
                          reminder.reminderType === "Appointment"
                            ? "bg-danger"
                            : reminder.reminderType === "Birthday"
                            ? "bg-primary"
                            : reminder.reminderType === "Meeting"
                            ? "bg-success"
                            : ""
                        } text-white p-2 rounded text-center mb-4`}
                      >
                        {reminder.reminderType} &nbsp;
                        {reminder.reminderType === "Appointment" ? (
                          <BsPersonCheck />
                        ) : reminder.reminderType === "Birthday" ? (
                          <BsGift />
                        ) : reminder.reminderType === "Meeting" ? (
                          <BsPeople />
                        ) : (
                          ""
                        )}
                      </Card.Title>
                    )}

                    <Card.Subtitle className="mb-2 text-muted">
                      <b>Date: </b> {reminder.reminderDate}
                    </Card.Subtitle>
                    <Card.Text>
                      <b>Description: </b>
                      {reminder.reminderDescription}
                    </Card.Text>
                    <div className="text-right">
                      <Button
                        variant="danger"
                        onClick={() => deleteReminder(reminder.id)}
                      >
                        <BsTrash />
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              ))
          ) : (
            <div className="text-center font-weight-bold p-3">
              <h2>No reminders yet</h2>
            </div>
          )}
        </CardDeck>
      </div>

      <div className="mt-5 mb-5">
        <p className="text-uppercase text-center col-sm-12 col-md-8 mx-auto mt-5 font-weight-bold font-italic pt-5">
          important note: this app stores the values you add because it is using
          session storage. Whenever you close your browser, the saved data will
          be deleted. In case you want to delete everything, click the following
          button:
        </p>
        <button
          className="btn btn-danger mx-auto d-block font-weight-bold mb-5"
          onClick={deleteStorage}
        >
          Clear storage
        </button>
      </div>
    </div>
  );
}

export default RemindMeApp;
