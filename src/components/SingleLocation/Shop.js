import ShopHero from "./ShopHero";
import ShopInfoPanel from "./ShopInfoPanel";
import { animateScroll as scroll } from "react-scroll";

function Shop() {
  return (
    <div className="shop-page">
      {scroll.scrollToTop()}
      <ShopHero />
      <ShopInfoPanel />
    </div>
  );
}

export default Shop;
