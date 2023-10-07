import "./App.css";
import RecipesContextProvider from "./Contexts/RecipesContext";
import SingleShopProvider from "./Contexts/SingleShopContext";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Locations from "./components/Locations/Locations";
import CoffeeMaterial from "./components/Recipes/CoffeeMaterial";
import RawMaterials from "./components/Recipes/RawMaterials";
import RecipesHero from "./components/Recipes/RecipesHero";
import RecipesResult from "./components/Recipes/RecipesResult";
import Shop from "./components/SingleLocation/Shop";
import Footer from "./reusable/Footer";
import NavBar from "./reusable/Nav";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <NavBar />
      <SingleShopProvider>
        <RecipesContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/shop" element={<Shop />} />
            <Route path="/recipes" element={<RecipesHero />} />
            <Route path="/recipes/1" element={<CoffeeMaterial />} />
            <Route path="/recipes/2" element={<RawMaterials />} />
            <Route path="/recipes/3" element={<RecipesResult />} />
          </Routes>
        </RecipesContextProvider>
      </SingleShopProvider>
      <Footer />
    </div>
  );
}

export default App;
