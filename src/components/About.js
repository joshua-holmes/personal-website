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
              Hi, I'm Josh! Highly experienced Senior Software Engineer with 3+
              years experience in Rust, Zig, C/C++, Python and TypeScript. As an
              engineer that is always learning new technologies, I have become a
              versatile programmer that learns new technologies quickly and
              makes educated decisions based on first-hand experience.
            </p>
            <p>
              Lately, I've been having a great time contributing to open-source
              project,{" "}
              <a
                href="https://bevyengine.org/"
                target="_blank"
                rel="noreferrer"
              >
                Bevy
              </a>
              . Bevy is a refreshingly simple data-driven game engine built in
              Rust. I have been reworking single-threaded data storage and
              communication with multi-threaded data in Bevy's{" "}
              <a
                href="https://en.wikipedia.org/wiki/Entity_component_system"
                target="_blank"
                rel="noreferrer"
              >
                ECS
              </a>{" "}
              system.
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
