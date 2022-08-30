/*
Dilyana Koleva, August 2022
Simple Menu Project on JS
*/
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `Pancakes are the hero of the breakfast table, 
    and their very taste can even be described as 
    “deeply breakfasty”: eggy, salty, just this 
    side of sweet. A little indulgent and yet 
    still somehow appropriate first thing in the 
    morning, those fluffy stacks with crisped edges, 
    dripping with maple syrup, are everything you 
    want, exactly when you want them. `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `The classic burger is an all time BBQ favourite! 
    This homemade beef burger gives you delicious patties, 
    packed with onions and herbs for extra flavour, 
    that are perfect for topping with cheese, lettuce 
    and tomato, and sandwiching between floury buns.`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `Whizz up a refreshing milkshake for a quick breakfast 
    or treat. We've got indulgent chocolate, banana and 
    strawberry flavours, plus fruity exercise shakes.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `A proper fry-up is a very personal thing, so feel 
    free to swap in and out what you like best. This full 
    English breakfast could be topped up with baked beans, 
    fried bread or hash browns.`,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `The egg burger is a simple twist on the classic 
    beef burger, substituting the beef patty for an egg. 
    Like any burger, dress it up or down with your own personal 
    combination of toppings and condiments.`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `With a bit of cookie crunch, rich chocolate sauce, and 
    creamy texture, it's no wonder that people are so fond of 
    this flavorful Oreo milkshake.`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `Soft, tall, buttery, and flaky buttermilk biscuits 
    filled with cheddar cheese and bacon. These Bacon Cheddar 
    Biscuits are perfect for breakfast or even dinner!`,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `The most flavorful hamburgers start with great 
    ground beef. Using meat with at least 15 percent 
    fat will result in juicy grilled burgers. Shape 
    the patties gently and make a small indentation in 
    the center to ensure even cooking as the burger swells 
    during grilling.`,
  },
  /*{
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },*/
];

const sectionCenter = document.querySelector('.section-center');

// Load Items
window.addEventListener('DOMContentLoaded', function(){
  displayMenuItems(menu);
});


function displayMenuItems(menu_items){
  let displayMenu = menu_items.map(function(item){
    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title}>
    <div class="item info">
      <header>
        <h4> ${item.title} </h4>
        <h4 class="price">£${item.price}</h4>  
      </header>
      <p class="item-text">
      ${item.desc} 
      </p>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu;
}