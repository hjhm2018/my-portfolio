import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BmiTable({ bmiList, deleteBMI }) {
  // console.log(bmiList)
  return (
    <div className="mb-5">
      <h3 className="bg-secondary text-light p-2 col-md-6 col-sm-12 rounded mx-auto">
        Body Mass Index (BMI) Results
      </h3>
      <table className="table table-dark col-6 col-sm-10 col-md-6 mb-5 table-striped table-bordered mx-auto">
        <thead className="thead-dark">
          <tr>
            <th>Height (cm)</th>
            <th>Weight (kg)</th>
            <th>BMI</th>
            <th>Condition</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bmiList
            ? bmiList.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.height}</td>
                    <td>{item.weight}</td>
                    <td>{item.bmi}</td>
                    <td>{item.condition}</td>
                    <td>
                      <button
                        title="Delete"
                        onClick={() => {
                          deleteBMI(index);
                        }}
                      >
                        <FontAwesomeIcon icon="trash-alt" />
                      </button>
                    </td>
                  </tr>
                );
              })
            : ""}
          {bmiList.length === 0 ? (
            <tr>
              <td colSpan="5">No values yet</td>
            </tr>
          ) : (
            ""
          )}
        </tbody>
      </table>
      <div className="invisible mb-5">Just an invisible container</div>
    </div>
  );
}

export default BmiTable;
