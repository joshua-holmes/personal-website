import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import "./libs/font-awesome/css/font-awesome.css";

import Nav from "./components/Nav";
import Lead from "./components/Lead";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  console.log(process.env);
  return (
    <>
      <Nav />
      <Lead />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-5 copyright">
              <p>
                Copyright &copy; <span>{new Date().getFullYear()}</span> Joshua Holmes
              </p>
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
