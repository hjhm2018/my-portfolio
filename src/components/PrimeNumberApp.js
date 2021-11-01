import React, { useState } from "react";
import {
  FcApproval,
  FcCancel,
  FcCheckmark,
  FcCalculator,
  FcNumericalSorting12,
} from "react-icons/fc";
import { Helmet } from "react-helmet";

function PrimeNumberApp() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const checkPrimeNumber = (num) => {
    if (num === 0) {
      return setNumber("");
    }

    if (num === 1) {
      return;
    }

    if (num < 0) {
      return setResult(`No negative numbers`);
    }

    if (num === 2 || num === 3) {
      return setResult(`Prime Number`);
    }

    if (num % 2 === 0 || num % 3 === 0) {
      return setResult(`Not a Prime Number`);
    }

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return setResult(`Not a Prime Number`);
      } else {
        return setResult(`Prime Number`);
      }
    }
  };

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Prime Number Checker App</title>
        <meta name="description" content="Prime Number Checker App Page" />
      </Helmet>
      <div className="mx-auto text-center col-md-8 col-12 border p-4 mt-3 rounded">
        <h3
          className="font-italic m-2 text-center bg-dark text-white p-2"
          style={{ fontFamily: "Lucida Console, Courier New, monospace" }}
        >
          Prime Number Checker <FcCheckmark />
        </h3>

        <h4 className="m-2 p-2">
          <FcCalculator /> <FcNumericalSorting12 />
        </h4>

        <input
          type="number"
          className="px-3 py-1 text-center"
          placeholder="Write a number"
          onChange={(e) => {
            setNumber(Number(e.target.value));

            if (!number) {
              setResult("");
            }
          }}
        />
        <br />
        <button
          className="btn btn-primary mt-2"
          onClick={() => checkPrimeNumber(number)}
          disabled={
            (number && number.length < 1) ||
            (number && number <= 1) ||
            number === "" ||
            !number
          }
        >
          Check
        </button>
        <p
          className={`text-center pt-3 ${
            result === "Prime Number" ? "text-success" : "text-danger"
          } ${(number === "" || !number) && "invisible"}`}
        >
          {result === "Prime Number" ? (
            <FcApproval />
          ) : result === "Not a Prime Number" ? (
            <FcCancel />
          ) : (
            ""
          )}
          &nbsp;
          {result}
        </p>
        {number < 0 && (
          <small className="text-danger p-0 m-0">No negative numbers</small>
        )}
        {isNaN(number) && (
          <small className="text-danger p-0 m-0">Insert only numbers</small>
        )}
      </div>
      <small className="text-center font-weight-bold mx-auto d-block mt-3">
        A prime number is a natural number greater than 1 that is not a product
        of two smaller natural numbers.
      </small>
    </div>
  );
}

export default PrimeNumberApp;
