// itams
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const SectionCenter = document.querySelector(".section-center");
const Btncontainer = document.querySelector(".btn-container");

// loading document
window.addEventListener("DOMContentLoaded", function () {
  displayMenu(menu);
  displayCategoryButton();
});

function displayMenu(menuParameter) {
  let displayItem = menuParameter.map(function (itemObj) {
    // it will return html with menu array objects value for required inside
    return `<article class="menu-item">
          <img src=${itemObj.img} class="photo" alt=${itemObj.title}>
         <div class="item-info">
            <header>
            <h4> ${itemObj.price}</h4>
            <h4 class="price">$15</h4>
            </header>
            <p class="item-text"> ${itemObj.desc}</p>
         </div>
        </article>`;
  });
  // convert array to string => join();
  let strArray = displayItem.join("");
  SectionCenter.innerHTML = strArray;
}


// Category button dynamiclly and filtering button property 
function displayCategoryButton(){

  const Categories = menu.reduce(
    function (values, value) {
      if (!values.includes(value.category)) {
        values.push(value.category);
      }
      return values;
    },
    ["all"]
  ); // [all] category is intial value for values other catagory are avilable in the menu array

  const Btncategory = Categories.map(function (catagory) {
    return `<button class="filter-btn" type="button"data-id =${catagory}>${catagory}</button>`;
  });

  Btncontainer.innerHTML = Btncategory.join("");
  const btns = Btncontainer.querySelectorAll(".filter-btn");

  // filtering buttons
  btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id; // using dataset data category setting (index.html as a data-id) and getting
      const filetrArray = menu.filter(function (arrayItem) {
        // array random catgory  ==  clicked button category 
      if (arrayItem.category == category) {
          return arrayItem;
        }
      });

      // now make check for buttons category =>

      if (category == "all") {
        displayMenu(menu);
      } else {
        displayMenu(filetrArray);
      }
    });
  });
}