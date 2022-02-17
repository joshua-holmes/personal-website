import { useEffect, useState } from "react";
import styled from "styled-components";

const Cursor = styled.span`
background-color: ${({filledColor, emptyColor, isCursorFilled}) => (
  isCursorFilled ? filledColor : emptyColor
)};
border: 1px solid ${({filledColor}) => filledColor};
color: ${({filledColor, emptyColor, isCursorFilled}) => (
  isCursorFilled ? filledColor : emptyColor
)};
`

function TypingText({ children }) {
  const [text, setText] = useState("")
  const [isCursorFilled, setIsCursorFilled] = useState(true);
  const isTyping = children !== text;
  const startDelay = 700;
  const maxTypingTime = 250;
  const minTypingTime = 25;
  const cursorDelay = 700;
  
  useEffect(() => {
    const typeWriter = currString => {
      if (children !== currString) {
        const newString = children.slice(0, currString.length + 1)
        setText(() => newString);
        const randInt = (max, min) => {
          return Math.floor(Math.random() * (max - min) + min);
        }
        const waitTime = randInt(maxTypingTime, minTypingTime);
        id = setTimeout(() => typeWriter(newString), waitTime);
      }
    }
    const cursorBlink = isFilled => (
      id = setTimeout(() => {
        setIsCursorFilled(() => !isFilled)
        cursorBlink(!isFilled)
      }, cursorDelay)
    )
    let id;
    if (isTyping) {
      setTimeout(() => typeWriter(text), startDelay)
    } else {
      cursorBlink(isCursorFilled);
    }
    return function cleanup() {clearTimeout(id)}
  }, [isTyping])

  return (
    <h2>
      {text}
      <Cursor
        filledColor="red"
        emptyColor="white"
        isCursorFilled={isCursorFilled}
      >-</Cursor>
    </h2>
  )
}

export default TypingText;