import Container from "react-bootstrap/Container";
import styled from "styled-components";
import TypingText from "./TypingText";
import { ArrowBarDown } from "react-bootstrap-icons";

const FullContainer = styled(Container)`
height: 100vh;
width: 100vw;
`
const CenteringContainer = styled.div`
position: absolute;
text-align: center;
top: 48%;
left: 50%;
transform: translate(-50%, -50%);
width: 100%;
`
const BottomCenterContainer = styled.div`
position: absolute;
text-align: center;
bottom: 0%;
left: 50%;
transform: translateX(-50%);
width: 100%;
margin-bottom: 15px;
`

function Landing() {
  
  return (
    <FullContainer>
      <CenteringContainer>
        <h1>Joshua Holmes</h1>
        <TypingText>software engineer</TypingText>
      </CenteringContainer>
      <BottomCenterContainer>
        <p>scroll down</p>
        <p><ArrowBarDown /></p>
      </BottomCenterContainer>
    </FullContainer>
  )
}

export default Landing;