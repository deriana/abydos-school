import { useRef, useState } from "react";
import "./hero.css"; 
import VideoFile from "../assets/hero-video.mp4"
import "./hero-video.css"

const HeroVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="hero hero-container" id="tutor">
      <div className="hero-video" data-aos="fade-up">
        <video ref={videoRef} className="video-content" width="600" controls={false}>
          <source src={VideoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="video-button" onClick={togglePlayPause}>
          <div className="play-icon">
            {isPlaying ? "❚❚" : "▶"}
          </div>
        </div>
      </div>

      <div className="hero-text" data-aos="fade-up">
        <p className="hero-text-1">#No 1 School In Kivotos</p>
        <h1>Attend every class wherever you are staying in</h1>
        <p className="hero-desk">
          A learning system based on formalised teaching but with the help of electronic resource is known as E-Learning. While teaching can be based in or out of the classroom, the use of computers and the Internet forms the major component
        </p>
        <button className="hero-button">Explore Online Class</button>
      </div>
    </div>
  );
};

export default HeroVideo;
