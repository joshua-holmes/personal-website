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
              Hi, I'm Josh! I am a passionate software developer, interested in
              delivering innovative, performant software that's a joy to use for
              customers, whether that's another developer or an end user. As an
              engineer that is always learning new technologies, I have become a
              versatile programmer that learns new technologies quickly and
              makes educated decisions based on first-hand experience. While I
              have programmed in a variety of domains, I tend to focus on
              backend web development and systems/application development.
            </p>
            <p>
              Lately, I've been having a great time contributing to open-source project, <a href="Machhttps://machengine.org/" target="_blank">Mach</a>. Mach is a modern game engine written in Zig that is pushing <a href="https://en.wikipedia.org/wiki/Entity_component_system" target="_blank">ECS</a> technology forward with the new <a href="https://machengine.org/docs/object/" target="_blank">Mach Object System</a>. I have primarily worked on native support with Linux display servers X11 and Wayland.
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
