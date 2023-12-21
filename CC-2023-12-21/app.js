// Description:

// Some new cashiers started to work at your restaurant.

// They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

// All the orders they create look something like this:

// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

// Their preference is to get the orders as a nice clean string with spaces and capitals like so:

// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

// The kitchen staff expect the items to be in the same order as they appear in the menu.

// The menu items are fairly simple, there is no overlap in the names of the items:

// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke

function getOrder(input) {
  let menuItems = {
    Burger: 0,
    Fries: 0,
    Chicken: 0,
    Pizza: 0,
    Sandwich: 0,
    Onionrings: 0,
    Milkshake: 0,
    Coke: 0,
  };

  for (const property in menuItems) {
    let index = input.indexOf(property.toLowerCase());
    while (index !== -1) {
      menuItems[property]++;
      index = input.indexOf(property.toLowerCase(), index + 1);
    }
  }

  let orderArray = [];
  for (const property in menuItems) {
    for (let i = 0; i < menuItems[property]; i++) {
      orderArray.push(property);
    }
  }
  return orderArray.join(' ');
}