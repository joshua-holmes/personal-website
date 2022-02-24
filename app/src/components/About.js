import TypingText from "./TypingText";

function About() {
  
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <TypingText
              className="heading"
              timeLimit={0.5}
            >
              About Me
            </TypingText>
          </div>
          <div className="col-md-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut
              tortor nec nulla commodo malesuada sit amet vel lacus. Fusce
              eget efficitur libero. Morbi dapibus porta quam laoreet
              placerat. Donec eu vehicula neque. Donec viverra lorem nunc,
              tempus euismod eros sollicitudin ut. Quisque et tincidunt
              libero. Donec id pharetra justo. Proin euismod lacinia dolor, eu
              scelerisque justo tempus pharetra. Vivamus nunc justo, finibus
              ut nisl sed, euismod rhoncus nulla. Proin sed magna egestas,
              egestas ante et, congue eros. In consequat, mauris dapibus
              tincidunt suscipit, ex libero aliquet diam, at maximus risus
              enim non leo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;