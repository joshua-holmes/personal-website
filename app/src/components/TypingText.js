// This component simulates a person typing into a command line with a blinking cursor.
// 'emptyColor' argument determines if the program is in blink mode or line mode.
// When 'emptyColor' is a color (e.g. "#ff42cd" or "red") then it is in blinking mode
// When 'emptyColor' is left out or falsy, it is in line-only mode
//
// For blinking cursor mode:
//   Include 'emptyColor' argument and optionally include 'blinkLimit' argument
//   <TypingText emptyColor="#000" blinkLimit={4}>Text that gets typed</TypingText>
//
// For line-only cursor mode:
//   Make sure to leave 'emptyColor' argument out and optionally include 'timeLimit' argument
//   <TypingText timeLimit={1.5}>Text that gets typed</TypingText>
//
// 'timeLimit' is time in seconds the line cursor sticks around after typing is finished
// 'blinkLimit' is max number of times the cursor can blink after typing is finished

import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import variables from "../App.scss";
import { useInViewport } from 'react-in-viewport';

const Cursor = styled.span`
  background-color: ${({ filledColor, emptyColor, isCursorFilled }) =>
    isCursorFilled ? filledColor : emptyColor || filledColor};
  border: 1px solid ${({ filledColor }) => filledColor};
  color: ${({ filledColor, emptyColor, isCursorFilled }) =>
    isCursorFilled ? filledColor : emptyColor};
`;

function TypingText({
  children,
  emptyColor,
  className,
  blinkLimit,
  timeLimit,
}) {
  const ref = useRef();
  const componentVisibility = useInViewport(ref);
  const [text, setText] = useState("");
  const [isCursorFilled, setIsCursorFilled] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const isVisible = componentVisibility.enterCount > 0
  const isTyping = children !== text;
  const startDelay = 700;
  const maxTypingTime = 250;
  const minTypingTime = 25;
  // 'cursorDelay' time between each blink in blink mode,
  // or time the cursor sticks around after typing in line-only mode
  const cursorDelay = emptyColor ? 700 : (timeLimit || 300) * 1000;

  useEffect(() => {
    // Initialization
    const typeWriter = (currString) => {
      if (children !== currString) {
        const newString = children.slice(0, currString.length + 1);
        setText(() => newString);
        const randInt = (max, min) => {
          return Math.floor(Math.random() * (max - min) + min);
        };
        const waitTime = randInt(maxTypingTime, minTypingTime);
        id = setTimeout(() => typeWriter(newString), waitTime);
      }
    };
    const cursorAction = (isFilled, count) =>
      (id = setTimeout(() => {
        const blinkMode = emptyColor && (!blinkLimit || blinkLimit * 2 > count);
        if (blinkMode) {
          setIsCursorFilled(() => !isFilled);
          cursorAction(!isFilled, count + 1);
        } else {
          setShowCursor(false);
        }
      }, cursorDelay));
    let id;
    if (isVisible) {
      // Program begin
      if (isTyping) {
        // In a state of typing
        setTimeout(() => typeWriter(text), startDelay);
      } else {
        // In a state of blinking or stationary cursor, depending on mode
        cursorAction(isCursorFilled, 0);
      }
      return function cleanup() {
        clearTimeout(id);
      };
    }
    
  }, [isTyping, isVisible]);

  return (
      <h2 className={className} ref={ref}>
        {text}
        {showCursor ? (
          <Cursor
            filledColor={variables.cursor}
            emptyColor={emptyColor}
            isCursorFilled={isCursorFilled}
          >
            {emptyColor ? "-" : ""}
          </Cursor>
        ) : null}
      </h2>
  );
}

export default TypingText;
