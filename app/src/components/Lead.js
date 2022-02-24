import { useInViewport } from 'react-in-viewport';
import { useRef } from "react";

import TypingText from "./TypingText";
import NavLink from "./NavLink";

function Lead() {
  const ref = useRef();
  const componentVisibility = useInViewport(ref);
  const isVisible = componentVisibility.inViewport;
  console.log(isVisible);
  
  return (
    <div id="lead" ref={ref}>
      <div id="lead-content">
        <h1>Joshua Holmes</h1>
        <TypingText timeLimit={0.5}>Software Engineer</TypingText>
        <a href="#" className="btn-rounded-white">
          Download Resume
        </a>
      </div>
      {/* <!-- End #lead-content --> */}

      <div id="lead-overlay"></div>

      <div id="lead-down">
        <NavLink to="about">
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </NavLink>
      </div>
      {/* <!-- End #lead-down --> */}

      <div className={`col-sm-2 top`}>
        <NavLink id="to-top" to="lead" className={isVisible ? "hidden" : ""}>
          <i className="fa fa-chevron-up" aria-hidden="true"></i>
        </NavLink>
      </div>
      {/* <!-- End #to-top --> */}

    </div>
  )
}

export default Lead;