export const recipesInfo = (recipes) => {
  if (
    recipes.includes("Espresso machine") &&
    recipes.includes("Arabica Coffee") &&
    recipes.includes("Mate") &&
    recipes.includes("2%")
  )
    return ["Salted Mocha", "Vanilla Frappuccino", "Cinnamon Latte"];
  else if (
    recipes.includes("Coffee Machine") ||
    (recipes.includes("Blender") &&
      recipes.includes("Cold Brew") &&
      recipes.includes("Mate") &&
      recipes.includes("Whole") &&
      recipes.includes("Ice"))
  )
    return ["Iced Macchiato", "Hazelnut Brew", "Honey Latte"];
  else if (
    recipes.includes("French Press") ||
    recipes.includes("Kettle") ||
    (recipes.includes("Kettle") && recipes.includes("Arabica Coffee")) ||
    (recipes.includes("Morning Blend") && recipes.includes("Non Fat")) ||
    (recipes.includes("Whole") && recipes.includes("Sugar")) ||
    recipes.includes("Mocha sauce")
  )
    return ["Coconut Brew", "Tiramisu Latte", "Cascara Brew"];
  else return[""];
};
