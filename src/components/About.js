import TypingText from "./TypingText";
// import NavLink from "./NavLink";

function About() {
  return (
    <div id="about" className="background">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <TypingText className="heading" timeLimit={0.5}>
              About Me
            </TypingText>
            <img src="./images/profile-pic-city.jpeg"/>
          </div>
          <div className="col-md-8">
            <p>
              Hi, I'm Josh! I am a highly motivated Software Engineer focused on delivering scalable, reliable software. I am passionate about learning how things work "under the hood" and solving problems. Currently, I design, build, and deploy web-based APIs in a fast-paced, agile development environment. I have expertise in programming languages such as Rust, Python, and Node.js. I also have a solid understanding of business areas through working with internal stakeholders. I am a dedicated team player with technical depth and a drive to deliver exceptional end products for clients.
            </p>
            <p>
              Technologies I am particularly passionate about are Rust and Linux. Rust is newer to me, but I am using it extensively for it's memory safety features and high performance, while still delivering high-level programming capabilities. Linux has been with me for years due to it's high customizability. I have had hands on experience with nearly every component of the operating system, from the boot process to networking.
            </p>
            <p>
              I am also an experienced classical hornist and pianist, with over 20 years of total experience behind me. I have played in professional operas, musicals, orchestras, ballets, on the street, and much more!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
