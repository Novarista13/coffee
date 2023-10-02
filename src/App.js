import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Footer from "./reusable/Footer";
import NavBar from "./reusable/Nav";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Hero />
      <Featured />
      <CoffeeCard />
      <Footer />
    </div>
  );
}

export default App;
