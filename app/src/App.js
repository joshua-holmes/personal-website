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
import Footer from "./components/Footer";

function App() {
  
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
      <Footer />
    </>
  );
}

export default App;
