const menu = [
  {
    id: 1,
    title: "Tajines Poisson",
    category: "PetitDéjeuner",
    price: 80,
    img: "./images/item-11.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia. `,
  },
  {
    id: 2,
    title: "Déjeuner Marocain",
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
    category: "Boissons",
    price: 30,
    img: "./images/item-3.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia.`,
  },
  {
    id: 4,
    title: "Tajine Poulet",
    category: "Diner",
    price: 20.99,
    img: "./images/item-12.jpg",
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
    category: "Boissons",
    price: 25,
    img: "./images/item-6.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
    laboriosam excepturi! Quo, officia.`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "Déjeuner",
    price: 30,
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
    category: "Boissons",
    price: 20,
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
    item.category.split(' ').join('');
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
  //console.log(displayMenu);

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
    ["Tout"]
  );
  const categoryBtns = categories
    .map(function (category) {
      if(category === 'PetitDéjeuner') {
        return `<button type='button' class='filter-btn col-sm-2' data-id='Petit Déjeuner'>
          Petit Déjeuner
        </button>`;
      }else {
      return `<button type="button" class="filter-btn col-sm-2" data-id=${category}>
          ${category}
        </button>`;
      }
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        //console.log(menuItem.category);
        if (menuItem.category.split(' ').join('') === category.split(' ').join('')) {
          return menuItem;
        }
      });
      if (category === "Tout") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}