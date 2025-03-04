import React from "react";
import TypingText from "./TypingText";

function Projects() {

  const projects = [
    {
      name: "Unfinished Game Engine in Rust using Vulkan API",
      description: "An incomplete 2D game engine, written using Rust and Vulkan, for falling sand games.",
      image: "./images/a-game.png",
      links:[
        {
          "name": "Github",
          "link": "https://github.com/joshua-holmes/unknown-game"
        }
      ]
    },
    {
      name: "dap-projects.nvim (neovim plugin)",
      description: "A very simple Neovim plugin which implements \"per-project\" nvim-dap debugger adapters and configurations.",
      image: "./images/neovim.png",
      links:[
        {
          "name": "Github",
          "link": "https://github.com/joshua-holmes/dap-projects.nvim"
        }
      ]
    },
    {
      name: "Google Photos Metadata Fix",
      description: "This is a command line application that fixes metadata for photos exported from Google Photos.",
      image: "./images/metadata-fix.jpg",
      links:[
        {
          "name": "Github",
          "link": "https://github.com/joshua-holmes/google-photos-metadata-fix"
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
            <a href={linkObj.link} target="_blank" rel="noreferrer">{linkObj.name}</a>
          </React.Fragment>
        ))
      }</>
    )
    proj.linkTags = linkTags;
  }

  return (
    <div id="projects" className="background">
      <TypingText className="heading" timeLimit={0.5}>Projects</TypingText>
      <div className="container">
        <div className="row">

          {projects.map(({name, description, image, linkTags}) => (
            <div key={name} className="project shadow-large">
              <div className="project-image">
                <img src={image} className="shadow-large" alt={name} />
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
