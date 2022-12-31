import TypingText from "./TypingText";

function Skills() {
  
  const skills = [
    "JavaScript",
    "Node.js",
    "Python",
    "Ruby",
    "C++",
    "Bash",
    "Express.js",
    "Flask",
    "Ruby on Rails",
    "SQL database design",
    "SQLless database design",
    "PostgreSQL",
    "Firebase",
    "API development",
    "Linux",
    "Docker",
    "deployment",
    "RegEx",
    "Git",
    "REST"
  ]
  
  return (
    <div id="skills">
      <TypingText className="heading" timeLimit={0.5}>Skills</TypingText>
      <ul>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </div>
  )
}

export default Skills;