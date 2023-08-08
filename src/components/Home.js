import Nav from "./Nav";
import Lead from "./Lead";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
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
                <Education />
                <Projects />
                <Skills />
            </div>
            <Contact />
            <Footer />
        </>
    )
}

export default Home;