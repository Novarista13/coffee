import shop1 from "../../images/shops/shops svgs/shop1.svg";
import shop2 from "../../images/shops/shops svgs/shop2.svg";
import shop3 from "../../images/shops/shops svgs/shop3.svg";
import shop4 from "../../images/shops/shops svgs/shop4.svg";
import shop5 from "../../images/shops/shops svgs/shop5.svg";
import shop6 from "../../images/shops/shops svgs/shop6.svg";
import shop7 from "../../images/shops/shops svgs/shop7.svg";
import shop8 from "../../images/shops/shops svgs/shop8.svg";
import shop9 from "../../images/shops/shops svgs/shop9.svg";
import shop10 from "../../images/shops/shops svgs/shop10.svg";
import shop11 from "../../images/shops/shops svgs/shop11.svg";
import shop12 from "../../images/shops/shops svgs/shop12.svg";
import shop13 from "../../images/shops/shops svgs/shop13.svg";
import shop14 from "../../images/shops/shops svgs/shop14.svg";
import shop15 from "../../images/shops/shops svgs/shop15.svg";
import shop16 from "../../images/shops/shops svgs/shop16.svg";
import shop17 from "../../images/shops/shops svgs/shop17.svg";
import shop18 from "../../images/shops/shops svgs/shop18.svg";
import shop19 from "../../images/shops/shops svgs/shop19.svg";
import shop20 from "../../images/shops/shops svgs/shop20.svg";

export const shopImage = (shop) => {
  const shopID = shop.toLowerCase();
  switch (shopID) {
    case "brew haven":
      return shop1;
    case "java jive cafe":
      return shop2;
    case "espresso delights":
      return shop3;
    case "mocha muse":
      return shop4;
    case "bean bliss bistro":
      return shop5;
    case "the roasted mug":
      return shop6;
    case "perk & sip coffee co.":
      return shop7;
    case "steamy cuppa cafe":
      return shop8;
    case "urban grindhouse":
      return shop9;
    case "frothy fix cafe":
      return shop10;
    case "morning zest java":
      return shop11;
    case "cup & cozy":
      return shop12;
    case "the grindstone cafe":
      return shop13;
    case "aroma avenue":
      return shop14;
    case "beanstalk brews":
      return shop15;
    case "latte lounge":
      return shop16;
    case "daily grind cafe":
      return shop17;
    case "creamy canvas coffee":
      return shop18;
    case "cappuccino corner":
      return shop19;
    case "caffeine oasis":
      return shop20;
    default:
      break;
  }
}
