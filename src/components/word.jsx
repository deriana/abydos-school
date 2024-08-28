import "./word.css";
import Hoshino from "../assets/hoshino.jpeg";
import Sensei from "../assets/sensei.jpeg";
import Nonomi from "../assets/nonomi.jpeg";

const Word = () => {
  return (
    <div data-aos="fade-up" id="blog">
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="word">
        <div className="word-content">
          <img src={Hoshino} alt="hoshino" className="word-img" />
          <div className="word-content-img"></div>
          <div className="word-content-text">
            <i className="fa-solid fa-quote-left"></i>
            <p>
              Abydos is really helped me a lot, i would highly recomended
              Abydos.
            </p>
            <h3>Takanashi Hoshino</h3>
          </div>
        </div>
        <div className="word-content">
          <img src={Sensei} alt="hoshino" className="word-img" />
          <div className="word-content-img"></div>
          <div className="word-content-text">
            <i className="fa-solid fa-quote-left"></i>
            <p>Di Abydos kalian bisa ngoding ges, gaskan daftar</p>
            <h3>Gwejh (SENESI)</h3>
          </div>
        </div>
        <div className="word-content">
          <img src={Nonomi} alt="hoshino" className="word-img" />
          <div className="word-content-img"></div>
          <div className="word-content-text">
            <i className="fa-solid fa-quote-left"></i>
            <p>
              Abydos is really helped me a lot, i would highly recomended
              Abydos.
            </p>
            <h3>Izayoi Nonomi</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Word;
