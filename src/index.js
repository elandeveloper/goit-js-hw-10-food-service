import menuCardsTpl from './templates/menu-card.hbs';
import menu from './menu.json';

const refs = {};

const menuRef = document.querySelector('.js-menu');
const menuMarkup = menuCardsTpl(menu);
menuRef.insertAdjacentHTML('beforeend', menuMarkup);
