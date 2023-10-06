import AboutHero from "./AboutHero";
import { animateScroll as scroll } from "react-scroll";

function About() {
  return (
    <div className="about-page">
      {scroll.scrollToTop()}
      <AboutHero />
    </div>
  );
}

export default About;
