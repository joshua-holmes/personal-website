import TypingText from "./TypingText";

function About() {
  return (
    <div id="about" className="background">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <TypingText className="heading" timeLimit={0.5}>
              About Me
            </TypingText>
            <img src="./images/profile-pic-sm.jpg" alt="profile pic" />
          </div>
          <div className="col-md-8">
            <p>
              Hi, I'm Josh! I am a highly motivated Software Engineer focused on
              delivering scalable that's built to last. I am persistent when
              faced with challenges and always open to learning new tech.
              Currently, I design, build, and deploy containerized APIs and
              microservices at a mid-sized tech company in an agile development
              environment using Python. I also have a strong understanding of
              the GNU/Linux environment and develop lower level applications
              using Rust. I am a dedicated team player with technical depth and
              a drive to deliver exceptional end products for clients.
            </p>
            <p>
              Lately, I have been developing my own video game and game engine
              from scratch, built entirely in Rust. The game engine is built on
              top of the Vulkan API for rendering and will be a 2D physics-based
              fighting game.
            </p>
            <p>
              I have also contributed to a few FOSS (free open source
              software) projects in Rust. This includes Servo, a browser engine,
              and rs-probe for embedded systems projects.
            </p>
            <p>
              I am also an experienced classical hornist and pianist, with over
              20 years of total experience behind me. I have played in
              professional operas, musicals, orchestras, ballets, on the street,
              and much more!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
