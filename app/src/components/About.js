import TypingText from "./TypingText";

function About() {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <TypingText className="heading" timeLimit={0.5}>
              About Me
            </TypingText>
            <img src="./images/ProfilePic.jpeg"/>
          </div>
          <div className="col-md-8">
            <p>
              Hi! I'm a Full Stack Software Engineer with a passion for learning and
              creating new technologies. I build apps that bring
              real-world value through practical application and entertainment.
              The technologies I use to build full stack applications are JavaScript, Ruby, React,
              Rails, and a little Python. My experience spans from building
              relational databases, RESTful routes, and custom server-side
              logic, to vanilla CSS, CSS frameworks like MUI in React, and
              custom client-side logic.
            </p>
            <p>
              I recently built a template with detailed documentation for
              developers looking to containerize and deploy their Ruby on Rails
              application using Docker. It features pre-configured settings and
              custom scripts to allow an app to be Dockerized and ready for
              deployment in only 2 command-line entries. Check out the Featured
              section or Projects section of my LinkedIn profile to see more!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
