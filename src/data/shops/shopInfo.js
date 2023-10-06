export const shopInfo = (shop) => {
  const shopID = shop.toLowerCase();
  switch (shopID) {
    case "brew haven":
      return {
        description:
          "Nestled in a charming corner of town, Brew Haven is a sanctuary for coffee enthusiasts seeking an escape from the hustle and bustle. Our dedication to handcrafted coffee blends is evident in every cup we serve. Step inside our cozy space, where the aroma of freshly ground beans fills the air.",
        vibe: ["Enchanted", "Whimsical", "Cozy"],
        location: "123 Main Street, Enchantedville",
        hours: " 7:00 AM - 5:00 PM (Mon-Sat)",
        popularItems: ["Fairy Dust Latte", "Enchanted Forest Salad"],
      };
    case "java jive cafe":
      return {
        description:
          "At Java Jive Cafe, we believe that coffee is more than just a beverage; it's a harmonious blend of art and relaxation. Our cafe embodies this philosophy, offering a unique space where the rhythm of Java meets the harmony of life.",
        vibe: ["Dreamy", "Colorful", "Eclectic"],
        location: "456 Fantasy Avenue, Dreamland",
        hours: "8:00 AM - 6:00 PM (Tue-Sun)",
        popularItems: ["Unicorn Mocha", "Dragonfruit Smoothie Bowl"],
      };
    case "caffeine oasis":
      return {
        description:
          "In the heart of the bustling city, Caffeine Oasis stands as an oasis of calm amidst the chaos. We take pride in serving up the finest coffee blends, carefully curated to satisfy even the most discerning palate.",
        vibe: ["Mystical", "Tranquil", "Artistic"],
        location: " 789 Wonderland Boulevard, Mystica",
        hours: "6:30 AM - 4:30 PM (Mon-Fri)",
        popularItems: ["Magic Elixir Espresso", "Gnome's Garden Quiche"],
      };
    case "espresso delights":
      return {
        description:
          "Espresso Delights is your passport to the flavors of Italy, right in your neighborhood. Our commitment to excellence shines through in every sip of our premium espressos. We've mastered the art of crafting the perfect shot, and it's our pleasure to share it with you.",
        vibe: ["Sky-High", "Contemporary", "Relaxing"],
        location: "101 Cloud Street, Skytopia",
        hours: "7:00 AM - 3:00 PM (Wed-Mon)",
        popularItems: ["Nimbus Cappuccino", "Celestial Croissant"],
      };
    case "mocha muse":
      return {
        description:
          "Mocha Muse is more than just a coffee shop; it's a creative haven where inspiration flows as smoothly as our lattes. Step into our vibrant and welcoming space, where artists, writers, and dreamers gather to find their muse.",
        vibe: [" Magical", "Lively", "Charming"],
        location: " 234 Whimsy Lane, Fairyland",
        hours: "9:00 AM - 7:00 PM (Thu-Tue)",
        popularItems: ["Pixie Potion Cold Brew", "Enchanted Berry Pie"],
      };
    case "bean bliss bistro":
      return {
        description:
          "At Bean Bliss Bistro, we've redefined the coffee experience by combining the art of coffee with the pleasures of a bistro setting. Our menu is a symphony of flavors, featuring carefully selected coffee beans and gourmet food pairings.",
        vibe: [" Mythical", "Rustic", "Inspirational"],
        location: "890 Dreamers' Avenue, Fantasia",
        hours: "7:30 AM - 4:30 PM (Mon-Sat)",
        popularItems: ["Unicorn Macchiato", "Magic Spell Donuts"],
      };
    case "the roasted mug":
      return {
        description:
          "The Roasted Mug is a name synonymous with quality, where we take pride in serving up the finest roasted coffee beans in town. Our commitment to excellence begins with sourcing the best beans from around the world and extends to the art of roasting, grinding, and brewing.",
        vibe: ["Fantastical", "Playful", "Retro"],
        location: "123 Galaxy Lane, Stardust City",
        hours: "6:00 AM - 6:00 PM (Mon-Sun)",
        popularItems: ["Stardust Latte", "Cosmic Crepe"],
      };
    case "perk & sip coffee co.":
      return {
        description:
          "Perk up your day and sip your worries away at Perk & Sip Coffee Co. Our cozy cafe is a haven for those seeking a moment of respite. With a commitment to brewing the perfect cup of coffee every time, we ensure that each visit leaves you refreshed and recharged.",
        vibe: ["Cosmic", "Futuristic", "Energizing"], 
        location: "456 Rainbow Road, Colorville",
        hours: "8:00 AM - 3:00 PM (Wed-Mon)",
        popularItems: ["Rainbow Mocha", "Colorful Fruit Parfait"],
      };
    case "steamy cuppa cafe":
      return {
        description:
          "At Steamy Cuppa Cafe, every cuppa steams with comfort and flavor. Our cafe is a cozy retreat where the intoxicating aroma of freshly brewed coffee fills the air, promising a sensory experience like no other. ",
        vibe: [" Vibrant", "Creative", "Bohemian"],
        location: "789 Wonderland Avenue, Wonderland",
        hours: "7:00 AM - 5:00 PM (Mon-Fri)",
        popularItems: ["Mad Hatter's Tea Latte", "Wonderland Waffles"],
      };
    case "urban grindhouse":
      return {
        description:
          "Urban Grindhouse is your urban escape where the finest coffee meets engaging conversations. Our cafe is a reflection of the vibrant city life that surrounds us. With a blend of modern aesthetics and rustic charm, we create an inviting space for coffee lovers and community enthusiasts alike.",
        vibe: ["Whimsical", "Quirky", "Nostalgic"],
        location: "101 Fairy Lane, Enchanted Forest",
        hours: "9:00 AM - 6:00 PM (Tue-Sun)",
        popularItems: ["Enchanted Elixir Espresso", "Fairy Ring Bagel"],
      };
    case "frothy fix cafe":
      return {
        description:
          "Frothy Fix Cafe is your destination for fulfilling all your frothy cravings, one cup at a time. We believe that life is better with a little froth, and our baristas are masters at creating the perfect foam for your favorite coffee creations.",
        vibe: ["Enchanted", "Natural", "Cozy"],
        location: "234 Magic Avenue, Magicville",
        hours: "7:30 AM - 4:30 PM (Mon-Sat)",
        popularItems: ["Magic Potion Latte", "Sorcerer's Scone"],
      };
    case "morning zest java":
      return {
        description:
          "Start your day with a burst of flavor and energy at Morning Zest Java. We believe in infusing every cup of coffee with a zestful spirit that awakens your senses. Our baristas are dedicated to crafting the perfect brew that kick-starts your morning routine or provides a midday boost.",
        vibe: ["Magical", "Enigmatic", "Artistic"],
        location: "567 Fantasy Lane, Dreamland",
        hours: "8:00 AM - 7:00 PM (Tue-Sun)",
        popularItems: ["Dreamer's Delight Mocha", "Fantasy Fruit Salad"],
      };
    case "cup & cozy":
      return {
        description:
          " Cup & Cozy is more than just a coffee shop; it's a warm and inviting spot where you can enjoy your favorite cup of joe in comfort. Our cozy atmosphere is designed to make you feel right at home, whether you're catching up with friends or seeking a moment of solitude.",
        vibe: ["Fantastical", "Imaginative", "Eclectic"],
        location: "890 Wizardry Road, Mystica",
        hours: "7:00 AM - 5:00 PM (Mon-Fri)",
        popularItems: ["Wizard's Brew Coffee", "Spellbound Sandwich"],
      };
    case "the grindstone cafe":
      return {
        description:
          " At The Grindstone Cafe, we're dedicated to the art of coffee, and our commitment to quality meets the daily grind of life. Our coffee beans are carefully sourced and expertly roasted to perfection, resulting in a rich and robust flavor that sets us apart.",
        vibe: ["Mystical", "Serene", "Inspiring"],
        location: "123 Starry Street, Starlight City",
        hours: "6:30 AM - 4:30 PM (Wed-Mon)",
        popularItems: ["Starry Night Latte", "Celestial Croissant"],
      };
    case "aroma avenue":
      return {
        description:
          " Follow the delightful aroma down Aroma Avenue to an unforgettable coffee experience. We believe that the journey to a perfect cup begins with the enticing scent of freshly roasted beans.",
        vibe: ["Starry", "Elegant", "Romantic"],
        location: "456 Enchantment Lane, Enchantville",
        hours: "9:00 AM - 6:00 PM (Thu-Tue)",
        popularItems: ["Enchantment Espresso", "Enchanted Berry Parfait"],
      };
    case "beanstalk brews":
      return {
        description:
          " At Beanstalk Brews, we take small beans and turn them into tall brews of flavor and delight. Our commitment to elevating your coffee journey is at the heart of everything we do. With a diverse range of coffee offerings, from single-origin delights to creative specialty drinks.",
        vibe: ["Enchanting", "Bohemian", "Welcoming"],
        location: "789 Fantasy Road, Fantasyland",
        hours: "10:00 AM - 8:00 PM (Tue-Sun)",
        popularItems: ["Fantasy Frappe", "Unicorn Waffles"],
      };
    case "latte lounge":
      return {
        description:
          "Find comfort in the corner with our frothy lattes and welcoming ambiance at Latte Lounge. Our cafe is a haven for those who appreciate the art of lattes, where every cup is a creamy masterpiece. ",
        vibe: [" Fantasy", "Playful", "Lively"], 
        location: "101 Whimsical Avenue, Whimsyville",
        hours: "7:30 AM - 4:30 PM (Mon-Sat)",
        popularItems: ["Whimsical Cappuccino", "Whimsy Quiche"],
      };
    case "daily grind cafe":
      return {
        description:
          "Daily Grind Cafe is your trusted companion for the daily grind of life, served with a generous dose of love and warmth. Our cafe is a place where routines are celebrated, and each cup of coffee is an essential part of your day. ",
        vibe: ["Whimsical", "Artsy", "Cozy"],
        location: "234 Mystical Lane, Mythical City",
        hours: "6:00 AM - 6:00 PM (Mon-Sun)",
        popularItems: ["Mythical Mocha", "Dragon's Breath Crepe"],
      };
    case "creamy canvas coffee":
      return {
        description:
          "At Creamy Canvas Coffee, every cup is a canvas for creamy masterpieces. Our baristas are artists, and our coffee is their medium of choice. Whether it's a beautifully layered latte or a silky-smooth macchiato, we craft each drink with precision and care.",
        vibe: [" Mythical", "Mysterious", "Relaxing"],
        location: "567 Wonderland Boulevard, Wonderopolis",
        hours: "8:00 AM - 3:00 PM (Wed-Mon)",
        popularItems: ["Wonderland Whirl Latte", "Tea Party Scones"],
      };
    case "cappuccino corner":
      return {
        description:
          "In the heart of the neighborhood, Cappuccino Corner is where cappuccinos reign supreme. Our frothy delights are a testament to the perfect balance of espresso and steamed milk. The corner is your spot for unwinding with a creamy cappuccino in hand, whether you're catching up on reading, meeting a friend, or simply enjoying a quiet moment of bliss",
        vibe: ["Wonderland", "Playful", "Enchanted"],
        location: "567 Mystic Road, Mythica",
        hours: "10:00 AM - 8:00 PM (Tue-Sun)",
        popularItems: ["Sorcerer's Brew", "Mythical Omelette"],
      };
    default:
      break;
  }
};
