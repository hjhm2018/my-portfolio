import React, { useState } from "react";
import verses from "./verses";
import { BiChurch, BiBible, BiRefresh } from "react-icons/bi";
import { Helmet } from "react-helmet";

function RandomBibleVersesApp() {
  const [id, setId] = useState(1);

  console.log(verses.length);

  const generateRandomId = () => {
    setId(Math.ceil(Math.random() * Math.floor(verses.length)));
  };

  return (
    <div
      className="container pb-5"
      style={{
        backgroundColor: "#dde8f0",
        backgroundSize: "cover",
        height: "100%",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Random Bible Verse App</title>
        <meta name="description" content="Random Bible Verse App Page" />
      </Helmet>
      <div className="row">
        <div className="col-12 col-md-8 mx-auto pt-2">
          <h1
            className="text-center border border-dark mt-3 p-2 rounded col-md-10 col-sm-12 mx-auto"
            style={{
              backgroundColor: "#004581",
              color: "#97cbdc",
              fontFamily: "Brush Script MT, cursive",
            }}
          >
            <BiChurch /> &nbsp; Random Bible Verses &nbsp;
            <BiBible />
          </h1>
          <div className="col-12 text-center">
            <button
              className="btn mt-3 mb-1 font-weight-bold"
              style={{
                backgroundColor: "#018abd",
                color: "#97cbdc",
                fontFamily: "Courier New, monospace",
              }}
              onClick={generateRandomId}
            >
              Get Random Verse <BiRefresh />
            </button>
          </div>
          {verses
            .filter((verse) => verse.id === id)
            .map((verse, index) => {
              const { quote, content, background } = verse;
              return (
                <div
                  style={{
                    backgroundImage: `url("${background}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="border rounded m-4 p-5 col-sm-12 mx-auto"
                  key={index}
                >
                  <p
                    className="text-center text-white font-weight-bold"
                    style={{ fontFamily: "Courier New, monospace" }}
                  >
                    {content}
                  </p>
                  <p
                    className="text-right text-white"
                    style={{ fontFamily: "Courier New, monospace" }}
                  >
                    <b>{quote}</b>
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      <div className="invisible m-3 p-3">Invisible container</div>
    </div>
  );
}

export default RandomBibleVersesApp;
