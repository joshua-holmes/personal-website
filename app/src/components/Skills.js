import TypingText from "./TypingText";

function Skills() {
  
  const skills = [
    "JavaScript",
    "React",
    "Ruby",
    "Ruby on Rails",
    "Python",
    "Docker",
    "RegEx",
    "SQL",
    "PostgreSQL",
    "Bash",
    "Linux",
    "YAML",
    "JSON",
    "REST",
    "VBA",
    "HTML5",
    "CSS",
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