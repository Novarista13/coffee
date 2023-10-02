export const coffeeText = (coffee) => {
  const coffeeID = coffee.toLowerCase();
  switch (coffeeID) {
    case "americano":
      return "Americano means American in Italian. Some assert the term entered the English language from Italian in the 1970s. Caffè Americano specifically is Italian for American coffee. ";

    case "latte":
      return "The name Latte (from Italian “milk”) speaks about the main ingredient of the drink. It is recommended to take fat milk - at least 3.2%. In addition to it, milk foam.";

    case "espresso":
      return "Espresso - black coffee made in a coffee machine or a special coffee machine, where hot water is passed through pressed ground beans at a pressure.";

    case "cappuccino":
      return "A cappuccino is an espresso-based coffee drink that is prepared with steamed milk foam.The drink involve the use of cream instead of milk and flavoring with cinnamon or chocolate powder.";

    case "caffè mocha":
      return "A caffè mocha, also called mocaccino, is a chocolate-flavoured warm beverage that is a variant of a caffè latte, commonly served in a glass rather than a mug.";

    case "flat white":
      return "A flat white is a coffee drink consisting of espresso with microfoam. It generally has a higher proportion of espresso to milk than a caffè latte, and a thinner layer of microfoam than a cappuccino";

    case "caffè macchiato":
      return "Caffè macchiato, sometimes called espresso macchiato, is an espresso coffee drink with a small amount of milk, usually foamed. In Italian, macchiato means stained or spotted.";

    case "cortado":
      return "A cortado is a beverage consisting of espresso mixed with a roughly equal amount of warm milk to reduce the acidity, although the exact ratios have considerable regional variation.";

    case "iced coffee":
      return "Iced coffee is a coffee beverage served cold. It may be prepared either by brewing coffee normally and then serving it over ice or in cold milk or by brewing the coffee cold.";

    default:
      break;
  }
};
