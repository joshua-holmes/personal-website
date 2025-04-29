import TypingText from "./TypingText";
import React from "react";

function Experience() {
  const jobs = [
    {
      employer: "Corteva Agriscience",
      jobTitle: "Sr. Software Engineer I",
      date: "April 2023 - Current",
      description: [
        "Led team's transition to common Docker, Bash, Terraform and Python tooling for CI/CD pipeline, unit tests, code-base structure, and more, for 15 repos resulting in uniform configuration across the team and organization for better maintainability",
        "Created new backend service for generating PDF field reports with SQS queue, AWS Lambda, and S3, to be used by up to 5k sales reps and growers when released to collect data about a farm field in a printable format",
        "Maintained containerized microservices to ingest 20M+ acres of satellite imagery of farm fields per year in Postgres DB, AWS S3 buckets, and AWS Lambdas, used by thousands of sales reps and growers to analyze and compare vegetative health",
        "Developed CI/CD automated scripts to manage the team's GitLab settings in one place with Python, Terraform, Docker, and Bash",
        "Provided knowledge across teams as a \"go-to\" source of information about Terraform, Python, and internal tooling/services",
      ],
    },
    {
      employer: "StatHero",
      jobTitle: "Software Developer",
      date: "March 2022 - April 2023",
      description: [
        "Saved $50,000 per year by developing web scraping bot using Node.js and Puppeteer on Google Cloud instance to retrieve data for internal MongoDB/Express.js sports API",
        "Built frontend reporting tools for internal app using Angular and TS to provide financial visibility",
        "Architected and developed new Affiliate and Referral programs with Python and Firebase to increase user base and engage new users",
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
