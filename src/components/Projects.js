import React from "react";
import TypingText from "./TypingText";

function Projects() {

  const projects = [
    {
      name: "Google Photos Metadata Fix",
      description: "This is a command line application that fixes metadata for Google Photos exported pics ",
      image: "./images/metadata-fix.jpg",
      links:[
        {
          "name": "Github",
          "link": "https://github.com/joshua-holmes/google-photos-metadata-fix"
        }
      ]
    },
    {
      name: "Docker Template: Ruby on Rails",
      description: "This project serves as a template that will allow you to toss your Ruby on Rails (can optionally include React frontend) application into a folder, configure a few settings, then quickly have a Dockerized app with it's own contained environment!",
      image: "./images/docker-ror.jpg",
      links: [
        {
          "name": "Github",
          "link": "https://github.com/joshua-holmes/docker-template-ruby-on-rails"
        }
      ]
    },
  ]

  // Create project link tags
  for (let proj of projects) {
    const linkTags = (
      <>{
        proj.links.map((linkObj, i) => (  
          <React.Fragment key={linkObj.name}>{i > 0 ? <span className="divider"> | </span> : ""}
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

          {projects.map(({name, description, image, linkTags}) => (
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
