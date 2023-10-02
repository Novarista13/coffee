import shop1 from "../../images/shops/shop1.svg";

export const shopImage = (shop) => {
  const shopID = shop.toLowerCase();
  switch (shopID) {
    case "brew haven":
      return shop1;
    case "java jive cafe":
      return shop1;
    case "caffeine oasis":
      return shop1;
    case "espresso delights":
      return shop1;
    case "mocha muse":
      return shop1;
    case "bean bliss bistro":
      return shop1;
    case "the roasted mug":
      return shop1;
    case "perk & sip coffee co.":
      return shop1;
    case "steamy cuppa cafe":
      return shop1;
    case "urban grindhouse":
      return shop1;
    case "frothy fix cafe":
      return shop1;
    case "morning zest java":
      return shop1;
    case "cup & cozy":
      return shop1;
    case "the grindstone cafe":
      return shop1;
    case "aroma avenue":
      return shop1;
    case "beanstalk brews":
      return shop1;
    case "latte lounge":
      return shop1;
    case "daily grind cafe":
      return shop1;
    case "creamy canvas coffee":
      return shop1;
    case "cappuccino corner":
      return shop1;
    default:
      break;
  }
};
