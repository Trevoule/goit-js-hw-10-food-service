import markUpCardsMenu from '../templates/markUpCardsMenu.hbs';
import "../css/styles.css";

import menuItems from './menu.json';

const menuRef = document.querySelector('.js-menu');
// console.log(markUpCardsMenu(menuItems[5]));

const menuList = menuMarkUp(menuItems);
menuRef.insertAdjacentHTML('beforeend', menuList);

function menuMarkUp(menuItems) {
    // return menuItems.map(item => markUpCardsMenu(item)).join('');
    return markUpCardsMenu(menuItems);
};


