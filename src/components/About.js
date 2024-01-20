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
              delivering scalable, reliable software. I am passionate about
              learning new things! Currently, I design, build, and deploy APIs
              and microservices at a mid-sized tech company in an agile
              development environment. I have expertise in programming languages
              such as Rust, Python, and JavaScript/TypeScript. I also have a
              solid understanding of the GNU/Linux environment, including strong
              Bash scripting skills. I am a dedicated team player with technical
              depth and a drive to deliver exceptional end products for clients.
            </p>
            <p>
              I am currently in the early stages of designing and building a
              video game, along with my own game engine, entirely in Rust. The
              game is rendered using a Vulkan API wrapper for Rust called
              Vulkano. The direction of the game is still unknown, but I am
              leaning toward an online multiplayer particle-based physics
              sandbox.
            </p>
            <p>
              I have also contributing to a number of FOSS (free open source
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
