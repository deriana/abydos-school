import "./tutor.css";

const Tutor = () => {
  return (
    <div className="tutor">
      <div className="tutor-text" data-aos="fade-up">
        <h1>
          How can you reach to us?
        </h1>
        <p>
          Education began in prehistory, as adult trained the young in the
          knowledge and skills
        </p>
      </div>
      <div className="tutor-container" data-aos="fade-up">
        <div className="tutor-content">
          <h1>1</h1>
          <div className="tutor-content-text">
            <h3>Choose your subject from the help board</h3>
            <p>Pick your subject what you want to learn</p>
          </div>
        </div>
        <div className="tutor-content">
          <h1>2</h1>
          <div className="tutor-content-text">
            <h3>Request a tutor for take a your lesson</h3>
            <p>Get a paired with a profesional teacher who can teach you</p>
          </div>
        </div>
        <div className="tutor-content">
          <h1>3</h1>
          <div className="tutor-content-text">
            <h3>Schedule your timing as you want</h3>
            <p>Study timing and place is up to you</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutor;
