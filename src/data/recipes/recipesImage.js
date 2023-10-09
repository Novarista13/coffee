import affogato from "../../images/recipes/recipes result/affogato.jpg";
import blendedVanillaEspresso from "../../images/recipes/recipes result/blended-vanilla-espresso.jpg";
import breveCoffee from "../../images/recipes/recipes result/breve-coffee.jpg";
import cafeConLeche from "../../images/recipes/recipes result/cafe-con-leche.jpg";
import capuccino from "../../images/recipes/recipes result/capuccino.jpg";
import chaiLatte from "../../images/recipes/recipes result/chai-latte.jpg";
import classicBlack from "../../images/recipes/recipes result/classic-black.jpg";
import classicDark from "../../images/recipes/recipes result/classic-dark.jpg";
import coldBrew from "../../images/recipes/recipes result/cold-brew.jpg";
import cortado from "../../images/recipes/recipes result/cortado.jpg";
import cubano from "../../images/recipes/recipes result/cubano.jpeg";
import espressoConPanna from "../../images/recipes/recipes result/espresso-con-panna.jpg";
import espresso from "../../images/recipes/recipes result/espresso.jpg";
import espressoMateTini from "../../images/recipes/recipes result/espresso-mate-tini.jpeg";
import flatWhite from "../../images/recipes/recipes result/flat-white.jpg";
import frenchTruck from "../../images/recipes/recipes result/french-truck.jpg";
import greenTea from "../../images/recipes/recipes result/green-tea.jpg";
import hotChocolateCoffee from "../../images/recipes/recipes result/hot-chocolate-coffee.jpg";
import iceCoffee from "../../images/recipes/recipes result/ice-coffee.jpg";
import instantCoffee from "../../images/recipes/recipes result/instant-coffee.jpg";
import macchiato from "../../images/recipes/recipes result/macchiato.jpg";
import caramelMacchiato from "../../images/recipes/recipes result/caramel-macchiato.jpg";
import latte from "../../images/recipes/recipes result/latte.jpg";
import mapleCoffee from "../../images/recipes/recipes result/maple-coffee.jpg";
import matcha from "../../images/recipes/recipes result/matcha.jpg";
import mocha from "../../images/recipes/recipes result/mocha.jpg";
import ristretto from "../../images/recipes/recipes result/ristretto.jpg";
import irishCoffee from "../../images/recipes/recipes result/irish-coffee.jpg";
import morningBlend from "../../images/recipes/recipes result/morning-blend.jpg";
import onyxRoast from "../../images/recipes/recipes result/onyx-roast.jpg";
import redEye from "../../images/recipes/recipes result/red-eye.jpg";
import spanishLatte from "../../images/recipes/recipes result/spanish-latte.jpg";
import turkishCoffee from "../../images/recipes/recipes result/turkish-coffee.jpeg";
import vietnameseIcedCoffee from "../../images/recipes/recipes result/vietnamese-iced-coffee.jpg";

export const recipesImage = (recipes) => {
  switch (recipes) {
    case "Hot Chocolate Coffee":
      return hotChocolateCoffee;
    case "Instant Coffee":
      return instantCoffee;
    case "Classic Black Coffee":
      return classicBlack;
    case "Iced Coffee":
      return iceCoffee;
    case "Matcha":
      return matcha;
    case "Green Tea":
      return greenTea;
    case "Onyx Roast Coffee":
      return onyxRoast;
    case "Morning Blend Coffee":
      return morningBlend;
    case "French Truck Coffee":
      return frenchTruck;
    case "Classic Dark Coffee":
      return classicDark;
    case "Cold Brew Coffee":
      return coldBrew;
    case "Espresso":
      return espresso;
    case "Ristretto":
      return ristretto;
    case "Red Eye":
      return redEye;
    case "Irish Coffee":
      return irishCoffee;
    case "Espresso Mate-tini":
      return espressoMateTini;
    case "Breve Coffee":
      return breveCoffee;
    case "Espresso Con Panna":
      return espressoConPanna;
    case "Chai Latte":
      return chaiLatte;
    case "Blended Vanilla Espresso":
      return blendedVanillaEspresso;
    case "Maple Coffee":
      return mapleCoffee;
    case "Turkish Coffee":
      return turkishCoffee;
    case "Café Cubano":
      return cubano;
    case "Spanish Latte":
      return spanishLatte;
    case "Mocha":
      return mocha;
    case "Macchiato":
      return macchiato;
    case "Cafe Cortado":
      return cortado;
    case "Vietnamese Iced Coffee":
      return vietnameseIcedCoffee;
    case "Latte":
      return latte;
    case "Affogato":
      return affogato;
    case "Cappuccino":
      return capuccino;
    case "Flat White":
      return flatWhite;
    case "Café con Leche":
      return cafeConLeche;
    case "Caramel Macchiato":
      return caramelMacchiato;
    default:
      break;
  }
};
