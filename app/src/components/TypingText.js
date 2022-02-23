// This component simulates a person typing into a command line with a blinking cursor.
//
// For blinking cursor:
//   Include 'emptyColor' argument and optionally include 'blinkLimit' argument
//   <TypingText emptyColor="#000" blinkLimit={4}>Text that gets typed</TypingText>
//
// For line-only cursor:
//   Make sure to leave 'emptyColor' argument out
//   <TypingText>Text that gets typed</TypingText>

import { useEffect, useState } from "react";
import styled from "styled-components";

const Cursor = styled.span`
background-color: ${({filledColor, emptyColor, isCursorFilled}) => (
  isCursorFilled ? filledColor : emptyColor || filledColor
)};
border: 1px solid ${({filledColor}) => filledColor};
color: ${({filledColor, emptyColor, isCursorFilled}) => (
  isCursorFilled ? filledColor : emptyColor
)};
`

function TypingText({ children, emptyColor, className, blinkLimit }) {
  const [text, setText] = useState("")
  const [isCursorFilled, setIsCursorFilled] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
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
    const cursorBlink = (isFilled, count) => (
      id = setTimeout(() => {
        if (!blinkLimit || blinkLimit * 2 > count) {
          setIsCursorFilled(() => !isFilled)
          cursorBlink(!isFilled, count + 1)
        } else {
          setShowCursor(false);
        }
      }, cursorDelay)
    )
    let id;
    if (isTyping) {
      setTimeout(() => typeWriter(text), startDelay)
    } else {
      cursorBlink(isCursorFilled, 0);
    }
    return function cleanup() {clearTimeout(id)}
  }, [isTyping])

  return (
    <h2 className={className}>
      {text}
      {showCursor ? <Cursor
        filledColor="#f6511d"
        emptyColor={emptyColor}
        isCursorFilled={isCursorFilled}
      >{emptyColor ? "-" : ""}</Cursor> : null}
    </h2>
  )
}

export default TypingText;