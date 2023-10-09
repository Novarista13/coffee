import brownEspresso from "../../images/products/brown-espresso.jpg";
import caramelizedLatte from "../../images/products/caramelized-latte.jpg";
import cascaraBrew from "../../images/products/cascara-brew.jpg";
import cherryLatte from "../../images/products/cherry-latte.jpg";
import cinnamonCappuccino from "../../images/products/cinnamon-cappuccino.jpg";
import coconutBrew from "../../images/products/coconut-brew.jpg";
import gingerbreadLatte from "../../images/products/gingerbread-latte.jpg";
import hazelnutBrew from "../../images/products/hazelnut-brew.jpg";
import honeyLatte from "../../images/products/honey-latte.jpg";
import iceMacchito from "../../images/products/ice-macchito.jpg";
import irishColdBrew from "../../images/products/irish-cold-brew.jpg";
import matchaLatte from "../../images/products/matcha-latte.jpg";
import mochaFrappuccino from "../../images/products/mocha-frappuccino.jpg";
import rainbowMocha from "../../images/products/rainbow-mocha.jpg";
import raspberryMocha from "../../images/products/raspberry-mocha.jpg";
import smoresFrappuccino from "../../images/products/s'mores-frappuccino.jpg";
import saltedMocha from "../../images/products/salted-mocha.jpg";
import tiramisuLatte from "../../images/products/tiramisu-latte.jpg";
import toastedCoffee from "../../images/products/toasted-coffee.jpg";
import vanillaFrappuccino from "../../images/products/vanilla-frappuccino.jpg";

export const productsImage = (products) => {
  const productsID = products.toLowerCase();
  switch (productsID) {
    case "salted mocha":
      return saltedMocha;
    case "vanilla frappuccino":
      return vanillaFrappuccino;
    case "cinnamon cappuccino":
      return cinnamonCappuccino;
    case "iced macchiato":
      return iceMacchito;
    case "hazelnut brew":
      return hazelnutBrew;
    case "honey latte":
      return honeyLatte;
    case "coconut brew":
      return coconutBrew;
    case "tiramisu latte":
      return tiramisuLatte;
    case "cascara brew":
      return cascaraBrew;
    case "gingerbread latte":
      return gingerbreadLatte;
    case "irish cold brew":
      return irishColdBrew;
    case "s'mores frappuccino":
      return smoresFrappuccino;
    case "caramelized latte":
      return caramelizedLatte;
    case "cherry blossom latte":
      return cherryLatte;
    case "raspberry mocha":
      return raspberryMocha;
    case "matcha latte":
      return matchaLatte;
    case "brown espresso":
      return brownEspresso;
    case "mocha frappuccino":
      return mochaFrappuccino;
    case "toasted coffee":
      return toastedCoffee;
    case "rainbow mocha":
      return rainbowMocha;
    default:
      break;
  }
};
