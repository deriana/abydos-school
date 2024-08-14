import "./hero.css";

const Hero = () => {
  return (
    <div className="hero hero-container hero-responsive">
            <div className="hero-img" data-aos="fade-up"></div>
      <div className="hero-text" data-aos="fade-up">
        <p className="hero-text-1">#No 1 School In Kivotos</p>
        <h1>Discover new things to enrich your skill anytime anywhere</h1>
        <p className="hero-desk">
          Education began in prehistory, as adults trained the young in the
          knowledge and skills deemed necesesary in their society
        </p>
        <button className="hero-button">Enroll Now</button>
      </div>
    </div>
  );
};

export default Hero;
