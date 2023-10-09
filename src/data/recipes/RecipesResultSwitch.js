export const recipesResultSwitch = (recipes) => {
  switch (true) {
    // First machine test
    case recipes.includes("Espresso machine") ||
      recipes.includes("Coffee Machine") ||
      recipes.includes("French Press") ||
      recipes.includes("Blender"):
      switch (true) {
        // Coffee test
        case recipes.includes("Arabica Coffee") ||
          recipes.includes("Classic Blend"):
          switch (true) {
            // Milk test
            case recipes.includes("Milk Foam") ||
              recipes.includes("Steamed Milk"):
              switch (true) {
                // Others test
                case recipes.includes("Chocolate") ||
                  recipes.includes("Mocha sauce"):
                  return ["Mocha", "Macchiato", "Cafe Cortado"];
                case recipes.includes("Ice"):
                  return ["Iced Coffee"];
                case recipes.includes("Ice Cream"):
                  return ["Affogato"];
                case recipes.includes("Caramel syrup"):
                  return ["Caramel Macchiato"];

                default:
                  return [
                    "Latte",
                    "Cappuccino",
                    "Flat White",
                    "Macchiato",
                    "Cafe Cortado",
                    "Café con Leche",
                  ];
              }
            case recipes.includes("Condensed Milk"):
              switch (true) {
                // Others test
                case recipes.includes("Ice"):
                  return ["Vietnamese Iced Coffee"];
                default:
                  return ["Spanish Latte"];
              }

            case recipes.includes("Sugar"):
              return ["Turkish Coffee", "Café Cubano"];

            case recipes.includes("Maple syrup"):
              return ["Maple Coffee"];

            case recipes.includes("Vanilla syrup"):
              return ["Blended Vanilla Espresso"];

            case recipes.includes("Chai"):
              return ["Chai Latte"];

            case recipes.includes("Whipped Cream"):
              return ["Espresso Con Panna"];

            case recipes.includes("Mate"):
              return ["Espresso Mate-tini", "Breve Coffee"];

            case recipes.includes("Irish whiskey") &&
              recipes.includes("Sugar") &&
              recipes.includes("Whipped Cream"):
              return ["Irish Coffee"];

            default:
              return ["Espresso", "Ristretto", "Red Eye"];
          }

        case recipes.includes("Cold Brew"):
          switch (true) {
            case recipes.includes("Cold Brew") && recipes.includes("Ice"):
              return ["Ice Coffee"];

            default:
              return ["Cold Brew Coffee"];
          }

        case recipes.includes("Classic Dark"):
          return ["Classic Dark Coffee"];

        case recipes.includes("French Truck"):
          return ["French Truck Coffee"];

        case recipes.includes("Morning Blend"):
          return ["Morning Blend Coffee"];

        case recipes.includes("Onyx Roast"):
          return ["Onyx Roast Coffee"];

        case recipes.includes("Green"):
          return ["Green Tea"];

        case recipes.includes("Matcha"):
          return ["Matcha"];

        default:
          return [""];
      }

    case recipes.includes("Kettle") || recipes.includes("Coffee Machine"):
      switch (true) {
        // Coffee test
        case recipes.includes("Arabica Coffee"):
          switch (true) {
            // Milk test
            case recipes.includes("Condensed Milk"):
              switch (true) {
                // Others test
                case recipes.includes("Ice"):
                  return ["Vietnamese Iced Coffee"];
                default:
                  return ["Spanish Latte"];
              }
            default:
              return ["Classic Black Coffee"];
          }

        case recipes.includes("Onyx Roast"):
          return ["Onyx Roast Coffee"];

        case recipes.includes("French Truck"):
          return ["French Truck Coffee"];

        case recipes.includes("Morning Blend"):
          return ["Morning Blend Coffee"];

        case recipes.includes("Instant Coffee"):
          return ["Instant Coffee"];

        case recipes.includes("Green"):
          return ["Green Tea"];

        case recipes.includes("Matcha"):
          return ["Matcha"];

        default:
          return [""];
      }

    case recipes.includes("Aeropress"):
      switch (true) {
        // Coffee test
        case recipes.includes("Arabica Coffee"):
          switch (true) {
            // Milk test
            case recipes.includes("Milk Foam") ||
              recipes.includes("Steamed Milk"):
              return ["Flat White", "Macchiato", "Cafe Cortado"];
            default:
              return ["Classic Black Coffee"];
          }

        default:
          return [""];
      }

    case recipes.includes("Microwave"):
      switch (true) {
        case recipes.includes("Instant Coffee"):
          return ["Instant Coffee"];
        case recipes.includes("Arabica Coffee") &&
          recipes.includes("Steamed Milk") &&
          recipes.includes("Chocolate"):
          return ["Hot Chocolate Coffee"];
        default:
          return [""];
      }

    default:
      return [""];
  }
};
