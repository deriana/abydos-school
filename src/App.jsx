import { useEffect } from "react";
import "./App.css";
import Course from "./components/course";
import Header from "./components/header";
import Hero from "./components/hero";
import Skill from "./components/skill";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroVideo from "./components/hero-video";
import Tutor from "./components/tutor";
import Word from "./components/word";
import Footer from "./components/footer";
import "./components/responsive.css"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  });

  return (
    <div className="App">
      <Header />
      <Skill />
      <Hero />
      <Course />
      <HeroVideo />
      <Tutor />
      <Word />
      <Footer />
    </div>
  );
}

export default App;
