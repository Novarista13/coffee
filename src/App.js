import "./App.css";
import SingleShopProvider from "./Contexts/SingleShopContext";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Locations from "./components/Locations/Locations";
import Recipes from "./components/Recipes/Recipes";
import Shop from "./components/SingleLocation/Shop";
import Footer from "./reusable/Footer";
import NavBar from "./reusable/Nav";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <NavBar />
      <SingleShopProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/shop" element={<Shop />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </SingleShopProvider>
      <Footer />
    </div>
  );
}

export default App;
