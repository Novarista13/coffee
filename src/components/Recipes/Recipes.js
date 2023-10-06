import CoffeeMaterial from "./CoffeeMaterial";
import RawMaterials from "./RawMaterials";
import RecipesHero from "./RecipesHero";
import RecipesResult from "./RecipesResult";
import { animateScroll as scroll } from "react-scroll";

function Recipes() {
  return (
    <div className="recipes-page">
      {scroll.scrollToTop()}
      <RecipesHero />
      <CoffeeMaterial />
      <RawMaterials />
      <RecipesResult />
    </div>
  );
}

export default Recipes;
