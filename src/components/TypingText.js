// This component simulates a person typing into a command line with a blinking cursor.
//
// 'timeLimit' is time in seconds the line cursor sticks around after typing is finished

import { useEffect, useState, useRef } from "react";
import { useInViewport } from "react-in-viewport";

function TypingText({
  children,
  className,
  timeLimit,
}) {
  const ref = useRef();
  const componentVisibility = useInViewport(ref);
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const isVisible = componentVisibility.enterCount > 0;
  const isTyping = children !== text;
  const startDelay = 500;
  const maxTypingTime = 250;
  const minTypingTime = 25;
  const cursorDelay = (timeLimit || 300) * 1000;

  useEffect(() => {
    const typeWriter = (currString) => {
      if (children !== currString) {
        const newString = children.slice(0, currString.length + 1);
        setText(() => newString);
        const waitTime = randInt(maxTypingTime, minTypingTime);
        setTimeout(() => typeWriter(newString), waitTime);
      }
    };

    const randInt = (max, min) => {
      return Math.floor(Math.random() * (max - min) + min);
    };

    // Initialization
    if (isVisible) {
      // Program begin
      if (isTyping) {
        // In a state of typing
        setTimeout(() => typeWriter(""), startDelay);
      } else {
        // Typing is done, remove cursor
        setTimeout(() => setShowCursor(false), cursorDelay);
      }
    }
  }, [
    children,
    isTyping,
    isVisible,
    cursorDelay,
  ]);

  return (
    <h2 className={className} ref={ref}>
      {text}
      {!showCursor ? null : (
        <span
          className="cursor"
        >
        </span>
      )}
    </h2>
  );
}

export default TypingText;
