import React from "react";
import TypingText from "./TypingText";

function OpenSource() {
  const projects = [
    {
      name: "Bevy",
      description: "A refreshingly simple data-driven game engine built in Rust.",
      contributions: [
        "Led redesign of single-threaded data store and multi-threaded communication, which should improve performance significantly when project is complete due to the bulk of the game's computational workload not being shared with the main event loop",
        "Communicated with 30+ stakeholders to identify problems to craft a fitting solution, turning a contentious solution that would have complicated the API, into a simpler solution that all stakeholders agree on and solves 2x more problems than the original",
        "Documented new design and detailed technical implementation plans, resulting progress tracking for stakeholders and a clear vision for implementers",
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
        "Reintroduced native Linux support with X11 and Wayland using Zig after it had been scrapped due to lack of Linux developers, resulting in support for all major desktop platforms",
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
