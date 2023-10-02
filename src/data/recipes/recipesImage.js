import coffee1 from "../../images/recipes/coffee1.svg";

export const recipesImage = (recipes) => {
  const recipesID = recipes.toLowerCase();
  switch (recipesID) {
  case "salted mocha":
    return coffee1;
  case "vanilla frappuccino":
    return coffee1;
  case "cinnamon latte":
    return coffee1;
  case "iced macchiato":
    return coffee1;
  case "hazelnut brew":
    return coffee1;
  case "honey latte":
    return coffee1;
  case "coconut brew":
    return coffee1;
  case "tiramisu latte":
    return coffee1;
  case "cascara brew":
    return coffee1;
  case "gingerbread latte":
    return coffee1;
  case "irish cold brew":
    return coffee1;
  case "s'mores frappuccino":
    return coffee1;
  case "caramelized latte":
    return coffee1;
  case "cherry blossom latte":
    return coffee1;
  case "raspberry mocha":
    return coffee1;
  case "matcha latte":
    return coffee1;
  case "brown espresso":
    return coffee1;
  case "mocha frappuccino":
    return coffee1;
  case "toasted coffee":
    return coffee1;
    default:
      break;
  }
};
