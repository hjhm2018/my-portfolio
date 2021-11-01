import React, { useCallback, useState } from "react";
import {
  FcApproval,
  FcCancel,
  FcCheckmark,
  FcAlphabeticalSortingAz,
  FcAlphabeticalSortingZa,
} from "react-icons/fc";
import { Helmet } from "react-helmet";

function Palindrome() {
  const [word, setWord] = useState("");

  const checkPalindrome = useCallback(() => {
    if (word.trim() === "" || word.length <= 1) {
      return;
    }
    const firstWord = word
      .toLowerCase()
      .trim()
      .split(" ")
      .join("")
      .split(",")
      .join("");

    const secondWord = firstWord.split("").reverse().join("");

    if (firstWord === secondWord) {
      return `It's a palindrome`;
    } else if (firstWord !== secondWord) {
      return `Not a palindrome`;
    }
  }, [word]);

  checkPalindrome();

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Palindrome Checker App</title>
        <meta name="description" content="Palindrome Checker App Page" />
      </Helmet>
      <div className="mx-auto text-center col-md-8 col-12 border p-4 mt-3 rounded">
        <h3
          className="font-italic m-2 text-center bg-dark text-white p-2"
          style={{ fontFamily: "Lucida Console, Courier New, monospace" }}
        >
          Palindrome Checker <FcCheckmark />
        </h3>

        <h4 className="m-2 p-2">
          <FcAlphabeticalSortingAz /> <FcAlphabeticalSortingZa />
        </h4>

        <input
          type="text"
          className="px-3 py-1"
          placeholder="Write a word or phrase"
          onChange={(e) => setWord(e.target.value)}
          value={word}
        />
        <br />
        <p
          className={`text-center pt-3 ${
            checkPalindrome() === "It's a palindrome"
              ? "text-success"
              : "text-danger"
          }`}
        >
          {checkPalindrome() === "It's a palindrome" ? (
            <FcApproval />
          ) : checkPalindrome() === "Not a palindrome" ? (
            <FcCancel />
          ) : (
            ""
          )}
          &nbsp;
          {checkPalindrome()}
        </p>
      </div>
      <small className="text-center font-weight-bold mx-auto d-block mt-3">
        A palindrome is a word, sentence, verse, or even number that reads the
        same backward or forward.
      </small>
    </div>
  );
}

export default Palindrome;
