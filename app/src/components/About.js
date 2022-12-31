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
              Hi, I'm Josh! Creative and detail oriented with a passion for learning, I am always looking for a challenge! Software Engineer by day and......Software Engineer by night! In my day job, I design and build APIs, database structures, and game logic for StatHero. Outside of work, I learn new technologies and create new experiences for myself. Recently, I have been exploring lower level programming. I learned C++ and Bash scripting and built my first Linux application! Check it out in my <NavLink to={'projects'}>Projects section below!</NavLink>!
            </p>
            <p>
              I am also an experienced classical hornist and pianist, with over 20 years of total experience behind me. I have played in operas, musicals, orchestras, ballets, on the street, and much more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
