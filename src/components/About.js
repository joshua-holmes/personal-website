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
            <img src="./images/profile-pic-city.jpeg" alt="profile pic" />
          </div>
          <div className="col-md-8">
            <p>
              Hi, I'm Josh! I am a highly motivated Software Engineer focused on
              delivering scalable, reliable software. I am passionate about
              learning new things! Currently, I design, build, and deploy APIs
              and microservices at a mid-sized tech company in an agile
              development environment. I have expertise in programming languages
              such as Python, JavaScript/TypeScript, Rust, and C/C++. I also
              have a solid understanding of the GNU/Linux environment, including
              strong Bash scripting skills. I am a dedicated team player with
              technical depth and a drive to deliver exceptional end products
              for clients.
            </p>
            <p>
              Lately, I have started contributing to open source projects that I
              am passionate about. So far, this includes Godot (game engine),
              Firefox, and Rust-Embedded/Discovery. These are projects that I
              believe are useful to the world and want to see succeed, so I help
              them succeed by contributing code!
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
