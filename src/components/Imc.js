import React, { useState, useEffect } from "react";
import "../App.css";
import { Helmet } from "react-helmet";

import BmiTable from "./BmiTable";
import imageBmi from "../images/measuretape.jpeg";

function Imc() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [imc, setImc] = useState({});
  const [bmiList, setBmiList] = useState([]);
  const [condition, setCondition] = useState("");

  const setHeightValue = (e) => {
    setHeight(parseFloat(e.target.value));
  };

  const setWeightValue = (e) => {
    setWeight(parseFloat(e.target.value));
  };

  const deleteBMI = (index) => {
    // setBmiList(bmiList => bmiList.splice(index, 1));

    //  bmiList.filter(bmi => bmi.id !== id);

    setBmiList((bmiList) => bmiList.filter((bmi, i) => i !== index));
  };

  const addBMI = () => {
    setBmiList((bmiList) => [...bmiList, imc]);
    // console.log(bmiList);
  };

  const bmiRanges = weight / Math.pow(height / 100, 2);

  useEffect(() => {
    if (bmiRanges < 18.5) setCondition("Underweight");
    if (bmiRanges >= 18.5 && bmiRanges <= 24.9) setCondition("Normal Weight");
    if (bmiRanges >= 25 && bmiRanges <= 29.9) setCondition("Overweight");
    if (bmiRanges >= 30 && bmiRanges <= 34.9) setCondition("Obesity");
    if (bmiRanges > 35) setCondition("Extremely Obese");

    setImc({
      bmi: parseFloat(weight / Math.pow(height / 100, 2)).toFixed(2),
      weight,
      height,
      condition,
    });
  }, [weight, height, bmiRanges, condition, bmiList]);

  return (
    <div className="text-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Body Mass Index App</title>
        <meta name="description" content="Body Mass Index App Page" />
      </Helmet>
      <h2 className="mt-3 pt-2 bg-dark text-light col-md-8 col-sm-12 mx-auto p-3 rounded">
        <span role="img" aria-label="lifting weight emoji">
          &#128170;
        </span>{" "}
        <span className="font-italic">Body Mass Index (BMI) Calculator</span>{" "}
        <span role="img" aria-label="lifting weight emoji">
          &#127947;
        </span>{" "}
      </h2>
      <img
        className="w-25 img-thumbnail rounded mb-2"
        src={imageBmi}
        alt="BMI"
      />
      <br />

      <table className="table table-dark col-sm-10 col-md-4  mb-4 mt-3 table-striped table-bordered mx-auto">
        <thead>
          <tr>
            <th scope="col">BMI</th>
            <th scope="col">Condition</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&lt; 18.5</td>
            <td>Underweight</td>
          </tr>
          <tr>
            <td>18.5 - 24.9</td>
            <td>Normal</td>
          </tr>
          <tr>
            <td>25 - 29.9</td>
            <td>Overweight</td>
          </tr>

          <tr>
            <td>30 - 34.9</td>
            <td>Obese</td>
          </tr>

          <tr>
            <td>&gt; 35</td>
            <td>Extremely Obese</td>
          </tr>
        </tbody>
      </table>

      <label className="font-weight-bold" htmlFor="height">
        Height:{" "}
        <input
          className="text-center"
          id="height"
          type="number"
          min="0"
          max="250"
          onChange={setHeightValue}
        />{" "}
        cm
      </label>
      <br />
      <label className="font-weight-bold" htmlFor="weight">
        Weight:{" "}
        <input
          className="text-center"
          id="weight"
          type="number"
          onChange={setWeightValue}
          min="0"
          max="300"
        />{" "}
        Kg
      </label>
      <br />
      <span>
        <b>BMI:</b>{" "}
        {weight !== 0 &&
        weight !== "" &&
        weight &&
        height !== 0 &&
        height !== "" &&
        height &&
        weight > 0 &&
        height > 0
          ? imc.bmi
          : ""}{" "}
      </span>
      <br />

      {(height < 0 || weight < 0) && (
        <span className="text-danger">No negative values</span>
      )}
      <br />
      <button
        className="btn btn-primary m-2"
        onClick={addBMI}
        disabled={
          weight === 0 ||
          weight === "" ||
          height === 0 ||
          height === "" ||
          weight < 0 ||
          height < 0 ||
          !height ||
          !weight
        }
      >
        Save Result
      </button>
      {/* Messages */}
      {bmiRanges < 18.5 ? <p>You are underweight</p> : ""}
      {bmiRanges >= 18.5 && bmiRanges <= 24.9 ? <p>Normal Weight</p> : ""}
      {bmiRanges >= 25 && bmiRanges <= 29.9 ? <p>You are overweight</p> : ""}
      {bmiRanges >= 30 && bmiRanges <= 34.9 ? <p>Obesity</p> : ""}
      {bmiRanges >= 35 ? <p>Extremely Obese</p> : ""}
      <BmiTable deleteBMI={deleteBMI} bmiList={bmiList} />
      <div className="pb-5 mt-5 mb-5 invisible">
        This is an invisible container
      </div>
    </div>
  );
}

export default Imc;
