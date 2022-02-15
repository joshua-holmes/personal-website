import Container from "react-bootstrap/Container";
import styled from "styled-components";
import TypingText from "./TypingText";

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

function Landing() {
  
  return (
    <FullContainer>
      <CenteringContainer>
        <h1>Joshua Holmes</h1>
        <TypingText>software engineer</TypingText>
        {/* <TypingText>software engineer</TypingText> */}
      </CenteringContainer>
    </FullContainer>
  )
}

export default Landing;