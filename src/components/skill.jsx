import "./skill.css";

const Skill = () => {
  return (
    <div className="skill" id="features">
      <h1 data-aos="fade-up">Abydos ensured your satisfaction</h1>
      <div className="skill-container" data-aos="fade-up">
        <div className="container-item">
          <i className="fa-solid fa-book"></i>
          <h2>Expert Instructor</h2>
          <p>
            With an expert instructor (SENSEI) we make sure your course going
            well
          </p>
        </div>
        <div className="container-item">
          <i className="fa-solid fa-laptop"></i>
          <h2>Online Course</h2>
          <p>Chose your course from 1 Million+ online video classes</p>
        </div>
        <div className="container-item">
          <i className="fa-solid fa-shield"></i>
          <h2>Lifetime Access</h2>
          <p>
            Abydos ensured your access for life time. And Abydos grants your
            success
          </p>
        </div>
        <div className="container-item">
          <i className="fa-solid fa-person-rifle"></i>
          <h2>Gun</h2>
          <p>
            Every student gets a free weapon and Abydos guarantees your safety
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
