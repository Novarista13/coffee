import { shopImage } from "../../data/shops/shopImage";
import { shopInfo } from "../../data/shops/shopInfo";
import { HashLink } from "react-router-hash-link";
import arrowDown from "../../images/about-img/arrow-down.svg";
import { useContext } from "react";
import { SingleShopContext } from "../../Contexts/SingleShopContext";
import { Link } from "react-router-dom";
import arrowRight from "../../images/arrow-right.svg";

export default function ShopHero() {
  const { shopName } = useContext(SingleShopContext);
  let shop = shopName ? shopName : "Brew Haven";
  
  return (
    <div className="shop-hero-section">
      <Link to="/locations" className="shop-hero-back-link">
        <img
          width={45}
          className="arrow-down"
          src={arrowRight}
          alt="arrow-down"
        />
        Locations
      </Link>
      <div className="shop-hero-text">
        <img
          className="shop-hero-img"
          src={shopImage(shop)}
          alt={shop}
          width={100}
          height={100}
        />
        <h2>{shop}</h2>
        <h4>{shopInfo(shop).location}</h4>
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
