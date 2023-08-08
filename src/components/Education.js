import TypingText from "./TypingText";

function Education() {

  const education = [
    {
      school: "Flatiron School",
      date: "Nov 2021 - Feb 2022",
      degree: "Certificate of Completion",
      description: "Learned full stack application development and a wide variety of technologies, including JavaScript, React, Ruby, and Ruby on Rails"
    },
    {
      school: "Boise State University",
      date: "Aug 2014 - Dec 2019",
      degree: "Bachelor of Music in Performance",
      description: [
        "Minor in Marketing",
        "Graduated Magna Cum Laude with a GPA of 3.84",
        "Member of Beta Gamma Sigma as top 10% in business program",
      ]
    },
  ]
  
  return (
    <div id="education" className="background">
      <TypingText className="heading" timeLimit={0.5}>Education</TypingText>
      {education.map(({school, date, degree, description}) => (
        <div className="education-block" key={degree}>
          <h3>{school}</h3>
          <span className="education-date">{date}</span>
          <h4>{degree}</h4>
          {typeof description === "string" ? (
            <p>{description}</p>
          ) : (
            <ul>{description.map(item => <li key={item}>{item}</li>)}</ul>
          )}
        </div>
      ))}
    </div>
  )
}

export default Education;