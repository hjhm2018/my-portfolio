import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { MdWork } from "react-icons/md";

import styles from "../Experience.module.css";

function Experience() {
  const [id, setId] = useState(1);

  const experiences = [
    {
      id: 1,
      title: "Software Specialist",
      company: "BeicipFranlab | Jul 2014 - Jun 2015",
      description: [
        "Software specialist for TemisFlow and DionisosFlow Tech support for PDVSA and Intevep Basin and stratigraphic modeling studies (Venezuela)",
        "2 week-training in Paris for TemisFlow and DionisosFlow, basin modeling and stratigraphic modeling software, respectively (France)",
        "1 month at the company headquarters at Rueil Malmaison for manual software testing and training at its studies division (France)",
      ],
    },
    {
      id: 2,
      title: "Intern",
      company: "Halliburton | May 2008 - Nov 2008",
      description: [
        "Evaluation of well logs at the Reservoir Evaluation Services (RES) Department in Venezuela",
        "Processing of well raw data using Halliburton specialized software",
        "Petrophysical interpretation of well log data",
        "Completion of my thesis and internship requirement from college",
      ],
    },
    {
      id: 3,
      title: "Lecturer Assistant",
      company: "Universidad de Oriente | Jan 2005 - Mar 2008",
      description: [
        "Physics I. Helped students to understand the course objectives after class hours, 6 hours a week",
        "Topography II. Supervised students during their practical sessions, and explained their assignments",
        "Optical Mineralogy. Provided guidance to students with the procedures that needed to be followed in the Mineralogy Lab",
      ],
    },
  ];
  return (
    <div className="mx-auto col-md-8 p-2">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Experience</title>
        <meta name="description" content="Experience Page" />
      </Helmet>
      <h1 className="text-center mb-4 bg-dark p-2 rounded text-white">
        Experience <MdWork />
      </h1>

      <div className="col-12 text-center">
        <button className={`${styles.button} m-2`} onClick={() => setId(1)}>
          Software Specialist
        </button>
        <button className={`${styles.button} m-2`} onClick={() => setId(2)}>
          Intern
        </button>
        <button className={`${styles.button} m-2`} onClick={() => setId(3)}>
          Lecturer Assistant
        </button>
      </div>
      <div className="col-10 mx-auto mt-4 border rounded p-3">
        {experiences &&
          experiences
            .filter((experience) => experience.id === id)
            .map((experience, index) => {
              return (
                <div key={index}>
                  <p className="font-weight-bold">{experience.company}</p>
                  <hr />
                  <ul>
                    {experience.description.map((description, index) => {
                      return <li key={index}>{description}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
      </div>
      {/* <Tabs
        className="col-md-12 text-dark border border-dark rounded"
        defaultActiveKey="Software"
        id="uncontrolled-tab-example"
      >
        <Tab
          className="text-dark bg-light p-4 border border-dark rounded"
          eventKey="Software"
          title="Software Specialist"
        >
          <h4>BeicipFranlab | Jul 2014 - Jun 2015</h4>
          <ul>
            <li>
              Software specialist for TemisFlow and DionisosFlow Tech support
              for PDVSA and Intevep Basin and stratigraphic modeling studies
              (Venezuela)
            </li>
            <li>
              2 week-training in Paris for TemisFlow and DionisosFlow, basin
              modeling and stratigraphic modeling software, respectively
              (France)
            </li>
            <li>
              1 month at the company headquarters at Rueil Malmaison for manual
              software testing and training at its studies division (France)
            </li>
          </ul>
        </Tab>
        <Tab
          className="text-dark bg-light p-4 border border-dark rounded"
          eventKey="internship"
          title="Intern"
        >
          <h4>Halliburton | May 2008 - Nov 2008</h4>
          <ul>
            <li>
              Evaluation of well logs at the Reservoir Evaluation Services (RES)
              Department in Venezuela
            </li>
            <li>
              Processing of well raw data using Halliburton specialized software
            </li>
            <li>Petrophysical interpretation of well log data</li>
          </ul>
        </Tab>
        <Tab
          className="text-dark bg-light p-4 border border-dark rounded"
          eventKey="assintant"
          title="Lecturer Assistant"
        >
          <h4>Universidad de Oriente | Jan 2005 - Mar 2008</h4>
          <ul>
            <li>
              Physics I. Helped students to understand the course objectives
              after class hours, 6 hours a week
            </li>
            <li>
              Topography II. Supervised students during their practical
              sessions, and explained their assignments
            </li>
            <li>
              Optical Mineralogy. Provided guidance to students with the
              procedures that needed to be followed in the Mineralogy Lab
            </li>
          </ul>
        </Tab>
      </Tabs> */}
      <div className="pb-5 mt-5 mb-5 invisible">
        This is an invisible container
      </div>
    </div>
  );
}

export default Experience;
