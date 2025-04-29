import React from "react";
import TypingText from "./TypingText";

function Projects() {
  const projects = [
    {
      name: "Google Photos Metadata Fix",
      description:
        "This is a command line application that fixes metadata for photos exported from Google Photos.",
      image: "./images/metadata-fix.jpg",
      links: [
        {
          name: "Github",
          link: "https://github.com/joshua-holmes/google-photos-metadata-fix",
        },
      ],
    },
    {
      name: "Google Photos Takeout Util",
      description:
        "A WIP GUI application written entirely in Rust for handling image data from Google Photos Takeout, including fixing metadata and converting between image formats",
      image: "./images/coding-icon.jpg",
      links: [
        {
          name: "Github",
          link: "https://github.com/joshua-holmes/google-photos-takeout-util",
        },
      ],
    },
    {
      name: "Multiple Links",
      description:
        "Ever need to share multiple links but are only given space for one? Need a link that is forever FREE and NEVER expires? You're welcome :)",
      image: "./images/coding-icon.jpg",
      links: [
        {
          name: "Github",
          link: "https://github.com/joshua-holmes/multiple-links",
        },
        {
          name: "Example",
          link: "https://multiple-links.com?v=1&l=holmes-software.com&h=My%20Website&t=GitHub&l=github.com/joshua-holmes&t=LinkedIn&l=www.linkedin.com/in/joshua-phillip-holmes/&h=My%20Socials",
        },
      ],
    },
    {
      name: "Sand Falling Engine in Rust using Vulkan API",
      description:
        "An incomplete render/physics engine written entirely in Rust with Vulkan API",
      image: "./images/a-game.png",
      links: [
        {
          name: "Github",
          link: "https://github.com/joshua-holmes/unknown-game",
        },
      ],
    },
  ];

  // Create project link tags
  for (let proj of projects) {
    const linkTags = (
      <>
        {proj.links.map((linkObj, i) => (
          <React.Fragment key={linkObj.name}>
            {i > 0 ? <span className="divider"> | </span> : ""}
            <a href={linkObj.link} target="_blank" rel="noreferrer">
              {linkObj.name}
            </a>
          </React.Fragment>
        ))}
      </>
    );
    proj.linkTags = linkTags;
  }

  return (
    <div id="projects" className="background">
      <TypingText className="heading" timeLimit={0.5}>
        Projects
      </TypingText>
      <div className="container">
        <div className="row">
          {projects.map(({ name, description, image, linkTags }) => (
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
  );
}

export default Projects;
