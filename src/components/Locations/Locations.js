import LocationMap from "./LocationMap";
import Shops from "./Shops";
import { animateScroll as scroll } from "react-scroll";

function Locations() {
  return (
    <div className="locations-page">
      {scroll.scrollToTop()}
      <LocationMap />
      <Shops />
    </div>
  );
}

export default Locations;
