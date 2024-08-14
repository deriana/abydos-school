import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [isNavScrolled, setIsNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsNavScrolled(true);
      } else {
        setIsNavScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <nav className={`nav ${isNavScrolled ? "nav-scrolled" : ""}`} data-aos="fade-up">
        <div className="nav-logo">
          <i className="fa-solid fa-graduation-cap"></i>
          <h3>Abydos</h3>
        </div>
        <ul className="ul-nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#categories">Courses</a>
            </li>
            <li>
              <a href="#tutor">Tutor</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#footer">Footer</a>
            </li>
          </ul>
          <ul>
            <button className="nav-button log-in">
              <a href="#">Log In</a>
            </button>
            <button className="nav-button sign-in">
              <a href="#">Sign Up</a>
            </button>
          </ul>
        </ul>
      </nav>
      <div className="hero" id="home">
        <div className="hero-text" data-aos="fade-up">
          <p className="hero-text-1">#No 1 School In Kivotos</p>
          <h1>Discover new things to enrich your skill anytime anywhere</h1>
          <p className="hero-desk">
            Education began in prehistory, as adults trained the young in the
            knowledge and skills deemed necessary in their society
          </p>
          <button className="hero-button">Enroll Now</button>
        </div>
        <div className="hero-img" data-aos="fade-up">
          {/* Optional image or content */}
        </div>
      </div>
    </header>
  );
};

export default Header;
