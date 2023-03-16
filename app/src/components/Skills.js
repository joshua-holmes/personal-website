import TypingText from "./TypingText";

function Skills() {
  
  const skills = [
    "Rust",
    "Python",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Ruby",
    "API development",
    "Docker",
    "containerization",
    "GCloud",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    "SQL database design",
    "NoSQL database design",
    "Express.js",
    "Flask",
    "Ruby on Rails",
    "React",
    "Angular",
    "Linux",
    "Bash",
    "DevOps",
    "C++",
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
