import TypingText from "./TypingText";

function Skills() {
  
  const skills = [
    "Rust",
    "Python",
    "Node.js",
    "C++",
    "Ruby",
    "API development",
    "Docker",
    "containerization",
    "GCloud",
    "Express.js",
    "MongoDB",
    "Firebase",
    "SQL database design",
    "NoSQL database design",
    "Flask",
    "Ruby on Rails",
    "Bash",
    "Linux",
    "deployment",
    "PostgreSQL",
  ]
  
  return (
    <div id="skills" className="background">
      <TypingText className="heading" timeLimit={0.5}>Skills</TypingText>
      <ul>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </div>
  )
}

export default Skills;
