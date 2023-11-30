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
              such as Python, JavaScript/TypeScript, Rust, and C/C++. I also
              have a solid understanding of the GNU/Linux environment, including
              strong Bash scripting skills. I am a dedicated team player with
              technical depth and a drive to deliver exceptional end products
              for clients.
            </p>
            <p>
              I have also started contributing to FOSS (free open source
              software) on a project called Servo, which is an embeddable,
              independent, memory-safe, modular, parallel web rendering engine.
              I am working on implementing flexbox in the layout engine!
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
