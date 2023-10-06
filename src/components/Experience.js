import TypingText from "./TypingText";
import React from "react";

function Experience() {
  const jobs = [
    {
      employer: "Corteva Agriscience",
      jobTitle: "Software Engineer I",
      date: "April 2023 - Current",
      description: [
        "Developed CI/CD automated scripts to manage the team's GitLab settings in one place with Python, Terraform, Docker, and Bash. Presented it to 50+ EMs, SEs, and PDMs",
        "Leveraged Python and scheduled CI/CD pipelines to thoughtfully clean 4+ billion unnecessary images from PostgreSQL DB",
        "Maintained microservices to retrieve satellite imagery of farm fields, save in Postgres DB and AWS S3 buckets, and serve via API, using AWS Lambda, S3, RDS, Python and Flask",
      ],
    },
    {
      employer: "StatHero",
      jobTitle: "Software Developer",
      date: "March 2022 - April 2023",
      description: [
        "Developed web scraping bot with Node.js and Puppeteer, deployed on a GCloud instance, to retrieve data for internal MongoDB/Express.js sports API, saving thousands per year",
        "Architected and developed new Affiliate and Referral programs with Python and Firebase to increase user base and engage new users",
        "Built frontend reporting tools for internal app using Angular and TS to provide financial visibility",
        "Automated reporting on a GCloud instance using Python scripting to cut time cost for team",
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
