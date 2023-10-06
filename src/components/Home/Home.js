import CoffeeCard from "./CoffeeCard";
import Featured from "./Featured";
import Hero from "./Hero";
import { animateScroll as scroll } from "react-scroll";

function Home() {
  return (
    <div className="home-page">
      {scroll.scrollToTop()}
      <Hero />
      <Featured />
      <CoffeeCard />
    </div>
  );
}

export default Home;
