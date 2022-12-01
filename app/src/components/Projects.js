import TypingText from "./TypingText";

function Projects() {

  const projects = [
    {
      name: "Docker Template: Ruby on Rails",
      description: "This project serves as a template that will allow you to toss your Ruby on Rails (can optionally include React frontend) application into a folder, configure a few settings, then quickly have a Dockerized app with it's own contained environment!",
      image: "./images/docker-ror.jpg",
      github: "https://github.com/joshua-holmes/docker-template-ruby-on-rails",
    },
    {
      name: "Mini Maestro",
      description: "The app that walks you through composing your very own music, even if you have no experience.",
      image: "./images/mini-maestro.jpg",
      github: "https://github.com/joshua-holmes/mini-maestro",
      demo: "https://mini-maestro.jpholmes.com/",
    },
    {
      name: "Dictionary Game",
      description: "A game based on the classic Hangman game, where you must use available letters to guess a hidden word. In Dictionary Game, a random word is selected from the dictionary, and you must use the dictionary definition to help you guess the word.",
      image: "./images/dictionary-game.jpg",
      github: "https://github.com/joshua-holmes/dictionary-game",
      demo: "https://dictionary-game.jpholmes.com/",
    },
  ]
  
  return (
    <div id="projects" className="background-alt">
      <TypingText className="heading" timeLimit={0.5}>Projects</TypingText>
      <div className="container">
        <div className="row">

          {projects.map(({name, description, image, github, demo}) => (
            <div key={name} className="project shadow-large">
              <div className="project-image">
                <img src={image} className="shadow-large" />
              </div>
              {/* <!-- End .project-image --> */}
              <div className="project-info">
                <h3>{name}</h3>
                <p>{description}</p>
                {demo && <a href={demo} target="_blank">Demo</a>}
                {github && demo && <span className="divider"> | </span>}
                {github && <a href={github} target="_blank">Source Code</a>}
              </div>
              {/* <!-- End .project-info --> */}
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Projects;