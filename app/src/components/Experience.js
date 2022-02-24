import TypingText from "./TypingText";

function Experience() {
  
  return (
    <div id="experience" className="background-alt">
      <TypingText className="heading" timeLimit={0.5}>Experience</TypingText>
      <div id="experience-timeline">
        <div className="vtimeline-icon">
          <i className="fa fa-map-marker"></i>
        </div>
        <div className="vtimeline-point">
          <span className="vtimeline-date">September 2015 – September 2016</span>
          <div className="vtimeline-block">
            <div
              data-date="September 2015 – September 2016"
              className="vtimeline-content"
            >
              <h3>Employer Name</h3>
              <h4>Job Title</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut
                tortor nec nulla commodo malesuada sit amet vel lacus. Fusce
                eget efficitur libero. Morbi dapibus porta quam laoreet
                placerat.
              </p>
            </div>
          </div>
        </div>

        <div className="vtimeline-icon">
          <i className="fa fa-map-marker"></i>
        </div>
        <div className="vtimeline-point">
          <span className="vtimeline-date">September 2015 – September 2016</span>
          <div className="vtimeline-block">
            <div
              className="vtimeline-content"
            >
              <h3>Employer Name</h3>
              <h4>Job Title</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut
                tortor nec nulla commodo malesuada sit amet vel lacus. Fusce
                eget efficitur libero. Morbi dapibus porta quam laoreet
                placerat.
              </p>
            </div>
          </div>
        </div>

        <div className="vtimeline-icon">
          <i className="fa fa-map-marker"></i>
        </div>
        <div className="vtimeline-point">
          <span className="vtimeline-date">September 2015 – September 2016</span>
          <div className="vtimeline-block">
            <div
              className="vtimeline-content"
            >
              <h3>Employer Name</h3>
              <h4>Job Title</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut
                tortor nec nulla commodo malesuada sit amet vel lacus. Fusce
                eget efficitur libero. Morbi dapibus porta quam laoreet
                placerat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;