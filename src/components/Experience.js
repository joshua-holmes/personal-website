import TypingText from "./TypingText";
import React from "react";

function Experience() {
  const jobs = [
    {
      employer: "Corteva Agriscience",
      jobTitle: "Software Engineer I",
      date: "April 2023 - Current",
      description: [
        "Developed scripts that run in CI/CD pipeline to manage the team's GitLab settings in one place with Python, Terraform, Docker, and Bash. Presented it to 50+ Engineering Managers and Product Development Managers.",
        "Updated old code bases to modern development standards using Cookiecutter to improve functionality and cut development costs.",
        "Managed unit-tested microservices that retrieve satellite imagery of farm fields, save in PostgreSQL DB and AWS S3 buckets, and serve using Flask API, AWS Lambda, and RDS.",
        "Participated in team philosophy of \"no ivory towers\", which means everyone does some of everything: DevOps, QA testing, backend API, and frontend UI components.",
      ],
    },
    {
      employer: "StatHero",
      jobTitle: "Software Developer",
      date: "March 2022 - April 2023",
      description: [
        "Utilized Node.js and Puppeteer to develop and deploy web scraping bot on Google Cloud instance, to retrieve data for internal MongoDB/Express.js sports API, saving $50,000 per year.",
        "Architected and developed new Affiliate and Referral programs with Python and Firebase to increase user base and engage new users",
        "Built frontend reporting tools for internal app using Angular and TS to provide financial visibility",
        "Collaborated on stages of systems development lifecycle from requirement gathering to production releases.",
      ],
    },
    {
      employer: "Echelon Group",
      jobTitle: "Director of Operations",
      date: "June 2019 – October 2021",
      description: [
        "Direct report to President, managed and budgeted wide variety of internal projects",
        "Designed, refined, and automated high level process workflows using AgencyBloc CRM and created keystroke level procedural documentation",
        "Designed, built, and implemented automated systems and databases using Python, MS Access, and Excel to track revenue in a highly complex financial landscape",
        "Built commission processing database and data entry system in Access from scratch",
      ],
    },
    {
      employer: "Self-Employed",
      jobTitle: "Freelance Hornist",
      date: "December 2014 - October 2021",
      description: [
        "Performed French Horn for orchestras, ballets, operas, chamber groups, and more",
      ],
    },
  ];

  return (
    <div id="experience" className="background-alt">
      <TypingText className="heading" timeLimit={0.5}>
        Experience
      </TypingText>
      <div id="experience-timeline">
        {jobs.map(({ employer, jobTitle, date, description }) => (
          <React.Fragment key={date}>
            <div className="vtimeline-icon">
              <i className="fa fa-map-marker"></i>
            </div>
            <div className="vtimeline-point">
              <span className="vtimeline-date">{date}</span>
              <div className="vtimeline-block">
                <div className="vtimeline-content">
                  <h3>{jobTitle}</h3>
                  <h4>{employer}</h4>
                  {typeof description === "string" ? (
                    <p>{description}</p>
                  ) : (
                    <ul>
                      {description.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Experience;
