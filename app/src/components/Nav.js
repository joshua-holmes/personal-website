import React, { useState } from 'react';
import NavLink from "./NavLink";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pages = [
    "about",
    "experience",
    "education",
    "projects",
    "skills",
    "contact",
  ]

  const menuToggle = () => {
    const body = document.querySelector("body");
    console.log(isMenuOpen);
    !isMenuOpen ? body.classList.add("active") : body.classList.remove("active")
    setIsMenuOpen(!isMenuOpen);
  }

  // For NavLinks. Menu should only toggle if menu is open, so mobile will
  // toggle, but desktop will not
  const navMenuToggle = isMenuOpen ? menuToggle : undefined;
  const links = pages.map(page => {
    const pageName = page[0].toUpperCase() + page.slice(1);
    const elementId = page.toLowerCase();
    return (
      <li key={page}>
        <NavLink to={elementId} onClick={navMenuToggle}>
          {pageName}
        </NavLink>
      </li>
    )
  })
  
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
          {links}
        </ul>
      </header>
      {/* <!-- End header --> */}
    </>
  )
}

export default Nav;