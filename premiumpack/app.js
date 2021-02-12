const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "Petit Déjeuner",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia. `,
  },
  {
    id: 2,
    title: "diner double",
    category: "Déjeuner",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia. `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "Petit Déjeuner",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia. `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "Déjeuner",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia. `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia.`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "Petit Déjeuner",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia. `,
  },
  {
    id: 8,
    title: "american classic",
    category: "Déjeuner",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia.`,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia.`,
  },
  
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}DH</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn col-4" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}