import { cocktails } from './menu/cocktails.js';
import { food } from './menu/food.js';
import { otherDrinks } from './menu/otherDrinks.js';

const menu = [...cocktails, ...food, ...otherDrinks];

const sectionCenter = document.querySelector('.menu-items');
const filterBtns = document.querySelectorAll('.filter-btn');

// Load items
window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(cocktails);
});

// Filter items
filterBtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    displayMenuItems(menuCategory);
  });
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `
    <div class="item-info">
    <header>
      <h4 class="text-uppercase">${item.title}</h4>
      <h4 class="price">${item.price} kn</h4>
    </header>
    <p class="item-text">
    ${item.desc}
    </p>
  </div>
  `;
  });
  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu;
}

// Navbar disappear after first scrolling
$(window).scroll(function (e) {
  // add/remove class to navbar when scrolling to hide/show
  var scroll = $(window).scrollTop();
  if (scroll >= 150) {
    $('.navbar').addClass('navbar-hide');
  } else {
    $('.navbar').removeClass('navbar-hide');
  }
});

// Fancybox settings
$('[data-fancybox="images"]').fancybox({
  loop: true,
  buttons: ['share', 'slideShow', 'close'],
  transitionEffect: 'circular',
});

// Dropdown stays down when active in menu section
$('.dropdown-menu').on('click.bs.dropdown', function (e) {
  e.stopPropagation();
  e.preventDefault();
});
