import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import "./libs/font-awesome/css/font-awesome.css";
import React, { useState } from 'react';
import TypingText from "./components/TypingText";

function App() {

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
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>
      {/* <!-- End header --> */}
      <div id="lead">
        <div id="lead-content">
          <h1>Joshua Holmes</h1>
          <TypingText>Software Engineer</TypingText>
          <a href="#" className="btn-rounded-white">
            Download Resume
          </a>
        </div>
        {/* <!-- End #lead-content --> */}

        <div id="lead-overlay"></div>

        <div id="lead-down">
          <a href="#about">
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </a>
        </div>
        {/* <!-- End #lead-down --> */}
      </div>
      {/* <!-- End #lead --> */}

      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <TypingText
                className="heading"
                emptyColor="white"
                blinkLimit={4}
              >
                About Me
              </TypingText>
            </div>
            <div className="col-md-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut
                tortor nec nulla commodo malesuada sit amet vel lacus. Fusce
                eget efficitur libero. Morbi dapibus porta quam laoreet
                placerat. Donec eu vehicula neque. Donec viverra lorem nunc,
                tempus euismod eros sollicitudin ut. Quisque et tincidunt
                libero. Donec id pharetra justo. Proin euismod lacinia dolor, eu
                scelerisque justo tempus pharetra. Vivamus nunc justo, finibus
                ut nisl sed, euismod rhoncus nulla. Proin sed magna egestas,
                egestas ante et, congue eros. In consequat, mauris dapibus
                tincidunt suscipit, ex libero aliquet diam, at maximus risus
                enim non leo.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End #about --> */}

      <div id="experience" className="background-alt">
        <TypingText className="heading" blinkLimit={1}>Experience</TypingText>
        <div id="experience-timeline">
          <div className="vtimeline-icon">
            <i className="fa fa-map-marker"></i>
          </div>
          <div className="vtimeline-point">
            <span className="vtimeline-date">September 2015 – September 2016</span>
            <div className="vtimeline-block">
              <div
                data-date="September 2015 – September 2016"
                className="vtimeline-content"
              >
                <h3>Employer Name</h3>
                <h4>Job Title</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut
                  tortor nec nulla commodo malesuada sit amet vel lacus. Fusce
                  eget efficitur libero. Morbi dapibus porta quam laoreet
                  placerat.
                </p>
              </div>
            </div>
          </div>

          <div className="vtimeline-icon">
            <i className="fa fa-map-marker"></i>
          </div>
          <div className="vtimeline-point">
            <span className="vtimeline-date">September 2015 – September 2016</span>
            <div className="vtimeline-block">
              <div
                data-date="September 2015 – September 2016"
                className="vtimeline-content"
              >
                <h3>Employer Name</h3>
                <h4>Job Title</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut
                  tortor nec nulla commodo malesuada sit amet vel lacus. Fusce
                  eget efficitur libero. Morbi dapibus porta quam laoreet
                  placerat.
                </p>
              </div>
            </div>
          </div>

          <div className="vtimeline-icon">
            <i className="fa fa-map-marker"></i>
          </div>
          <div className="vtimeline-point">
            <span className="vtimeline-date">September 2015 – September 2016</span>
            <div className="vtimeline-block">
              <div
                data-date="September 2015 – September 2016"
                className="vtimeline-content"
              >
                <h3>Employer Name</h3>
                <h4>Job Title</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut
                  tortor nec nulla commodo malesuada sit amet vel lacus. Fusce
                  eget efficitur libero. Morbi dapibus porta quam laoreet
                  placerat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End #experience --> */}

      <div id="education">
        <h2 className="heading">Education</h2>
        <div className="education-block">
          <h3>University of Ottawa</h3>
          <span className="education-date">Sept 2016 - Sept 2017</span>
          <h4>Bachelor of Science in Computer Science</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec
            nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur
            libero. Morbi dapibus porta quam laoreet placerat.
          </p>
        </div>
        {/* <!-- End .education-block --> */}

        <div className="education-block">
          <h3>University of Ottawa</h3>
          <span className="education-date">Sept 2016 - Sept 2017</span>
          <h4>Bachelor of Science in Computer Science</h4>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
        {/* <!-- End .education-block --> */}
      </div>
      {/* <!-- End #education --> */}

      <div id="projects" className="background-alt">
        <h2 className="heading">Projects</h2>
        <div className="container">
          <div className="row">
            <div className="project shadow-large">
              <div className="project-image">
                <img src="images/project.jpg" />
              </div>
              {/* <!-- End .project-image --> */}
              <div className="project-info">
                <h3>Project Name Here</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut
                  tortor nec nulla commodo malesuada sit amet vel lacus. Fusce
                  eget efficitur libero. Morbi dapibus porta quam laoreet
                  placerat.
                </p>
                <a href="#">View Project</a>
              </div>
              {/* <!-- End .project-info --> */}
            </div>
            {/* <!-- End .project --> */}

            <div className="project shadow-large">
              <div className="project-image">
                <img src="images/project.jpg" />
              </div>
              {/* <!-- End .project-image --> */}
              <div className="project-info">
                <h3>Project Name Here</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut
                  tortor nec nulla commodo malesuada sit amet vel lacus. Fusce
                  eget efficitur libero. Morbi dapibus porta quam laoreet
                  placerat.
                </p>
                <a href="#">View Project</a>
              </div>
              {/* <!-- End .project-info --> */}
            </div>
            {/* <!-- End .project --> */}
          </div>
        </div>
      </div>
      {/* <!-- End #projects --> */}

      <div id="skills">
        <h2 className="heading">Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Ruby</li>
          <li>Go</li>
          <li>Node.js</li>
          <li>AngularJs</li>
          <li>React</li>
          <li>Elixir</li>
          <li>Java</li>
          <li>C</li>
          <li>C#</li>
          <li>C++</li>
          <li>Ruby on Rails</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Ruby</li>
          <li>Go</li>
          <li>Node.js</li>
          <li>AngularJs</li>
          <li>React</li>
          <li>Elixir</li>
          <li>Java</li>
          <li>C</li>
          <li>C#</li>
          <li>C++</li>
          <li>Ruby on Rails</li>
        </ul>
      </div>
      {/* <!-- End #skills --> */}

      <div id="contact">
        <h2>Get in Touch</h2>
        <div id="contact-form">
          <form method="POST" action="https://formspree.io/email@email.com">
            <input
              type="hidden"
              name="_subject"
              value="Contact request from personal website"
            />
            <input
              type="email"
              name="_replyto"
              placeholder="Your email"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
        {/* <!-- End #contact-form --> */}
      </div>
      {/* <!-- End #contact --> */}

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-5 copyright">
              <p>
                Copyright &copy; <span>{new Date().getFullYear()}</span> Joshua Holmes
              </p>
            </div>
            <div className="col-sm-2 top">
              <a id="to-top" href="#">
                <i className="fa fa-chevron-up" aria-hidden="true"></i>
              </a>
            </div>
            <div className="col-sm-5 social">
              <ul>
                <li>
                  <a href="https://github.com/joshua-holmes" target="_blank">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/" target="_blank">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- End footer --> */}
    </>
  );
}

export default App;
