import { useInViewport } from 'react-in-viewport';
import { useRef } from "react";

import TypingText from "./TypingText";
import NavLink from "./NavLink";

function Lead() {
  const ref = useRef();
  const componentVisibility = useInViewport(ref);
  const isVisible = componentVisibility.inViewport;
  
  return (
    <>
      <div id="lead-img"></div>
      <div id="lead" ref={ref}>
        <div id="lead-content">
          <h1>Joshua Holmes</h1>
          <TypingText timeLimit={0.5}>Software Engineer</TypingText>
          <a download target="_blank" href="https://docs.google.com/document/d/1k6MqBfN029_GrA8EsQ0h14dV12FzJn3SRg2TDgMBSAA/export?format=pdf" className="btn-rounded-white" rel="noreferrer">
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
    </>
  )
}

export default Lead;
