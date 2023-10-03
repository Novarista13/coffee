import CoffeeCard from "./CoffeeCard";
import Featured from "./Featured";
import Hero from "./Hero";

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Featured />
      <CoffeeCard />
    </div>
  );
}

export default Home;
