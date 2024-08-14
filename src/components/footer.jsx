import "./footer.css";

const Footer = () => {
  return (
    <footer data-aos="fade-up" id="footer">
      <div className="title-footer" data-aos="fade-up">
        <div className="nav-logo">
          <i className="fa-solid fa-graduation-cap"></i>
          <h3>Abydos</h3>
        </div>
        <p>
          Education began in prehistory. as adults trained the young in the
          knowledge and skills.
        </p>
        <div className="nav-sosmed">
          <a href="#">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-linkedin-in"></i>{" "}
          </a>
        </div>
      </div>
      <nav className="footer-nav" data-aos="fade-up">
        <ul>
          <h2>Resources</h2>
          <li>Features</li>
          <li>Pricing</li>
          <li>Log In</li>
          <li>Sign Up</li>
        </ul>
        <ul>
          <h2>Legal</h2>
          <li>Term of use</li>
          <li>Privacy policy</li>
          <li>Legal notice</li>
        </ul>
        <ul>
          <h2>Links</h2>
          <li>Feedback</li>
          <li>Tutors</li>
          <li>Course</li>
          <li>About Us</li>
        </ul>
      </nav>
      <div className="footer-input" data-aos="fade-up">
        <p>Write to us</p>
        <div className="footer-input-content">
          <input type="email" placeholder="Email" />
          <button>Send</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
