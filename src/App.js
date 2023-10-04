import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Locations from "./components/Locations/Locations";
import Shop from "./components/SingleLocation/Shop";
import Footer from "./reusable/Footer";
import NavBar from "./reusable/Nav";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
