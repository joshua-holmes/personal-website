import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import TypingText from "./TypingText";


const Img = styled.img`
border-radius: 100%;
width: 280px;
margin: auto;
display: flex;
`

function About({ color }) {
  

  return (
    <div style={{backgroundColor: color}}>
      <Container>
        <TypingText emptyColor={color}>About Me</TypingText>
        <Img
          src="./music (square).jpg"
        />
        <p>Experienced in Ruby on Rails and JavaScript based programming and a background in database and algorithm design. Possess strong skills in team-building and project management that help small companies get the support they need to be successful.</p>
      </Container>
    </div>
    
  )
}

export default About;