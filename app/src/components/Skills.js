import TypingText from "./TypingText";

function Skills() {
  
  const skills = [
    "JavaScript",
    "Node.js",
    "Express.js",
    "React",
    "Ruby",
    "Ruby on Rails",
    "Python",
    "Flask",
    "Bash",
    "Linux",
    "C++",
    "Docker",
    "RegEx",
    "SQL",
    "PostgreSQL",
    "HTML5",
    "CSS",
    "Sass",
    "MUI",
    "Bootstrap",
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