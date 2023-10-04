import { shopImage } from "../../data/shops/shopImage";
import { shopInfo } from "../../data/shops/shopInfo";
import { HashLink } from "react-router-hash-link";
import arrowDown from "../../images/about-img/arrow-down.svg";

export default function ShopHero() {


  return (
    <div className="shop-hero-section">
      <div className="shop-hero-text">
        <img
          className="shop-hero-img"
          src={shopImage("Brew Haven")}
          alt={"Brew Haven"}
          width={150}
          height={150}
        />
        <h2>{"Brew Haven"}</h2>
        <h4>{shopInfo("Brew Haven").location}</h4>
        <HashLink to="#info">
          <img
            width={45}
            className="shop-arrow-down"
            src={arrowDown}
            alt="arrow-down"
          />
        </HashLink>
      </div>
    </div>
  );
}
