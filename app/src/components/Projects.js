import React from "react";
import TypingText from "./TypingText";

function Projects() {

  const projects = [
    {
      name: "Dictionary Game",
      description: "A game based on the classic Hangman game, where you must use available letters to guess a hidden word. In Dictionary Game, a random word is selected from the dictionary, and you must use the dictionary definition to help you guess the word.",
      image: "./images/dictionary-game.jpg",
      links: [
        {
          'name': 'Github',
          'link': 'https://github.com/joshua-holmes/dictionary-game'
        },
        {
          'name': 'Demo',
          'link': 'https://dictionary-game.jpholmes.com/'
        },
        {
          'name': 'App Store',
          'link': 'https://play.google.com/store/apps/details?id=com.jpholmes.dictionary_game.twa'
        }
      ]
    },
    {
      name: "Unoffical Linux BeamMP Installer",
      description: "Welcome to the Unoffical Linux BeamMP Installer! This program automates the installation of the BeamNG multiplayer mod, BeamMP, on Linux using Proton, since the mod is natively available for Windows only.",
      image: "./images/beammp-linux.jpg",
      links: [
        {
          'name': 'Github',
          'link': 'https://github.com/joshua-holmes/beammp-installer'
        }
      ]
    },
    {
      name: "Docker Template: Ruby on Rails",
      description: "This project serves as a template that will allow you to toss your Ruby on Rails (can optionally include React frontend) application into a folder, configure a few settings, then quickly have a Dockerized app with it's own contained environment!",
      image: "./images/docker-ror.jpg",
      links: [
        {
          'name': 'Github',
          'link': 'https://github.com/joshua-holmes/docker-template-ruby-on-rails'
        }
      ]
    },
  ]

  // Create project link tags
  for (let proj of projects) {
    const linkTags = (
      <>{
        proj.links.map((linkObj, i) => (  
          <React.Fragment key={linkObj.name}>{i > 0 ? <span className="divider"> | </span> : ''}
            <a href={linkObj.link} target="_blank">{linkObj.name}</a>
          </React.Fragment>
        ))
      }</>
    )
    proj.linkTags = linkTags;
  }

  return (
    <div id="projects" className="background-alt">
      <TypingText className="heading" timeLimit={0.5}>Projects</TypingText>
      <div className="container">
        <div className="row">

          {projects.map(({name, description, image, linkTags}, i) => (
            <div key={name} className="project shadow-large">
              <div className="project-image">
                <img src={image} className="shadow-large" />
              </div>
              {/* <!-- End .project-image --> */}
              <div className="project-info">
                <h3>{name}</h3>
                <p>{description}</p>
                {linkTags}
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