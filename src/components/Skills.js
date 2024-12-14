import TypingText from "./TypingText";

function Skills() {
  
  const skills = [
    "Zig",
    "Rust",
    "Python",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "C",
    "C++",
    "Bash",
    "Ruby",
    "Linux",
    "X11",
    "Wayland",
    "Docker",
    "containerization",
    "AWS Lambda",
    "GCloud",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    "React",
    "Angular",
    "DevOps",
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
