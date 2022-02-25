import TypingText from "./TypingText";
import React from "react";

function Experience() {

  const jobs = [
    {
      employer: "Echelon Group",
      jobTitle: "Director of Operations",
      date: "June 2019 – October 2021",
      description: [
        "Direct report to President, managed and budgeted wide variety of internal projects",
        "Designed, refined, and automated high level process workflows using AgencyBloc CRM and created keystroke level procedural documentation",
        "Improved data integrity and cleaned large amounts of data using Python and Excel",
        "Designed, built, and implemented automated systems and databases, using Microsoft Access, Excel, Python, and other software",
        "Built commission processing database and data entry system in Access from scratch",
      ],
    },
    {
      employer: "Self-Employed",
      jobTitle: "Freelance Hornist",
      date: "December 2014 - October 2021",
      description: "Performed French Horn for orchestras, ballets, operas, chamber groups, and more.",
    },
    {
      employer: "Music Center Studios",
      jobTitle: "Studio Instructor",
      date: "March 2019 - April 2020",
      description: "Prepared and taught group and individual piano lessons.",
    },
  ]
  
  return (
    <div id="experience" className="background-alt">
      <TypingText className="heading" timeLimit={0.5}>Experience</TypingText>
      <div id="experience-timeline">
        {jobs.map(({employer, jobTitle, date, description}) => (
          <React.Fragment key={date}>
            <div className="vtimeline-icon">
              <i className="fa fa-map-marker"></i>
            </div>
            <div className="vtimeline-point">
              <span className="vtimeline-date">{date}</span>
              <div className="vtimeline-block">
                <div
                  className="vtimeline-content"
                >
                  <h3>{jobTitle}</h3>
                  <h4>{employer}</h4>
                  {typeof description === "string" ? (
                    <p>{description}</p>
                  ) : (
                    <ul>{description.map(item => <li key={item}>{item}</li>)}</ul>
                  )}
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Experience;