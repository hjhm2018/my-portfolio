import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div>
      <div className="fixed-bottom bg-dark text-light text-center p-2 font-weight-bold">
        Made by Henry Herrera{" "}
        <a
          className="text-light p-1"
          href="http://linkedin.com/in/herrerahenry"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
        <a
          className="text-light p-1"
          href="http://github.com/hjhm2018"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>{" "}
      </div>
    </div>
  );
}

export default Footer;
