import React from "react";
import TypingText from "./TypingText";

function Projects() {
  const projects = [
    {
      name: "Signature Verification API Example",
      description: "A project to demonstrate a web service that proves ownership of a private key using Rust",
      image: "./images/coding-icon.jpg",
      links:[
        {
          "name": "Github",
          "link": "https://github.com/joshua-holmes/signature-verification-api-example"
        }
      ]
    },
    {
      name: "Sand Falling Engine in Rust using Vulkan API",
      description: "An incomplete render/physics engine written entirely in Rust with Vulkan API",
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
      description: "A very simple Neovim plugin which implements \"per-project\" nvim-dap debugger adapters and configurations",
      image: "./images/neovim.png",
      links:[
        {
          "name": "Github",
          "link": "https://github.com/joshua-holmes/dap-projects.nvim"
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
