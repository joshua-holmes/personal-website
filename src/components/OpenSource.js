import React from "react";
import TypingText from "./TypingText";

function OpenSource() {
  const projects = [
    {
      name: "Bevy",
      description: "A refreshingly simple data-driven game engine built in Rust.",
      contributions: [
        "Reworking single-threaded data storage and communication with multi-threaded data in Bevy's ECS system",
      ],
      image: "./images/bevy_logo_dark.svg",
      links: [
        {
          name: "Product Page",
          link: "https://bevyengine.org/",
        },
        {
          name: "Contributions",
          link: "https://github.com/bevyengine/bevy/pulls?q=is%3Apr+author%3Ajoshua-holmes+",
        },
        {
          name: "Technical Implementation Plan",
          link: "https://github.com/bevyengine/bevy/issues/17667",
        },
      ],
    },
    {
      name: "Mach",
      description: "For building high-performance, truly cross-platform, robust & modular games, visualizations, and desktop/mobile GUI apps.",
      contributions: [
        "Working on native support with Linux display servers X11 and Wayland",
      ],
      image: "./images/mach.svg",
      links: [
        {
          name: "Product Page",
          link: "https://machengine.org/",
        },
        {
          name: "Contributions",
          link: "https://github.com/hexops/mach/pulls?q=is%3Apr+author%3Ajoshua-holmes",
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
    <div id="open-source" className="background-alt">
      <TypingText className="heading" timeLimit={0.5}>
        Open Source Contributions
      </TypingText>
      <div className="container">
        <div className="row">
          {projects.map(({ name, contributions, image, linkTags, description }) => (
            <div key={name} className="project shadow-large">
              <div className="project-image">
                <img
                  src={image || "./images/coding-icon.jpg"}
                  className="shadow-large"
                  alt={name}
                />
              </div>
              <div className="project-info">
                <h3>{name}</h3>
                <h4>{description}</h4>
                <ul>
                  {contributions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <br/>
                {linkTags}
              </div>
              {/* <!-- End .project-info --> */}
              {/* <!-- End .project-image --> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OpenSource;
