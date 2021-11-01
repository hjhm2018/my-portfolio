import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import profilePicture from "../images/profile-picture.jpeg";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import {
  MdCheckCircle,
  MdSend,
  MdFavorite,
  MdDelete,
  MdDirectionsRun,
  MdSupervisorAccount,
} from "react-icons/md";

import styles from "../Style.module.css";

function Fakenews() {
  const name = "FakeNews Bot";

  const messages = [
    {
      id: 1,
      name,
      message: `"There is a giant octopus at the roof of the Springfield Elementary School". - Bart Simpson`,
      current_date: "January 26, 2021",
    },
    {
      id: 2,
      name,
      message: `"Rhynos are born from eggs". - Homer Simpson`,
      current_date: "January 26, 2021",
    },
  ];

  const [messagesList, setMessagesList] = useState(messages);

  const [message, setMessage] = useState("");

  const [messageObject, setMessageObject] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  const addPost = () => {
    setMessagesList((messagesList) => [messageObject, ...messagesList]);

    setMessage("");
  };

  const deletePost = (id) => {
    let newMessageList = messagesList.filter((message) => message.id !== id);
    setMessagesList(newMessageList);
  };

  const likePost = (id) => {
    let post = messagesList.find((post) => post.id === id);

    setMessagesList(
      messagesList.map((item) => {
        if (item.id === id) {
          return { ...item, like: !post.like };
        }
        return item;
      })
    );
  };

  useEffect(() => {
    let [month, date, year] = new Date().toLocaleDateString("en-US").split("/");

    switch (month) {
      case "1":
        month = "January";
        break;
      case "2":
        month = "February";
        break;
      case "3":
        month = "March";
        break;
      case "4":
        month = "April";
        break;
      case "5":
        month = "May";
        break;
      case "6":
        month = "June";
        break;
      case "7":
        month = "July";
        break;
      case "8":
        month = "August";
        break;
      case "9":
        month = "September";
        break;
      case "10":
        month = "October";
        break;
      case "11":
        month = "November";
        break;
      case "12":
        month = "December";
        break;
      default:
        month = "January";
    }

    setMessageObject({
      id: Date.now(),
      name,
      message: message.trim(),
      current_date: `${month} ${date}, ${year}`,
    });
  }, [message, messagesList]);

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>FakeNews App</title>
        <meta name="description" content="FakeNews App Page" />
      </Helmet>
      <div className="row d-flex">
        <div
          className={`col-12 text-center font-weight-bold mt-1 ${styles.title}`}
        >
          FakeNews{" "}
          <small style={{ fontStyle: "italic" }}>
            Just a hilarious social network
          </small>
        </div>
        <div className="col-md-3 col-sm-12 text-center">
          <Card className="w-100 p-2">
            <Card.Img
              variant="top"
              className="rounded-circle w-75 mx-auto"
              src={profilePicture}
            />
            <Card.Body>
              <Card.Title>
                {name}{" "}
                <MdCheckCircle
                  className="text-primary"
                  title="Verified fake things writer"
                ></MdCheckCircle>
              </Card.Title>
              <Card.Text>I just write fake news.</Card.Text>
              <Card.Text>
                <span className="font-weight-bold">
                  <MdSupervisorAccount /> Friends:
                </span>{" "}
                Infinite
              </Card.Text>
              <Card.Text>
                <span className="font-weight-bold">
                  <MdDirectionsRun /> Followers:
                </span>{" "}
                Infinite - 1
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-sm-12">
          <Form className="col-12" onSubmit={handleSubmit}>
            <Form.Group
              className="col-12"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="d-block text-right">
                Message <small>{message.length}/150</small>
              </Form.Label>
              <Form.Control
                onChange={onChange}
                as="textarea"
                value={message}
                maxLength="150"
                placeholder="Write whatever you want..."
                className={`${message.length > 150 && "border border-danger"}`}
              />
            </Form.Group>
            <Button
              className={`d-block ml-auto mr-3`}
              variant="primary"
              onClick={addPost}
              disabled={
                message.length > 150 || (message.trim().length === 0 && true)
              }
            >
              Post <MdSend />
            </Button>
          </Form>
          <div className="col-12">
            {messagesList.map((message, index) => {
              return (
                <div key={index} className="border p-2 m-2">
                  <p>{message.message}</p>
                  <div className="col-12 d-flex">
                    <div className="col-6">
                      <MdFavorite
                        className={`${
                          message.like
                            ? `text-danger ${styles.like}`
                            : `text-secondary ${styles.like}`
                        }`}
                        onClick={(e) => {
                          likePost(message.id);
                        }}
                      />
                      &nbsp;
                      <MdDelete
                        title="delete"
                        className={styles.button}
                        onClick={() => {
                          deletePost(message.id);
                        }}
                      />
                    </div>
                    <div className="text-right text-secondary font-italic col-6">
                      {message.current_date}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-md-3 col-sm-12 pt-5">
          <div className="text-center text-secondary border font-italic pt-5 pb-5 col-12">
            <p className="pt-5 pb-5">Place your Advertisements here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fakenews;
