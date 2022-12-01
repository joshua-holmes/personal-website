import TypingText from "./TypingText";
import NavLink from "./NavLink";

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
              Hi! I'm a Back End Software Engineer with a passion for learning and
              creating new technologies. I build apps that bring
              real-world value through practical application and entertainment.
              The technologies I use to build applications are Node.js, Express.js, Ruby, Rails, Python, Flask, C++, Bash, and much more. My experience includes building
              relational databases, RESTful routes, automation scripts, and more recently fully-featured packages for Linux.
            </p>
            <p>
              I recently built a template with detailed documentation for
              developers looking to containerize and deploy their Ruby on Rails
              application using Docker. It features pre-configured settings and
              custom scripts to allow a Ruby on Rails app to be Dockerized and ready for
              deployment in only 2 command-line entries. It even offers support for a React front end! <NavLink to={'projects'}>See below</NavLink> for more information about it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
