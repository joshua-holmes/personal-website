import Container from "react-bootstrap/Container";
import TypingText from "./TypingText";

function Projects({ color = "white" }) {
  return (
    <div style={{backgroundColor: color}}>
      <Container>
        <TypingText emptyColor={color}>My Projects</TypingText>
      </Container>
    </div>
  )
}

export default Projects;