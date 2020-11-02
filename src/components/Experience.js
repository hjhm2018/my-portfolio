import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'


function Experience() {
    return (
        <div className="mx-auto col-md-8 p-2">
            <h1 className="text-center">Experience</h1>
             <Tabs className="col-md-12 text-dark border border-dark rounded" defaultActiveKey="Software" id="uncontrolled-tab-example">
                 <Tab className="text-dark bg-light p-4 border border-dark rounded" eventKey="Software" title="Software Specialist">
                 <h4>BeicipFranlab | Jul 2014 - Jun 2015</h4>
                <ul>
                    <li>Software specialist for TemisFlow and DionisosFlow Tech support for PDVSA and Intevep Basin and stratigraphic modeling studies (Venezuela)</li>
                    <li>2 week-training in Paris for TemisFlow and DionisosFlow, basin modeling and stratigraphic modeling software, respectively (France)</li>
                    <li>1 month at the company headquarters at Rueil Malmaison for manual software testing and training at its studies division (France)</li>
                </ul>
                 </Tab>
                 <Tab className="text-dark bg-light p-4 border border-dark rounded" eventKey="internship" title="Intern">
                    <h4>Halliburton | May 2008 - Nov 2008</h4>
                    <ul>
                        <li>Evaluation of well logs at the Reservoir Evaluation Services (RES) Department in Venezuela</li>
                        <li>Processing of well raw data using Halliburton specialized software</li>
                        <li>Petrophysical interpretation of well log data</li>
                    </ul>
                 </Tab>
                 <Tab className="text-dark bg-light p-4 border border-dark rounded" eventKey="assintant" title="Lecturer Assistant">
                    <h4>Universidad de Oriente | Jan 2005 - Mar 2008</h4>
                    <ul>
                        <li>Evaluation Physics I. Helped students to understand the course objectives after class hours, 6 hours a week</li>
                        <li>Topography II. Supervised students during their practical sessions, and explained their assignments</li>
                        <li>Optical Mineralogy. Provided guidance to students with the procedures that needed to be followed in the Mineralogy Lab</li>
                    </ul>
                 </Tab>
             </Tabs>
            <div className="pb-5 mt-5 mb-5 invisible">This is an invisible container</div>

            
        </div>
        
    )
}

export default Experience
