import React, { useState } from 'react';
import NavLink from "./NavLink";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuToggle = () => {
    const body = document.querySelector("body");
    !isMenuOpen ? body.classList.add("active") : body.classList.remove("active")
    setIsMenuOpen(!isMenuOpen);
  }
  
  return (
    <>
      <div id="mobile-menu-open" className="shadow-large" onClick={menuToggle}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      {/* <!-- End #mobile-menu-toggle --> */}
      <header className={isMenuOpen ? "active" : ""}>
        <div id="mobile-menu-close" onClick={menuToggle}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        <ul id="menu" className="shadow">
          <li>
            <NavLink to="about" onClick={menuToggle}>About</NavLink>
          </li>
          <li>
            <NavLink to="experience" onClick={menuToggle}>Experience</NavLink>
          </li>
          <li>
            <NavLink to="education" onClick={menuToggle}>Education</NavLink>
          </li>
          <li>
            <NavLink to="projects" onClick={menuToggle}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="skills" onClick={menuToggle}>Skills</NavLink>
          </li>
          <li>
            <NavLink to="contact" onClick={menuToggle}>Contact</NavLink>
          </li>
        </ul>
      </header>
      {/* <!-- End header --> */}
    </>
  )
}

export default Nav;