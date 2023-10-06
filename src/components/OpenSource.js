import React from "react";
import TypingText from "./TypingText";

function OpenSource() {
  const blurb =
    "Being passionate about open source, I have recently started contributing to projects that I believe benefit the world and have even more potential to do so. Due to my involvement being recent, I have not accomplished much in the open source community yet, but am actively working to do so! Here are a list of some projects I have contributed to so far.";

  const projects = [
    {
      name: "Godot",
      contributions: [
        "Currently learning how to use Godot so I can contribute. This is currently my main focus, though.",
      ],
      image: "./images/godot.png",
      links: [
        {
          name: "Github",
          link: "https://github.com/godotengine/godot",
        },
      ],
    },
    {
      name: "Firefox",
      contributions: [
        "Fixed issue with repo cloning Python script for Windows, where it expects to find Mercurial exe, but expects wrong name",
      ],
      image: "./images/firefox.png",
      links: [
        {
          name: "Product Page",
          link: "https://www.mozilla.org/en-US/firefox/new/",
        },
      ],
    },
    {
      name: "Rust-Embedded/Discovery",
      contributions: [
        'Corrected misspelling of the word "occurred" across repo using Rust',
      ],
      links: [
        {
          name: "GitHub",
          link: "https://github.com/rust-embedded/discovery",
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
        <p className="section-description">{blurb}</p>
        <div className="row">
          {projects.map(({ name, contributions, image, linkTags }) => (
            <div key={name} className="project shadow-large">
              <div className="project-info">
                <h3>{name}</h3>
                <ul>
                  {contributions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {linkTags}
              </div>
              {/* <!-- End .project-info --> */}
              <div className="project-image">
                <img
                  src={image || "./images/coding-icon.jpg"}
                  className="shadow-large"
                  alt={name}
                />
              </div>
              {/* <!-- End .project-image --> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OpenSource;
