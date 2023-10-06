import Nav from "./Nav";
import Lead from "./Lead";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import OpenSource from "./OpenSource";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {

    return (
        <>
            <Nav />
            <Lead />
            <div id="content">
                <About />
                <Experience />
                <Projects />
                <OpenSource />
                <Education />
                <Skills />
            </div>
            <Contact />
            <Footer />
        </>
    )
}

export default Home;
