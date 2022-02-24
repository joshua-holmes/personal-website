import TypingText from "./TypingText";
import NavLink from "./NavLink";

function Lead() {
  
  return (
    <div id="lead">
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

      <div className="col-sm-2 top">
        <NavLink id="to-top" to="lead">
          <i className="fa fa-chevron-up" aria-hidden="true"></i>
        </NavLink>
      </div>
      {/* <!-- End #to-top --> */}

    </div>
  )
}

export default Lead;