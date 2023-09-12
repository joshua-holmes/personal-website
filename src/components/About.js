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
            <img src="./images/profile-pic-city.jpeg" />
          </div>
          <div className="col-md-8">
            <p>
              Hi, I'm Josh! I am a highly motivated Software Engineer focused on
              delivering scalable, reliable software. I am passionate about
              learning how things work and solving problems. Currently, I
              design, build, and deploy APIs and microservices in an agile
              development environment. I have expertise in programming languages
              such as Python, JavaScript/TypeScript, Rust, and C. I also have a
              solid understanding of the GNU/Linux environment, including strong
              Bash scripting skills. I am a dedicated team player with technical
              depth and a drive to deliver exceptional end products for clients.
            </p>
            <p>
              Particularly, I am passionate about memory management, performant
              code, and Linux. When I'm not building a useful software tool for
              the world, I enjoy practicing algorithmic problem-solving,
              customizing my Linux machine, and gaming.
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
