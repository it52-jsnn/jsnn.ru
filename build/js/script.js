'use strict';

var MENU_BTN_TEXT_CLOSED = 'Меню';
var MENU_BTN_TEXT_OPENED = 'Закрыть';

var menuBtn = document.querySelector('.menu__button');
var menuContent = document.querySelector('.menu__content');

if (menuBtn && menuContent) {
  var onMenuOpen = function () {
    menuContent.classList.remove('menu__content--hidden');
    menuBtn.textContent = MENU_BTN_TEXT_OPENED;
    menuBtn.removeEventListener('click', onMenuOpen);
    menuBtn.addEventListener('click', onMenuClose);
  };

  var onMenuClose = function () {
    menuContent.classList.add('menu__content--hidden');
    menuBtn.textContent = MENU_BTN_TEXT_CLOSED;
    menuBtn.removeEventListener('click', onMenuClose);
    menuBtn.addEventListener('click', onMenuOpen);
  };


  menuBtn.addEventListener('click', onMenuOpen);
}
